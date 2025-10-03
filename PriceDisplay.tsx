import { Badge } from '@/components/ui/badge';
import { Currency, convertPrice } from './CurrencySelector';

interface PriceDisplayProps {
  priceInEur: number;
  currency: Currency;
  originalPriceInEur?: number;
  showCurrency?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function PriceDisplay({
  priceInEur,
  currency,
  originalPriceInEur,
  showCurrency = true,
  size = 'md',
  className = ""
}: PriceDisplayProps) {
  const convertedPrice = convertPrice(priceInEur, currency);
  const originalConvertedPrice = originalPriceInEur ? convertPrice(originalPriceInEur, currency) : null;

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const fontWeightClass = size === 'xl' || size === 'lg' ? 'font-bold' : 'font-semibold';

  return (
    <div className={`flex flex-col items-center space-y-1 ${className}`}>
      <div className="flex items-center space-x-2">
        <span className={`${sizeClasses[size]} ${fontWeightClass} text-primary`}>
          {convertedPrice}
        </span>
        {showCurrency && (
          <Badge variant="outline" className="text-xs">
            {currency.flag} {currency.code}
          </Badge>
        )}
      </div>
      
      {originalConvertedPrice && (
        <div className="text-sm text-gray-500 line-through">
          {originalConvertedPrice}
        </div>
      )}
      
      {currency.code !== 'EUR' && (
        <div className="text-xs text-gray-400">
          ≈ {priceInEur} € {originalPriceInEur && `(${originalPriceInEur} €)`}
        </div>
      )}
    </div>
  );
}

// Composant pour afficher plusieurs devises côte à côte
interface MultiCurrencyDisplayProps {
  priceInEur: number;
  currencies: Currency[];
  className?: string;
}

export function MultiCurrencyDisplay({ 
  priceInEur, 
  currencies, 
  className = "" 
}: MultiCurrencyDisplayProps) {
  return (
    <div className={`grid grid-cols-2 gap-2 ${className}`}>
      {currencies.map((currency) => (
        <div key={currency.code} className="text-center p-2 bg-gray-50 rounded-lg">
          <div className="text-sm font-medium">
            {convertPrice(priceInEur, currency)}
          </div>
          <div className="text-xs text-gray-500 flex items-center justify-center">
            <span className="mr-1">{currency.flag}</span>
            {currency.code}
          </div>
        </div>
      ))}
    </div>
  );
}