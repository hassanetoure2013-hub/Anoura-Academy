import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Clock, Globe, Award, BookOpen, TrendingUp, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AnimatedHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const heroImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=800&fit=crop"
  ];

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "755+", label: "Participants formés", color: "text-blue-600" },
    { icon: <Clock className="h-8 w-8" />, number: "90h", label: "Heures de formation", color: "text-green-600" },
    { icon: <Globe className="h-8 w-8" />, number: "16+", label: "Pays couverts", color: "text-purple-600" },
    { icon: <Award className="h-8 w-8" />, number: "98%", label: "Taux de satisfaction", color: "text-orange-600" }
  ];

  const features = [
    {
      title: "Formation Certifiante",
      description: "Certificats reconnus par les institutions africaines",
      icon: <Award className="h-12 w-12 text-yellow-500" />,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop"
    },
    {
      title: "Expertise Panafricaine",
      description: "Formateurs experts dans 16+ pays africains",
      icon: <Globe className="h-12 w-12 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop"
    },
    {
      title: "Cas Pratiques",
      description: "Études de cas réels des marchés publics africains",
      icon: <BookOpen className="h-12 w-12 text-green-500" />,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleDiscoverCourses = () => {
    navigate('/');
  };

  const handleFreeTrial = () => {
    navigate('/signup');
  };

  const handleViewProgram = () => {
    navigate('/about');
  };

  const handleCallCustomTraining = () => {
    window.open('tel:+22377776569', '_self');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Hero Section with Animated Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={heroImages[currentSlide]}
              alt="Formation professionnelle"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Badge className="mb-6 text-lg px-6 py-2 bg-yellow-500 text-black hover:bg-yellow-400">
              🎓 Référence panafricaine en formation
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Maîtrisez les{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              marchés publics
            </span>
            <br />
            et les PPP en Afrique
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            ANOURA Academy forme les professionnels aux meilleures pratiques des marchés publics 
            et des PPP adaptées aux réalités de l'Afrique
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 text-lg"
              onClick={handleDiscoverCourses}
            >
              Découvrir nos formations
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
              onClick={handleSignUp}
            >
              S'inscrire maintenant
            </Button>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
              >
                <div className={`flex justify-center mb-3 ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"
        />
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Pourquoi choisir ANOURA Academy ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche unique adaptée aux spécificités des marchés africains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      {feature.icon}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formation sur Mesure Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8"
            >
              <TrendingUp className="h-10 w-10 text-white" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Formation sur mesure ?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Nous proposons également des formations personnalisées pour vos équipes, 
              adaptées à vos besoins spécifiques et à votre secteur d'activité.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-white mx-auto mb-3" />
                  <p className="text-white/80 text-sm mb-2">Appelez-nous directement</p>
                  <p className="text-2xl font-bold text-white">+223 77 77 65 69</p>
                </CardContent>
              </Card>
              
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100 text-emerald-600 font-semibold px-8 py-4 text-lg"
                onClick={handleCallCustomTraining}
              >
                <Phone className="h-5 w-5 mr-2" />
                Nous contacter
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à transformer votre carrière ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Rejoignez les 755+ professionnels qui ont déjà fait confiance à ANOURA Academy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 text-lg"
                onClick={handleSignUp}
              >
                S'inscrire maintenant
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
                onClick={handleViewProgram}
              >
                Voir le programme
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AnimatedHomepage;