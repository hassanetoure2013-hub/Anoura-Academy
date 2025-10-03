import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Globe
} from 'lucide-react';

const SignUp = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    organization: '',
    position: '',
    experience: '',
    interests: [] as string[],
    newsletter: false,
    terms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  const africanCountries = [
    'Bénin', 'Burkina Faso', 'Cameroun', 'Côte d\'Ivoire', 'Gabon', 'Ghana',
    'Guinée', 'Mali', 'Maroc', 'Niger', 'Nigeria', 'Sénégal', 'Tchad', 'Togo', 'Tunisie'
  ];

  const formations = [
    'Marchés publics de base',
    'PPP (Partenariats Public-Privé)',
    'Passation des marchés',
    'Évaluation des offres',
    'Gestion contractuelle',
    'Audit et contrôle',
    'Réglementation UEMOA',
    'Contentieux des marchés'
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'inscription
    setTimeout(() => {
      // Créer un utilisateur simulé
      const newUser = {
        id: Date.now().toString(),
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        country: formData.country,
        organization: formData.organization,
        isAdmin: false
      };

      // Se connecter automatiquement
      login(newUser);
      
      setIsSubmitting(false);
      
      // Rediriger vers l'espace membre avec un cours par défaut
      navigate('/member-area/initiation-marches-publics');
    }, 2000);
  };

  const isStep1Valid = formData.firstName && formData.lastName && formData.email && formData.phone;
  const isStep2Valid = formData.country && formData.organization && formData.position;
  const isStep3Valid = formData.interests.length > 0 && formData.terms;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Rejoignez ANOURA Academy
          </h1>
          <p className="text-xl text-gray-600">
            Commencez votre formation aux marchés publics africains
          </p>
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step >= num ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step > num ? <CheckCircle className="h-5 w-5" /> : num}
                  </div>
                  {num < 3 && (
                    <div className={`w-12 h-1 mx-2 ${
                      step > num ? 'bg-blue-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {step === 1 && <><User className="h-5 w-5" /> Informations personnelles</>}
              {step === 2 && <><Building className="h-5 w-5" /> Informations professionnelles</>}
              {step === 3 && <><GraduationCap className="h-5 w-5" /> Préférences de formation</>}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Étape 1: Informations personnelles */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="Votre prénom"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="votre.email@exemple.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Téléphone *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+225 XX XX XX XX"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!isStep1Valid}
                    className="w-full"
                  >
                    Continuer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              )}

              {/* Étape 2: Informations professionnelles */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <Label htmlFor="country">Pays *</Label>
                    <Select onValueChange={(value) => handleInputChange('country', value)}>
                      <SelectTrigger>
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 mr-2 text-gray-400" />
                          <SelectValue placeholder="Sélectionnez votre pays" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        {africanCountries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="organization">Organisation *</Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        placeholder="Nom de votre organisation"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="position">Poste actuel *</Label>
                    <Input
                      id="position"
                      value={formData.position}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                      placeholder="Votre fonction"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="experience">Expérience en marchés publics</Label>
                    <Select onValueChange={(value) => handleInputChange('experience', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre niveau" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="debutant">Débutant (0-1 an)</SelectItem>
                        <SelectItem value="intermediaire">Intermédiaire (1-5 ans)</SelectItem>
                        <SelectItem value="avance">Avancé (5+ ans)</SelectItem>
                        <SelectItem value="expert">Expert (10+ ans)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="flex-1"
                    >
                      Retour
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!isStep2Valid}
                      className="flex-1"
                    >
                      Continuer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Étape 3: Préférences de formation */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <Label className="text-base font-semibold">
                      Formations qui vous intéressent * (sélectionnez au moins une)
                    </Label>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                      {formations.map((formation) => (
                        <div
                          key={formation}
                          onClick={() => handleInterestToggle(formation)}
                          className={`p-3 border rounded-lg cursor-pointer transition-all ${
                            formData.interests.includes(formation)
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              checked={formData.interests.includes(formation)}
                              readOnly
                            />
                            <span className="text-sm">{formation}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Je souhaite recevoir la newsletter et les actualités d'ANOURA Academy
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.terms}
                        onCheckedChange={(checked) => handleInputChange('terms', checked as boolean)}
                        required
                      />
                      <Label htmlFor="terms" className="text-sm">
                        J'accepte les conditions d'utilisation et la politique de confidentialité *
                      </Label>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(2)}
                      className="flex-1"
                    >
                      Retour
                    </Button>
                    <Button
                      type="submit"
                      disabled={!isStep3Valid || isSubmitting}
                      className="flex-1 bg-green-600 hover:bg-green-700"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Inscription en cours...
                        </>
                      ) : (
                        <>
                          Créer mon compte
                          <CheckCircle className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Avantages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid md:grid-cols-3 gap-4"
        >
          {[
            { icon: '🎓', title: 'Formation certifiante', desc: 'Certificats reconnus' },
            { icon: '🌍', title: 'Expertise africaine', desc: '16+ pays couverts' },
            { icon: '⚡', title: 'Accès immédiat', desc: 'Commencez maintenant' }
          ].map((benefit, index) => (
            <Card key={index} className="text-center p-4">
              <div className="text-2xl mb-2">{benefit.icon}</div>
              <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.desc}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;