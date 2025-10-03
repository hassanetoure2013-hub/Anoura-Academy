import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, GraduationCap, Award, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const quickLinks = [
    { name: 'À propos', href: '/about' },
    { name: 'Nos cours', href: '/courses' },
    { name: 'Contact', href: '/contact' },
    { name: 'Tableau de bord', href: '/dashboard' },
  ];

  const courses = [
    { name: 'Marchés Publics UEMOA', href: '/course/1' },
    { name: 'Gestion des PPP', href: '/course/2' },
    { name: 'Audit et Conformité', href: '/course/3' },
    { name: 'Formation Entreprise', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
  ];

  const features = [
    { icon: Award, text: 'Certificats reconnus' },
    { icon: Users, text: 'Communauté active' },
    { icon: Globe, text: 'Portée panafricaine' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/assets/logo.png" 
                  alt="ANOURA Academy Logo" 
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">ANOURA</span>
                <span className="text-sm text-gray-400 block leading-none font-medium">Academy</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Référence panafricaine en formation spécialisée dans les marchés publics 
              et les Partenariats Public-Privé (PPP). Développez vos compétences avec nos experts.
            </p>
            
            {/* Features */}
            <div className="space-y-3 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  <feature.icon className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Liens rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Formations</h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <Link 
                    to={course.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 group">
              <div className="bg-blue-600/20 p-2 rounded-lg group-hover:bg-blue-600/30 transition-colors duration-300">
                <Mail className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-medium">contact@anoura-academy.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 group">
              <div className="bg-green-600/20 p-2 rounded-lg group-hover:bg-green-600/30 transition-colors duration-300">
                <Phone className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Téléphone</p>
                <p className="text-white font-medium">+223 77 77 65 69</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 group">
              <div className="bg-purple-600/20 p-2 rounded-lg group-hover:bg-purple-600/30 transition-colors duration-300">
                <MapPin className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Localisation</p>
                <p className="text-white font-medium">Bamako, Mali</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 ANOURA Academy. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}