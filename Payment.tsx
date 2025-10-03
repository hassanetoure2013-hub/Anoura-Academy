import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import PaymentForm from '@/components/PaymentForm';
import { COURSE_PRICES } from '@/lib/stripe';

export default function Payment() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const courseInfo = COURSE_PRICES[courseId as keyof typeof COURSE_PRICES];

  if (!courseInfo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Formation non trouvée</h1>
          <Button onClick={() => navigate('/courses')}>
            Retour aux formations
          </Button>
        </div>
      </div>
    );
  }

  const handlePaymentSuccess = () => {
    setTimeout(() => {
      navigate('/courses');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Finaliser votre inscription
            </h1>
            <p className="text-gray-600">
              Complétez le formulaire ci-dessous pour vous inscrire à la formation
            </p>
          </div>
        </div>

        <PaymentForm 
          courseId={courseId || ''} 
          onSuccess={handlePaymentSuccess}
        />

        {/* Informations supplémentaires */}
        <div className="max-w-md mx-auto mt-8 space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Que comprend votre formation ?</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Support de cours complet</li>
              <li>• Certificat de formation</li>
              <li>• Accès à la plateforme en ligne</li>
              <li>• Suivi personnalisé</li>
              <li>• Networking avec les participants</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Politique d'annulation</h3>
            <p className="text-sm text-gray-600">
              Annulation gratuite jusqu'à 7 jours avant le début de la formation. 
              Remboursement à 50% entre 7 et 3 jours avant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}