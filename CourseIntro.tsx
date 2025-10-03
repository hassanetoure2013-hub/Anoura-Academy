import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Play, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  BookOpen, 
  Target, 
  FileText,
  Video,
  HelpCircle,
  Download,
  ArrowRight,
  Globe,
  TrendingUp,
  Shield,
  Heart,
  CreditCard,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CourseIntro() {
  const [activeSequence, setActiveSequence] = useState(0);
  const [completedSequences, setCompletedSequences] = useState<number[]>([]);
  const [isPurchased, setIsPurchased] = useState(false);

  const courseInfo = {
    title: "MODULE 1 – INTRODUCTION AUX MARCHÉS PUBLICS",
    subtitle: "ENJEUX, OBJECTIFS ET ACTEURS",
    duration: "6 heures",
    level: "Initiation",
    format: "100% en ligne",
    prerequisites: "Aucun",
    price: "75,000 FCFA",
    originalPrice: "100,000 FCFA"
  };

  const objectives = [
    "Définir ce qu'est un marché public et en identifier les spécificités",
    "Expliquer les enjeux (économiques, financiers, sociaux, de gouvernance)",
    "Décrire les objectifs stratégiques de la commande publique",
    "Reconnaître les acteurs et leurs rôles dans le processus",
    "Appliquer ces connaissances à des cas concrets"
  ];

  const sequences = [
    {
      title: "Introduction aux marchés publics",
      duration: "30 minutes",
      type: "video",
      description: "Définition des marchés publics, différences avec autres contrats, importance dans l'action publique",
      activities: ["Mini-sondage en ligne", "Vidéo explicative"],
      completed: false,
      preview: true
    },
    {
      title: "Les enjeux des marchés publics",
      duration: "2 heures",
      type: "mixed",
      description: "Enjeux économiques, financiers, sociaux et de gouvernance",
      activities: ["Étude de cas Mali/Mauritanie/Guinée", "Quiz interactif 5 questions"],
      completed: false,
      preview: false
    },
    {
      title: "Les objectifs de la commande publique",
      duration: "1h30",
      type: "interactive",
      description: "Efficacité, concurrence, développement durable, intégration régionale",
      activities: ["Exemple pratique construction école", "QCM de validation"],
      completed: false,
      preview: false
    },
    {
      title: "Les acteurs de la commande publique",
      duration: "2 heures",
      type: "game",
      description: "Pouvoirs adjudicateurs, organes de contrôle, soumissionnaires, parties prenantes",
      activities: ["Jeu interactif rôles", "Cas pratique hôpital"],
      completed: false,
      preview: false
    },
    {
      title: "Évaluation finale",
      duration: "30 minutes",
      type: "assessment",
      description: "QCM et cas pratique de synthèse",
      activities: ["QCM 10 questions", "Cas pratique construction hôpital"],
      completed: false,
      preview: false
    }
  ];

  const enjeux = [
    {
      icon: TrendingUp,
      title: "Enjeux économiques",
      description: "Contribution à la croissance et à l'emploi, dynamisation du secteur privé",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Globe,
      title: "Enjeux financiers", 
      description: "Optimisation des ressources publiques, maîtrise des coûts",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Heart,
      title: "Enjeux sociaux",
      description: "Réduction des inégalités, amélioration de l'accès aux services",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Enjeux de gouvernance",
      description: "Transparence, lutte contre la corruption, intégrité",
      color: "from-purple-500 to-violet-600"
    }
  ];

  const getSequenceIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'mixed': return BookOpen;
      case 'interactive': return Target;
      case 'game': return Users;
      case 'assessment': return Award;
      default: return FileText;
    }
  };

  const markSequenceComplete = (index: number) => {
    if (!completedSequences.includes(index)) {
      setCompletedSequences([...completedSequences, index]);
    }
  };

  const handlePurchase = () => {
    setIsPurchased(true);
  };

  const progress = (completedSequences.length / sequences.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Formation en ligne - Niveau {courseInfo.level}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {courseInfo.title}
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              {courseInfo.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-blue-200" />
              <div className="text-sm text-blue-200">Durée</div>
              <div className="font-semibold">{courseInfo.duration}</div>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 mx-auto mb-2 text-blue-200" />
              <div className="text-sm text-blue-200">Niveau</div>
              <div className="font-semibold">{courseInfo.level}</div>
            </div>
            <div className="text-center">
              <Video className="h-8 w-8 mx-auto mb-2 text-blue-200" />
              <div className="text-sm text-blue-200">Format</div>
              <div className="font-semibold">{courseInfo.format}</div>
            </div>
            <div className="text-center">
              <CreditCard className="h-8 w-8 mx-auto mb-2 text-blue-200" />
              <div className="text-sm text-blue-200">Prix</div>
              <div className="font-semibold">{courseInfo.price}</div>
            </div>
            <div className="text-center">
              <CheckCircle className="h-8 w-8 mx-auto mb-2 text-blue-200" />
              <div className="text-sm text-blue-200">Certificat</div>
              <div className="font-semibold">Inclus</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Aperçu</TabsTrigger>
                <TabsTrigger value="content">Contenu</TabsTrigger>
                <TabsTrigger value="video">Vidéo Intro</TabsTrigger>
                <TabsTrigger value="resources">Ressources</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="mr-2 h-5 w-5 text-blue-600" />
                      Objectifs pédagogiques
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      À l'issue de ce module, le participant sera capable de :
                    </p>
                    <ul className="space-y-3">
                      {objectives.map((objective, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Les enjeux des marchés publics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {enjeux.map((enjeu, index) => (
                        <div key={index} className="p-4 rounded-lg bg-gradient-to-br from-gray-50 to-white border">
                          <div className={`w-12 h-12 bg-gradient-to-r ${enjeu.color} rounded-lg flex items-center justify-center mb-3`}>
                            <enjeu.icon className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">{enjeu.title}</h4>
                          <p className="text-sm text-gray-600">{enjeu.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="content" className="space-y-4">
                {sequences.map((sequence, index) => {
                  const SequenceIcon = getSequenceIcon(sequence.type);
                  const isCompleted = completedSequences.includes(index);
                  const isLocked = !isPurchased && !sequence.preview;
                  
                  return (
                    <Card key={index} className={`transition-all duration-300 ${
                      isCompleted ? 'bg-green-50 border-green-200' : 
                      isLocked ? 'bg-gray-50 border-gray-200' : 'hover:shadow-md'
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4 flex-1">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                              isCompleted ? 'bg-green-600 text-white' : 
                              isLocked ? 'bg-gray-400 text-white' :
                              'bg-blue-100 text-blue-600'
                            }`}>
                              {isLocked ? <Lock className="h-6 w-6" /> :
                               isCompleted ? <CheckCircle className="h-6 w-6" /> : 
                               <SequenceIcon className="h-6 w-6" />}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h3 className={`font-semibold ${isLocked ? 'text-gray-500' : 'text-gray-900'}`}>
                                  Séquence {index + 1}: {sequence.title}
                                </h3>
                                <Badge variant="outline" className="text-xs">
                                  {sequence.duration}
                                </Badge>
                                {sequence.preview && (
                                  <Badge className="text-xs bg-green-100 text-green-800">
                                    Aperçu gratuit
                                  </Badge>
                                )}
                                {isLocked && (
                                  <Badge className="text-xs bg-gray-100 text-gray-600">
                                    <Lock className="h-3 w-3 mr-1" />
                                    Payant
                                  </Badge>
                                )}
                              </div>
                              <p className={`mb-3 ${isLocked ? 'text-gray-400' : 'text-gray-600'}`}>
                                {sequence.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {sequence.activities.map((activity, actIndex) => (
                                  <Badge key={actIndex} variant="secondary" className="text-xs">
                                    {activity}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <Button
                            onClick={() => markSequenceComplete(index)}
                            disabled={isCompleted || isLocked}
                            className={isCompleted ? 'bg-green-600' : ''}
                          >
                            {isLocked ? (
                              <>
                                <Lock className="mr-2 h-4 w-4" />
                                Verrouillé
                              </>
                            ) : isCompleted ? 'Terminé' : 'Commencer'}
                            {!isCompleted && !isLocked && <ArrowRight className="ml-2 h-4 w-4" />}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </TabsContent>

              <TabsContent value="video" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Play className="mr-2 h-5 w-5 text-red-600" />
                      Vidéo d'introduction au module (Aperçu gratuit)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center text-white">
                        <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
                        <p className="text-lg font-medium mb-2">Vidéo d'introduction</p>
                        <p className="text-gray-300">Durée: 10 minutes</p>
                        <Button className="mt-4 bg-red-600 hover:bg-red-700">
                          <Play className="mr-2 h-4 w-4" />
                          Lancer la vidéo
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        10 minutes
                      </div>
                      <div className="flex items-center">
                        <Video className="h-4 w-4 mr-2" />
                        HD 1080p
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        Accès gratuit
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Capsules vidéo du module</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {sequences.map((sequence, index) => {
                        const isLocked = !isPurchased && !sequence.preview;
                        return (
                          <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${
                            isLocked ? 'bg-gray-100' : 'bg-gray-50'
                          }`}>
                            <div className="flex items-center space-x-3">
                              {isLocked ? (
                                <Lock className="h-5 w-5 text-gray-400" />
                              ) : (
                                <Play className="h-5 w-5 text-blue-600" />
                              )}
                              <div>
                                <div className={`font-medium ${isLocked ? 'text-gray-500' : 'text-gray-900'}`}>
                                  {sequence.title}
                                </div>
                                <div className="text-sm text-gray-600">{sequence.duration}</div>
                              </div>
                              {sequence.preview && (
                                <Badge className="text-xs bg-green-100 text-green-800">
                                  Gratuit
                                </Badge>
                              )}
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              disabled={isLocked}
                            >
                              {isLocked ? 'Verrouillé' : 'Regarder'}
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Download className="mr-2 h-5 w-5 text-green-600" />
                      Supports pédagogiques
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className={`p-4 border rounded-lg transition-colors ${
                        isPurchased ? 'hover:bg-gray-50' : 'bg-gray-50'
                      }`}>
                        <div className="flex items-center space-x-3 mb-2">
                          <FileText className={`h-8 w-8 ${isPurchased ? 'text-red-600' : 'text-gray-400'}`} />
                          <div>
                            <div className={`font-medium ${isPurchased ? 'text-gray-900' : 'text-gray-500'}`}>
                              Fiches synthèses PDF
                            </div>
                            <div className="text-sm text-gray-600">Enjeux - Objectifs - Acteurs</div>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full" 
                          disabled={!isPurchased}
                        >
                          {isPurchased ? (
                            <>
                              <Download className="mr-2 h-4 w-4" />
                              Télécharger
                            </>
                          ) : (
                            <>
                              <Lock className="mr-2 h-4 w-4" />
                              Verrouillé
                            </>
                          )}
                        </Button>
                      </div>

                      <div className={`p-4 border rounded-lg transition-colors ${
                        isPurchased ? 'hover:bg-gray-50' : 'bg-gray-50'
                      }`}>
                        <div className="flex items-center space-x-3 mb-2">
                          <BookOpen className={`h-8 w-8 ${isPurchased ? 'text-blue-600' : 'text-gray-400'}`} />
                          <div>
                            <div className={`font-medium ${isPurchased ? 'text-gray-900' : 'text-gray-500'}`}>
                              Glossaire interactif
                            </div>
                            <div className="text-sm text-gray-600">Définitions des termes clés</div>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full" 
                          disabled={!isPurchased}
                        >
                          {isPurchased ? (
                            <>
                              <ArrowRight className="mr-2 h-4 w-4" />
                              Consulter
                            </>
                          ) : (
                            <>
                              <Lock className="mr-2 h-4 w-4" />
                              Verrouillé
                            </>
                          )}
                        </Button>
                      </div>

                      <div className={`p-4 border rounded-lg transition-colors ${
                        isPurchased ? 'hover:bg-gray-50' : 'bg-gray-50'
                      }`}>
                        <div className="flex items-center space-x-3 mb-2">
                          <Target className={`h-8 w-8 ${isPurchased ? 'text-purple-600' : 'text-gray-400'}`} />
                          <div>
                            <div className={`font-medium ${isPurchased ? 'text-gray-900' : 'text-gray-500'}`}>
                              Infographies interactives
                            </div>
                            <div className="text-sm text-gray-600">Schémas et processus</div>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full" 
                          disabled={!isPurchased}
                        >
                          {isPurchased ? (
                            <>
                              <ArrowRight className="mr-2 h-4 w-4" />
                              Voir
                            </>
                          ) : (
                            <>
                              <Lock className="mr-2 h-4 w-4" />
                              Verrouillé
                            </>
                          )}
                        </Button>
                      </div>

                      <div className={`p-4 border rounded-lg transition-colors ${
                        isPurchased ? 'hover:bg-gray-50' : 'bg-gray-50'
                      }`}>
                        <div className="flex items-center space-x-3 mb-2">
                          <HelpCircle className={`h-8 w-8 ${isPurchased ? 'text-green-600' : 'text-gray-400'}`} />
                          <div>
                            <div className={`font-medium ${isPurchased ? 'text-gray-900' : 'text-gray-500'}`}>
                              Quiz d'auto-évaluation
                            </div>
                            <div className="text-sm text-gray-600">Correction automatique</div>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full" 
                          disabled={!isPurchased}
                        >
                          {isPurchased ? (
                            <>
                              <Play className="mr-2 h-4 w-4" />
                              Commencer
                            </>
                          ) : (
                            <>
                              <Lock className="mr-2 h-4 w-4" />
                              Verrouillé
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Purchase Card */}
            {!isPurchased && (
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-center">Accès complet au module</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-blue-600">{courseInfo.price}</div>
                    <div className="text-sm text-gray-500 line-through">{courseInfo.originalPrice}</div>
                    <Badge className="bg-red-100 text-red-800">Promotion -25%</Badge>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Accès à vie au contenu
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Certificat numérique inclus
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Support personnalisé
                    </div>
                  </div>
                  <Button 
                    onClick={handlePurchase}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Acheter maintenant
                  </Button>
                  <p className="text-xs text-gray-500">
                    Paiement sécurisé via Orange Money Mali
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Progress Card */}
            {isPurchased && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Votre progression</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progression</span>
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                    <div className="text-sm text-gray-600">
                      {completedSequences.length} sur {sequences.length} séquences terminées
                    </div>
                    {progress === 100 && (
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <Award className="mr-2 h-4 w-4" />
                        Obtenir le certificat
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Course Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Informations du cours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Durée flexible</div>
                    <div className="text-sm text-gray-600">Autogérée par participant</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Certification</div>
                    <div className="text-sm text-gray-600">Certificat numérique avec QR code</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Support</div>
                    <div className="text-sm text-gray-600">Accompagnement personnalisé</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Course */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cours suivant</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium">Module 2 - Préparation des marchés</h4>
                  <p className="text-sm text-gray-600">
                    Approfondissez vos connaissances avec les procédures de préparation et de passation.
                  </p>
                  <Link to="/courses">
                    <Button variant="outline" className="w-full">
                      Voir le programme
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}