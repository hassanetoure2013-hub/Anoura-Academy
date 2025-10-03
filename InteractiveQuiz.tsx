import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, Award, RotateCcw } from 'lucide-react';
import { useNotifications } from '@/contexts/NotificationContext';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface InteractiveQuizProps {
  quizId: string;
  title: string;
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
  minPassingScore?: number;
}

export default function InteractiveQuiz({ 
  quizId, 
  title, 
  questions, 
  onComplete,
  minPassingScore = 70 
}: InteractiveQuizProps) {
  const { addNotification } = useNotifications();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes par défaut

  useEffect(() => {
    if (!quizCompleted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !quizCompleted) {
      handleSubmitQuiz();
    }
  }, [timeLeft, quizCompleted]);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitQuiz = () => {
    setQuizCompleted(true);
    setShowResults(true);
    
    const score = calculateScore();
    const isPassing = score >= minPassingScore;
    
    // Ajouter une notification
    addNotification({
      type: isPassing ? 'success' : 'warning',
      title: isPassing ? 'Quiz réussi !' : 'Quiz à refaire',
      message: isPassing 
        ? `Félicitations ! Vous avez obtenu ${score}% au ${title}`
        : `Score obtenu : ${score}%. Score minimum requis : ${minPassingScore}%`,
      actionUrl: window.location.pathname,
      actionLabel: isPassing ? 'Continuer' : 'Refaire le quiz'
    });
    
    onComplete(score);
  };

  const calculateScore = () => {
    const correctAnswers = selectedAnswers.filter((answer, index) => 
      answer === questions[index]?.correctAnswer
    ).length;
    return Math.round((correctAnswers / questions.length) * 100);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setQuizCompleted(false);
    setTimeLeft(300);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const score = calculateScore();
  const isPassing = score >= minPassingScore;

  if (showResults) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            {isPassing ? (
              <Award className="h-6 w-6 text-green-600" />
            ) : (
              <XCircle className="h-6 w-6 text-red-600" />
            )}
            Résultats du Quiz
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className={`text-4xl font-bold mb-2 ${isPassing ? 'text-green-600' : 'text-red-600'}`}>
              {score}%
            </div>
            <p className="text-gray-600 mb-4">
              {selectedAnswers.filter((answer, index) => answer === questions[index]?.correctAnswer).length} / {questions.length} bonnes réponses
            </p>
            
            <Badge 
              className={`text-sm px-4 py-2 ${
                isPassing 
                  ? 'bg-green-100 text-green-800 border-green-200' 
                  : 'bg-red-100 text-red-800 border-red-200'
              }`}
            >
              {isPassing ? '✅ Quiz réussi !' : '❌ Score insuffisant'}
            </Badge>
            
            {!isPassing && (
              <p className="text-sm text-gray-600 mt-2">
                Score minimum requis : {minPassingScore}%
              </p>
            )}
          </div>

          {/* Détail des réponses */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Détail des réponses :</h4>
            {questions.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium mb-2">Q{index + 1}: {question.question}</p>
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Votre réponse :</strong> {question.options[userAnswer] || 'Non répondu'}
                      </p>
                      <p className="text-sm text-green-700 mb-2">
                        <strong>Bonne réponse :</strong> {question.options[question.correctAnswer]}
                      </p>
                      <p className="text-sm text-gray-600 bg-blue-50 p-2 rounded">
                        <strong>Explication :</strong> {question.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-4 justify-center">
            {!isPassing && (
              <Button onClick={resetQuiz} variant="outline">
                <RotateCcw className="h-4 w-4 mr-2" />
                Recommencer
              </Button>
            )}
            <Button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Continuer la formation
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center mb-4">
          <CardTitle>{title}</CardTitle>
          <div className="flex items-center gap-4">
            <Badge variant="outline">
              Question {currentQuestion + 1} / {questions.length}
            </Badge>
            <Badge variant={timeLeft < 60 ? "destructive" : "secondary"}>
              ⏱️ {formatTime(timeLeft)}
            </Badge>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            {currentQ.question}
          </h3>
          
          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all hover:bg-gray-50 ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-emerald-500 bg-emerald-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedAnswers[currentQuestion] === index && (
                      <div className="w-3 h-3 bg-white rounded-full" />
                    )}
                  </div>
                  <span className="font-medium text-gray-700">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
          >
            Précédent
          </Button>
          
          <Button 
            onClick={handleNextQuestion}
            disabled={selectedAnswers[currentQuestion] === undefined}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            {currentQuestion === questions.length - 1 ? 'Terminer' : 'Suivant'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}