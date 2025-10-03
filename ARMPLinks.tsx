import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Globe, Building, FileText, Users } from 'lucide-react';

interface ARMPData {
  country: string;
  flag: string;
  organization: string;
  acronym: string;
  website: string;
  description: string;
  status: 'active' | 'inactive';
  type: 'national' | 'regional';
}

const armpData: ARMPData[] = [
  {
    country: "Mali",
    flag: "🇲🇱",
    organization: "Autorité de Régulation des Marchés Publics et des Délégations de Service Public",
    acronym: "ARMDS",
    website: "http://www.armds.gov.ml",
    description: "Régulation des marchés publics au Mali",
    status: "active",
    type: "national"
  },
  {
    country: "Sénégal",
    flag: "🇸🇳",
    organization: "Autorité de Régulation des Marchés Publics",
    acronym: "ARMP",
    website: "https://www.armp.sn",
    description: "Autorité de régulation des marchés publics du Sénégal",
    status: "active",
    type: "national"
  },
  {
    country: "Burkina Faso",
    flag: "🇧🇫",
    organization: "Autorité de Régulation de la Commande Publique",
    acronym: "ARCOP",
    website: "https://www.arcop.bf",
    description: "Régulation de la commande publique au Burkina Faso",
    status: "active",
    type: "national"
  },
  {
    country: "Côte d'Ivoire",
    flag: "🇨🇮",
    organization: "Autorité de Régulation des Marchés Publics",
    acronym: "ARMP-CI",
    website: "https://www.armp.ci",
    description: "Autorité de régulation des marchés publics de Côte d'Ivoire",
    status: "active",
    type: "national"
  },
  {
    country: "Guinée",
    flag: "🇬🇳",
    organization: "Autorité de Régulation des Marchés Publics",
    acronym: "ARMP-GN",
    website: "https://armp.gov.gn",
    description: "Autorité de régulation des marchés publics de Guinée",
    status: "active",
    type: "national"
  },
  {
    country: "Niger",
    flag: "🇳🇪",
    organization: "Autorité de Régulation des Marchés Publics",
    acronym: "ARMP-NE",
    website: "https://www.armp.ne",
    description: "Autorité de régulation des marchés publics du Niger",
    status: "active",
    type: "national"
  },
  {
    country: "Togo",
    flag: "🇹🇬",
    organization: "Autorité de Régulation des Marchés Publics",
    acronym: "ARMP-TG",
    website: "https://www.armp.tg",
    description: "Autorité de régulation des marchés publics du Togo",
    status: "active",
    type: "national"
  },
  {
    country: "Bénin",
    flag: "🇧🇯",
    organization: "Autorité de Régulation des Marchés Publics",
    acronym: "ARMP-BJ",
    website: "https://www.armp.bj",
    description: "Autorité de régulation des marchés publics du Bénin",
    status: "active",
    type: "national"
  },
  {
    country: "Cameroun",
    flag: "🇨🇲",
    organization: "Agence de Régulation des Marchés Publics",
    acronym: "ARMP-CM",
    website: "https://www.armp.cm",
    description: "Agence de régulation des marchés publics du Cameroun",
    status: "active",
    type: "national"
  },
  {
    country: "Gabon",
    flag: "🇬🇦",
    organization: "Autorité de Régulation des Marchés Publics",
    acronym: "ARMP-GA",
    website: "https://www.armp.ga",
    description: "Autorité de régulation des marchés publics du Gabon",
    status: "active",
    type: "national"
  },
  {
    country: "UEMOA",
    flag: "🏛️",
    organization: "Union Économique et Monétaire Ouest Africaine",
    acronym: "UEMOA",
    website: "https://www.uemoa.int",
    description: "Directives régionales sur les marchés publics",
    status: "active",
    type: "regional"
  },
  {
    country: "CEMAC",
    flag: "🏛️",
    organization: "Communauté Économique et Monétaire de l'Afrique Centrale",
    acronym: "CEMAC",
    website: "https://www.cemac.int",
    description: "Réglementation des marchés publics en Afrique Centrale",
    status: "active",
    type: "regional"
  }
];

export default function ARMPLinks() {
  const nationalARMPs = armpData.filter(armp => armp.type === 'national');
  const regionalARMPs = armpData.filter(armp => armp.type === 'regional');

  return (
    <div className="space-y-8">
      {/* Regional Organizations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Globe className="mr-2 h-5 w-5 text-blue-600" />
            Organisations Régionales
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {regionalARMPs.map((armp, index) => (
              <div key={index} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{armp.flag}</span>
                    <div>
                      <h4 className="font-semibold text-blue-800">{armp.acronym}</h4>
                      <Badge className="bg-blue-100 text-blue-800 text-xs">Régional</Badge>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-3">{armp.organization}</p>
                <p className="text-xs text-gray-600 mb-4">{armp.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
                  onClick={() => window.open(armp.website, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visiter le site
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* National ARMPs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Building className="mr-2 h-5 w-5 text-green-600" />
            Autorités Nationales de Régulation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nationalARMPs.map((armp, index) => (
              <div key={index} className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{armp.flag}</span>
                    <div>
                      <h4 className="font-semibold text-green-800">{armp.acronym}</h4>
                      <div className="text-sm font-medium text-gray-700">{armp.country}</div>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 text-xs">National</Badge>
                </div>
                <p className="text-sm text-gray-700 mb-3">{armp.organization}</p>
                <p className="text-xs text-gray-600 mb-4">{armp.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-green-200 text-green-600 hover:bg-green-50"
                  onClick={() => window.open(armp.website, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visiter le site
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Information Note */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <FileText className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">📋 Informations importantes</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Ces liens vous dirigent vers les sites officiels des autorités de régulation</li>
                <li>• Consultez ces sites pour les textes réglementaires actualisés</li>
                <li>• Vérifiez les procédures spécifiques à chaque pays</li>
                <li>• Les formations ANOURA Academy s'appuient sur ces réglementations</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Hook pour utiliser les données ARMP
export function useARMPData() {
  return {
    armpData,
    nationalARMPs: armpData.filter(armp => armp.type === 'national'),
    regionalARMPs: armpData.filter(armp => armp.type === 'regional'),
    getARMPByCountry: (country: string) => armpData.find(armp => armp.country.toLowerCase() === country.toLowerCase()),
    getARMPByAcronym: (acronym: string) => armpData.find(armp => armp.acronym.toLowerCase() === acronym.toLowerCase())
  };
}