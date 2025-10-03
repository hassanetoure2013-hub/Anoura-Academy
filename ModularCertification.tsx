import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Award, 
  CheckCircle, 
  Clock, 
  Star, 
  ArrowRight,
  Download,
  Shield,
  Target,
  BookOpen,
  Users,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ModularCertificationProps {
  completedModules: number[];
  totalModules: number;
  level: string;
  courseId: string;
}

export default function ModularCertification({ 
  completedModules, 
  totalModules, 
  level, 
  courseId 
}: ModularCertificationProps) {
  const completionRate = (completedModules.length / totalModules) * 100;
  
  const certificationOptions = [
    {
      type: 'Attestation Modulaire',
      description: 'Certificat pour chaque module terminé',
      requirements: 'Réussir 1 module',
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      available: completedModules.length >= 1,
      benefits: [
        'Reconnaissance officielle du module',
        'Validité permanente',
        'Utilisable pour formation continue',
        'Preuve de compétence spécialisée'
      ]
    },
    {
      type: 'Certificat Partiel',
      description: 'Certificat pour 50% ou plus du niveau',
      requirements: `Réussir ${Math.ceil(totalModules / 2)} modules sur ${totalModules}`,
      icon: Shield,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      available: completedModules.length >= Math.ceil(totalModules / 2),
      benefits: [
        'Reconnaissance partielle du niveau',
        'Crédit pour formation ultérieure',
        'Valorisation professionnelle',
        'Base pour niveau supérieur'
      ]
    },
    {
      type: 'Certificat Complet',
      description: 'Certificat officiel du niveau',
      requirements: `Réussir tous les ${totalModules} modules`,
      icon: Award,
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      available: completedModules.length === totalModules,
      benefits: [
        'Certification complète du niveau',
        'Reconnaissance internationale',
        'Accès au niveau supérieur',
        'Valeur maximale sur le marché'
      ]
    }
  ];

  const upgradeOptions = [
    {
      title: 'Compléter le niveau actuel',
      description: `Il vous reste ${totalModules - completedModules.length} modules à terminer`,
      action: 'Continuer la formation',
      discount: completedModules.length > 0 ? 15 : 0,
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Passer au niveau supérieur',
      description: 'Commencer le niveau suivant avec vos acquis',
      action: 'Voir le niveau supérieur',
      discount: completedModules.length >= Math.ceil(totalModules / 2) ? 10 : 0,
      icon: ArrowRight,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      title: 'Formation sur mesure',
      description: 'Programme personnalisé selon vos besoins',
      action: 'Demander un devis',
      discount: 0,
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Progression actuelle */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="mr-2 h-5 w-5 text-blue-600" />
            Votre progression - Niveau {level}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Modules terminés</span>
                <span>{completedModules.length}/{totalModules} ({Math.round(completionRate)}%)</span>
              </div>
              <Progress value={completionRate} className="h-3" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{completedModules.length}</div>
                <div className="text-sm text-blue-700">Modules réussis</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">{totalModules - completedModules.length}</div>
                <div className="text-sm text-orange-700">Modules restants</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{Math.round(completionRate)}%</div>
                <div className="text-sm text-green-700">Progression</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Options de certification */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="mr-2 h-5 w-5 text-purple-600" />
            Options de certification disponibles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certificationOptions.map((option, index) => (
              <Card key={index} className={`${option.borderColor} border-2 ${option.available ? '' : 'opacity-60'}`}>
                <CardContent className={`p-4 ${option.bgColor}`}>
                  <div className="text-center space-y-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center mx-auto`}>
                      <option.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{option.type}</h4>
                      <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                      <Badge variant={option.available ? "default" : "secondary"} className="text-xs">
                        {option.requirements}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      {option.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start text-xs">
                          <CheckCircle className="h-3 w-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      size="sm" 
                      disabled={!option.available}
                      className={option.available ? `bg-gradient-to-r ${option.color} text-white` : ''}
                    >
                      {option.available ? (
                        <>
                          <Download className="mr-1 h-3 w-3" />
                          Obtenir
                        </>
                      ) : (
                        <>
                          <Clock className="mr-1 h-3 w-3" />
                          Non disponible
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Options d'amélioration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <ArrowRight className="mr-2 h-5 w-5 text-emerald-600" />
            Prochaines étapes recommandées
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upgradeOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className={`p-4 ${option.bgColor}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${option.bgColor}`}>
                        <option.icon className={`h-5 w-5 ${option.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{option.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                        {option.discount > 0 && (
                          <Badge className="bg-red-100 text-red-800 text-xs">
                            -{option.discount}% de réduction
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      {option.action}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Valeur des modules individuels */}
      <Card className="border-yellow-200 bg-yellow-50">
        <CardHeader>
          <CardTitle className="flex items-center text-yellow-800">
            <AlertTriangle className="mr-2 h-5 w-5" />
            Important : Valeur de vos modules
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-yellow-700">
            <p>
              <strong>Chaque module terminé a une valeur :</strong>
            </p>
            <ul className="space-y-1 ml-4">
              <li>• <strong>Attestation individuelle</strong> : Preuve de compétence spécialisée</li>
              <li>• <strong>Crédit de formation</strong> : Réduction sur les modules restants</li>
              <li>• <strong>Reconnaissance professionnelle</strong> : Valorisation sur le CV</li>
              <li>• <strong>Progression flexible</strong> : Continuez à votre rythme</li>
            </ul>
            <div className="mt-4 p-3 bg-white rounded-lg border border-yellow-200">
              <p className="font-medium text-yellow-800">
                💡 Conseil : Même un seul module terminé vous donne droit à une attestation officielle 
                et peut être valorisé dans votre parcours professionnel.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}