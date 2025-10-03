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
  Lock,
  Star,
  Eye,
  AlertTriangle,
  ShoppingCart
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CourseInitiation() {
  const [activeModule, setActiveModule] = useState(0);
  const [completedModules, setCompletedModules] = useState<number[]>([0]); // Simuler 1 module complété
  const [isPurchased, setIsPurchased] = useState(false);
  const [purchasedModules, setPurchasedModules] = useState<number[]>([0]); // Simuler 1 module acheté

  const courseInfo = {
    title: "PROGRAMME DE FORMATION – NIVEAU INITIATION",
    subtitle: "Marchés publics uniquement",
    totalDuration: "20 heures",
    level: "Initiation",
    format: "100% en ligne",
    prerequisites: "Aucun",
    price: "75,000 FCFA",
    originalPrice: "100,000 FCFA",
    modules: 4
  };

  const modules = [
    {
      id: 1,
      title: "Introduction aux marchés publics",
      duration: "6 heures",
      objectives: "Découvrir les bases des marchés publics",
      content: [
        "Définition et principes fondamentaux (transparence, concurrence, égalité)",
        "Différence avec les autres contrats publics",
        "Enjeux économiques et sociaux",
        "Acteurs de la commande publique"
      ],
      evaluation: "QCM + mini-cas",
      icon: BookOpen,
      color: "from-emerald-500 to-teal-600",
      preview: false,
      completed: true, // Premier module complété
      price: "19,000 FCFA",
      justification: "Module d'entrée, fondamental pour comprendre les bases"
    },
    {
      id: 2,
      title: "Les étapes de base d'une procédure de marché public",
      duration: "5 heures",
      objectives: "Identifier les grandes étapes de la passation",
      content: [
        "Planification des besoins",
        "Publicité et appel à concurrence",
        "Soumission et ouverture des plis",
        "Attribution et notification"
      ],
      evaluation: "Quiz de progression",
      icon: Target,
      color: "from-blue-500 to-indigo-600",
      preview: false,
      completed: false,
      price: "19,000 FCFA",
      justification: "Contenu pratique, valeur ajoutée pour agents et PME locales"
    },
    {
      id: 3,
      title: "Droits et obligations des soumissionnaires",
      duration: "4 heures",
      objectives: "Comprendre les règles essentielles pour participer à un marché public",
      content: [
        "Qui peut soumissionner ?",
        "Principales obligations (documents, garanties, délais)",
        "Droits des entreprises (recours, égalité de traitement)"
      ],
      evaluation: "Quiz interactif + activité pratique (check-list)",
      icon: Users,
      color: "from-purple-500 to-violet-600",
      preview: false,
      completed: false,
      price: "19,000 FCFA",
      justification: "Court, ciblé sur les PME et soumissionnaires"
    },
    {
      id: 4,
      title: "Éthique et transparence dans les marchés publics",
      duration: "5 heures",
      objectives: "Sensibiliser aux risques de corruption et à l'importance de l'intégrité",
      content: [
        "Principes de transparence et intégrité",
        "Risques courants dans la passation (favoritisme, ententes)",
        "Bonnes pratiques et obligations légales",
        "Rôle des organes de régulation (ARMDS, ARCOP, ARMP, etc.)"
      ],
      evaluation: "Quiz + étude de cas éthique",
      icon: Shield,
      color: "from-rose-500 to-pink-600",
      preview: false,
      completed: false,
      price: "19,000 FCFA",
      justification: "Sujet stratégique, valeur forte pour agents publics et société civile"
    }
  ];

  const learningPath = [
    {
      step: 1,
      title: "Bases théoriques",
      description: "Comprendre les fondamentaux",
      modules: [1]
    },
    {
      step: 2,
      title: "Processus pratique",
      description: "Maîtriser les procédures",
      modules: [2]
    },
    {
      step: 3,
      title: "Participation active",
      description: "Connaître vos droits et devoirs",
      modules: [3]
    },
    {
      step: 4,
      title: "Intégrité professionnelle",
      description: "Respecter l'éthique",
      modules: [4]
    }
  ];

  const handlePurchase = () => {
    setIsPurchased(true);
    setPurchasedModules([0, 1, 2, 3]); // All modules purchased
  };

  const handleIndividualPurchase = (moduleIndex: number) => {
    if (!purchasedModules.includes(moduleIndex)) {
      setPurchasedModules([...purchasedModules, moduleIndex]);
    }
  };

  const markModuleComplete = (index: number) => {
    if (!completedModules.includes(index)) {
      setCompletedModules([...completedModules, index]);
    }
  };

  const isModuleAccessible = (index: number) => {
    return isPurchased || purchasedModules.includes(index);
  };

  const progress = (completedModules.length / modules.length) * 100;

  // Vérifier si l'utilisateur a une completion partielle
  const hasPartialCompletion = completedModules.length > 0 && completedModules.length < modules.length && !isPurchased;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Formation complète - Niveau {courseInfo.level}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {courseInfo.title}
            </h1>
            <p className="text-xl text-emerald-100 mb-8">
              {courseInfo.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-emerald-200" />
              <div className="text-sm text-emerald-200">Durée totale</div>
              <div className="font-semibold">{courseInfo.totalDuration}</div>
            </div>
            <div className="text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-emerald-200" />
              <div className="text-sm text-emerald-200">Modules</div>
              <div className="font-semibold">{courseInfo.modules} modules</div>
            </div>
            <div className="text-center">
              <Video className="h-8 w-8 mx-auto mb-2 text-emerald-200" />
              <div className="text-sm text-emerald-200">Format</div>
              <div className="font-semibold">{courseInfo.format}</div>
            </div>
            <div className="text-center">
              <CreditCard className="h-8 w-8 mx-auto mb-2 text-emerald-200" />
              <div className="text-sm text-emerald-200">Pack complet</div>
              <div className="font-semibold">{courseInfo.price}</div>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 mx-auto mb-2 text-emerald-200" />
              <div className="text-sm text-emerald-200">Certificat</div>
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
                <TabsTrigger value="overview">Programme</TabsTrigger>
                <TabsTrigger value="modules">Modules</TabsTrigger>
                <TabsTrigger value="path">Parcours</TabsTrigger>
                <TabsTrigger value="pricing">Tarifs</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="mr-2 h-5 w-5 text-emerald-600" />
                      Vue d'ensemble du programme
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">
                      Ce programme d'initiation vous donne les bases essentielles pour comprendre 
                      et participer aux marchés publics en Afrique de l'Ouest. Formation pratique 
                      et interactive adaptée aux débutants.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Ce que vous apprendrez :</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Principes fondamentaux des marchés publics</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Étapes clés des procédures de passation</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Droits et obligations des entreprises</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Éthique et transparence</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Options d'achat :</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ShoppingCart className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Pack complet : {courseInfo.price}</span>
                          </li>
                          <li className="flex items-start">
                            <CreditCard className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Modules individuels : 19,000 FCFA chacun</span>
                          </li>
                          <li className="flex items-start">
                            <Award className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Certificat avec pack complet uniquement</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="modules" className="space-y-4">
                {modules.map((module, index) => {
                  const isCompleted = completedModules.includes(index);
                  const isAccessible = isModuleAccessible(index);
                  const isPurchasedIndividually = purchasedModules.includes(index);
                  
                  return (
                    <Card key={index} className={`transition-all duration-300 ${
                      isCompleted ? 'bg-green-50 border-green-200' : 
                      !isAccessible ? 'bg-gray-50 border-gray-200' : 'hover:shadow-md'
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4 flex-1">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                              isCompleted ? 'bg-green-600 text-white' : 
                              !isAccessible ? 'bg-gray-400 text-white' :
                              `bg-gradient-to-r ${module.color} text-white`
                            }`}>
                              {!isAccessible ? <Lock className="h-7 w-7" /> :
                               isCompleted ? <CheckCircle className="h-7 w-7" /> : 
                               <module.icon className="h-7 w-7" />}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-3">
                                <h3 className={`text-xl font-bold ${!isAccessible ? 'text-gray-500' : 'text-gray-900'}`}>
                                  Module {module.id}: {module.title}
                                </h3>
                                <Badge variant="outline" className="text-xs">
                                  {module.duration}
                                </Badge>
                                {!isAccessible && (
                                  <Badge className="text-xs bg-gray-100 text-gray-600">
                                    <Lock className="h-3 w-3 mr-1" />
                                    {module.price}
                                  </Badge>
                                )}
                                {isPurchasedIndividually && (
                                  <Badge className="text-xs bg-blue-100 text-blue-800">
                                    Acheté
                                  </Badge>
                                )}
                                {isCompleted && (
                                  <Badge className="text-xs bg-green-100 text-green-800">
                                    ✅ Terminé
                                  </Badge>
                                )}
                              </div>
                              
                              <p className={`text-sm font-medium mb-3 ${!isAccessible ? 'text-gray-400' : 'text-blue-600'}`}>
                                🎯 {module.objectives}
                              </p>
                              
                              <div className="mb-3">
                                <h4 className={`text-sm font-semibold mb-2 ${!isAccessible ? 'text-gray-400' : 'text-gray-700'}`}>
                                  📌 Contenu :
                                </h4>
                                <ul className="space-y-1">
                                  {module.content.map((item, contentIndex) => (
                                    <li key={contentIndex} className={`text-sm flex items-start ${!isAccessible ? 'text-gray-400' : 'text-gray-600'}`}>
                                      <span className="mr-2">•</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div className="flex items-center justify-between text-sm mb-3">
                                <div className={`flex items-center ${!isAccessible ? 'text-gray-400' : 'text-gray-600'}`}>
                                  <HelpCircle className="h-4 w-4 mr-1" />
                                  <span>📝 {module.evaluation}</span>
                                </div>
                                <div className="text-sm font-medium text-gray-700">
                                  {module.price}
                                </div>
                              </div>
                              
                              <p className="text-xs text-gray-500 italic">
                                💡 {module.justification}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col space-y-2">
                            {isAccessible ? (
                              <Button
                                onClick={() => markModuleComplete(index)}
                                disabled={isCompleted}
                                className={isCompleted ? 'bg-green-600' : ''}
                              >
                                {isCompleted ? 'Terminé' : 'Commencer'}
                                {!isCompleted && <ArrowRight className="ml-2 h-4 w-4" />}
                              </Button>
                            ) : (
                              <Button
                                onClick={() => handleIndividualPurchase(index)}
                                variant="outline"
                                className="border-blue-200 text-blue-600 hover:bg-blue-50"
                              >
                                <ShoppingCart className="mr-2 h-4 w-4" />
                                Acheter
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </TabsContent>

              <TabsContent value="path" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="mr-2 h-5 w-5 text-emerald-600" />
                      Parcours d'apprentissage progressif
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {learningPath.map((step, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                              {step.step}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h4>
                            <p className="text-gray-600 mb-3">{step.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {step.modules.map((moduleId) => {
                                const module = modules.find(m => m.id === moduleId);
                                return module ? (
                                  <Badge key={moduleId} className={`bg-gradient-to-r ${module.color} text-white`}>
                                    Module {moduleId}: {module.title}
                                  </Badge>
                                ) : null;
                              })}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="pricing" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="mr-2 h-5 w-5 text-emerald-600" />
                      Tarifs par région
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-emerald-50 rounded-lg border-2 border-emerald-200">
                          <h4 className="font-bold text-emerald-800 mb-4">Pack Complet</h4>
                          <div className="text-3xl font-bold text-emerald-600 mb-2">
                            {courseInfo.price}
                          </div>
                          <div className="text-sm text-emerald-700 line-through mb-4">
                            {courseInfo.originalPrice}
                          </div>
                          <div className="text-sm text-emerald-700">
                            ✓ 4 modules complets<br/>
                            ✓ Certificat numérique<br/>
                            ✓ Support personnalisé<br/>
                            ✓ Accès à vie
                          </div>
                        </div>
                        
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <h4 className="font-bold text-blue-800 mb-4">Module Individuel</h4>
                          <div className="text-3xl font-bold text-blue-600 mb-2">
                            19,000 FCFA
                          </div>
                          <div className="text-sm text-blue-700 mt-4">
                            ✓ Accès à 1 module<br/>
                            ✓ Paiement échelonné<br/>
                            ✗ Pas de certificat<br/>
                            ✗ Coût total plus élevé
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h4 className="font-semibold text-yellow-800 mb-2">💡 Conseils tarifaires</h4>
                        <ul className="text-sm text-yellow-700 space-y-1">
                          <li>• <strong>Mali, Sénégal, Burkina Faso, Côte d'Ivoire</strong> : Paiement en FCFA (XOF)</li>
                          <li>• <strong>Guinée</strong> : Paiement en Franc Guinéen (GNF)</li>
                          <li>• <strong>International</strong> : Paiement en USD ou EUR</li>
                          <li>• Les prix sont automatiquement convertis selon votre région</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Purchase Options */}
            {!isPurchased && (
              <Card className="border-2 border-emerald-200">
                <CardHeader>
                  <CardTitle className="text-lg text-center">Options d'achat</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Pack Complet */}
                  <div className="text-center space-y-4 p-4 bg-emerald-50 rounded-lg">
                    <h4 className="font-bold text-emerald-800">Pack Complet (Recommandé)</h4>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-emerald-600">
                        {courseInfo.price}
                      </div>
                      <div className="text-sm text-gray-500 line-through">
                        {courseInfo.originalPrice}
                      </div>
                      <Badge className="bg-red-500 text-white">-25% Promotion</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        4 modules complets (20h)
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Certificat numérique inclus
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Accès à vie au contenu
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Support personnalisé
                      </div>
                    </div>
                    <Button 
                      onClick={handlePurchase}
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                    >
                      <CreditCard className="mr-2 h-4 w-4" />
                      Acheter le pack complet
                    </Button>
                  </div>

                  {/* Modules Individuels */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-center">Ou modules individuels :</h4>
                    {modules.map((module, index) => (
                      <div key={module.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium text-sm">Module {module.id}</div>
                          <div className="text-xs text-gray-600">{module.price}</div>
                        </div>
                        <Button
                          onClick={() => handleIndividualPurchase(index)}
                          size="sm"
                          variant="outline"
                          disabled={purchasedModules.includes(index)}
                        >
                          {purchasedModules.includes(index) ? 'Acheté' : 'Acheter'}
                        </Button>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    Paiement sécurisé via Orange Money Mali
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Progress Card */}
            {(isPurchased || purchasedModules.length > 0) && (
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
                      {completedModules.length} sur {modules.length} modules terminés
                    </div>
                    {progress === 100 && isPurchased && (
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <Award className="mr-2 h-4 w-4" />
                        Obtenir le certificat
                      </Button>
                    )}
                    {progress > 0 && progress < 100 && !isPurchased && (
                      <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                        <p className="text-sm text-yellow-800">
                          Achetez le pack complet pour obtenir votre certificat !
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Course Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Informations du programme</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Durée flexible</div>
                    <div className="text-sm text-gray-600">Formation autogérée</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Certification</div>
                    <div className="text-sm text-gray-600">Pack complet uniquement</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Support</div>
                    <div className="text-sm text-gray-600">Accompagnement personnalisé</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Portée</div>
                    <div className="text-sm text-gray-600">Mali, Guinée, UEMOA</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Level */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Niveau suivant</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium">Niveau Intermédiaire</h4>
                  <p className="text-sm text-gray-600">
                    Approfondissez vos connaissances avec la préparation et passation des marchés.
                  </p>
                  <Link to="/course/intermediate">
                    <Button variant="outline" className="w-full">
                      Voir le programme intermédiaire
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