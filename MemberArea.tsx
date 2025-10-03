import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import VideoPlayer from '@/components/VideoPlayer';
import InteractiveQuiz from '@/components/InteractiveQuiz';
import ForumDiscussion from '@/components/ForumDiscussion';
import DirectMessaging from '@/components/DirectMessaging';
import CertificateGenerator from '@/components/CertificateGenerator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeft, 
  Download, 
  Award, 
  BookOpen, 
  Clock, 
  Users,
  CheckCircle,
  PlayCircle,
  Brain,
  MessageSquare,
  MessageCircle
} from 'lucide-react';
import { getQuizzesForCourse } from '@/data/quizData';

export default function MemberArea() {
  const { courseId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [completedVideos, setCompletedVideos] = useState<string[]>([]);
  const [completedQuizzes, setCompletedQuizzes] = useState<string[]>([]);
  const [quizScores, setQuizScores] = useState<Record<string, number>>({});
  const [courseProgress, setCourseProgress] = useState(0);
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);

  // Données des cours avec vidéos
  const courseData = {
    'initiation-marches-publics': {
      title: 'Formation Initiation aux Marchés Publics',
      description: 'Formation complète de 5 jours pour débuter dans les marchés publics',
      totalDuration: '40 heures',
      modules: [
        {
          id: 'module-1',
          title: 'Module 1 - Introduction aux Marchés Publics',
          videos: [
            {
              id: 'intro-1',
              title: 'Qu\'est-ce qu\'un marché public ?',
              description: 'Définitions et concepts de base',
              duration: '15 min'
            },
            {
              id: 'intro-2', 
              title: 'Les acteurs des marchés publics',
              description: 'Rôles et responsabilités de chaque partie',
              duration: '20 min'
            },
            {
              id: 'intro-3',
              title: 'Cadre juridique en Afrique de l\'Ouest',
              description: 'Réglementations UEMOA et nationales',
              duration: '25 min'
            }
          ],
          quizId: 'quiz-module-1'
        },
        {
          id: 'module-2',
          title: 'Module 2 - Procédures de Passation',
          videos: [
            {
              id: 'proc-1',
              title: 'Appel d\'offres ouvert',
              description: 'Procédure standard et étapes clés',
              duration: '30 min'
            },
            {
              id: 'proc-2',
              title: 'Appel d\'offres restreint',
              description: 'Critères de sélection et procédures',
              duration: '25 min'
            },
            {
              id: 'proc-3',
              title: 'Gré à gré et cas d\'exception',
              description: 'Conditions et justifications',
              duration: '20 min'
            }
          ],
          quizId: 'quiz-module-2'
        },
        {
          id: 'module-3',
          title: 'Module 3 - Rédaction des Dossiers',
          videos: [
            {
              id: 'redac-1',
              title: 'Structure d\'un dossier d\'appel d\'offres',
              description: 'Éléments obligatoires et recommandations',
              duration: '35 min'
            },
            {
              id: 'redac-2',
              title: 'Critères d\'évaluation',
              description: 'Définition et pondération des critères',
              duration: '30 min'
            }
          ]
        }
      ],
      resources: [
        'Guide complet des marchés publics UEMOA',
        'Modèles de dossiers d\'appel d\'offres',
        'Check-lists de validation',
        'Textes réglementaires à jour'
      ]
    }
  };

  const course = courseData[courseId as keyof typeof courseData];
  const courseQuizzes = getQuizzesForCourse(courseId || '');

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    // Vérifier si l'utilisateur a accès à ce cours (simulation)
    const hasAccess = user.email === 'hassanetoure2013@gmail.com' || user.isAdmin;
    if (!hasAccess) {
      navigate('/courses');
      return;
    }
  }, [user, navigate]);

  useEffect(() => {
    // Calculer la progression du cours
    const totalVideos = course?.modules.reduce((acc, module) => acc + module.videos.length, 0) || 0;
    const totalQuizzes = courseQuizzes.length;
    const totalItems = totalVideos + totalQuizzes;
    
    const completedItems = completedVideos.length + completedQuizzes.length;
    const progress = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;
    setCourseProgress(progress);
  }, [completedVideos, completedQuizzes, course, courseQuizzes]);

  const handleVideoComplete = (videoId: string) => {
    if (!completedVideos.includes(videoId)) {
      setCompletedVideos(prev => [...prev, videoId]);
    }
  };

  const handleQuizComplete = (quizId: string, score: number) => {
    setQuizScores(prev => ({ ...prev, [quizId]: score }));
    if (score >= 70 && !completedQuizzes.includes(quizId)) {
      setCompletedQuizzes(prev => [...prev, quizId]);
    }
    setActiveQuiz(null);
  };

  const isVideoUnlocked = (moduleIndex: number, videoIndex: number) => {
    // Premier module toujours débloqué
    if (moduleIndex === 0) return true;
    
    // Modules suivants débloqués si le module précédent est terminé (vidéos + quiz)
    const previousModule = course?.modules[moduleIndex - 1];
    if (!previousModule) return false;
    
    const previousModuleVideos = previousModule.videos.map(v => v.id);
    const allVideosCompleted = previousModuleVideos.every(id => completedVideos.includes(id));
    
    // Si le module précédent a un quiz, il doit être réussi aussi
    if (previousModule.quizId) {
      const quizCompleted = completedQuizzes.includes(previousModule.quizId);
      return allVideosCompleted && quizCompleted;
    }
    
    return allVideosCompleted;
  };

  const isQuizUnlocked = (moduleIndex: number) => {
    const module = course?.modules[moduleIndex];
    if (!module) return false;
    
    // Le quiz est débloqué quand toutes les vidéos du module sont terminées
    const moduleVideos = module.videos.map(v => v.id);
    return moduleVideos.every(id => completedVideos.includes(id));
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Formation non trouvée</h1>
          <Button onClick={() => navigate('/courses')}>
            Retour aux formations
          </Button>
        </div>
      </div>
    );
  }

  // Si un quiz est actif, l'afficher
  if (activeQuiz) {
    const quiz = courseQuizzes.find(q => q.id === activeQuiz);
    if (quiz) {
      return (
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <div className="container mx-auto px-4 py-8">
            <Button 
              variant="ghost" 
              onClick={() => setActiveQuiz(null)}
              className="mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour au cours
            </Button>
            
            <InteractiveQuiz
              quizId={quiz.id}
              title={quiz.title}
              questions={quiz.questions}
              onComplete={(score) => handleQuizComplete(quiz.id, score)}
              minPassingScore={quiz.minPassingScore}
            />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-8">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/courses')}
            className="mb-4 text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux formations
          </Button>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
              <p className="text-emerald-100 mb-4">{course.description}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{course.totalDuration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>{course.modules.length} modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <PlayCircle className="h-4 w-4" />
                  <span>{course.modules.reduce((acc, m) => acc + m.videos.length, 0)} vidéos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4" />
                  <span>{courseQuizzes.length} quiz</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Forum actif</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>Messagerie directe</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>Certificat PDF</span>
                </div>
              </div>
            </div>
            
            <Card className="bg-white/10 border-white/20 text-white lg:w-80">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Progression du cours</span>
                  <span className="text-sm font-semibold">{Math.round(courseProgress)}%</span>
                </div>
                <Progress value={courseProgress} className="mb-4 bg-white/20" />
                {courseProgress === 100 && (
                  <div className="flex items-center gap-2 text-green-300">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Formation terminée !</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="videos" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="videos">Vidéos & Quiz</TabsTrigger>
            <TabsTrigger value="forum">Forum</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="resources">Ressources</TabsTrigger>
            <TabsTrigger value="certificate">Certificat</TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="space-y-8">
            {course.modules.map((module, moduleIndex) => {
              const moduleQuiz = courseQuizzes.find(q => q.id === module.quizId);
              const quizScore = module.quizId ? quizScores[module.quizId] : undefined;
              const isQuizPassed = quizScore !== undefined && quizScore >= (moduleQuiz?.minPassingScore || 70);
              
              return (
                <Card key={module.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{module.title}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant={isVideoUnlocked(moduleIndex, 0) ? "default" : "secondary"}>
                          {module.videos.filter(v => completedVideos.includes(v.id)).length}/{module.videos.length} vidéos
                        </Badge>
                        {module.quizId && (
                          <Badge variant={isQuizPassed ? "default" : completedQuizzes.includes(module.quizId) ? "secondary" : "outline"}>
                            {isQuizPassed ? '✅ Quiz réussi' : completedQuizzes.includes(module.quizId) ? '❌ Quiz échoué' : '📝 Quiz'}
                          </Badge>
                        )}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Vidéos du module */}
                    {module.videos.map((video, videoIndex) => (
                      <VideoPlayer
                        key={video.id}
                        videoId={video.id}
                        title={video.title}
                        description={video.description}
                        duration={video.duration}
                        isUnlocked={isVideoUnlocked(moduleIndex, videoIndex)}
                        onComplete={() => handleVideoComplete(video.id)}
                      />
                    ))}
                    
                    {/* Quiz du module */}
                    {module.quizId && moduleQuiz && (
                      <Card className="border-2 border-dashed border-blue-200 bg-blue-50">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <Brain className="h-6 w-6 text-blue-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-blue-900">{moduleQuiz.title}</h4>
                                <p className="text-sm text-blue-700">{moduleQuiz.description}</p>
                                <div className="flex items-center gap-4 mt-1 text-xs text-blue-600">
                                  <span>⏱️ {Math.floor(moduleQuiz.timeLimit / 60)} minutes</span>
                                  <span>📊 Score minimum: {moduleQuiz.minPassingScore}%</span>
                                  <span>❓ {moduleQuiz.questions.length} questions</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              {quizScore !== undefined && (
                                <div className="mb-2">
                                  <Badge className={isQuizPassed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                                    Score: {quizScore}%
                                  </Badge>
                                </div>
                              )}
                              <Button
                                onClick={() => setActiveQuiz(module.quizId!)}
                                disabled={!isQuizUnlocked(moduleIndex)}
                                className="bg-blue-600 hover:bg-blue-700"
                              >
                                {quizScore !== undefined ? 'Refaire le quiz' : 'Commencer le quiz'}
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          <TabsContent value="forum">
            <ForumDiscussion courseId={courseId || ''} />
          </TabsContent>

          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Messagerie Directe
                </CardTitle>
              </CardHeader>
              <CardContent>
                <DirectMessaging />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Ressources de formation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {course.resources.map((resource, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <BookOpen className="h-5 w-5 text-emerald-600" />
                        </div>
                        <span className="font-medium">{resource}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Télécharger
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certificate">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Certificat de formation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CertificateGenerator
                  courseId={courseId || ''}
                  courseName={course.title}
                  courseProgress={courseProgress}
                  completedVideos={completedVideos}
                  completedQuizzes={completedQuizzes}
                  quizScores={quizScores}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}