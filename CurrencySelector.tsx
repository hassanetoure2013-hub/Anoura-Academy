import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Globe, DollarSign } from 'lucide-react';

export interface Currency {
  code: string;
  symbol: string;
  name: string;
  country: string;
  flag: string;
  rate: number; // Taux de change par rapport à l'Euro
}

export const currencies: Currency[] = [
  {
    code: 'XOF',
    symbol: 'FCFA',
    name: 'Franc CFA (UEMOA)',
    country: 'Mali, Sénégal, Burkina Faso, Côte d\'Ivoire',
    flag: '🇲🇱',
    rate: 655.957 // 1 EUR = 655.957 XOF
  },
  {
    code: 'GNF',
    symbol: 'GNF',
    name: 'Franc Guinéen',
    country: 'Guinée',
    flag: '🇬🇳',
    rate: 8500 // 1 EUR = 8500 GNF (approximatif)
  },
  {
    code: 'EUR',
    symbol: '€',
    name: 'Euro',
    country: 'Europe, International',
    flag: '🇪🇺',
    rate: 1 // Base de référence
  },
  {
    code: 'USD',
    symbol: '$',
    name: 'Dollar US',
    country: 'États-Unis, International',
    flag: '🇺🇸',
    rate: 0.92 // 1 EUR = 0.92 USD (approximatif)
  }
];

interface CurrencySelectorProps {
  selectedCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  className?: string;
}

export default function CurrencySelector({ 
  selectedCurrency, 
  onCurrencyChange, 
  className = "" 
}: CurrencySelectorProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Globe className="h-4 w-4 text-gray-500" />
      <Select 
        value={selectedCurrency.code} 
        onValueChange={(code) => {
          const currency = currencies.find(c => c.code === code);
          if (currency) onCurrencyChange(currency);
        }}
      >
        <SelectTrigger className="w-48">
          <SelectValue>
            <div className="flex items-center space-x-2">
              <span>{selectedCurrency.flag}</span>
              <span className="font-medium">{selectedCurrency.symbol}</span>
              <span className="text-sm text-gray-600">({selectedCurrency.code})</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {currencies.map((currency) => (
            <SelectItem key={currency.code} value={currency.code}>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-2">
                  <span>{currency.flag}</span>
                  <div>
                    <div className="font-medium">{currency.name}</div>
                    <div className="text-xs text-gray-500">{currency.country}</div>
                  </div>
                </div>
                <Badge variant="outline" className="ml-2">
                  {currency.symbol}
                </Badge>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

// Fonction utilitaire pour convertir les prix
export function convertPrice(priceInEur: number, targetCurrency: Currency): string {
  let convertedPrice = Math.round(priceInEur * targetCurrency.rate);
  
  // Ajustement spécial pour arrondir à 20 000 FCFA au lieu de 19 023 FCFA
  if (targetCurrency.code === 'XOF') {
    // Si le prix converti est proche de 19 023, l'arrondir à 20 000
    if (convertedPrice >= 19000 && convertedPrice <= 19100) {
      convertedPrice = 20000;
    }
    // Arrondir les autres prix FCFA aux milliers les plus proches pour plus de clarté
    else if (convertedPrice > 50000) {
      convertedPrice = Math.round(convertedPrice / 1000) * 1000;
    }
  }
  
  switch (targetCurrency.code) {
    case 'XOF':
      return `${convertedPrice.toLocaleString()} FCFA`;
    case 'GNF':
      return `${convertedPrice.toLocaleString()} GNF`;
    case 'EUR':
      return `${convertedPrice} €`;
    case 'USD':
      return `$${convertedPrice}`;
    default:
      return `${convertedPrice} ${targetCurrency.symbol}`;
  }
}

// Fonction pour obtenir la devise par défaut selon le pays/région
export function getDefaultCurrency(): Currency {
  // Détection basique par timezone ou langue du navigateur
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const language = navigator.language;
  
  if (timezone.includes('Africa') || language.includes('fr')) {
    if (timezone.includes('Conakry') || language.includes('gn')) {
      return currencies.find(c => c.code === 'GNF') || currencies[0];
    }
    // Par défaut pour l'Afrique de l'Ouest francophone
    return currencies.find(c => c.code === 'XOF') || currencies[0];
  }
  
  if (language.includes('en')) {
    return currencies.find(c => c.code === 'USD') || currencies[2];
  }
  
  // Par défaut Euro
  return currencies.find(c => c.code === 'EUR') || currencies[2];
}

// Hook personnalisé pour gérer la devise
export function useCurrency() {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(() => {
    // Récupérer la devise sauvegardée ou utiliser la devise par défaut
    const saved = localStorage.getItem('anoura-currency');
    if (saved) {
      const savedCurrency = currencies.find(c => c.code === saved);
      if (savedCurrency) return savedCurrency;
    }
    return getDefaultCurrency();
  });

  const changeCurrency = (currency: Currency) => {
    setSelectedCurrency(currency);
    localStorage.setItem('anoura-currency', currency.code);
  };

  return {
    selectedCurrency,
    changeCurrency,
    convertPrice: (priceInEur: number) => convertPrice(priceInEur, selectedCurrency)
  };
}