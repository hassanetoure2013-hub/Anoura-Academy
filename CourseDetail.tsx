import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  Award, 
  Globe, 
  Target, 
  CheckCircle, 
  PlayCircle,
  Download,
  Calendar,
  User,
  ArrowRight
} from 'lucide-react';

export default function CourseDetail() {
  const { id } = useParams();
  const [isEnrolled, setIsEnrolled] = useState(false);

  // Mock course data - in real app, fetch based on id
  const course = {
    id: parseInt(id || '1'),
    title: 'Niveau 1 : Initiation aux Marchés Publics',
    description: 'Comprendre les fondements des marchés publics en Afrique de l\'Ouest (Mauritanie, Guinée, UEMOA)',
    level: 'Débutant',
    duration: '20 heures',
    students: 245,
    rating: 4.8,
    price: 'Gratuit',
    instructor: 'Dr. Aminata Koné',
    instructorTitle: 'Expert en Marchés Publics UEMOA',
    startDate: '15 Février 2025',
    language: 'Français',
    certificate: true,
    modules: [
      {
        title: 'Introduction aux marchés publics',
        duration: '2 heures',
        description: 'Enjeux, objectifs et acteurs des marchés publics',
        lessons: ['Définition et enjeux', 'Les acteurs clés', 'Objectifs et bénéfices']
      },
      {
        title: 'Cadres juridiques de référence',
        duration: '4 heures', 
        description: 'Codes nationaux (Mauritanie, Guinée, UEMOA) et principes communs',
        lessons: ['Code des marchés UEMOA', 'Législation Mauritanie', 'Législation Guinée', 'Harmonisation régionale']
      },
      {
        title: 'Principes fondamentaux',
        duration: '2 heures',
        description: 'Transparence, concurrence, égalité de traitement, intégrité',
        lessons: ['Principe de transparence', 'Libre concurrence', 'Égalité de traitement']
      },
      {
        title: 'Cycle de la commande publique',
        duration: '4 heures',
        description: 'Planification, passation, exécution, contrôle',
        lessons: ['Phase de planification', 'Procédures de passation', 'Exécution des contrats', 'Contrôle et suivi']
      },
      {
        title: 'Documents administratifs',
        duration: '4 heures',
        description: 'Attestations fiscales, sociales, garanties, formulaires standards',
        lessons: ['Documents obligatoires', 'Attestations et certificats', 'Garanties bancaires', 'Formulaires types']
      },
      {
        title: 'Évaluation pratique',
        duration: '4 heures',
        description: 'Quiz et mini-cas pratique',
        lessons: ['QCM de validation', 'Étude de cas pratique', 'Correction et feedback']
      }
    ],
    objectives: [
      'Comprendre les enjeux et objectifs des marchés publics',
      'Maîtriser les cadres juridiques régionaux',
      'Appliquer les principes fondamentaux',
      'Identifier les étapes du cycle de passation',
      'Préparer les documents administratifs requis'
    ],
    requirements: [
      'Aucun prérequis technique',
      'Connaissance de base du secteur public',
      'Accès internet stable',
      'Motivation et engagement'
    ],
    countries: ['Mauritanie', 'Guinée', 'UEMOA'],
    color: 'from-blue-500 to-blue-600'
  };

  const relatedCourses = [
    {
      id: 2,
      title: 'Niveau 2 : Préparation et Passation',
      level: 'Intermédiaire',
      duration: '30 heures',
      price: '150,000 FCFA',
      rating: 4.7
    },
    {
      id: 3,
      title: 'Niveau 3 : Exécution et Contrôle',
      level: 'Avancé', 
      duration: '35 heures',
      price: '220,000 FCFA',
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${course.color} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                {course.level}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-6 text-blue-100 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>{course.students} étudiants</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span>{course.rating}/5</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>{course.language}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {course.countries.map((country, index) => (
                  <Badge key={index} className="bg-white/20 text-white border-white/30">
                    {country}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="lg:col-span-1">
              <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
                <CardHeader className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{course.price}</div>
                  <div className="flex items-center justify-center space-x-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>Début: {course.startDate}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {!isEnrolled ? (
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg py-6"
                      onClick={() => setIsEnrolled(true)}
                    >
                      S'inscrire maintenant
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                        <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-2" />
                        <span className="text-green-800 font-medium">Inscrit avec succès!</span>
                      </div>
                      <Button className="w-full" variant="outline">
                        <PlayCircle className="mr-2 h-4 w-4" />
                        Commencer le cours
                      </Button>
                    </div>
                  )}
                  
                  <div className="border-t pt-4 space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Durée totale</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Modules</span>
                      <span className="font-medium">{course.modules.length}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Certificat</span>
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Accès</span>
                      <span className="font-medium">À vie</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Aperçu</TabsTrigger>
                  <TabsTrigger value="curriculum">Programme</TabsTrigger>
                  <TabsTrigger value="instructor">Formateur</TabsTrigger>
                  <TabsTrigger value="reviews">Avis</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Target className="h-5 w-5 text-blue-600" />
                        <span>Objectifs de la formation</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {course.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                        <span>Prérequis</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {course.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-gray-700">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="curriculum" className="space-y-4">
                  {course.modules.map((module, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">
                            Module {index + 1}: {module.title}
                          </CardTitle>
                          <Badge variant="secondary">{module.duration}</Badge>
                        </div>
                        <p className="text-gray-600">{module.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div key={lessonIndex} className="flex items-center space-x-3 text-sm">
                              <PlayCircle className="h-4 w-4 text-blue-600" />
                              <span className="text-gray-700">{lesson}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="instructor" className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          {course.instructor.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{course.instructor}</h3>
                          <p className="text-blue-600 font-medium mb-3">{course.instructorTitle}</p>
                          <p className="text-gray-700 leading-relaxed">
                            Expert reconnu en marchés publics avec plus de 15 ans d'expérience dans l'espace UEMOA. 
                            Ancien directeur des marchés publics au Ministère des Finances, consultant international 
                            et formateur certifié en procurement public.
                          </p>
                          <div className="flex items-center space-x-6 mt-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>500+ étudiants</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-400" />
                              <span>4.9/5 étoiles</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Award className="h-4 w-4" />
                              <span>Expert certifié</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-4">
                  {[
                    {
                      name: 'Jean-Baptiste Ouattara',
                      role: 'Consultant en Marchés Publics',
                      rating: 5,
                      comment: 'Formation excellente qui couvre tous les aspects essentiels. Le formateur est très compétent et les exemples sont pertinents pour notre contexte africain.',
                      date: '15 janvier 2025'
                    },
                    {
                      name: 'Fatou Diallo',
                      role: 'Responsable Achats',
                      rating: 5,
                      comment: 'Contenu très pratique et applicable immédiatement. Les modules sont bien structurés et progressifs.',
                      date: '10 janvier 2025'
                    },
                    {
                      name: 'Mamadou Traoré',
                      role: 'Fonctionnaire',
                      rating: 4,
                      comment: 'Bonne introduction aux marchés publics. Parfait pour débuter dans le domaine.',
                      date: '5 janvier 2025'
                    }
                  ].map((review, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-medium text-gray-900">{review.name}</h4>
                            <p className="text-sm text-gray-600">{review.role}</p>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700 mb-2">{review.comment}</p>
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Progress Card (if enrolled) */}
              {isEnrolled && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Votre progression</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progression globale</span>
                          <span>25%</span>
                        </div>
                        <Progress value={25} className="h-2" />
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>Module actuel: Introduction aux marchés publics</p>
                        <p>Temps restant: ~15 heures</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Related Courses */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Formations recommandées</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedCourses.map((relatedCourse, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-medium text-gray-900 mb-2">{relatedCourse.title}</h4>
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                        <Badge variant="secondary">{relatedCourse.level}</Badge>
                        <span>{relatedCourse.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-blue-600">{relatedCourse.price}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-400" />
                          <span className="text-xs">{relatedCourse.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Download Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ressources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Programme détaillé (PDF)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Textes de référence
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Formulaires types
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}