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
  ShoppingCart,
  Building,
  Search,
  Gavel,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CurrencySelector, { useCurrency, currencies } from '@/components/CurrencySelector';
import PriceDisplay, { MultiCurrencyDisplay } from '@/components/PriceDisplay';

export default function CourseIntermediate() {
  const [activeModule, setActiveModule] = useState(0);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [isPurchased, setIsPurchased] = useState(false);
  const [purchasedModules, setPurchasedModules] = useState<number[]>([]);
  
  const { selectedCurrency, changeCurrency, convertPrice } = useCurrency();

  const courseInfo = {
    title: "PROGRAMME DE FORMATION – NIVEAU INTERMÉDIAIRE",
    subtitle: "Préparation et passation des marchés publics",
    totalDuration: "34 heures",
    level: "Intermédiaire",
    format: "100% en ligne",
    prerequisites: "Niveau initiation recommandé",
    priceEur: 210, // Prix de base en euros
    originalPriceEur: 260, // Prix original en euros
    modules: 4
  };

  const modules = [
    {
      id: 1,
      title: "Préparation des dossiers de consultation (DAO/DRPCO)",
      duration: "8 heures",
      objectives: "Apprendre à élaborer un dossier d'appel d'offres",
      content: [
        "Étapes de planification",
        "Structure d'un DAO (clauses administratives, techniques, financières)",
        "Rédaction et validation"
      ],
      evaluation: "Exercice de rédaction",
      icon: FileText,
      color: "from-blue-500 to-indigo-600",
      preview: true,
      completed: false,
      priceEur: 60, // Prix en euros
      justification: "Module technique essentiel pour la préparation des appels d'offres"
    },
    {
      id: 2,
      title: "Analyse et évaluation des offres",
      duration: "10 heures",
      objectives: "Comprendre les méthodes d'évaluation",
      content: [
        "Critères administratifs, techniques, financiers",
        "Méthodes de notation (pondération, seuils)",
        "Simulation d'évaluation avec exemples"
      ],
      evaluation: "Cas pratique d'évaluation",
      icon: BarChart3,
      color: "from-emerald-500 to-teal-600",
      preview: false,
      completed: false,
      priceEur: 80,
      justification: "Module le plus long et technique, valeur élevée pour les évaluateurs"
    },
    {
      id: 3,
      title: "Attribution et exécution des marchés",
      duration: "8 heures",
      objectives: "Maîtriser le suivi d'un marché public",
      content: [
        "Processus d'attribution et publication des résultats",
        "Signature, notification et délais",
        "Suivi de l'exécution et modifications contractuelles"
      ],
      evaluation: "Quiz + mini-cas",
      icon: Gavel,
      color: "from-purple-500 to-violet-600",
      preview: false,
      completed: false,
      priceEur: 60,
      justification: "Compétences pratiques pour la gestion des contrats"
    },
    {
      id: 4,
      title: "Introduction au contrôle et audit des marchés publics",
      duration: "8 heures",
      objectives: "Initier les participants aux bases du contrôle",
      content: [
        "Rôle des organes de contrôle (interne et externe)",
        "Méthodes simples d'audit",
        "Études de cas pratiques"
      ],
      evaluation: "Étude de cas simplifiée",
      icon: Search,
      color: "from-rose-500 to-pink-600",
      preview: false,
      completed: false,
      priceEur: 60,
      justification: "Spécialisation en contrôle, demandée par les institutions"
    }
  ];

  const learningPath = [
    {
      step: 1,
      title: "Préparation technique",
      description: "Élaborer des dossiers d'appel d'offres",
      modules: [1]
    },
    {
      step: 2,
      title: "Évaluation professionnelle",
      description: "Analyser et noter les offres",
      modules: [2]
    },
    {
      step: 3,
      title: "Gestion contractuelle",
      description: "Attribuer et suivre l'exécution",
      modules: [3]
    },
    {
      step: 4,
      title: "Contrôle et audit",
      description: "Vérifier la conformité",
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
    return modules[index].preview || isPurchased || purchasedModules.includes(index);
  };

  const progress = (completedModules.length / modules.length) * 100;
  const totalIndividualPriceEur = modules.reduce((sum, module) => sum + module.priceEur, 0);
  const institutionalPriceEur = Math.round(courseInfo.priceEur * 1.3); // +30% pour institutions

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Formation avancée - Niveau {courseInfo.level}
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
              <div className="text-sm text-blue-200">Durée totale</div>
              <div className="font-semibold">{courseInfo.totalDuration}</div>
            </div>
            <div className="text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-blue-200" />
              <div className="text-sm text-blue-200">Modules</div>
              <div className="font-semibold">{courseInfo.modules} modules</div>
            </div>
            <div className="text-center">
              <Video className="h-8 w-8 mx-auto mb-2 text-blue-200" />
              <div className="text-sm text-blue-200">Format</div>
              <div className="font-semibold">{courseInfo.format}</div>
            </div>
            <div className="text-center">
              <CreditCard className="h-8 w-8 mx-auto mb-2 text-blue-200" />
              <div className="text-sm text-blue-200">Pack complet</div>
              <div className="font-semibold">{convertPrice(courseInfo.priceEur)}</div>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 mx-auto mb-2 text-blue-200" />
              <div className="text-sm text-blue-200">Certificat</div>
              <div className="font-semibold">Professionnel</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Currency Selector */}
        <div className="mb-8 flex justify-end">
          <CurrencySelector 
            selectedCurrency={selectedCurrency}
            onCurrencyChange={changeCurrency}
          />
        </div>

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
                      <Target className="mr-2 h-5 w-5 text-blue-600" />
                      Vue d'ensemble du programme intermédiaire
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">
                      Ce programme intermédiaire s'adresse aux professionnels souhaitant maîtriser 
                      la préparation, l'évaluation et le suivi des marchés publics. Formation technique 
                      et pratique pour agents publics, consultants et entreprises.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Compétences développées :</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Élaboration de dossiers d'appel d'offres (DAO)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Méthodes d'évaluation et de notation des offres</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Gestion de l'attribution et suivi contractuel</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Bases du contrôle et de l'audit</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Public cible :</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Building className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Agents des ministères et collectivités</span>
                          </li>
                          <li className="flex items-start">
                            <Users className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Consultants en marchés publics</span>
                          </li>
                          <li className="flex items-start">
                            <Shield className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Auditeurs et contrôleurs</span>
                          </li>
                          <li className="flex items-start">
                            <Heart className="h-4 w-4 text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">ONG et organismes internationaux</span>
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
                                {module.preview && (
                                  <Badge className="text-xs bg-green-100 text-green-800">
                                    <Eye className="h-3 w-3 mr-1" />
                                    Aperçu gratuit
                                  </Badge>
                                )}
                                {!isAccessible && !module.preview && (
                                  <Badge className="text-xs bg-gray-100 text-gray-600">
                                    <Lock className="h-3 w-3 mr-1" />
                                    {convertPrice(module.priceEur)}
                                  </Badge>
                                )}
                                {isPurchasedIndividually && (
                                  <Badge className="text-xs bg-blue-100 text-blue-800">
                                    Acheté
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
                                {!module.preview && (
                                  <PriceDisplay 
                                    priceInEur={module.priceEur}
                                    currency={selectedCurrency}
                                    size="sm"
                                    showCurrency={false}
                                  />
                                )}
                              </div>
                              
                              {!module.preview && (
                                <p className="text-xs text-gray-500 italic">
                                  💡 {module.justification}
                                </p>
                              )}
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
                      <Target className="mr-2 h-5 w-5 text-blue-600" />
                      Parcours professionnel progressif
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {learningPath.map((step, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
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
                      <Globe className="mr-2 h-5 w-5 text-blue-600" />
                      Tarifs par région - Niveau Intermédiaire
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                          <h4 className="font-bold text-blue-800 mb-4">Pack Complet</h4>
                          <MultiCurrencyDisplay 
                            priceInEur={courseInfo.priceEur}
                            currencies={currencies}
                          />
                          <div className="text-sm text-blue-700 mt-4">
                            ✓ 4 modules techniques (34h)<br/>
                            ✓ Certificat professionnel<br/>
                            ✓ Support expert<br/>
                            ✓ Accès à vie
                          </div>
                        </div>
                        
                        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                          <h4 className="font-bold text-purple-800 mb-4">Tarif Institutionnel</h4>
                          <MultiCurrencyDisplay 
                            priceInEur={institutionalPriceEur}
                            currencies={currencies}
                          />
                          <div className="text-sm text-purple-700 mt-4">
                            ✓ Ministères et collectivités<br/>
                            ✓ Entreprises publiques<br/>
                            ✓ ONG internationales<br/>
                            ✓ Support prioritaire
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
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-center">Options d'achat</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Pack Complet */}
                  <div className="text-center space-y-4 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-bold text-blue-800">Pack Complet (Recommandé)</h4>
                    <PriceDisplay 
                      priceInEur={courseInfo.priceEur}
                      currency={selectedCurrency}
                      originalPriceInEur={courseInfo.originalPriceEur}
                      size="xl"
                    />
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        4 modules techniques (34h)
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Certificat professionnel
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Support expert
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Accès à vie
                      </div>
                    </div>
                    <Button 
                      onClick={handlePurchase}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      <CreditCard className="mr-2 h-4 w-4" />
                      Acheter le pack complet
                    </Button>
                  </div>

                  {/* Tarif Institutionnel */}
                  <div className="text-center space-y-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-bold text-purple-800">Tarif Institutionnel</h4>
                    <PriceDisplay 
                      priceInEur={institutionalPriceEur}
                      currency={selectedCurrency}
                      size="lg"
                    />
                    <div className="text-xs text-purple-700">
                      Pour ministères, collectivités, ONG, entreprises publiques
                    </div>
                    <Button 
                      variant="outline"
                      className="w-full border-purple-200 text-purple-600 hover:bg-purple-50"
                    >
                      <Building className="mr-2 h-4 w-4" />
                      Tarif institutionnel
                    </Button>
                  </div>

                  {/* Modules Individuels */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-center">Ou modules individuels :</h4>
                    {modules.filter(m => !m.preview).map((module, index) => (
                      <div key={module.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium text-sm">Module {module.id}</div>
                          <div className="text-xs text-gray-600">{convertPrice(module.priceEur)}</div>
                        </div>
                        <Button
                          onClick={() => handleIndividualPurchase(index + 1)}
                          size="sm"
                          variant="outline"
                          disabled={purchasedModules.includes(index + 1)}
                        >
                          {purchasedModules.includes(index + 1) ? 'Acheté' : 'Acheter'}
                        </Button>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    Paiement sécurisé via {selectedCurrency.code === 'XOF' ? 'Orange Money Mali' : 
                    selectedCurrency.code === 'GNF' ? 'Orange Money Guinée' : 'PayPal/Stripe'}
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
                        Obtenir le certificat professionnel
                      </Button>
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
                    <div className="font-medium">34 heures de formation</div>
                    <div className="text-sm text-gray-600">Niveau technique avancé</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Certificat professionnel</div>
                    <div className="text-sm text-gray-600">Reconnu par les institutions</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Support expert</div>
                    <div className="text-sm text-gray-600">Accompagnement spécialisé</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Portée régionale</div>
                    <div className="text-sm text-gray-600">UEMOA, CEMAC</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prerequisites */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Prérequis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    Formation de niveau intermédiaire. Le niveau initiation est fortement recommandé.
                  </p>
                  <Link to="/course/initiation">
                    <Button variant="outline" className="w-full">
                      Voir le niveau initiation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
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
                  <h4 className="font-medium">Niveau Avancé</h4>
                  <p className="text-sm text-gray-600">
                    Maîtrisez le contentieux, l'audit et la gouvernance des marchés publics.
                  </p>
                  <Link to="/course/advanced">
                    <Button variant="outline" className="w-full">
                      Voir le programme avancé
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