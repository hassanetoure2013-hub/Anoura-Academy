import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '@/contexts/AuthContext';
import { NotificationProvider } from '@/contexts/NotificationContext';
import Navbar from '@/components/Navbar';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Courses from '@/pages/Courses';
import CourseInitiation from '@/pages/CourseInitiation';
import CourseIntermediate from '@/pages/CourseIntermediate';
import CourseAdvanced from '@/pages/CourseAdvanced';
import Module1 from '@/pages/Module1';
import MemberArea from '@/pages/MemberArea';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import AdminDashboard from '@/pages/AdminDashboard';
import Payment from '@/pages/Payment';
import LegalTexts from '@/pages/LegalTexts';
import AnimatedHomepage from '@/pages/AnimatedHomepage';
import ProtectedRoute from '@/components/ProtectedRoute';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <NotificationProvider>
            <Router>
              <div className="min-h-screen bg-background font-sans antialiased">
                <Routes>
                  <Route path="/animated" element={<AnimatedHomepage />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/*" element={
                    <>
                      <Navbar />
                      <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/course/initiation" element={<CourseInitiation />} />
                        <Route path="/course/intermediate" element={<CourseIntermediate />} />
                        <Route path="/course/advanced" element={<CourseAdvanced />} />
                        <Route path="/module/1" element={<Module1 />} />
                        <Route path="/member-area" element={<MemberArea />} />
                        <Route path="/member-area/:courseId" element={<MemberArea />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/legal-texts" element={<LegalTexts />} />
                        <Route path="/admin" element={
                          <ProtectedRoute>
                            <AdminDashboard />
                          </ProtectedRoute>
                        } />
                      </Routes>
                    </>
                  } />
                </Routes>
                <Toaster />
              </div>
            </Router>
          </NotificationProvider>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;