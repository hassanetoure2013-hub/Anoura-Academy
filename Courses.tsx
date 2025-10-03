import Navbar from '@/components/Navbar';
import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Clock, Award, Phone, Mail } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      id: 'initiation-marches-publics',
      title: 'Initiation aux Marchés Publics',
      description: 'Formation complète pour débuter dans les marchés publics africains',
      duration: '5 jours (40h)',
      participants: '15-20 participants',
      level: 'Débutant',
      features: [
        'Cadre juridique des marchés publics',
        'Procédures de passation',
        'Rédaction des dossiers d\'appel d\'offres',
        'Évaluation des offres',
        'Gestion des contrats'
      ],
      highlight: true
    },
    {
      id: 'perfectionnement-marches-publics',
      title: 'Perfectionnement aux Marchés Publics',
      description: 'Formation avancée pour les professionnels expérimentés',
      duration: '7 jours (56h)',
      participants: '10-15 participants',
      level: 'Avancé',
      features: [
        'Marchés complexes et spécialisés',
        'Négociation et contentieux',
        'Audit et contrôle des marchés',
        'Marchés internationaux',
        'Innovations et digitalisation'
      ]
    },
    {
      id: 'module-1',
      title: 'Module 1 - Bases des Marchés Publics',
      description: 'Module individuel pour comprendre les fondamentaux',
      duration: '2 jours (16h)',
      participants: '20-25 participants',
      level: 'Débutant',
      features: [
        'Introduction aux marchés publics',
        'Acteurs et institutions',
        'Principes fondamentaux',
        'Types de marchés',
        'Certificat partiel'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nos Formations
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Développez votre expertise en marchés publics avec nos formations certifiantes
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <CheckCircle className="h-4 w-4 mr-1" />
              Certification incluse
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Users className="h-4 w-4 mr-1" />
              Groupes restreints
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Award className="h-4 w-4 mr-1" />
              Formateurs experts
            </Badge>
          </div>
        </div>
      </section>

      {/* Formations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choisissez votre formation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nos programmes sont conçus pour répondre aux besoins spécifiques des professionnels 
              des marchés publics en Afrique de l'Ouest
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>

          {/* Avantages */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Pourquoi choisir ANOURA Academy ?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h4 className="font-semibold mb-2">Formateurs Experts</h4>
                <p className="text-sm text-gray-600">
                  Professionnels avec plus de 15 ans d'expérience
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <h4 className="font-semibold mb-2">Certification Reconnue</h4>
                <p className="text-sm text-gray-600">
                  Certificats reconnus dans 16+ pays africains
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-emerald-600" />
                </div>
                <h4 className="font-semibold mb-2">Suivi Personnalisé</h4>
                <p className="text-sm text-gray-600">
                  Accompagnement pendant et après la formation
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <h4 className="font-semibold mb-2">Méthode Pratique</h4>
                <p className="text-sm text-gray-600">
                  Cas d'études réels et exercices pratiques
                </p>
              </div>
            </div>
          </div>

          {/* Contact pour formations sur mesure */}
          <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Formation sur mesure ?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Nous proposons également des formations personnalisées pour vos équipes, 
                adaptées à vos besoins spécifiques et à votre secteur d'activité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Phone className="h-4 w-4 mr-2" />
                  +225 XX XX XX XX XX
                </Button>
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  <Mail className="h-4 w-4 mr-2" />
                  contact@anoura-academy.com
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}