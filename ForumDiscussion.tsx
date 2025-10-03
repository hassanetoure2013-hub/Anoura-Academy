import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MessageSquare, 
  Plus, 
  ThumbsUp, 
  ThumbsDown, 
  Reply, 
  Pin, 
  Clock,
  User,
  Award,
  Search
} from 'lucide-react';

interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    email: string;
    role: 'student' | 'instructor' | 'admin';
  };
  createdAt: Date;
  replies: ForumReply[];
  likes: number;
  dislikes: number;
  isPinned: boolean;
  category: string;
  tags: string[];
}

interface ForumReply {
  id: string;
  content: string;
  author: {
    name: string;
    email: string;
    role: 'student' | 'instructor' | 'admin';
  };
  createdAt: Date;
  likes: number;
  dislikes: number;
}

interface ForumDiscussionProps {
  courseId: string;
}

export default function ForumDiscussion({ courseId }: ForumDiscussionProps) {
  const { user } = useAuth();
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<ForumPost | null>(null);
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: 'general',
    tags: ''
  });
  const [newReply, setNewReply] = useState('');

  // Données de démonstration
  useEffect(() => {
    const demoData: ForumPost[] = [
      {
        id: '1',
        title: 'Question sur les seuils d\'appel d\'offres',
        content: 'Bonjour, j\'ai une question concernant les seuils pour les appels d\'offres en Côte d\'Ivoire. Quelqu\'un peut-il m\'expliquer la différence entre les seuils nationaux et UEMOA ?',
        author: {
          name: 'Marie Kouassi',
          email: 'marie.kouassi@example.com',
          role: 'student'
        },
        createdAt: new Date('2024-01-15T10:30:00'),
        replies: [
          {
            id: 'r1',
            content: 'Excellente question ! Les seuils UEMOA s\'appliquent pour les marchés financés par des fonds communautaires, tandis que les seuils nationaux concernent les marchés financés sur budget national.',
            author: {
              name: 'Dr. Traoré',
              email: 'traore@anoura.com',
              role: 'instructor'
            },
            createdAt: new Date('2024-01-15T14:20:00'),
            likes: 8,
            dislikes: 0
          },
          {
            id: 'r2',
            content: 'Merci pour cette explication claire ! Cela m\'aide beaucoup pour mon projet.',
            author: {
              name: 'Marie Kouassi',
              email: 'marie.kouassi@example.com',
              role: 'student'
            },
            createdAt: new Date('2024-01-15T15:10:00'),
            likes: 2,
            dislikes: 0
          }
        ],
        likes: 12,
        dislikes: 1,
        isPinned: true,
        category: 'questions',
        tags: ['seuils', 'UEMOA', 'appel-offres']
      },
      {
        id: '2',
        title: 'Partage d\'expérience : Mon premier dossier d\'AO',
        content: 'Je viens de terminer la rédaction de mon premier dossier d\'appel d\'offres grâce à cette formation. Je partage quelques conseils pratiques que j\'ai appris...',
        author: {
          name: 'Jean-Baptiste Diallo',
          email: 'jb.diallo@example.com',
          role: 'student'
        },
        createdAt: new Date('2024-01-14T16:45:00'),
        replies: [
          {
            id: 'r3',
            content: 'Très bon retour d\'expérience ! N\'hésitez pas à partager vos templates si possible.',
            author: {
              name: 'Aminata Sow',
              email: 'aminata.sow@example.com',
              role: 'student'
            },
            createdAt: new Date('2024-01-14T18:30:00'),
            likes: 5,
            dislikes: 0
          }
        ],
        likes: 15,
        dislikes: 0,
        isPinned: false,
        category: 'experiences',
        tags: ['retour-experience', 'dossier-AO', 'conseils']
      },
      {
        id: '3',
        title: 'Mise à jour réglementaire 2024',
        content: 'Attention ! Nouvelles dispositions réglementaires entrées en vigueur ce mois-ci concernant la dématérialisation des procédures...',
        author: {
          name: 'Admin ANOURA',
          email: 'admin@anoura.com',
          role: 'admin'
        },
        createdAt: new Date('2024-01-10T09:00:00'),
        replies: [],
        likes: 25,
        dislikes: 0,
        isPinned: true,
        category: 'announcements',
        tags: ['réglementation', '2024', 'dématérialisation']
      }
    ];
    setPosts(demoData);
  }, []);

  const categories = [
    { id: 'all', name: 'Toutes les catégories', count: posts.length },
    { id: 'questions', name: 'Questions', count: posts.filter(p => p.category === 'questions').length },
    { id: 'experiences', name: 'Expériences', count: posts.filter(p => p.category === 'experiences').length },
    { id: 'announcements', name: 'Annonces', count: posts.filter(p => p.category === 'announcements').length },
    { id: 'general', name: 'Général', count: posts.filter(p => p.category === 'general').length }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCreatePost = () => {
    if (!newPost.title.trim() || !newPost.content.trim()) return;

    const post: ForumPost = {
      id: Date.now().toString(),
      title: newPost.title,
      content: newPost.content,
      author: {
        name: user?.name || 'Utilisateur',
        email: user?.email || '',
        role: user?.isAdmin ? 'admin' : 'student'
      },
      createdAt: new Date(),
      replies: [],
      likes: 0,
      dislikes: 0,
      isPinned: false,
      category: newPost.category,
      tags: newPost.tags.split(',').map(tag => tag.trim()).filter(Boolean)
    };

    setPosts(prev => [post, ...prev]);
    setNewPost({ title: '', content: '', category: 'general', tags: '' });
    setShowNewPostForm(false);
  };

  const handleReply = (postId: string) => {
    if (!newReply.trim()) return;

    const reply: ForumReply = {
      id: Date.now().toString(),
      content: newReply,
      author: {
        name: user?.name || 'Utilisateur',
        email: user?.email || '',
        role: user?.isAdmin ? 'admin' : 'student'
      },
      createdAt: new Date(),
      likes: 0,
      dislikes: 0
    };

    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, replies: [...post.replies, reply] }
        : post
    ));
    setNewReply('');
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'instructor':
        return <Award className="h-3 w-3 text-blue-600" />;
      case 'admin':
        return <Award className="h-3 w-3 text-red-600" />;
      default:
        return <User className="h-3 w-3 text-gray-600" />;
    }
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'instructor':
        return <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">Formateur</Badge>;
      case 'admin':
        return <Badge variant="secondary" className="text-xs bg-red-100 text-red-800">Admin</Badge>;
      default:
        return <Badge variant="outline" className="text-xs">Étudiant</Badge>;
    }
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Il y a moins d\'1h';
    if (diffInHours < 24) return `Il y a ${diffInHours}h`;
    if (diffInHours < 48) return 'Hier';
    return date.toLocaleDateString('fr-FR');
  };

  if (selectedPost) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => setSelectedPost(null)}>
            ← Retour au forum
          </Button>
        </div>

        {/* Post principal */}
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {selectedPost.isPinned && <Pin className="h-4 w-4 text-yellow-600" />}
                  <h2 className="text-xl font-semibold">{selectedPost.title}</h2>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback className="text-xs">
                        {selectedPost.author.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span>{selectedPost.author.name}</span>
                    {getRoleBadge(selectedPost.author.role)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{formatDate(selectedPost.createdAt)}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">{selectedPost.content}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  {selectedPost.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <ThumbsDown className="h-4 w-4 mr-1" />
                  {selectedPost.dislikes}
                </Button>
              </div>
              <div className="flex gap-2">
                {selectedPost.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Réponses */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">
            Réponses ({selectedPost.replies.length})
          </h3>
          
          {selectedPost.replies.map(reply => (
            <Card key={reply.id} className="ml-4">
              <CardContent className="pt-4">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback className="text-xs">
                        {reply.author.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span>{reply.author.name}</span>
                    {getRoleBadge(reply.author.role)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{formatDate(reply.createdAt)}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{reply.content}</p>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    {reply.likes}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ThumbsDown className="h-4 w-4 mr-1" />
                    {reply.dislikes}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Formulaire de réponse */}
          {user && (
            <Card className="ml-4">
              <CardContent className="pt-4">
                <div className="space-y-4">
                  <Textarea
                    placeholder="Écrivez votre réponse..."
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                    rows={3}
                  />
                  <Button 
                    onClick={() => handleReply(selectedPost.id)}
                    disabled={!newReply.trim()}
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    <Reply className="h-4 w-4 mr-2" />
                    Répondre
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header avec recherche */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <h2 className="text-2xl font-bold">Forum de Discussion</h2>
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Rechercher dans le forum..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          {user && (
            <Button 
              onClick={() => setShowNewPostForm(true)}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Nouveau post
            </Button>
          )}
        </div>
      </div>

      {/* Formulaire nouveau post */}
      {showNewPostForm && (
        <Card>
          <CardHeader>
            <CardTitle>Créer un nouveau post</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Titre de votre post"
              value={newPost.title}
              onChange={(e) => setNewPost(prev => ({ ...prev, title: e.target.value }))}
            />
            <Textarea
              placeholder="Contenu de votre post..."
              value={newPost.content}
              onChange={(e) => setNewPost(prev => ({ ...prev, content: e.target.value }))}
              rows={4}
            />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Catégorie</label>
                <select 
                  className="w-full mt-1 p-2 border rounded-md"
                  value={newPost.category}
                  onChange={(e) => setNewPost(prev => ({ ...prev, category: e.target.value }))}
                >
                  <option value="general">Général</option>
                  <option value="questions">Questions</option>
                  <option value="experiences">Expériences</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Tags (séparés par des virgules)</label>
                <Input
                  placeholder="ex: seuils, UEMOA, conseils"
                  value={newPost.tags}
                  onChange={(e) => setNewPost(prev => ({ ...prev, tags: e.target.value }))}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={handleCreatePost}
                disabled={!newPost.title.trim() || !newPost.content.trim()}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                Publier
              </Button>
              <Button variant="outline" onClick={() => setShowNewPostForm(false)}>
                Annuler
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Catégories */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList className="grid w-full grid-cols-5">
          {categories.map(category => (
            <TabsTrigger key={category.id} value={category.id} className="text-xs">
              {category.name} ({category.count})
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Liste des posts */}
      <div className="space-y-4">
        {filteredPosts.map(post => (
          <Card key={post.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="pt-4" onClick={() => setSelectedPost(post)}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {post.isPinned && <Pin className="h-4 w-4 text-yellow-600" />}
                    <h3 className="font-semibold text-lg">{post.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-3 line-clamp-2">{post.content}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-5 h-5">
                        <AvatarFallback className="text-xs">
                          {post.author.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span>{post.author.name}</span>
                      {getRoleIcon(post.author.role)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{formatDate(post.createdAt)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" />
                      <span>{post.replies.length} réponses</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-3 w-3" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    {post.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                    {post.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              Aucun post trouvé
            </h3>
            <p className="text-gray-500">
              {searchQuery ? 'Essayez avec d\'autres mots-clés' : 'Soyez le premier à créer un post !'}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}