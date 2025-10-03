import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  FileText, 
  Calendar, 
  CheckCircle, 
  Download, 
  ExternalLink,
  Scale,
  BookOpen,
  AlertCircle,
  Globe,
  Users,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { legalTexts, LegalText, getCurrentTexts } from '@/data/legalTexts';
import LegalTextsSection from '@/components/LegalTextsSection';

export default function LegalTexts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');

  const currentTexts = getCurrentTexts();
  const countries = Array.from(new Set(currentTexts.map(text => text.country))).sort();
  const types = Array.from(new Set(currentTexts.map(text => text.type)));

  const filteredTexts = currentTexts.filter(text => {
    const matchesSearch = text.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         text.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         text.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = !selectedCountry || text.country === selectedCountry;
    const matchesType = !selectedType || text.type === selectedType;
    
    return matchesSearch && matchesCountry && matchesType;
  });

  const stats = [
    { 
      number: currentTexts.length.toString(), 
      label: 'Textes en vigueur', 
      icon: FileText,
      color: 'text-emerald-600'
    },
    { 
      number: countries.length.toString(), 
      label: 'Pays couverts', 
      icon: Globe,
      color: 'text-blue-600'
    },
    { 
      number: '2024', 
      label: 'Dernière vérification', 
      icon: CheckCircle,
      color: 'text-green-600'
    },
    { 
      number: '100%', 
      label: 'Textes actualisés', 
      icon: TrendingUp,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            📚 Base de Données Juridique
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Textes Juridiques des
            <span className="block text-3xl md:text-4xl bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Marchés Publics en Afrique
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Référentiel complet et actualisé des textes réglementaires en vigueur 
            dans 16+ pays africains - Vérifié et mis à jour régulièrement
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <stat.icon className={`h-10 w-10 mx-auto mb-3 ${stat.color}`} />
                  <div className={`text-2xl font-bold mb-1 ${stat.color}`}>{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Search and Filters */}
        <section className="mb-12">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="mr-3 h-6 w-6 text-blue-600" />
                Rechercher et Filtrer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Recherche
                  </label>
                  <Input
                    placeholder="Rechercher par pays, titre ou contenu..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pays
                  </label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Tous les pays</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type de texte
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Tous les types</option>
                    {types.map(type => (
                      <option key={type} value={type} className="capitalize">{type}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  {filteredTexts.length} texte(s) trouvé(s)
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCountry('');
                    setSelectedType('');
                  }}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Réinitialiser
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Legal Texts Grid */}
        <section className="mb-16">
          {filteredTexts.length > 0 ? (
            <LegalTextsSection showAll={true} />
          ) : (
            <Card className="border-0 shadow-lg">
              <CardContent className="p-12 text-center">
                <AlertCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Aucun texte trouvé
                </h3>
                <p className="text-gray-600 mb-6">
                  Essayez de modifier vos critères de recherche ou de supprimer les filtres.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCountry('');
                    setSelectedType('');
                  }}
                >
                  Voir tous les textes
                </Button>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Information Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <CheckCircle className="mr-3 h-6 w-6 text-green-600" />
                  Garantie d'Actualité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Tous les textes présentés dans cette base de données sont vérifiés 
                  et correspondent aux versions actuellement en vigueur dans chaque pays.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Vérification mensuelle des mises à jour</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Sources officielles consultées</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Textes abrogés clairement identifiés</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Users className="mr-3 h-6 w-6 text-blue-600" />
                  Formations Adaptées
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nos programmes de formation ANOURA Academy sont constamment 
                  mis à jour pour refléter ces textes juridiques en vigueur.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-start space-x-2">
                    <BookOpen className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Contenu pédagogique actualisé</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Scale className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Cas pratiques basés sur les textes actuels</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FileText className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Références juridiques précises</span>
                  </li>
                </ul>
                <Link to="/courses">
                  <Button className="w-full">
                    Découvrir nos formations
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6">
                Besoin d'une Formation Personnalisée ?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Nos experts peuvent adapter nos formations aux spécificités 
                juridiques de votre pays ou organisation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4">
                    <Users className="mr-2 h-5 w-5" />
                    Nous contacter
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4">
                    Voir nos programmes
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}