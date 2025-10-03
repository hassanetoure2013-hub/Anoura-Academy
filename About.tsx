import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Users, 
  Award, 
  Globe, 
  BookOpen, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Heart,
  Zap,
  TrendingUp,
  Star,
  Clock,
  FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';
import OrganizationLogos from '@/components/OrganizationLogos';
import LegalTextsSection from '@/components/LegalTextsSection';

export default function About() {
  const stats = [
    { number: '755+', label: 'Participants formés', icon: Users },
    { number: '90h', label: 'Heures de formation', icon: Clock },
    { number: '16+', label: 'Pays couverts', icon: Globe },
    { number: '98%', label: 'Taux de réussite', icon: Award }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans tous nos programmes de formation',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Shield,
      title: 'Intégrité',
      description: 'Nous promouvons la transparence et l\'éthique dans les marchés publics',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Heart,
      title: 'Engagement',
      description: 'Nous nous engageons pour le développement de l\'Afrique',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Nous innovons constamment pour améliorer nos méthodes pédagogiques',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const team = [
    {
      name: 'Daoulata Abdoulaye TOURE',
      role: 'Directrice Générale',
      expertise: 'Leadership et stratégie organisationnelle',
      experience: '20+ ans d\'expérience',
      image: '/api/placeholder/150/150',
      featured: true
    },
    {
      name: 'Dr. Amadou Diallo',
      role: 'Directeur Académique',
      expertise: 'Expert en marchés publics UEMOA',
      experience: '15+ ans d\'expérience',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Mme Fatou Sow',
      role: 'Responsable Pédagogique',
      expertise: 'Spécialiste en formation digitale',
      experience: '12+ ans d\'expérience',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'M. Ibrahim Traoré',
      role: 'Expert Technique',
      expertise: 'Consultant senior en PPP',
      experience: '18+ ans d\'expérience',
      image: '/api/placeholder/150/150'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            À propos d'ANOURA Academy
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Référence panafricaine en formation
            <span className="block text-3xl md:text-4xl bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              spécialisée en marchés publics
            </span>
          </h1>
          <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            ANOURA Academy forme les professionnels aux meilleures pratiques des marchés publics 
            et des Partenariats Public-Privé (PPP) adaptées aux réalités de l'Afrique.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-emerald-600" />
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Target className="mr-3 h-6 w-6 text-emerald-600" />
                  Notre Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-6">
                  ANOURA Academy a pour mission de renforcer les capacités des acteurs des marchés publics 
                  en Afrique à travers des formations de qualité, adaptées aux réalités locales 
                  et aux standards internationaux.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Former les professionnels aux meilleures pratiques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Promouvoir la transparence et l'intégrité</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Contribuer au développement économique continental</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <TrendingUp className="mr-3 h-6 w-6 text-blue-600" />
                  Notre Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Devenir la référence panafricaine en matière de formation spécialisée dans les marchés publics 
                  et les Partenariats Public-Privé, en contribuant à l'amélioration de la gouvernance 
                  et à l'efficacité de la commande publique dans tous les pays africains.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700 font-medium">Excellence pédagogique</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-700 font-medium">Rayonnement continental</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-purple-500 mr-3" />
                    <span className="text-gray-700 font-medium">Reconnaissance internationale</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre action et notre engagement envers l'excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Équipe de Direction</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des experts reconnus au service de votre formation
            </p>
          </div>
          
          {/* Directrice Générale - Section mise en avant */}
          <div className="mb-12">
            <Card className="border-2 border-emerald-200 shadow-xl hover:shadow-2xl transition-shadow bg-gradient-to-r from-emerald-50 to-teal-50">
              <CardContent className="p-12">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                  <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
                    <img 
                      src="/api/placeholder/200/200" 
                      alt="Daoulata Abdoulaye TOURE"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `data:image/svg+xml;base64,${btoa(`
                          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
                            <rect width="200" height="200" fill="#10b981"/>
                            <circle cx="100" cy="80" r="35" fill="white"/>
                            <ellipse cx="100" cy="160" rx="50" ry="35" fill="white"/>
                            <text x="100" y="190" text-anchor="middle" font-family="Arial" font-size="12" fill="white">DG</text>
                          </svg>
                        `)}`;
                      }}
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-4">
                      <Badge className="mb-2 bg-emerald-600 text-white">Direction Générale</Badge>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">Daoulata Abdoulaye TOURE</h3>
                      <p className="text-xl text-emerald-600 font-semibold mb-3">Directrice Générale</p>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Forte de plus de 20 ans d'expérience en leadership et stratégie organisationnelle, 
                      Daoulata Abdoulaye TOURE dirige ANOURA Academy avec une vision claire : 
                      faire de notre institution la référence panafricaine en formation spécialisée 
                      en marchés publics et PPP.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      <Badge variant="outline" className="text-emerald-700 border-emerald-300">
                        Leadership Stratégique
                      </Badge>
                      <Badge variant="outline" className="text-emerald-700 border-emerald-300">
                        Gouvernance
                      </Badge>
                      <Badge variant="outline" className="text-emerald-700 border-emerald-300">
                        20+ ans d'expérience
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Équipe de direction */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.filter(member => !member.featured).map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `data:image/svg+xml;base64,${btoa(`
                          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150">
                            <rect width="150" height="150" fill="#e5e7eb"/>
                            <circle cx="75" cy="60" r="25" fill="#9ca3af"/>
                            <ellipse cx="75" cy="120" rx="35" ry="25" fill="#9ca3af"/>
                          </svg>
                        `)}`;
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-2">{member.expertise}</p>
                  <Badge variant="outline" className="text-xs">{member.experience}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Legal Texts Preview */}
        <section className="mb-20">
          <LegalTextsSection maxItems={6} />
          <div className="text-center mt-8">
            <Link to="/legal-texts">
              <Button size="lg" variant="outline" className="px-8 py-4">
                <FileText className="mr-2 h-5 w-5" />
                Consulter tous les textes juridiques
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Partners & Logos */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Partenaires</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous collaborons avec les principales institutions de 16+ pays africains
            </p>
          </div>
          
          <OrganizationLogos />
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6">
                Rejoignez notre communauté de professionnels
              </h2>
              <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
                Développez vos compétences avec nos programmes certifiants adaptés aux réalités de l'Afrique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/courses">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-50 px-8 py-4">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Découvrir nos formations
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4">
                    Nous contacter
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}