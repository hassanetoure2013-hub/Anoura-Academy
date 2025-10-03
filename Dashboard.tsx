import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, Award, Clock, TrendingUp, Play, 
  Download, Users, Star, Calendar, Target 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  // Mock user data
  const user = {
    name: 'Jean Kouassi',
    email: 'jean.kouassi@example.com',
    joinDate: 'Mars 2025',
    totalCourses: 3,
    completedCourses: 1,
    certificates: 1,
    studyTime: 24,
    points: 850
  };

  const enrolledCourses = [
    {
      id: '1',
      title: 'Fondamentaux des Marchés Publics UEMOA',
      progress: 75,
      nextLesson: 'Évaluation des offres - Partie 2',
      timeLeft: '2h 30min',
      instructor: 'Dr. Kouadio N\'Guessan',
      status: 'En cours'
    },
    {
      id: '2',
      title: 'Introduction aux Marchés Publics',
      progress: 100,
      nextLesson: 'Formation terminée',
      timeLeft: 'Terminé',
      instructor: 'Équipe ANOURA',
      status: 'Terminé'
    },
    {
      id: '3',
      title: 'Audit et Conformité des Marchés',
      progress: 25,
      nextLesson: 'Techniques d\'audit - Introduction',
      timeLeft: '8h 15min',
      instructor: 'Mohamed Traoré',
      status: 'En cours'
    }
  ];

  const certificates = [
    {
      id: '1',
      title: 'Introduction aux Marchés Publics',
      issueDate: '15 Septembre 2025',
      credentialId: 'ANOURA-2025-001234',
      status: 'Vérifié'
    }
  ];

  const achievements = [
    { title: 'Premier cours terminé', icon: Award, earned: true },
    { title: 'Étudiant assidu', icon: Clock, earned: true },
    { title: 'Expert en formation', icon: Target, earned: false },
    { title: 'Mentor communautaire', icon: Users, earned: false }
  ];

  const upcomingEvents = [
    {
      title: 'Webinaire: Nouveautés UEMOA 2025',
      date: '25 Octobre 2025',
      time: '14h00 GMT',
      type: 'Webinaire'
    },
    {
      title: 'Session Q&A - Marchés de Travaux',
      date: '30 Octobre 2025',
      time: '16h00 GMT',
      type: 'Session live'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Bonjour, {user.name} 👋
              </h1>
              <p className="text-gray-600 mt-1">
                Continuez votre parcours d'apprentissage
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/courses">
                <Button>
                  <BookOpen className="h-4 w-4 mr-2" />
                  Parcourir les cours
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Cours inscrits</p>
                  <p className="text-2xl font-bold text-blue-600">{user.totalCourses}</p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Cours terminés</p>
                  <p className="text-2xl font-bold text-green-600">{user.completedCourses}</p>
                </div>
                <Award className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Heures d'étude</p>
                  <p className="text-2xl font-bold text-orange-600">{user.studyTime}h</p>
                </div>
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Points XP</p>
                  <p className="text-2xl font-bold text-purple-600">{user.points}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">Mes Cours</TabsTrigger>
            <TabsTrigger value="certificates">Certificats</TabsTrigger>
            <TabsTrigger value="achievements">Réalisations</TabsTrigger>
            <TabsTrigger value="events">Événements</TabsTrigger>
          </TabsList>

          {/* My Courses */}
          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mes Formations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {enrolledCourses.map(course => (
                  <div key={course.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">{course.title}</h3>
                          <Badge 
                            variant={course.status === 'Terminé' ? 'default' : 'secondary'}
                            className={course.status === 'Terminé' ? 'bg-green-100 text-green-800' : ''}
                          >
                            {course.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Par {course.instructor}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>Prochaine leçon: {course.nextLesson}</span>
                          <span>Temps restant: {course.timeLeft}</span>
                        </div>
                        <div className="mt-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-gray-600">Progression</span>
                            <span className="text-sm font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {course.status === 'En cours' ? (
                          <Button size="sm">
                            <Play className="h-4 w-4 mr-2" />
                            Continuer
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline">
                            <Award className="h-4 w-4 mr-2" />
                            Certificat
                          </Button>
                        )}
                        <Link to={`/course/${course.id}`}>
                          <Button size="sm" variant="outline">
                            Détails
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Certificates */}
          <TabsContent value="certificates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Mes Certificats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {certificates.map(cert => (
                  <div key={cert.id} className="border rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{cert.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600">
                          <span>Délivré le: {cert.issueDate}</span>
                          <span>ID: {cert.credentialId}</span>
                          <div className="flex items-center gap-1">
                            <span>Statut:</span>
                            <Badge variant="outline" className="bg-green-100 text-green-800">
                              {cert.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Télécharger
                        </Button>
                        <Button size="sm" variant="outline">
                          Vérifier
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                {certificates.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <Award className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Aucun certificat obtenu pour le moment</p>
                    <p className="text-sm">Terminez vos cours pour obtenir des certificats</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements */}
          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Réalisations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className={`border rounded-lg p-4 ${
                        achievement.earned ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${
                          achievement.earned ? 'bg-blue-100' : 'bg-gray-200'
                        }`}>
                          <achievement.icon className={`h-5 w-5 ${
                            achievement.earned ? 'text-blue-600' : 'text-gray-400'
                          }`} />
                        </div>
                        <div>
                          <h4 className={`font-medium ${
                            achievement.earned ? 'text-blue-900' : 'text-gray-500'
                          }`}>
                            {achievement.title}
                          </h4>
                          <Badge 
                            variant={achievement.earned ? 'default' : 'secondary'}
                            className={achievement.earned ? 'bg-blue-100 text-blue-800' : ''}
                          >
                            {achievement.earned ? 'Obtenu' : 'À débloquer'}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events */}
          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Événements à venir
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">{event.title}</h3>
                          <Badge variant="outline">{event.type}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {event.time}
                          </span>
                        </div>
                      </div>
                      <Button size="sm">
                        S'inscrire
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}