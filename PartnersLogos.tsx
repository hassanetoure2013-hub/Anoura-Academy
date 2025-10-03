import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Partner {
  name: string;
  logo: string;
  category: 'institution' | 'regulation' | 'partner' | 'payment';
  country?: string;
  description?: string;
}

interface PartnersLogosProps {
  title?: string;
  showTitle?: boolean;
  category?: 'all' | 'institution' | 'regulation' | 'partner' | 'payment';
  layout?: 'grid' | 'horizontal';
  size?: 'sm' | 'md' | 'lg';
}

export default function PartnersLogos({ 
  title = "Nos partenaires et institutions",
  showTitle = true,
  category = 'all',
  layout = 'grid',
  size = 'md'
}: PartnersLogosProps) {
  
  const partners: Partner[] = [
    // Institutions UEMOA
    {
      name: "UEMOA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/UEMOA_logo.svg/200px-UEMOA_logo.svg.png",
      category: "institution",
      description: "Union Économique et Monétaire Ouest Africaine"
    },
    {
      name: "CEDEAO",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/ECOWAS_logo.svg/200px-ECOWAS_logo.svg.png",
      category: "institution",
      description: "Communauté Économique des États de l'Afrique de l'Ouest"
    },
    {
      name: "CEMAC",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/CEMAC_logo.svg/200px-CEMAC_logo.svg.png",
      category: "institution",
      description: "Communauté Économique et Monétaire de l'Afrique Centrale"
    },
    
    // Organes de régulation
    {
      name: "ARMDS Mali",
      logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMDA2NjMzIi8+Cjx0ZXh0IHg9IjUwIiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QVJNRFM8L3RleHQ+Cjx0ZXh0IHg9IjUwIiB5PSI2NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TUFMSSA8L3RleHQ+Cjwvc3ZnPgo=",
      category: "regulation",
      country: "Mali",
      description: "Autorité de Régulation des Marchés publics et des Délégations de Service public"
    },
    {
      name: "ARCOP Sénégal",
      logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMDA4MDAwIi8+Cjx0ZXh0IHg9IjUwIiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QVJDT1A8L3RleHQ+Cjx0ZXh0IHg9IjUwIiB5PSI2NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U0VORUdBTDwvdGV4dD4KPC9zdmc+Cg==",
      category: "regulation",
      country: "Sénégal",
      description: "Autorité de Régulation de la Commande Publique"
    },
    {
      name: "ARMP Guinée",
      logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjQ0UxMTI2Ii8+Cjx0ZXh0IHg9IjUwIiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QVJNUDwvdGV4dD4KPHRleHQgeD0iNTAiIHk9IjY1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5HVUlORUU8L3RleHQ+Cjwvc3ZnPgo=",
      category: "regulation",
      country: "Guinée",
      description: "Autorité de Régulation des Marchés Publics"
    },
    {
      name: "ARMP Burkina Faso",
      logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRkZENzAwIi8+Cjx0ZXh0IHg9IjUwIiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QVJNUDwvdGV4dD4KPHRleHQgeD0iNTAiIHk9IjY1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iOCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJVUktJTkE8L3RleHQ+Cjwvc3ZnPgo=",
      category: "regulation",
      country: "Burkina Faso",
      description: "Autorité de Régulation des Marchés Publics"
    },
    
    // Partenaires techniques
    {
      name: "Banque Mondiale",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/World_Bank_logo.svg/200px-World_Bank_logo.svg.png",
      category: "partner",
      description: "Partenaire technique et financier"
    },
    {
      name: "BAD",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/African_Development_Bank_logo.svg/200px-African_Development_Bank_logo.svg.png",
      category: "partner",
      description: "Banque Africaine de Développement"
    },
    {
      name: "GIZ",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GIZ_logo.svg/200px-GIZ_logo.svg.png",
      category: "partner",
      description: "Coopération technique allemande"
    },
    
    // Partenaires paiement
    {
      name: "Orange Money",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/200px-Orange_logo.svg.png",
      category: "payment",
      description: "Solution de paiement mobile"
    },
    {
      name: "Wave",
      logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMDBCQ0Y0Ii8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPldhdmU8L3RleHQ+Cjwvc3ZnPgo=",
      category: "payment",
      description: "Paiement mobile Sénégal"
    },
    {
      name: "MTN Money",
      logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRkZEMTAwIi8+Cjx0ZXh0IHg9IjUwIiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1UTjwvdGV4dD4KPHRleHQgeD0iNTAiIHk9IjY1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Nb25leTwvdGV4dD4KPC9zdmc+Cg==",
      category: "payment",
      description: "Paiement mobile Guinée"
    }
  ];

  const filteredPartners = category === 'all' ? partners : partners.filter(p => p.category === category);
  
  const sizeClasses = {
    sm: 'h-12 w-12',
    md: 'h-16 w-16',
    lg: 'h-20 w-20'
  };

  const gridCols = {
    sm: 'grid-cols-4 md:grid-cols-6 lg:grid-cols-8',
    md: 'grid-cols-3 md:grid-cols-4 lg:grid-cols-6',
    lg: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
  };

  if (layout === 'horizontal') {
    return (
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {showTitle && (
            <h3 className="text-center text-lg font-semibold text-gray-900 mb-8">{title}</h3>
          )}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70 hover:opacity-100 transition-opacity">
            {filteredPartners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center group">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`${sizeClasses[size]} object-contain grayscale group-hover:grayscale-0 transition-all duration-300`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500 text-center">{partner.name}</span>
                </div>
                <span className="text-xs text-gray-600 mt-2 text-center max-w-20">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card>
      {showTitle && (
        <CardHeader>
          <CardTitle className="text-center">{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>
        <div className={`grid ${gridCols[size]} gap-6`}>
          {filteredPartners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative mb-3">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`${sizeClasses[size]} object-contain mx-auto grayscale group-hover:grayscale-0 transition-all duration-300`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className={`hidden ${sizeClasses[size]} bg-gray-200 rounded-lg flex items-center justify-center mx-auto`}>
                  <span className="text-xs text-gray-500 text-center px-2">{partner.name}</span>
                </div>
                {partner.country && (
                  <Badge variant="outline" className="absolute -top-2 -right-2 text-xs">
                    {partner.country}
                  </Badge>
                )}
              </div>
              <h4 className="font-medium text-sm text-gray-900 mb-1">{partner.name}</h4>
              {partner.description && (
                <p className="text-xs text-gray-600 leading-tight">{partner.description}</p>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}