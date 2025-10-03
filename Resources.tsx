import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ExternalLink, 
  Globe, 
  Building, 
  FileText, 
  Users, 
  BookOpen,
  Download,
  Link as LinkIcon,
  Shield,
  Scale,
  Target
} from 'lucide-react';
import ARMPLinks from '@/components/ARMPLinks';

export default function Resources() {
  const internationalOrgs = [
    {
      name: "Banque Mondiale",
      acronym: "WB",
      website: "https://www.worldbank.org/en/topic/procurement",
      description: "Ressources sur les marchés publics et développement",
      flag: "🌍"
    },
    {
      name: "Banque Africaine de Développement",
      acronym: "BAD",
      website: "https://www.afdb.org/fr/topics/sectors/private-sector-development/procurement",
      description: "Politiques de passation des marchés en Afrique",
      flag: "🌍"
    },
    {
      name: "Organisation de Coopération et de Développement Économiques",
      acronym: "OCDE",
      website: "https://www.oecd.org/governance/procurement/",
      description: "Bonnes pratiques en matière de marchés publics",
      flag: "🌍"
    },
    {
      name: "Transparency International",
      acronym: "TI",
      website: "https://www.transparency.org/en/our-priorities/public-contracting",
      description: "Lutte contre la corruption dans les marchés publics",
      flag: "🌍"
    }
  ];

  const legalTexts = [
    {
      title: "Directive UEMOA n°04/2005/CM",
      description: "Directive portant procédures de passation, d'exécution et de règlement des marchés publics",
      type: "Directive régionale",
      region: "UEMOA"
    },
    {
      title: "Règlement CEMAC n°08/18-UEAC-190-CM-33",
      description: "Règlement relatif aux marchés publics en zone CEMAC",
      type: "Règlement régional",
      region: "CEMAC"
    },
    {
      title: "Code des marchés publics du Mali",
      description: "Décret n°2015-0604/P-RM du 25 septembre 2015",
      type: "Code national",
      region: "Mali"
    },
    {
      title: "Code des marchés publics du Sénégal",
      description: "Décret n°2014-1212 du 22 septembre 2014",
      type: "Code national",
      region: "Sénégal"
    }
  ];

  const trainingResources = [
    {
      title: "Guide pratique des marchés publics UEMOA",
      description: "Manuel de formation pour les acteurs des marchés publics",
      type: "Guide",
      level: "Tous niveaux"
    },
    {
      title: "Méthodologie MAPS (Methodology for Assessing Procurement Systems)",
      description: "Outil d'évaluation des systèmes de passation des marchés",
      type: "Méthodologie",
      level: "Avancé"
    },
    {
      title: "Standards INTOSAI pour l'audit des marchés publics",
      description: "Normes internationales pour l'audit des marchés publics",
      type: "Standards",
      level: "Expert"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Centre de ressources
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ressources et Liens Utiles
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              Accédez aux sites officiels des ARMP et aux ressources spécialisées
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="armp" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="armp">ARMP Officielles</TabsTrigger>
            <TabsTrigger value="international">Organisations</TabsTrigger>
            <TabsTrigger value="legal">Textes Légaux</TabsTrigger>
            <TabsTrigger value="training">Formation</TabsTrigger>
          </TabsList>

          <TabsContent value="armp" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Sites Officiels des Autorités de Régulation
              </h2>
              <p className="text-gray-600">
                Accédez directement aux sites web des ARMP d'Afrique de l'Ouest et Centrale
              </p>
            </div>
            <ARMPLinks />
          </TabsContent>

          <TabsContent value="international" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-indigo-600" />
                  Organisations Internationales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {internationalOrgs.map((org, index) => (
                    <div key={index} className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl">{org.flag}</span>
                          <div>
                            <h4 className="font-semibold text-indigo-800">{org.acronym}</h4>
                            <div className="text-sm font-medium text-gray-700">{org.name}</div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{org.description}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-indigo-200 text-indigo-600 hover:bg-indigo-50"
                        onClick={() => window.open(org.website, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visiter le site
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="legal" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="mr-2 h-5 w-5 text-purple-600" />
                  Textes Réglementaires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {legalTexts.map((text, index) => (
                    <div key={index} className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-semibold text-purple-800">{text.title}</h4>
                            <Badge variant="outline" className="text-xs border-purple-300 text-purple-700">
                              {text.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{text.description}</p>
                          <div className="flex items-center space-x-2">
                            <FileText className="h-4 w-4 text-purple-600" />
                            <span className="text-sm font-medium text-purple-700">{text.region}</span>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple-200 text-purple-600 hover:bg-purple-50"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Télécharger
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="training" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-green-600" />
                  Ressources de Formation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trainingResources.map((resource, index) => (
                    <div key={index} className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-semibold text-green-800">{resource.title}</h4>
                            <Badge variant="outline" className="text-xs border-green-300 text-green-700">
                              {resource.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                          <div className="flex items-center space-x-2">
                            <Target className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium text-green-700">{resource.level}</span>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-green-200 text-green-600 hover:bg-green-50"
                        >
                          <LinkIcon className="mr-2 h-4 w-4" />
                          Accéder
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* ANOURA Academy Resources */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-800">
                  <Shield className="mr-2 h-5 w-5" />
                  Ressources ANOURA Academy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
                    <BookOpen className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <h4 className="font-semibold text-blue-800 mb-2">Formations</h4>
                    <p className="text-sm text-gray-600 mb-3">3 niveaux de formation adaptés à l'Afrique</p>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Voir les cours
                    </Button>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
                    <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <h4 className="font-semibold text-blue-800 mb-2">Support</h4>
                    <p className="text-sm text-gray-600 mb-3">Accompagnement personnalisé</p>
                    <Button size="sm" variant="outline" className="border-blue-200 text-blue-600">
                      Nous contacter
                    </Button>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
                    <FileText className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <h4 className="font-semibold text-blue-800 mb-2">Certificats</h4>
                    <p className="text-sm text-gray-600 mb-3">Certification reconnue</p>
                    <Button size="sm" variant="outline" className="border-blue-200 text-blue-600">
                      En savoir plus
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}