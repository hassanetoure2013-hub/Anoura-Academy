import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CreditCard, Shield, CheckCircle } from 'lucide-react';
import { COURSE_PRICES, formatPrice } from '@/lib/stripe';

interface PaymentFormProps {
  courseId: string;
  onSuccess?: () => void;
}

export default function PaymentForm({ courseId, onSuccess }: PaymentFormProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    phone: '',
    organization: '',
    country: '',
    paymentMethod: 'card'
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const courseInfo = COURSE_PRICES[courseId as keyof typeof COURSE_PRICES];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulation du processus de paiement
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Redirection vers l'espace membre après paiement réussi
      setTimeout(() => {
        navigate(`/member/${courseId}`);
      }, 2000);
      
      onSuccess?.();
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (success) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="pt-6 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Paiement Réussi !
          </h3>
          <p className="text-gray-600 mb-4">
            Votre inscription à la formation "{courseInfo?.name}" a été confirmée.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Redirection vers votre espace membre...
          </p>
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-500 mx-auto"></div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Inscription & Paiement
        </CardTitle>
        <div className="bg-blue-50 p-3 rounded-lg">
          <h4 className="font-semibold text-blue-900">{courseInfo?.name}</h4>
          <p className="text-sm text-blue-700">{courseInfo?.description}</p>
          <p className="text-lg font-bold text-blue-900 mt-2">
            {formatPrice(courseInfo?.price || 0, courseInfo?.currency)}
          </p>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Informations personnelles */}
          <div className="space-y-4">
            <h5 className="font-semibold text-gray-900">Informations personnelles</h5>
            
            <div>
              <Label htmlFor="fullName">Nom complet *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                placeholder="Votre nom complet"
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="votre@email.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Téléphone *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+225 XX XX XX XX XX"
                required
              />
            </div>

            <div>
              <Label htmlFor="organization">Organisation</Label>
              <Input
                id="organization"
                value={formData.organization}
                onChange={(e) => handleInputChange('organization', e.target.value)}
                placeholder="Nom de votre organisation"
              />
            </div>

            <div>
              <Label htmlFor="country">Pays *</Label>
              <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre pays" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ci">Côte d'Ivoire</SelectItem>
                  <SelectItem value="sn">Sénégal</SelectItem>
                  <SelectItem value="ml">Mali</SelectItem>
                  <SelectItem value="bf">Burkina Faso</SelectItem>
                  <SelectItem value="ne">Niger</SelectItem>
                  <SelectItem value="tg">Togo</SelectItem>
                  <SelectItem value="bj">Bénin</SelectItem>
                  <SelectItem value="gn">Guinée</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Méthode de paiement */}
          <div className="space-y-4">
            <h5 className="font-semibold text-gray-900">Méthode de paiement</h5>
            
            <Select value={formData.paymentMethod} onValueChange={(value) => handleInputChange('paymentMethod', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="card">Carte bancaire</SelectItem>
                <SelectItem value="mobile">Paiement mobile (Orange Money, MTN, Moov)</SelectItem>
                <SelectItem value="bank">Virement bancaire</SelectItem>
              </SelectContent>
            </Select>

            {formData.paymentMethod === 'card' && (
              <div className="space-y-3">
                <Input placeholder="Numéro de carte" />
                <div className="grid grid-cols-2 gap-3">
                  <Input placeholder="MM/AA" />
                  <Input placeholder="CVC" />
                </div>
              </div>
            )}

            {formData.paymentMethod === 'mobile' && (
              <Alert>
                <AlertDescription>
                  Après validation, vous recevrez un SMS avec les instructions de paiement mobile.
                </AlertDescription>
              </Alert>
            )}

            {formData.paymentMethod === 'bank' && (
              <Alert>
                <AlertDescription>
                  Les coordonnées bancaires vous seront envoyées par email après validation du formulaire.
                </AlertDescription>
              </Alert>
            )}
          </div>

          {/* Sécurité */}
          <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
            <Shield className="h-4 w-4" />
            <span>Paiement sécurisé SSL. Vos données sont protégées.</span>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
            disabled={loading}
          >
            {loading ? 'Traitement...' : `Payer ${formatPrice(courseInfo?.price || 0, courseInfo?.currency)}`}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}