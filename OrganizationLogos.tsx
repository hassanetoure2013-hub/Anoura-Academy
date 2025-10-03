import { Card, CardContent } from '@/components/ui/card';

export default function OrganizationLogos() {
  const organizations = [
    {
      name: "UEMOA",
      fullName: "Union Économique et Monétaire Ouest Africaine",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/UEMOA_logo.svg/200px-UEMOA_logo.svg.png",
      category: "regional"
    },
    {
      name: "CEDEAO",
      fullName: "Communauté Économique des États de l'Afrique de l'Ouest",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/ECOWAS_logo.svg/200px-ECOWAS_logo.svg.png",
      category: "regional"
    },
    {
      name: "CEMAC",
      fullName: "Communauté Économique et Monétaire de l'Afrique Centrale",
      logo: "/api/placeholder/120/80",
      category: "regional"
    },
    {
      name: "ARMDS Mali",
      fullName: "Autorité de Régulation des Marchés Publics et des Délégations de Service Public",
      logo: "/api/placeholder/120/80",
      category: "national"
    },
    {
      name: "ARCOP Sénégal",
      fullName: "Agence de Régulation de la Commande Publique",
      logo: "/api/placeholder/120/80",
      category: "national"
    },
    {
      name: "ARMP Burkina Faso",
      fullName: "Autorité de Régulation des Marchés Publics",
      logo: "/api/placeholder/120/80",
      category: "national"
    },
    {
      name: "ANRMP Guinée",
      fullName: "Agence Nationale de Régulation des Marchés Publics",
      logo: "/api/placeholder/120/80",
      category: "national"
    },
    {
      name: "DNCMP Mauritanie",
      fullName: "Direction Nationale du Contrôle des Marchés Publics",
      logo: "/api/placeholder/120/80",
      category: "national"
    },
    {
      name: "ARMP Tchad",
      fullName: "Autorité de Régulation des Marchés Publics",
      logo: "/api/placeholder/120/80",
      category: "national"
    },
    {
      name: "ARMP Niger",
      fullName: "Autorité de Régulation des Marchés Publics",
      logo: "/api/placeholder/120/80",
      category: "national"
    },
    {
      name: "ANRMP Côte d'Ivoire",
      fullName: "Autorité Nationale de Régulation des Marchés Publics",
      logo: "/api/placeholder/120/80",
      category: "national"
    },
    {
      name: "ARMP Togo",
      fullName: "Autorité de Régulation des Marchés Publics",
      logo: "/api/placeholder/120/80",
      category: "national"
    },
    {
      name: "ARMP Cameroun",
      fullName: "Agence de Régulation des Marchés Publics",
      logo: "/api/placeholder/120/80",
      category: "national"
    },
    {
      name: "ARMP RDC",
      fullName: "Autorité de Régulation des Marchés Publics",
      logo: "/api/placeholder/120/80",
      category: "national"
    },
    {
      name: "DGCMEF Gabon",
      fullName: "Direction Générale du Contrôle des Marchés et des Engagements Financiers",
      logo: "/api/placeholder/120/80",
      category: "national"
    },
    {
      name: "Banque Mondiale",
      fullName: "World Bank Group",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/World_Bank_logo.svg/200px-World_Bank_logo.svg.png",
      category: "international"
    },
    {
      name: "BAD",
      fullName: "Banque Africaine de Développement",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/African_Development_Bank_logo.svg/200px-African_Development_Bank_logo.svg.png",
      category: "international"
    }
  ];

  const getLogosByCategory = (category: string) => {
    return organizations.filter(org => org.category === category);
  };

  return (
    <div className="space-y-8">
      {/* Institutions Régionales */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
          Institutions Régionales Partenaires
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getLogosByCategory('regional').map((org, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 text-center">
                <div className="h-16 flex items-center justify-center mb-3">
                  <img 
                    src={org.logo} 
                    alt={org.name}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="80" viewBox="0 0 120 80">
                          <rect width="120" height="80" fill="#f3f4f6"/>
                          <text x="60" y="40" text-anchor="middle" dy="0.3em" font-family="Arial" font-size="12" fill="#6b7280">
                            ${org.name}
                          </text>
                        </svg>
                      `)}`;
                    }}
                  />
                </div>
                <h4 className="font-semibold text-sm text-gray-900">{org.name}</h4>
                <p className="text-xs text-gray-600 mt-1">{org.fullName}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Autorités Nationales */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
          Autorités Nationales de Régulation
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {getLogosByCategory('national').map((org, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 text-center">
                <div className="h-16 flex items-center justify-center mb-3">
                  <img 
                    src={org.logo} 
                    alt={org.name}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="80" viewBox="0 0 120 80">
                          <rect width="120" height="80" fill="#f3f4f6"/>
                          <text x="60" y="35" text-anchor="middle" dy="0.3em" font-family="Arial" font-size="9" fill="#6b7280">
                            ${org.name}
                          </text>
                          <text x="60" y="50" text-anchor="middle" dy="0.3em" font-family="Arial" font-size="7" fill="#9ca3af">
                            Logo officiel
                          </text>
                        </svg>
                      `)}`;
                    }}
                  />
                </div>
                <h4 className="font-semibold text-xs text-gray-900">{org.name}</h4>
                <p className="text-xs text-gray-600 mt-1">{org.fullName}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Partenaires Internationaux */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
          Partenaires Internationaux
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {getLogosByCategory('international').map((org, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 text-center">
                <div className="h-16 flex items-center justify-center mb-3">
                  <img 
                    src={org.logo} 
                    alt={org.name}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="80" viewBox="0 0 120 80">
                          <rect width="120" height="80" fill="#f3f4f6"/>
                          <text x="60" y="40" text-anchor="middle" dy="0.3em" font-family="Arial" font-size="12" fill="#6b7280">
                            ${org.name}
                          </text>
                        </svg>
                      `)}`;
                    }}
                  />
                </div>
                <h4 className="font-semibold text-sm text-gray-900">{org.name}</h4>
                <p className="text-xs text-gray-600 mt-1">{org.fullName}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}