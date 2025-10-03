import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Calendar, 
  CheckCircle, 
  Download, 
  ExternalLink,
  Scale,
  BookOpen,
  AlertCircle
} from 'lucide-react';
import { legalTexts, LegalText } from '@/data/legalTexts';

interface LegalTextsSectionProps {
  showAll?: boolean;
  countryFilter?: string;
  maxItems?: number;
}

export default function LegalTextsSection({ 
  showAll = false, 
  countryFilter,
  maxItems = 6 
}: LegalTextsSectionProps) {
  
  let filteredTexts = legalTexts.filter(text => text.status === 'current');
  
  if (countryFilter) {
    filteredTexts = filteredTexts.filter(text => 
      text.countryCode === countryFilter || text.country.toLowerCase().includes(countryFilter.toLowerCase())
    );
  }
  
  if (!showAll && maxItems) {
    filteredTexts = filteredTexts.slice(0, maxItems);
  }

  const getTypeIcon = (type: LegalText['type']) => {
    switch (type) {
      case 'code': return <Scale className="h-4 w-4" />;
      case 'law': return <FileText className="h-4 w-4" />;
      case 'decree': return <BookOpen className="h-4 w-4" />;
      case 'regulation': return <AlertCircle className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: LegalText['type']) => {
    switch (type) {
      case 'code': return 'bg-emerald-100 text-emerald-800';
      case 'law': return 'bg-blue-100 text-blue-800';
      case 'decree': return 'bg-purple-100 text-purple-800';
      case 'regulation': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          📚 Textes Juridiques en Vigueur
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Référentiels légaux actualisés des marchés publics par pays - 
          Tous les textes présentés sont les versions en vigueur à ce jour
        </p>
        <div className="mt-4 flex justify-center">
          <Badge className="bg-green-100 text-green-800 px-4 py-2">
            <CheckCircle className="h-4 w-4 mr-2" />
            Mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTexts.map((text) => (
          <Card key={text.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-emerald-600">
                      {text.countryCode}
                    </span>
                  </div>
                  <Badge className={`${getTypeColor(text.type)} flex items-center space-x-1`}>
                    {getTypeIcon(text.type)}
                    <span className="capitalize">{text.type}</span>
                  </Badge>
                </div>
                <Badge className="bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  En vigueur
                </Badge>
              </div>
              
              <CardTitle className="text-lg leading-tight">
                {text.title}
              </CardTitle>
              
              <div className="flex items-center text-sm text-gray-600 space-x-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(text.effectiveDate)}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Référence officielle</h4>
                <p className="text-sm text-gray-600 font-mono bg-gray-50 p-2 rounded">
                  {text.officialReference}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Résumé</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {text.summary}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Dispositions clés</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {text.keyProvisions.slice(0, 3).map((provision, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-3 w-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{provision}</span>
                    </li>
                  ))}
                  {text.keyProvisions.length > 3 && (
                    <li className="text-xs text-gray-500 italic">
                      +{text.keyProvisions.length - 3} autres dispositions...
                    </li>
                  )}
                </ul>
              </div>

              <div className="flex space-x-2 pt-4 border-t">
                {text.downloadUrl && (
                  <Button size="sm" variant="outline" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger
                  </Button>
                )}
                <Button size="sm" variant="outline" className="flex-1">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Consulter
                </Button>
              </div>

              {text.supersedes && text.supersedes.length > 0 && (
                <div className="pt-2 border-t">
                  <p className="text-xs text-gray-500">
                    <AlertCircle className="h-3 w-3 inline mr-1" />
                    Remplace les textes antérieurs
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {!showAll && filteredTexts.length >= maxItems && (
        <div className="text-center">
          <Button variant="outline" size="lg">
            <FileText className="h-5 w-5 mr-2" />
            Voir tous les textes juridiques ({legalTexts.filter(t => t.status === 'current').length})
          </Button>
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">
              Note importante sur la validité des textes
            </h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              Tous les textes présentés sont vérifiés et correspondent aux versions actuellement en vigueur. 
              Cependant, nous recommandons de consulter les sources officielles pour les dernières mises à jour. 
              ANOURA Academy met à jour cette base de données régulièrement pour garantir la conformité de nos formations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}