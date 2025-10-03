import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Download, 
  FileText, 
  Calendar, 
  User, 
  CheckCircle,
  Star,
  Printer
} from 'lucide-react';

interface CertificateData {
  studentName: string;
  studentEmail: string;
  courseName: string;
  completionDate: Date;
  duration: string;
  modules: number;
  quizScores: number[];
  averageScore: number;
  instructorName: string;
  certificateId: string;
}

interface CertificateGeneratorProps {
  courseId: string;
  courseName: string;
  courseProgress: number;
  completedVideos: string[];
  completedQuizzes: string[];
  quizScores: Record<string, number>;
}

export default function CertificateGenerator({
  courseId,
  courseName,
  courseProgress,
  completedVideos,
  completedQuizzes,
  quizScores
}: CertificateGeneratorProps) {
  const { user } = useAuth();
  const [isGenerating, setIsGenerating] = useState(false);
  const [certificateGenerated, setCertificateGenerated] = useState(false);

  const certificateData: CertificateData = {
    studentName: user?.name || 'Étudiant',
    studentEmail: user?.email || '',
    courseName: courseName,
    completionDate: new Date(),
    duration: '40 heures',
    modules: 3,
    quizScores: Object.values(quizScores),
    averageScore: Object.values(quizScores).length > 0 
      ? Math.round(Object.values(quizScores).reduce((a, b) => a + b, 0) / Object.values(quizScores).length)
      : 0,
    instructorName: 'Dr. Traoré',
    certificateId: `ANOURA-${courseId.toUpperCase()}-${Date.now()}`
  };

  const generateCertificatePDF = async () => {
    setIsGenerating(true);
    
    // Simulation de génération PDF
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Créer le contenu HTML du certificat
    const certificateHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Certificat ANOURA Academy</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap');
          
          body {
            margin: 0;
            padding: 40px;
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .certificate {
            background: white;
            width: 800px;
            padding: 60px;
            border-radius: 20px;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
            border: 8px solid #10b981;
            position: relative;
            overflow: hidden;
          }
          
          .certificate::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 8px;
            background: linear-gradient(90deg, #10b981, #059669, #047857);
          }
          
          .header {
            text-align: center;
            margin-bottom: 40px;
          }
          
          .logo {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #10b981, #059669);
            border-radius: 50%;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 32px;
            font-weight: bold;
          }
          
          .academy-name {
            font-family: 'Playfair Display', serif;
            font-size: 28px;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 10px;
          }
          
          .subtitle {
            color: #6b7280;
            font-size: 16px;
            font-weight: 400;
          }
          
          .certificate-title {
            font-family: 'Playfair Display', serif;
            font-size: 48px;
            font-weight: 700;
            color: #10b981;
            text-align: center;
            margin: 40px 0;
            text-shadow: 0 2px 4px rgba(16, 185, 129, 0.1);
          }
          
          .recipient-section {
            text-align: center;
            margin: 40px 0;
          }
          
          .recipient-text {
            font-size: 18px;
            color: #4b5563;
            margin-bottom: 15px;
          }
          
          .recipient-name {
            font-family: 'Playfair Display', serif;
            font-size: 36px;
            font-weight: 700;
            color: #1f2937;
            border-bottom: 3px solid #10b981;
            display: inline-block;
            padding-bottom: 10px;
            margin-bottom: 20px;
          }
          
          .course-info {
            text-align: center;
            margin: 40px 0;
            background: #f8fafc;
            padding: 30px;
            border-radius: 15px;
            border-left: 5px solid #10b981;
          }
          
          .course-name {
            font-size: 24px;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 15px;
          }
          
          .course-details {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 20px;
          }
          
          .detail-item {
            text-align: center;
          }
          
          .detail-label {
            font-size: 14px;
            color: #6b7280;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .detail-value {
            font-size: 18px;
            font-weight: 600;
            color: #1f2937;
            margin-top: 5px;
          }
          
          .performance {
            display: flex;
            justify-content: center;
            gap: 40px;
            margin: 30px 0;
          }
          
          .score-badge {
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 15px 25px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 18px;
            box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
          }
          
          .signatures {
            display: flex;
            justify-content: space-between;
            margin-top: 60px;
            padding-top: 30px;
            border-top: 2px solid #e5e7eb;
          }
          
          .signature {
            text-align: center;
            flex: 1;
          }
          
          .signature-line {
            border-bottom: 2px solid #1f2937;
            width: 200px;
            margin: 0 auto 10px;
            height: 40px;
          }
          
          .signature-name {
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 5px;
          }
          
          .signature-title {
            font-size: 14px;
            color: #6b7280;
          }
          
          .certificate-id {
            position: absolute;
            bottom: 20px;
            right: 30px;
            font-size: 12px;
            color: #9ca3af;
            font-family: 'Courier New', monospace;
          }
          
          .watermark {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
            font-size: 120px;
            color: rgba(16, 185, 129, 0.05);
            font-weight: 900;
            z-index: 0;
            pointer-events: none;
          }
          
          .content {
            position: relative;
            z-index: 1;
          }
          
          @media print {
            body {
              background: white;
              padding: 0;
            }
            
            .certificate {
              box-shadow: none;
              border: 2px solid #10b981;
            }
          }
        </style>
      </head>
      <body>
        <div class="certificate">
          <div class="watermark">ANOURA</div>
          
          <div class="content">
            <div class="header">
              <div class="logo">A</div>
              <div class="academy-name">ANOURA Academy</div>
              <div class="subtitle">Centre d'Excellence en Formation Professionnelle</div>
            </div>
            
            <div class="certificate-title">Certificat de Réussite</div>
            
            <div class="recipient-section">
              <div class="recipient-text">Décerné à</div>
              <div class="recipient-name">${certificateData.studentName}</div>
              <div class="recipient-text">pour avoir complété avec succès la formation</div>
            </div>
            
            <div class="course-info">
              <div class="course-name">${certificateData.courseName}</div>
              
              <div class="course-details">
                <div class="detail-item">
                  <div class="detail-label">Durée</div>
                  <div class="detail-value">${certificateData.duration}</div>
                </div>
                <div class="detail-item">
                  <div class="detail-label">Modules</div>
                  <div class="detail-value">${certificateData.modules} modules</div>
                </div>
                <div class="detail-item">
                  <div class="detail-label">Date d'achèvement</div>
                  <div class="detail-value">${certificateData.completionDate.toLocaleDateString('fr-FR')}</div>
                </div>
                <div class="detail-item">
                  <div class="detail-label">Score moyen</div>
                  <div class="detail-value">${certificateData.averageScore}%</div>
                </div>
              </div>
              
              <div class="performance">
                <div class="score-badge">
                  ⭐ Score Excellent: ${certificateData.averageScore}%
                </div>
              </div>
            </div>
            
            <div class="signatures">
              <div class="signature">
                <div class="signature-line"></div>
                <div class="signature-name">${certificateData.instructorName}</div>
                <div class="signature-title">Formateur Principal</div>
              </div>
              <div class="signature">
                <div class="signature-line"></div>
                <div class="signature-name">Directeur ANOURA</div>
                <div class="signature-title">Directeur Académique</div>
              </div>
            </div>
          </div>
          
          <div class="certificate-id">ID: ${certificateData.certificateId}</div>
        </div>
      </body>
      </html>
    `;

    // Créer et télécharger le fichier
    const blob = new Blob([certificateHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Certificat_${certificateData.studentName.replace(/\s+/g, '_')}_${courseId}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setIsGenerating(false);
    setCertificateGenerated(true);
  };

  const previewCertificate = () => {
    // Ouvrir un aperçu dans une nouvelle fenêtre
    const previewWindow = window.open('', '_blank', 'width=900,height=700');
    if (previewWindow) {
      previewWindow.document.write(`
        <div style="font-family: Arial, sans-serif; padding: 20px; text-align: center;">
          <h2 style="color: #10b981;">Aperçu du Certificat</h2>
          <div style="border: 3px solid #10b981; padding: 40px; margin: 20px; border-radius: 10px; background: #f8fafc;">
            <div style="font-size: 32px; font-weight: bold; color: #10b981; margin-bottom: 20px;">
              🏆 CERTIFICAT DE RÉUSSITE
            </div>
            <div style="font-size: 18px; margin-bottom: 15px;">Décerné à</div>
            <div style="font-size: 28px; font-weight: bold; color: #1f2937; border-bottom: 2px solid #10b981; display: inline-block; padding-bottom: 10px; margin-bottom: 20px;">
              ${certificateData.studentName}
            </div>
            <div style="font-size: 16px; margin-bottom: 20px;">pour avoir complété avec succès</div>
            <div style="font-size: 22px; font-weight: bold; color: #1f2937; margin-bottom: 30px;">
              ${certificateData.courseName}
            </div>
            <div style="display: flex; justify-content: space-around; margin: 30px 0;">
              <div>
                <div style="font-weight: bold;">Durée:</div>
                <div>${certificateData.duration}</div>
              </div>
              <div>
                <div style="font-weight: bold;">Score moyen:</div>
                <div>${certificateData.averageScore}%</div>
              </div>
              <div>
                <div style="font-weight: bold;">Date:</div>
                <div>${certificateData.completionDate.toLocaleDateString('fr-FR')}</div>
              </div>
            </div>
            <div style="margin-top: 40px; font-size: 12px; color: #666;">
              ID: ${certificateData.certificateId}
            </div>
          </div>
          <button onclick="window.close()" style="background: #10b981; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 20px;">
            Fermer l'aperçu
          </button>
        </div>
      `);
    }
  };

  if (courseProgress < 100) {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Award className="h-10 w-10 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Certificat en cours
        </h3>
        <p className="text-gray-600 mb-4">
          Terminez toutes les vidéos et réussissez tous les quiz pour obtenir votre certificat.
        </p>
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Progression</span>
            <span>{Math.round(courseProgress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${courseProgress}%` }}
            ></div>
          </div>
        </div>
        <p className="text-sm text-gray-500">
          Encore {Math.round(100 - courseProgress)}% à compléter
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Félicitations */}
      <div className="text-center py-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Award className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-green-700 mb-2">
          🎉 Félicitations !
        </h3>
        <p className="text-gray-600 mb-6">
          Vous avez terminé la formation avec succès. Votre certificat est prêt à être généré.
        </p>
        
        <div className="flex items-center justify-center gap-2 mb-4">
          <CheckCircle className="h-5 w-5 text-green-600" />
          <span className="text-green-700 font-medium">Formation complétée à 100%</span>
        </div>
      </div>

      {/* Résumé de performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Résumé de Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{completedVideos.length}</div>
              <p className="text-sm text-gray-600">Vidéos complétées</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{completedQuizzes.length}</div>
              <p className="text-sm text-gray-600">Quiz réussis</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{certificateData.averageScore}%</div>
              <p className="text-sm text-gray-600">Score moyen</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{certificateData.duration}</div>
              <p className="text-sm text-gray-600">Temps d'étude</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <Award className="h-5 w-5 text-green-600" />
              <span className="font-semibold text-green-800">Performance Excellente</span>
            </div>
            <p className="text-sm text-green-700">
              Votre score moyen de {certificateData.averageScore}% démontre une excellente maîtrise des concepts enseignés.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Détails du certificat */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Détails du Certificat
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Nom du bénéficiaire</label>
              <p className="font-semibold">{certificateData.studentName}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Formation</label>
              <p className="font-semibold">{certificateData.courseName}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Date d'achèvement</label>
              <p className="font-semibold">{certificateData.completionDate.toLocaleDateString('fr-FR')}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Formateur</label>
              <p className="font-semibold">{certificateData.instructorName}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">ID Certificat</label>
              <p className="font-mono text-sm bg-gray-100 p-2 rounded">{certificateData.certificateId}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Statut</label>
              <Badge className="bg-green-100 text-green-800">
                <CheckCircle className="h-3 w-3 mr-1" />
                Validé
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={previewCertificate}
          variant="outline" 
          className="flex-1"
        >
          <FileText className="h-4 w-4 mr-2" />
          Aperçu du Certificat
        </Button>
        
        <Button 
          onClick={generateCertificatePDF}
          disabled={isGenerating}
          className="flex-1 bg-green-600 hover:bg-green-700"
        >
          {isGenerating ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Génération en cours...
            </>
          ) : (
            <>
              <Download className="h-4 w-4 mr-2" />
              Télécharger le Certificat
            </>
          )}
        </Button>
      </div>

      {certificateGenerated && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="font-semibold text-green-800">Certificat généré avec succès !</span>
          </div>
          <p className="text-sm text-green-700">
            Votre certificat a été téléchargé. Vous pouvez l'imprimer ou le partager sur vos réseaux professionnels.
          </p>
          <div className="mt-3 flex gap-2">
            <Button size="sm" variant="outline" onClick={() => window.print()}>
              <Printer className="h-3 w-3 mr-1" />
              Imprimer
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}