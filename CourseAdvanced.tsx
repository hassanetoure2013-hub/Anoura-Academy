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
  BarChart3,
  Scale,
  Settings,
  FileCheck,
  TrendingDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CurrencySelector, { useCurrency, currencies } from '@/components/CurrencySelector';
import PriceDisplay, { MultiCurrencyDisplay } from '@/components/PriceDisplay';

export default function CourseAdvanced() {
  const [activeModule, setActiveModule] = useState(0);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [isPurchased, setIsPurchased] = useState(false);
  const [purchasedModules, setPurchasedModules] = useState<number[]>([]);
  
  const { selectedCurrency, changeCurrency, convertPrice } = useCurrency();

  const courseInfo = {
    title: "PROGRAMME DE FORMATION – NIVEAU AVANCÉ",
    subtitle: "Marchés publics & gouvernance",
    totalDuration: "36 heures",
    level: "Avancé",
    format: "100% en ligne",
    prerequisites: "Niveau intermédiaire requis",
    priceEur: 290, // Prix de base en euros
    originalPriceEur: 360, // Prix original en euros
    modules: 4
  };

  const modules = [
    {
      id: 1,
      title: "Contentieux des marchés publics",
      duration: "10 heures",
      objectives: "Maîtriser les procédures de recours et règlements des litiges",
      content: [
        "Types de recours (précontentieux, contentieux juridictionnel)",
        "Rôle des comités de règlement des différends (CRD, tribunaux)",
        "Études de jurisprudence (Mali, UEMOA, international)"
      ],
      evaluation: "Étude de cas juridique",
      icon: Scale,
      color: "from-red-500 to-rose-600",
      preview: false,
      completed: false,
      priceEur: 100, // Prix en euros
      justification: "Module spécialisé en droit, haute valeur pour juristes et responsables"
    },
    {
      id: 2,
      title: "Gestion avancée de l'exécution des marchés",
      duration: "8 heures",
      objectives: "Approfondir les aspects contractuels et financiers",
      content: [
        "Suivi contractuel et avenants",
        "Retards, pénalités et résiliations",
        "Gestion financière et garanties (caution, avances, retenues)"
      ],
      evaluation: "Simulation d'un litige d'exécution",
      icon: Settings,
      color: "from-orange-500 to-amber-600",
      preview: false,
      completed: false,
      priceEur: 80,
      justification: "Compétences techniques avancées, demandées par gestionnaires expérimentés"
    },
    {
      id: 3,
      title: "Contrôle et audit approfondi des marchés publics",
      duration: "10 heures",
      objectives: "Développer des compétences d'audit complet",
      content: [
        "Audit de performance et conformité",
        "Outils méthodologiques (MAPS, INTOSAI)",
        "Études de cas sur rapports d'audit nationaux"
      ],
      evaluation: "Rapport d'audit simplifié",
      icon: FileCheck,
      color: "from-emerald-500 to-green-600",
      preview: false,
      completed: false,
      priceEur: 100,
      justification: "Spécialisation audit, forte demande des institutions de contrôle"
    },
    {
      id: 4,
      title: "Stratégies et réformes des systèmes de passation",
      duration: "8 heures",
      objectives: "Comprendre et analyser les réformes institutionnelles",
      content: [
        "Évolutions récentes dans l'UEMOA et en Afrique",
        "Défis liés à la digitalisation et aux plateformes électroniques",
        "Gouvernance et intégrité : approche comparée (Banque mondiale, OCDE, BAD)"
      ],
      evaluation: "Projet de note stratégique",
      icon: TrendingUp,
      color: "from-purple-500 to-indigo-600",
      preview: false,
      completed: false,
      priceEur: 80,
      justification: "Vision stratégique, essentiel pour décideurs et consultants seniors"
    }
  ];

  const learningPath = [
    {
      step: 1,
      title: "Expertise juridique",
      description: "Maîtriser le contentieux et les recours",
      modules: [1]
    },
    {
      step: 2,
      title: "Gestion contractuelle avancée",
      description: "Optimiser l'exécution des marchés",
      modules: [2]
    },
    {
      step: 3,
      title: "Audit et contrôle",
      description: "Développer l'expertise en audit",
      modules: [3]
    },
    {
      step: 4,
      title: "Vision stratégique",
      description: "Analyser les réformes et tendances",
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
  const totalIndividualPriceEur = modules.reduce((sum, module) => sum + module.priceEur, 0);
  const institutionalPriceEur = Math.round(courseInfo.priceEur * 1.3); // +30% pour institutions

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Formation experte - Niveau {courseInfo.level}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {courseInfo.title}
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              {courseInfo.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-purple-200" />
              <div className="text-sm text-purple-200">Durée totale</div>
              <div className="font-semibold">{courseInfo.totalDuration}</div>
            </div>
            <div className="text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-purple-200" />
              <div className="text-sm text-purple-200">Modules</div>
              <div className="font-semibold">{courseInfo.modules} modules</div>
            </div>
            <div className="text-center">
              <Video className="h-8 w-8 mx-auto mb-2 text-purple-200" />
              <div className="text-sm text-purple-200">Format</div>
              <div className="font-semibold">{courseInfo.format}</div>
            </div>
            <div className="text-center">
              <CreditCard className="h-8 w-8 mx-auto mb-2 text-purple-200" />
              <div className="text-sm text-purple-200">Pack complet</div>
              <div className="font-semibold">{convertPrice(courseInfo.priceEur)}</div>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 mx-auto mb-2 text-purple-200" />
              <div className="text-sm text-purple-200">Certificat</div>
              <div className="font-semibold">Expert</div>
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
                <TabsTrigger value="comparison">Comparaison</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="mr-2 h-5 w-5 text-purple-600" />
                      Vue d'ensemble du programme avancé
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">
                      Ce programme avancé s'adresse aux experts souhaitant maîtriser les aspects 
                      juridiques, stratégiques et de gouvernance des marchés publics. Formation 
                      de haut niveau pour consultants seniors, auditeurs et décideurs.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Expertise développée :</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Contentieux et procédures de recours</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Gestion contractuelle et financière avancée</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Audit complet et méthodologies internationales</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Analyse stratégique et réformes institutionnelles</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Public expert :</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Scale className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Juristes et conseillers juridiques</span>
                          </li>
                          <li className="flex items-start">
                            <FileCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Auditeurs et contrôleurs seniors</span>
                          </li>
                          <li className="flex items-start">
                            <TrendingUp className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Consultants et experts internationaux</span>
                          </li>
                          <li className="flex items-start">
                            <Building className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Décideurs institutionnels</span>
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
                                <PriceDisplay 
                                  priceInEur={module.priceEur}
                                  currency={selectedCurrency}
                                  size="sm"
                                  showCurrency={false}
                                />
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
                      <Target className="mr-2 h-5 w-5 text-purple-600" />
                      Parcours d'expertise avancé
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {learningPath.map((step, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
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

              <TabsContent value="comparison" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5 text-purple-600" />
                      Comparaison des 3 niveaux ANOURA Academy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 p-3 text-left font-semibold">Niveau</th>
                            <th className="border border-gray-300 p-3 text-center font-semibold">Heures</th>
                            <th className="border border-gray-300 p-3 text-center font-semibold">Modules</th>
                            <th className="border border-gray-300 p-3 text-center font-semibold">Pack Individuel</th>
                            <th className="border border-gray-300 p-3 text-center font-semibold">Pack Institutionnel</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-green-50">
                            <td className="border border-gray-300 p-3">
                              <div className="flex items-center">
                                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                                <span className="font-medium">Initiation</span>
                              </div>
                            </td>
                            <td className="border border-gray-300 p-3 text-center">20h</td>
                            <td className="border border-gray-300 p-3 text-center">4</td>
                            <td className="border border-gray-300 p-3 text-center">
                              <div className="font-semibold">{convertPrice(115)}</div>
                              <div className="text-xs text-gray-500">(115 €)</div>
                            </td>
                            <td className="border border-gray-300 p-3 text-center">
                              <div className="font-semibold">{convertPrice(150)}</div>
                              <div className="text-xs text-gray-500">(150 €)</div>
                            </td>
                          </tr>
                          <tr className="hover:bg-blue-50">
                            <td className="border border-gray-300 p-3">
                              <div className="flex items-center">
                                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                                <span className="font-medium">Intermédiaire</span>
                              </div>
                            </td>
                            <td className="border border-gray-300 p-3 text-center">34h</td>
                            <td className="border border-gray-300 p-3 text-center">4</td>
                            <td className="border border-gray-300 p-3 text-center">
                              <div className="font-semibold">{convertPrice(210)}</div>
                              <div className="text-xs text-gray-500">(210 €)</div>
                            </td>
                            <td className="border border-gray-300 p-3 text-center">
                              <div className="font-semibold">{convertPrice(273)}</div>
                              <div className="text-xs text-gray-500">(273 €)</div>
                            </td>
                          </tr>
                          <tr className="hover:bg-purple-50">
                            <td className="border border-gray-300 p-3">
                              <div className="flex items-center">
                                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                                <span className="font-medium">Avancé</span>
                              </div>
                            </td>
                            <td className="border border-gray-300 p-3 text-center">36h</td>
                            <td className="border border-gray-300 p-3 text-center">4</td>
                            <td className="border border-gray-300 p-3 text-center">
                              <div className="font-semibold">{convertPrice(290)}</div>
                              <div className="text-xs text-gray-500">(290 €)</div>
                            </td>
                            <td className="border border-gray-300 p-3 text-center">
                              <div className="font-semibold">{convertPrice(377)}</div>
                              <div className="text-xs text-gray-500">(377 €)</div>
                            </td>
                          </tr>
                          <tr className="bg-yellow-50 font-bold">
                            <td className="border border-gray-300 p-3">
                              <div className="flex items-center">
                                <Award className="h-4 w-4 text-yellow-600 mr-2" />
                                <span>Parcours Complet</span>
                              </div>
                            </td>
                            <td className="border border-gray-300 p-3 text-center">90h</td>
                            <td className="border border-gray-300 p-3 text-center">12</td>
                            <td className="border border-gray-300 p-3 text-center">
                              <div className="font-bold text-yellow-700">{convertPrice(615)}</div>
                              <div className="text-xs text-gray-500">(615 €)</div>
                            </td>
                            <td className="border border-gray-300 p-3 text-center">
                              <div className="font-bold text-yellow-700">{convertPrice(800)}</div>
                              <div className="text-xs text-gray-500">(800 €)</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      * Tarif institutionnel : majoration de 30% pour administrations, ONG, bailleurs et entreprises
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Purchase Options */}
            {!isPurchased && (
              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-lg text-center">Options d'achat</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Pack Complet */}
                  <div className="text-center space-y-4 p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-bold text-purple-800">Pack Complet Expert</h4>
                    <PriceDisplay 
                      priceInEur={courseInfo.priceEur}
                      currency={selectedCurrency}
                      originalPriceInEur={courseInfo.originalPriceEur}
                      size="xl"
                    />
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        4 modules experts (36h)
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Certificat de niveau expert
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Support spécialisé
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Ressources premium
                      </div>
                    </div>
                    <Button 
                      onClick={handlePurchase}
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                    >
                      <CreditCard className="mr-2 h-4 w-4" />
                      Acheter le pack expert
                    </Button>
                  </div>

                  {/* Tarif Institutionnel */}
                  <div className="text-center space-y-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                    <h4 className="font-bold text-indigo-800">Tarif Institutionnel</h4>
                    <PriceDisplay 
                      priceInEur={institutionalPriceEur}
                      currency={selectedCurrency}
                      size="lg"
                    />
                    <div className="text-xs text-indigo-700">
                      Pour administrations, organismes internationaux, cabinets conseil
                    </div>
                    <Button 
                      variant="outline"
                      className="w-full border-indigo-200 text-indigo-600 hover:bg-indigo-50"
                    >
                      <Building className="mr-2 h-4 w-4" />
                      Tarif institutionnel
                    </Button>
                  </div>

                  {/* Modules Individuels */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-center">Ou modules individuels :</h4>
                    {modules.map((module, index) => (
                      <div key={module.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium text-sm">Module {module.id}</div>
                          <div className="text-xs text-gray-600">{convertPrice(module.priceEur)}</div>
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
                        Obtenir le certificat expert
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
                    <div className="font-medium">36 heures d'expertise</div>
                    <div className="text-sm text-gray-600">Niveau expert avancé</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Certificat expert</div>
                    <div className="text-sm text-gray-600">Reconnaissance internationale</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Support spécialisé</div>
                    <div className="text-sm text-gray-600">Experts seniors</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Portée internationale</div>
                    <div className="text-sm text-gray-600">UEMOA, CEMAC, international</div>
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
                    Formation de niveau expert. Le niveau intermédiaire est obligatoire.
                  </p>
                  <div className="space-y-2">
                    <Link to="/course/initiation">
                      <Button variant="outline" className="w-full" size="sm">
                        Niveau initiation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to="/course/intermediate">
                      <Button variant="outline" className="w-full" size="sm">
                        Niveau intermédiaire (requis)
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}