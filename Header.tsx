import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, BookOpen, User, LogIn, GraduationCap, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import AuthModal from './AuthModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Cours', href: '/courses' },
    { name: 'Ressources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleAuthClick = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur-md shadow-sm border-b sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/assets/logo.png" 
                  alt="ANOURA Academy Logo" 
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="group-hover:scale-105 transition-transform duration-300">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">ANOURA</span>
                <span className="text-sm text-gray-600 block leading-none font-medium">Academy</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50 shadow-sm'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                  {item.name === 'Ressources' && (
                    <ExternalLink className="h-3 w-3 ml-1 inline-block" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm" className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">
                  <User className="h-4 w-4 mr-2" />
                  Tableau de bord
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => handleAuthClick('login')}
                className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Connexion
              </Button>
              <Button 
                size="sm"
                onClick={() => handleAuthClick('register')}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                S'inscrire
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:bg-blue-50 transition-colors duration-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t bg-white/95 backdrop-blur-md animate-in slide-in-from-top duration-300">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    {item.name === 'Ressources' && (
                      <ExternalLink className="h-3 w-3 ml-1 inline-block" />
                    )}
                  </Link>
                ))}
                <div className="pt-4 space-y-2 border-t">
                  <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start hover:bg-blue-50 hover:text-blue-600">
                      <User className="h-4 w-4 mr-2" />
                      Tableau de bord
                    </Button>
                  </Link>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start hover:bg-blue-50 hover:text-blue-600"
                    onClick={() => {
                      handleAuthClick('login');
                      setIsMenuOpen(false);
                    }}
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Connexion
                  </Button>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    onClick={() => {
                      handleAuthClick('register');
                      setIsMenuOpen(false);
                    }}
                  >
                    S'inscrire
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  );
}