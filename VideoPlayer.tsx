import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Play, Pause, Volume2, Maximize, CheckCircle, Lock } from 'lucide-react';

interface VideoPlayerProps {
  videoId: string;
  title: string;
  description: string;
  duration: string;
  isUnlocked: boolean;
  onComplete?: () => void;
}

export default function VideoPlayer({ 
  videoId, 
  title, 
  description, 
  duration, 
  isUnlocked,
  onComplete 
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Simulation de progression vidéo
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && isUnlocked) {
      interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 1;
          if (newProgress >= 100) {
            setIsCompleted(true);
            setIsPlaying(false);
            onComplete?.();
            return 100;
          }
          return newProgress;
        });
      }, 200); // Progression rapide pour demo
    }
    return () => clearInterval(interval);
  }, [isPlaying, isUnlocked, onComplete]);

  const handlePlayPause = () => {
    if (!isUnlocked) return;
    setIsPlaying(!isPlaying);
  };

  if (!isUnlocked) {
    return (
      <Card className="relative overflow-hidden">
        <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <Lock className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">Contenu Premium</h3>
              <p className="text-gray-300">Inscrivez-vous à la formation pour accéder à cette vidéo</p>
            </div>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {title}
            <Badge variant="secondary">
              <Lock className="h-3 w-3 mr-1" />
              Premium
            </Badge>
          </CardTitle>
          <p className="text-gray-600">{description}</p>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video bg-gray-900 relative group">
        {/* Simulation d'une vidéo avec Vimeo embed */}
        <iframe
          src={`https://player.vimeo.com/video/76979871?badge=0&autopause=0&player_id=0&app_id=58479`}
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
        />
        
        {/* Overlay de contrôle personnalisé */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={handlePlayPause}
            className="bg-white/90 hover:bg-white text-black"
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </Button>
        </div>

        {/* Badge de completion */}
        {isCompleted && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-green-600 text-white">
              <CheckCircle className="h-3 w-3 mr-1" />
              Terminé
            </Badge>
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          <div className="flex items-center gap-2">
            <Badge variant="outline">{duration}</Badge>
            {isCompleted && (
              <Badge className="bg-green-100 text-green-800">
                <CheckCircle className="h-3 w-3 mr-1" />
                Terminé
              </Badge>
            )}
          </div>
        </CardTitle>
        <p className="text-gray-600">{description}</p>
      </CardHeader>

      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Progression</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
}