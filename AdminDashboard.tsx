import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ProgressAnalytics from '@/components/ProgressAnalytics';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Users, 
  BookOpen, 
  Settings, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  BarChart3,
  MessageSquare,
  Award,
  TrendingUp
} from 'lucide-react';

export default function AdminDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('analytics');

  // Rediriger si pas admin
  if (!user?.isAdmin) {
    navigate('/');
    return null;
  }

  const [users] = useState([
    {
      id: '1',
      name: 'Marie Kouassi',
      email: 'marie.kouassi@example.com',
      role: 'student',
      enrolledCourses: 1,
      lastLogin: '2024-01-20',
      status: 'active'
    },
    {
      id: '2',
      name: 'Jean-Baptiste Diallo',
      email: 'jb.diallo@example.com',
      role: 'student',
      enrolledCourses: 1,
      lastLogin: '2024-01-19',
      status: 'active'
    },
    {
      id: '3',
      name: 'Dr. Traoré',
      email: 'traore@anoura.com',
      role: 'instructor',
      enrolledCourses: 0,
      lastLogin: '2024-01-21',
      status: 'active'
    }
  ]);

  const [courses] = useState([
    {
      id: 'initiation-marches-publics',
      title: 'Formation Initiation aux Marchés Publics',
      description: 'Formation complète de 5 jours pour débuter dans les marchés publics',
      price: 150000,
      currency: 'XOF',
      students: 25,
      status: 'published',
      createdAt: '2024-01-01'
    },
    {
      id: 'perfectionnement-marches-publics',
      title: 'Formation Perfectionnement Marchés Publics',
      description: 'Formation avancée pour les professionnels expérimentés',
      price: 250000,
      currency: 'XOF',
      students: 15,
      status: 'published',
      createdAt: '2024-01-01'
    }
  ]);

  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    price: '',
    currency: 'XOF'
  });

  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    content: '',
    type: 'info'
  });

  const handleCreateCourse = () => {
    // Logique de création de cours
    console.log('Nouveau cours:', newCourse);
    setNewCourse({ title: '', description: '', price: '', currency: 'XOF' });
  };

  const handleCreateAnnouncement = () => {
    // Logique de création d'annonce
    console.log('Nouvelle annonce:', newAnnouncement);
    setNewAnnouncement({ title: '', content: '', type: 'info' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Tableau de Bord Admin</h1>
            <p className="text-gray-600">Gérez votre plateforme d'apprentissage</p>
          </div>
          <Badge className="bg-red-100 text-red-800">
            Administrateur
          </Badge>
        </div>

        {/* Métriques rapides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Utilisateurs</p>
                  <p className="text-2xl font-bold">42</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Cours Actifs</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Revenus ce Mois</p>
                  <p className="text-2xl font-bold">8.2M</p>
                  <p className="text-xs text-gray-500">FCFA</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Certificats Émis</p>
                  <p className="text-2xl font-bold">28</p>
                </div>
                <Award className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="analytics">
              <BarChart3 className="h-4 w-4 mr-2" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="users">
              <Users className="h-4 w-4 mr-2" />
              Utilisateurs
            </TabsTrigger>
            <TabsTrigger value="courses">
              <BookOpen className="h-4 w-4 mr-2" />
              Cours
            </TabsTrigger>
            <TabsTrigger value="announcements">
              <MessageSquare className="h-4 w-4 mr-2" />
              Annonces
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="h-4 w-4 mr-2" />
              Paramètres
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analytics">
            <ProgressAnalytics />
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Gestion des Utilisateurs
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Nouvel utilisateur
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{user.name}</h4>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant={user.role === 'instructor' ? 'default' : 'secondary'}>
                            {user.role === 'instructor' ? 'Formateur' : 'Étudiant'}
                          </Badge>
                          <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                            {user.status === 'active' ? 'Actif' : 'Inactif'}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Créer un Nouveau Cours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Titre du cours"
                  value={newCourse.title}
                  onChange={(e) => setNewCourse(prev => ({ ...prev, title: e.target.value }))}
                />
                <Textarea
                  placeholder="Description du cours"
                  value={newCourse.description}
                  onChange={(e) => setNewCourse(prev => ({ ...prev, description: e.target.value }))}
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Prix"
                    type="number"
                    value={newCourse.price}
                    onChange={(e) => setNewCourse(prev => ({ ...prev, price: e.target.value }))}
                  />
                  <select 
                    className="px-3 py-2 border rounded-md"
                    value={newCourse.currency}
                    onChange={(e) => setNewCourse(prev => ({ ...prev, currency: e.target.value }))}
                  >
                    <option value="XOF">FCFA (XOF)</option>
                    <option value="EUR">Euro (EUR)</option>
                    <option value="USD">Dollar (USD)</option>
                  </select>
                </div>
                <Button onClick={handleCreateCourse} className="w-full">
                  Créer le Cours
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cours Existants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courses.map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{course.title}</h4>
                        <p className="text-sm text-gray-600">{course.description}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm">
                          <span className="font-medium">
                            {course.price.toLocaleString()} {course.currency}
                          </span>
                          <span className="text-gray-500">
                            {course.students} étudiants
                          </span>
                          <Badge variant="default">
                            {course.status === 'published' ? 'Publié' : 'Brouillon'}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="announcements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Créer une Annonce</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Titre de l'annonce"
                  value={newAnnouncement.title}
                  onChange={(e) => setNewAnnouncement(prev => ({ ...prev, title: e.target.value }))}
                />
                <Textarea
                  placeholder="Contenu de l'annonce"
                  value={newAnnouncement.content}
                  onChange={(e) => setNewAnnouncement(prev => ({ ...prev, content: e.target.value }))}
                  rows={4}
                />
                <select 
                  className="px-3 py-2 border rounded-md w-full"
                  value={newAnnouncement.type}
                  onChange={(e) => setNewAnnouncement(prev => ({ ...prev, type: e.target.value }))}
                >
                  <option value="info">Information</option>
                  <option value="warning">Avertissement</option>
                  <option value="success">Succès</option>
                  <option value="error">Erreur</option>
                </select>
                <Button onClick={handleCreateAnnouncement} className="w-full">
                  Publier l'Annonce
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Paramètres de la Plateforme</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <AlertDescription>
                    Les paramètres avancés permettent de configurer les aspects techniques de la plateforme.
                  </AlertDescription>
                </Alert>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom de la Plateforme</label>
                    <Input defaultValue="ANOURA Academy" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email de Contact</label>
                    <Input defaultValue="contact@anoura.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Devise par Défaut</label>
                    <select className="px-3 py-2 border rounded-md w-full">
                      <option value="XOF">FCFA (XOF)</option>
                      <option value="EUR">Euro (EUR)</option>
                      <option value="USD">Dollar (USD)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Fuseau Horaire</label>
                    <select className="px-3 py-2 border rounded-md w-full">
                      <option value="Africa/Abidjan">Africa/Abidjan (GMT)</option>
                      <option value="Europe/Paris">Europe/Paris (CET)</option>
                    </select>
                  </div>
                </div>
                
                <Button className="w-full">
                  Sauvegarder les Paramètres
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}