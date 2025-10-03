import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNotifications } from '@/contexts/NotificationContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  MessageCircle, 
  Send, 
  Search, 
  Phone, 
  Video, 
  MoreVertical,
  Paperclip,
  Smile,
  Check,
  CheckCheck,
  Clock
} from 'lucide-react';

interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
  type: 'text' | 'file' | 'image';
  fileUrl?: string;
  fileName?: string;
}

interface Conversation {
  id: string;
  participants: User[];
  lastMessage?: Message;
  unreadCount: number;
  lastActivity: Date;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
  avatar?: string;
  isOnline: boolean;
  lastSeen?: Date;
}

export default function DirectMessaging() {
  const { user } = useAuth();
  const { addNotification } = useNotifications();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Données de démonstration
  useEffect(() => {
    const demoUsers: User[] = [
      {
        id: '1',
        name: 'Dr. Traoré',
        email: 'traore@anoura.com',
        role: 'instructor',
        isOnline: true
      },
      {
        id: '2',
        name: 'Marie Kouassi',
        email: 'marie.kouassi@example.com',
        role: 'student',
        isOnline: false,
        lastSeen: new Date(Date.now() - 30 * 60 * 1000)
      },
      {
        id: '3',
        name: 'Jean-Baptiste Diallo',
        email: 'jb.diallo@example.com',
        role: 'student',
        isOnline: true
      },
      {
        id: '4',
        name: 'Aminata Sow',
        email: 'aminata.sow@example.com',
        role: 'student',
        isOnline: false,
        lastSeen: new Date(Date.now() - 2 * 60 * 60 * 1000)
      },
      {
        id: '5',
        name: 'Admin ANOURA',
        email: 'admin@anoura.com',
        role: 'admin',
        isOnline: true
      }
    ];

    const demoMessages: Message[] = [
      {
        id: '1',
        senderId: '1',
        receiverId: user?.email || '',
        content: 'Bonjour ! J\'ai vu votre question sur les seuils d\'appel d\'offres. Voulez-vous qu\'on en discute ?',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        isRead: false,
        type: 'text'
      },
      {
        id: '2',
        senderId: user?.email || '',
        receiverId: '1',
        content: 'Oui, ce serait parfait ! Je ne comprends pas bien la différence entre les seuils UEMOA et nationaux.',
        timestamp: new Date(Date.now() - 90 * 60 * 1000),
        isRead: true,
        type: 'text'
      },
      {
        id: '3',
        senderId: '1',
        receiverId: user?.email || '',
        content: 'Parfait ! Les seuils UEMOA s\'appliquent aux marchés financés par des fonds communautaires, tandis que les seuils nationaux concernent les budgets nationaux. Je peux vous envoyer un document détaillé.',
        timestamp: new Date(Date.now() - 60 * 60 * 1000),
        isRead: false,
        type: 'text'
      },
      {
        id: '4',
        senderId: '2',
        receiverId: user?.email || '',
        content: 'Salut ! Comment ça se passe pour toi la formation ? Moi j\'ai un peu de mal avec le Module 2.',
        timestamp: new Date(Date.now() - 30 * 60 * 1000),
        isRead: false,
        type: 'text'
      }
    ];

    const demoConversations: Conversation[] = [
      {
        id: '1',
        participants: [demoUsers[0], { ...demoUsers[0], id: user?.email || '' }],
        lastMessage: demoMessages[2],
        unreadCount: 2,
        lastActivity: new Date(Date.now() - 60 * 60 * 1000)
      },
      {
        id: '2',
        participants: [demoUsers[1], { ...demoUsers[1], id: user?.email || '' }],
        lastMessage: demoMessages[3],
        unreadCount: 1,
        lastActivity: new Date(Date.now() - 30 * 60 * 1000)
      },
      {
        id: '3',
        participants: [demoUsers[2], { ...demoUsers[2], id: user?.email || '' }],
        lastMessage: undefined,
        unreadCount: 0,
        lastActivity: new Date(Date.now() - 24 * 60 * 60 * 1000)
      }
    ];

    setUsers(demoUsers);
    setMessages(demoMessages);
    setConversations(demoConversations);
  }, [user]);

  // Auto-scroll vers le bas
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simulation de nouveaux messages
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) { // 20% de chance toutes les 15 secondes
        const randomUser = users[Math.floor(Math.random() * users.length)];
        const newMsg: Message = {
          id: Date.now().toString(),
          senderId: randomUser.id,
          receiverId: user?.email || '',
          content: [
            'Avez-vous des questions sur le cours ?',
            'Je peux vous aider si besoin !',
            'N\'hésitez pas à me contacter.',
            'Comment se passe votre progression ?'
          ][Math.floor(Math.random() * 4)],
          timestamp: new Date(),
          isRead: false,
          type: 'text'
        };

        setMessages(prev => [...prev, newMsg]);
        
        // Notification
        addNotification({
          type: 'info',
          title: 'Nouveau message',
          message: `${randomUser.name} vous a envoyé un message`,
          actionUrl: '/member/initiation-marches-publics',
          actionLabel: 'Voir le message'
        });
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [users, user, addNotification]);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return;

    const message: Message = {
      id: Date.now().toString(),
      senderId: user?.email || '',
      receiverId: selectedConversation.participants.find(p => p.id !== user?.email)?.id || '',
      content: newMessage,
      timestamp: new Date(),
      isRead: false,
      type: 'text'
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');

    // Marquer comme lu les messages de cette conversation
    setMessages(prev => prev.map(msg => 
      msg.senderId === selectedConversation.participants.find(p => p.id !== user?.email)?.id
        ? { ...msg, isRead: true }
        : msg
    ));
  };

  const startNewConversation = (targetUser: User) => {
    const existingConv = conversations.find(conv => 
      conv.participants.some(p => p.id === targetUser.id)
    );

    if (existingConv) {
      setSelectedConversation(existingConv);
    } else {
      const newConv: Conversation = {
        id: Date.now().toString(),
        participants: [targetUser, { ...targetUser, id: user?.email || '', name: user?.name || '' }],
        unreadCount: 0,
        lastActivity: new Date()
      };
      setConversations(prev => [newConv, ...prev]);
      setSelectedConversation(newConv);
    }
  };

  const getConversationMessages = (conversationId: string) => {
    if (!selectedConversation) return [];
    const otherParticipant = selectedConversation.participants.find(p => p.id !== user?.email);
    return messages.filter(msg => 
      (msg.senderId === user?.email && msg.receiverId === otherParticipant?.id) ||
      (msg.senderId === otherParticipant?.id && msg.receiverId === user?.email)
    );
  };

  const formatTime = (timestamp: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'À l\'instant';
    if (diffInMinutes < 60) return `${diffInMinutes}min`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h`;
    return timestamp.toLocaleDateString('fr-FR');
  };

  const getLastSeen = (user: User) => {
    if (user.isOnline) return 'En ligne';
    if (user.lastSeen) {
      const diffInMinutes = Math.floor((new Date().getTime() - user.lastSeen.getTime()) / (1000 * 60));
      if (diffInMinutes < 60) return `Vu il y a ${diffInMinutes}min`;
      if (diffInMinutes < 1440) return `Vu il y a ${Math.floor(diffInMinutes / 60)}h`;
      return `Vu ${user.lastSeen.toLocaleDateString('fr-FR')}`;
    }
    return 'Hors ligne';
  };

  const filteredUsers = users.filter(u => 
    u.id !== user?.email &&
    (u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     u.email.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const conversationMessages = selectedConversation ? getConversationMessages(selectedConversation.id) : [];

  return (
    <div className="flex h-[600px] border rounded-lg overflow-hidden">
      {/* Liste des conversations */}
      <div className="w-1/3 border-r bg-gray-50">
        <div className="p-4 border-b bg-white">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Messages</h3>
            <MessageCircle className="h-5 w-5 text-gray-600" />
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Rechercher des contacts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <ScrollArea className="h-full">
          {/* Conversations existantes */}
          <div className="p-2">
            <h4 className="text-xs font-medium text-gray-500 mb-2 px-2">CONVERSATIONS</h4>
            {conversations.map((conversation) => {
              const otherParticipant = conversation.participants.find(p => p.id !== user?.email);
              if (!otherParticipant) return null;

              return (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-white transition-colors ${
                    selectedConversation?.id === conversation.id ? 'bg-white shadow-sm' : ''
                  }`}
                >
                  <div className="relative">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback>
                        {otherParticipant.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {otherParticipant.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-sm truncate">{otherParticipant.name}</p>
                      {conversation.lastMessage && (
                        <span className="text-xs text-gray-500">
                          {formatTime(conversation.lastMessage.timestamp)}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-600 truncate">
                        {conversation.lastMessage?.content || 'Aucun message'}
                      </p>
                      {conversation.unreadCount > 0 && (
                        <Badge className="bg-blue-600 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center p-0">
                          {conversation.unreadCount}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Utilisateurs disponibles */}
          {searchQuery && (
            <div className="p-2 border-t">
              <h4 className="text-xs font-medium text-gray-500 mb-2 px-2">CONTACTS</h4>
              {filteredUsers.map((contact) => (
                <div
                  key={contact.id}
                  onClick={() => startNewConversation(contact)}
                  className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-white transition-colors"
                >
                  <div className="relative">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback>
                        {contact.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {contact.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <p className="font-medium text-sm">{contact.name}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant={contact.role === 'instructor' ? 'default' : 'secondary'} className="text-xs">
                        {contact.role === 'instructor' ? 'Formateur' : contact.role === 'admin' ? 'Admin' : 'Étudiant'}
                      </Badge>
                      <span className="text-xs text-gray-500">{getLastSeen(contact)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </div>

      {/* Zone de conversation */}
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Header de conversation */}
            <div className="p-4 border-b bg-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback>
                      {selectedConversation.participants.find(p => p.id !== user?.email)?.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  {selectedConversation.participants.find(p => p.id !== user?.email)?.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div>
                  <p className="font-medium">
                    {selectedConversation.participants.find(p => p.id !== user?.email)?.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {getLastSeen(selectedConversation.participants.find(p => p.id !== user?.email)!)}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {conversationMessages.map((message) => {
                  const isOwnMessage = message.senderId === user?.email;
                  
                  return (
                    <div
                      key={message.id}
                      className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        isOwnMessage 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-900'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                        <div className={`flex items-center justify-between mt-1 text-xs ${
                          isOwnMessage ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          <span>{formatTime(message.timestamp)}</span>
                          {isOwnMessage && (
                            <div className="ml-2">
                              {message.isRead ? (
                                <CheckCheck className="h-3 w-3" />
                              ) : (
                                <Check className="h-3 w-3" />
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Zone de saisie */}
            <div className="p-4 border-t bg-white">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <div className="flex-1 relative">
                  <Input
                    placeholder="Tapez votre message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="pr-10"
                  />
                  <Button variant="ghost" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2">
                    <Smile className="h-4 w-4" />
                  </Button>
                </div>
                <Button 
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <MessageCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                Sélectionnez une conversation
              </h3>
              <p className="text-gray-500">
                Choisissez une conversation existante ou recherchez un contact pour commencer à discuter.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}