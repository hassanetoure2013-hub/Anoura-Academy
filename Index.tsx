import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  BookOpen, 
  Target, 
  ArrowRight,
  Star,
  Globe,
  TrendingUp,
  Shield,
  Heart,
  Zap,
  PlayCircle,
  GraduationCap,
  FileText,
  Video
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Index() {
  const stats = [
    { number: '755+', label: 'Participants formés', icon: Users },
    { number: '90h', label: 'Heures de formation', icon: Clock },
    { number: '16+', label: 'Pays couverts', icon: Globe },
    { number: '98%', label: 'Taux de réussite', icon: Award }
  ];

  const features = [
    {
      icon: Target,
      title: 'Formation certifiante',
      description: 'Obtenez un certificat reconnu avec QR code de vérification',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Globe,
      title: 'Expertise panafricaine',
      description: 'Contenu adapté aux réalités de l\'Afrique',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Users,
      title: 'Support personnalisé',
      description: 'Accompagnement par nos experts tout au long de votre formation',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Clock,
      title: 'Formation flexible',
      description: 'Apprenez à votre rythme, 24h/24 et 7j/7',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const courses = [
    {
      title: 'Programme Initiation',
      description: 'Découvrez les bases des marchés publics',
      duration: '20h',
      modules: 4,
      price: '115 €',
      level: 'Débutant',
      color: 'from-emerald-500 to-teal-600',
      link: '/course/initiation'
    },
    {
      title: 'Programme Intermédiaire',
      description: 'Approfondissez avec les PPP',
      duration: '34h',
      modules: 6,
      price: '195 €',
      level: 'Intermédiaire',
      color: 'from-blue-500 to-indigo-600',
      link: '/course/intermediate',
      popular: true
    },
    {
      title: 'Programme Avancé',
      description: 'Maîtrisez tous les aspects',
      duration: '36h',
      modules: 8,
      price: '275 €',
      level: 'Avancé',
      color: 'from-purple-500 to-violet-600',
      link: '/course/advanced'
    }
  ];

  const testimonials = [
    {
      name: 'Aminata Diallo',
      role: 'Directrice des Achats, Mali',
      content: 'ANOURA Academy m\'a permis de maîtriser les procédures de marchés publics. Formation très pratique et adaptée à nos réalités.',
      rating: 5
    },
    {
      name: 'Ibrahim Traoré',
      role: 'Consultant PPP, Burkina Faso',
      content: 'Excellente formation sur les PPP. Les cas pratiques sont très pertinents et les formateurs très compétents.',
      rating: 5
    },
    {
      name: 'Fatou Sow',
      role: 'Agent public, Sénégal',
      content: 'Formation complète et accessible. J\'ai pu appliquer immédiatement les connaissances acquises dans mon travail.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2">
              🎓 Référence panafricaine en formation
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Maîtrisez les
              <span className="block text-emerald-300">marchés publics</span>
              <span className="block text-3xl md:text-5xl">et les PPP en Afrique</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed mb-8">
              ANOURA Academy forme les professionnels aux meilleures pratiques 
              des marchés publics et des PPP adaptées aux réalités de l'Afrique
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/courses">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold shadow-xl">
                  <PlayCircle className="mr-3 h-6 w-6" />
                  Découvrir nos formations
                </Button>
              </Link>
              
              <Link to="/module/1">
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm">
                  <Video className="mr-3 h-6 w-6" />
                  Essai gratuit
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-emerald-200" />
                  <div className="text-2xl md:text-3xl font-bold">{stat.number}</div>
                  <div className="text-sm text-emerald-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi choisir ANOURA Academy ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche innovante adaptée aux réalités africaines
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Courses Preview */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Programmes de Formation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez le programme adapté à votre niveau et vos objectifs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                course.popular ? 'ring-2 ring-blue-500 relative' : ''
              }`}>
                {course.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      ⭐ Populaire
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${course.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                  <p className="text-gray-600">{course.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <Clock className="h-4 w-4 mx-auto mb-1 text-gray-400" />
                      <div className="font-medium">{course.duration}</div>
                    </div>
                    <div>
                      <BookOpen className="h-4 w-4 mx-auto mb-1 text-gray-400" />
                      <div className="font-medium">{course.modules} modules</div>
                    </div>
                    <div>
                      <Award className="h-4 w-4 mx-auto mb-1 text-gray-400" />
                      <div className="font-medium">{course.level}</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">{course.price}</div>
                    <p className="text-sm text-gray-600">≈ {Math.round(parseFloat(course.price.replace(' €', '')) * 656)} FCFA</p>
                  </div>

                  <Link to={course.link}>
                    <Button className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90`}>
                      Voir le programme
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/courses">
              <Button size="lg" variant="outline" className="px-8 py-4">
                Voir toutes nos formations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ce que disent nos participants</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plus de 755 professionnels de 16+ pays nous font confiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-emerald-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à transformer votre carrière ?
              </h2>
              <p className="text-xl text-emerald-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                Rejoignez ANOURA Academy et développez les compétences essentielles 
                pour exceller dans les marchés publics et les PPP en Afrique
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/courses">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-50 px-10 py-6 text-xl font-bold shadow-2xl">
                    <GraduationCap className="mr-3 h-6 w-6" />
                    Commencer maintenant
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-10 py-6 text-xl font-bold">
                    Nous contacter
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 flex items-center justify-center space-x-8 text-emerald-100">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Certificat reconnu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Formation flexible</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Support expert</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}