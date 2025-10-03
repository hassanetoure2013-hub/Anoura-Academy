import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { formatPrice, COURSE_PRICES } from '@/lib/stripe';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  participants: string;
  level: string;
  features: string[];
  highlight?: boolean;
}

export default function CourseCard({
  id,
  title,
  description,
  duration,
  participants,
  level,
  features,
  highlight = false
}: CourseCardProps) {
  const navigate = useNavigate();
  
  const coursePrice = COURSE_PRICES[id as keyof typeof COURSE_PRICES];
  const price = coursePrice ? formatPrice(coursePrice.price, coursePrice.currency) : 'Sur devis';

  const handleEnroll = () => {
    navigate(`/payment/${id}`);
  };

  const handleLearnMore = () => {
    if (id === 'initiation-marches-publics') {
      navigate('/course-initiation');
    } else {
      navigate('/courses');
    }
  };

  return (
    <Card className={`h-full flex flex-col ${highlight ? 'ring-2 ring-emerald-500 shadow-lg' : ''}`}>
      {highlight && (
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center py-2 text-sm font-semibold">
          Formation Populaire
        </div>
      )}
      
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant={level === 'Débutant' ? 'secondary' : 'default'}>
            {level}
          </Badge>
          <div className="text-right">
            <div className="text-2xl font-bold text-emerald-600">{price}</div>
            <div className="text-sm text-gray-500">par participant</div>
          </div>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-gray-600">{description}</p>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="h-4 w-4" />
            <span>{participants}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Award className="h-4 w-4" />
            <span>Certificat inclus</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2">Ce que vous apprendrez :</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto space-y-2">
          <Button 
            onClick={handleEnroll}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
          >
            <CreditCard className="h-4 w-4 mr-2" />
            S'inscrire maintenant
          </Button>
          <Button 
            variant="outline" 
            onClick={handleLearnMore}
            className="w-full"
          >
            En savoir plus
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}