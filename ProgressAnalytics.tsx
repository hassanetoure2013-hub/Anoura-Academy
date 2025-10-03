import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart
} from 'recharts';
import { 
  TrendingUp, 
  Clock, 
  Award, 
  Target, 
  Users, 
  BookOpen,
  Brain,
  MessageSquare,
  Calendar,
  Star
} from 'lucide-react';

interface StudentProgress {
  studentId: string;
  studentName: string;
  email: string;
  courseId: string;
  courseName: string;
  enrollmentDate: Date;
  lastActivity: Date;
  overallProgress: number;
  videosCompleted: number;
  totalVideos: number;
  quizzesCompleted: number;
  totalQuizzes: number;
  avgQuizScore: number;
  forumPosts: number;
  studyTimeHours: number;
  certificateEarned: boolean;
}

interface CourseAnalytics {
  courseId: string;
  courseName: string;
  totalStudents: number;
  activeStudents: number;
  completionRate: number;
  avgProgress: number;
  avgQuizScore: number;
  totalForumPosts: number;
  avgStudyTime: number;
}

export default function ProgressAnalytics() {
  const [studentsProgress, setStudentsProgress] = useState<StudentProgress[]>([]);
  const [courseAnalytics, setCourseAnalytics] = useState<CourseAnalytics[]>([]);
  const [selectedTimeframe, setSelectedTimeframe] = useState('30days');

  // Données de démonstration
  useEffect(() => {
    const demoStudents: StudentProgress[] = [
      {
        studentId: '1',
        studentName: 'Marie Kouassi',
        email: 'marie.kouassi@example.com',
        courseId: 'initiation-marches-publics',
        courseName: 'Initiation aux Marchés Publics',
        enrollmentDate: new Date('2024-01-15'),
        lastActivity: new Date('2024-01-20'),
        overallProgress: 85,
        videosCompleted: 7,
        totalVideos: 8,
        quizzesCompleted: 2,
        totalQuizzes: 2,
        avgQuizScore: 88,
        forumPosts: 3,
        studyTimeHours: 12.5,
        certificateEarned: false
      },
      {
        studentId: '2',
        studentName: 'Jean-Baptiste Diallo',
        email: 'jb.diallo@example.com',
        courseId: 'initiation-marches-publics',
        courseName: 'Initiation aux Marchés Publics',
        enrollmentDate: new Date('2024-01-10'),
        lastActivity: new Date('2024-01-19'),
        overallProgress: 100,
        videosCompleted: 8,
        totalVideos: 8,
        quizzesCompleted: 2,
        totalQuizzes: 2,
        avgQuizScore: 92,
        forumPosts: 5,
        studyTimeHours: 15.2,
        certificateEarned: true
      },
      {
        studentId: '3',
        studentName: 'Aminata Sow',
        email: 'aminata.sow@example.com',
        courseId: 'initiation-marches-publics',
        courseName: 'Initiation aux Marchés Publics',
        enrollmentDate: new Date('2024-01-12'),
        lastActivity: new Date('2024-01-18'),
        overallProgress: 65,
        videosCompleted: 5,
        totalVideos: 8,
        quizzesCompleted: 1,
        totalQuizzes: 2,
        avgQuizScore: 75,
        forumPosts: 2,
        studyTimeHours: 8.3,
        certificateEarned: false
      },
      {
        studentId: '4',
        studentName: 'Ibrahim Traoré',
        email: 'ibrahim.traore@example.com',
        courseId: 'perfectionnement-marches-publics',
        courseName: 'Perfectionnement Marchés Publics',
        enrollmentDate: new Date('2024-01-08'),
        lastActivity: new Date('2024-01-21'),
        overallProgress: 45,
        videosCompleted: 3,
        totalVideos: 10,
        quizzesCompleted: 1,
        totalQuizzes: 3,
        avgQuizScore: 82,
        forumPosts: 1,
        studyTimeHours: 6.7,
        certificateEarned: false
      }
    ];

    const demoCourseAnalytics: CourseAnalytics[] = [
      {
        courseId: 'initiation-marches-publics',
        courseName: 'Initiation aux Marchés Publics',
        totalStudents: 25,
        activeStudents: 18,
        completionRate: 68,
        avgProgress: 76,
        avgQuizScore: 85,
        totalForumPosts: 47,
        avgStudyTime: 11.2
      },
      {
        courseId: 'perfectionnement-marches-publics',
        courseName: 'Perfectionnement Marchés Publics',
        totalStudents: 15,
        activeStudents: 12,
        completionRate: 53,
        avgProgress: 62,
        avgQuizScore: 79,
        totalForumPosts: 23,
        avgStudyTime: 8.9
      }
    ];

    setStudentsProgress(demoStudents);
    setCourseAnalytics(demoCourseAnalytics);
  }, []);

  // Données pour les graphiques
  const progressDistribution = [
    { range: '0-25%', count: 3, color: '#ef4444' },
    { range: '26-50%', count: 5, color: '#f97316' },
    { range: '51-75%', count: 8, color: '#eab308' },
    { range: '76-100%', count: 12, color: '#22c55e' }
  ];

  const weeklyActivity = [
    { week: 'Sem 1', students: 15, completions: 2 },
    { week: 'Sem 2', students: 22, completions: 5 },
    { week: 'Sem 3', students: 28, completions: 8 },
    { week: 'Sem 4', students: 25, completions: 12 }
  ];

  const quizPerformance = [
    { quiz: 'Module 1', avgScore: 85, attempts: 28 },
    { quiz: 'Module 2', avgScore: 79, attempts: 22 },
    { quiz: 'Module 3', avgScore: 82, attempts: 18 }
  ];

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'text-green-600';
    if (progress >= 60) return 'text-yellow-600';
    if (progress >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  const getProgressBadge = (progress: number) => {
    if (progress >= 80) return <Badge className="bg-green-100 text-green-800">Excellent</Badge>;
    if (progress >= 60) return <Badge className="bg-yellow-100 text-yellow-800">Bon</Badge>;
    if (progress >= 40) return <Badge className="bg-orange-100 text-orange-800">Moyen</Badge>;
    return <Badge className="bg-red-100 text-red-800">Faible</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Analytics de Progression</h2>
        <select 
          value={selectedTimeframe}
          onChange={(e) => setSelectedTimeframe(e.target.value)}
          className="px-3 py-2 border rounded-md"
        >
          <option value="7days">7 derniers jours</option>
          <option value="30days">30 derniers jours</option>
          <option value="90days">3 derniers mois</option>
          <option value="1year">Cette année</option>
        </select>
      </div>

      {/* Métriques globales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Étudiants Actifs</p>
                <p className="text-2xl font-bold">30</p>
                <p className="text-xs text-green-600">+12% ce mois</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Taux de Completion</p>
                <p className="text-2xl font-bold">68%</p>
                <p className="text-xs text-green-600">+5% ce mois</p>
              </div>
              <Award className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Score Moyen Quiz</p>
                <p className="text-2xl font-bold">83%</p>
                <p className="text-xs text-yellow-600">-2% ce mois</p>
              </div>
              <Brain className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Temps d'Étude Moyen</p>
                <p className="text-2xl font-bold">10.1h</p>
                <p className="text-xs text-green-600">+1.2h ce mois</p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="students">Étudiants</TabsTrigger>
          <TabsTrigger value="courses">Cours</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Distribution des progressions */}
            <Card>
              <CardHeader>
                <CardTitle>Distribution des Progressions</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={progressDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="count"
                      label={({ range, count }) => `${range}: ${count}`}
                    >
                      {progressDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Activité hebdomadaire */}
            <Card>
              <CardHeader>
                <CardTitle>Activité Hebdomadaire</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={weeklyActivity}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="students" 
                      stackId="1"
                      stroke="#3b82f6" 
                      fill="#3b82f6" 
                      fillOpacity={0.6}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="completions" 
                      stackId="2"
                      stroke="#10b981" 
                      fill="#10b981" 
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Performance des quiz */}
          <Card>
            <CardHeader>
              <CardTitle>Performance des Quiz</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={quizPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quiz" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="avgScore" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="students" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Progression Individuelle des Étudiants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studentsProgress.map((student) => (
                  <div key={student.studentId} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{student.studentName}</h4>
                        <p className="text-sm text-gray-600">{student.email}</p>
                        <p className="text-xs text-gray-500">
                          Inscrit le {student.enrollmentDate.toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                      <div className="text-right">
                        {getProgressBadge(student.overallProgress)}
                        <p className={`text-2xl font-bold ${getProgressColor(student.overallProgress)}`}>
                          {student.overallProgress}%
                        </p>
                      </div>
                    </div>
                    
                    <Progress value={student.overallProgress} className="mb-3" />
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Vidéos</p>
                        <p className="font-semibold">
                          {student.videosCompleted}/{student.totalVideos}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Quiz</p>
                        <p className="font-semibold">
                          {student.quizzesCompleted}/{student.totalQuizzes} ({student.avgQuizScore}%)
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Posts Forum</p>
                        <p className="font-semibold">{student.forumPosts}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Temps d'Étude</p>
                        <p className="font-semibold">{student.studyTimeHours}h</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3 pt-3 border-t">
                      <p className="text-xs text-gray-500">
                        Dernière activité : {student.lastActivity.toLocaleDateString('fr-FR')}
                      </p>
                      {student.certificateEarned && (
                        <Badge className="bg-green-100 text-green-800">
                          <Award className="h-3 w-3 mr-1" />
                          Certifié
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="space-y-6">
          <div className="grid gap-6">
            {courseAnalytics.map((course) => (
              <Card key={course.courseId}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{course.courseName}</span>
                    <Badge variant="outline">{course.totalStudents} étudiants</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{course.activeStudents}</div>
                      <p className="text-sm text-gray-600">Étudiants Actifs</p>
                      <p className="text-xs text-gray-500">
                        {Math.round((course.activeStudents / course.totalStudents) * 100)}% du total
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{course.completionRate}%</div>
                      <p className="text-sm text-gray-600">Taux de Completion</p>
                      <Progress value={course.completionRate} className="mt-2" />
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{course.avgQuizScore}%</div>
                      <p className="text-sm text-gray-600">Score Moyen Quiz</p>
                      <div className="flex items-center justify-center mt-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-xs ml-1">
                          {course.avgQuizScore >= 80 ? 'Excellent' : course.avgQuizScore >= 70 ? 'Bon' : 'Moyen'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">{course.avgStudyTime}h</div>
                      <p className="text-sm text-gray-600">Temps Moyen</p>
                      <p className="text-xs text-gray-500">{course.totalForumPosts} posts forum</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Tendances de Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={weeklyActivity}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="completions" 
                      stroke="#10b981" 
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Indicateurs Clés</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Engagement</span>
                  </div>
                  <span className="text-green-600 font-bold">+15%</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Objectifs Atteints</span>
                  </div>
                  <span className="text-blue-600 font-bold">85%</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-purple-600" />
                    <span className="font-medium">Participation Forum</span>
                  </div>
                  <span className="text-purple-600 font-bold">72%</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-orange-600" />
                    <span className="font-medium">Assiduité</span>
                  </div>
                  <span className="text-orange-600 font-bold">89%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}