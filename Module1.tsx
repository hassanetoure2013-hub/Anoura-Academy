import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { PlayCircle, Clock, BookOpen, CheckCircle, ArrowRight, Download, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Module1() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  const lessons = [
    {
      id: 1,
      title: "Introduction aux marchés publics",
      duration: "15 min",
      type: "Vidéo",
      description: "Découvrez les fondamentaux des marchés publics en Afrique"
    },
    {
      id: 2,
      title: "Les acteurs clés",
      duration: "12 min",
      type: "Vidéo",
      description: "Identifiez les différents acteurs du processus"
    },
    {
      id: 3,
      title: "Objectifs et enjeux",
      duration: "10 min",
      type: "Lecture",
      description: "Comprenez les enjeux économiques et sociaux"
    },
    {
      id: 4,
      title: "Quiz d'évaluation",
      duration: "8 min",
      type: "Quiz",
      description: "Testez vos connaissances acquises"
    }
  ];

  const markAsCompleted = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const progress = (completedLessons.length / lessons.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <Badge className="mb-4 bg-emerald-100 text-emerald-800">
                Module 1 - Gratuit
              </Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Introduction aux marchés publics
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Découvrez les fondamentaux des marchés publics et commencez votre formation 
                avec ce module d'introduction gratuit.
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-emerald-600">GRATUIT</div>
              <div className="text-sm text-gray-500">Module d'essai</div>
            </div>
          </div>

          {/* Progress */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Votre progression</h3>
              <span className="text-sm text-gray-600">
                {completedLessons.length}/{lessons.length} leçons terminées
              </span>
            </div>
            <Progress value={progress} className="h-3" />
            <div className="mt-2 text-sm text-gray-600">
              {Math.round(progress)}% complété
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content */}
          <div className="lg:col-span-2">
            {/* Video Player Placeholder */}
            <Card className="mb-8 shadow-xl border-0">
              <CardContent className="p-0">
                <div className="relative bg-gray-900 aspect-video rounded-t-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <PlayCircle className="h-20 w-20 mx-auto mb-4 opacity-80" />
                    <h3 className="text-xl font-semibold mb-2">
                      {lessons[currentLesson]?.title}
                    </h3>
                    <p className="text-gray-300">
                      Cliquez pour commencer la leçon
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {lessons[currentLesson]?.title}
                      </h4>
                      <p className="text-gray-600">
                        {lessons[currentLesson]?.description}
                      </p>
                    </div>
                    <Button 
                      onClick={() => markAsCompleted(lessons[currentLesson]?.id)}
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      Marquer comme terminé
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Module Info */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>À propos de ce module</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Clock className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                    <div className="font-semibold">45 minutes</div>
                    <div className="text-sm text-gray-600">Durée totale</div>
                  </div>
                  <div>
                    <BookOpen className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                    <div className="font-semibold">4 leçons</div>
                    <div className="text-sm text-gray-600">Contenu</div>
                  </div>
                  <div>
                    <Users className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                    <div className="font-semibold">755+</div>
                    <div className="text-sm text-gray-600">Participants</div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Objectifs d'apprentissage :</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <span>Comprendre les enjeux et objectifs des marchés publics</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <span>Identifier les acteurs clés du processus</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <span>Découvrir le panorama des marchés publics en Afrique</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Lessons List */}
            <Card className="shadow-lg border-0 mb-8">
              <CardHeader>
                <CardTitle>Contenu du module</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      currentLesson === index
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setCurrentLesson(index)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">{lesson.title}</h4>
                      {completedLessons.includes(lesson.id) && (
                        <CheckCircle className="h-5 w-5 text-emerald-600" />
                      )}
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>{lesson.type}</span>
                      <span>{lesson.duration}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-4">Prêt pour la suite ?</h3>
                <p className="text-sm mb-6 text-emerald-100">
                  Continuez votre formation avec nos programmes complets
                </p>
                <div className="space-y-3">
                  <Link to="/courses">
                    <Button className="w-full bg-white text-emerald-600 hover:bg-gray-100">
                      Voir tous les programmes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                      S'inscrire maintenant
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card className="shadow-lg border-0 mt-8">
              <CardHeader>
                <CardTitle className="text-lg">Ressources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Support de cours PDF
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Glossaire des termes
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}