import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './AuthContext';

export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'quiz' | 'forum' | 'course';
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
  actionUrl?: string;
  actionLabel?: string;
  userId?: string;
  courseId?: string;
}

interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'isRead'>) => void;
  markAsRead: (notificationId: string) => void;
  markAllAsRead: () => void;
  removeNotification: (notificationId: string) => void;
  clearAllNotifications: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Simuler des notifications en temps réel
  useEffect(() => {
    if (!user) return;

    // Notifications de démonstration
    const demoNotifications: Notification[] = [
      {
        id: '1',
        type: 'course',
        title: 'Nouveau module disponible',
        message: 'Le Module 3 "Rédaction des Dossiers" est maintenant accessible !',
        timestamp: new Date(Date.now() - 5 * 60 * 1000), // Il y a 5 minutes
        isRead: false,
        actionUrl: '/member/initiation-marches-publics',
        actionLabel: 'Voir le module',
        userId: user.email,
        courseId: 'initiation-marches-publics'
      },
      {
        id: '2',
        type: 'forum',
        title: 'Nouvelle réponse à votre question',
        message: 'Dr. Traoré a répondu à votre question sur les seuils d\'appel d\'offres',
        timestamp: new Date(Date.now() - 15 * 60 * 1000), // Il y a 15 minutes
        isRead: false,
        actionUrl: '/member/initiation-marches-publics',
        actionLabel: 'Voir la réponse',
        userId: user.email
      },
      {
        id: '3',
        type: 'quiz',
        title: 'Quiz réussi !',
        message: 'Félicitations ! Vous avez obtenu 85% au Quiz Module 1',
        timestamp: new Date(Date.now() - 30 * 60 * 1000), // Il y a 30 minutes
        isRead: true,
        actionUrl: '/member/initiation-marches-publics',
        actionLabel: 'Voir les résultats',
        userId: user.email,
        courseId: 'initiation-marches-publics'
      },
      {
        id: '4',
        type: 'info',
        title: 'Mise à jour système',
        message: 'Le forum de discussion a été amélioré avec de nouvelles fonctionnalités',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // Il y a 2 heures
        isRead: false,
        actionUrl: '/member/initiation-marches-publics',
        actionLabel: 'Découvrir'
      }
    ];

    setNotifications(demoNotifications);

    // Simuler l'arrivée de nouvelles notifications
    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% de chance toutes les 30 secondes
        const newNotification: Notification = {
          id: Date.now().toString(),
          type: Math.random() > 0.5 ? 'forum' : 'course',
          title: Math.random() > 0.5 ? 'Nouveau message dans le forum' : 'Progression mise à jour',
          message: Math.random() > 0.5 
            ? 'Un nouvel étudiant a posé une question intéressante'
            : 'Votre progression a été sauvegardée automatiquement',
          timestamp: new Date(),
          isRead: false,
          actionUrl: '/member/initiation-marches-publics',
          actionLabel: 'Voir',
          userId: user.email
        };
        
        setNotifications(prev => [newNotification, ...prev.slice(0, 19)]); // Garder max 20 notifications
      }
    }, 30000); // Toutes les 30 secondes

    return () => clearInterval(interval);
  }, [user]);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const addNotification = (notificationData: Omit<Notification, 'id' | 'timestamp' | 'isRead'>) => {
    const notification: Notification = {
      ...notificationData,
      id: Date.now().toString(),
      timestamp: new Date(),
      isRead: false
    };
    
    setNotifications(prev => [notification, ...prev.slice(0, 19)]);
  };

  const markAsRead = (notificationId: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === notificationId 
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const removeNotification = (notificationId: string) => {
    setNotifications(prev => 
      prev.filter(notification => notification.id !== notificationId)
    );
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <NotificationContext.Provider value={{
      notifications,
      unreadCount,
      addNotification,
      markAsRead,
      markAllAsRead,
      removeNotification,
      clearAllNotifications
    }}>
      {children}
    </NotificationContext.Provider>
  );
};