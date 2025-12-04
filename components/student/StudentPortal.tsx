import React, { useState } from 'react';
import StudentDashboard from './StudentDashboard';
import { IntroView, ExamView, ResultView } from './ExamViews';
import { EXAM_QUESTIONS } from '../../constants';
import { Button } from '../ui/Button';

// Portal State Machine
type PortalView = 'DASHBOARD' | 'INTRO' | 'EXAM' | 'RESULT';

interface StudentPortalProps {
  onLogout: () => void;
}

const StudentPortal: React.FC<StudentPortalProps> = ({ onLogout }) => {
  const [currentView, setCurrentView] = useState<PortalView>('DASHBOARD');
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});

  const handleStartExam = () => setCurrentView('EXAM');
  
  const handleSubmitExam = (answers: Record<string, number>) => {
    setUserAnswers(answers);
    setCurrentView('RESULT');
  };

  const handleReturnToDashboard = () => {
    setCurrentView('DASHBOARD');
    setUserAnswers({});
  };

  // Render Logic
  if (currentView === 'DASHBOARD') {
    return (
      <div className="relative">
        <StudentDashboard onStartExam={() => setCurrentView('INTRO')} />
        <div className="fixed top-4 right-6 md:top-6 md:right-8 z-50">
           <Button variant="ghost" onClick={onLogout} className="text-sm text-rose-500 hover:text-rose-600 hover:bg-rose-50">
             Logout
           </Button>
        </div>
      </div>
    );
  }

  if (currentView === 'INTRO') {
    return (
      <IntroView 
        onStart={handleStartExam} 
        onBack={() => setCurrentView('DASHBOARD')} 
      />
    );
  }

  if (currentView === 'EXAM') {
    return (
      <ExamView 
        questions={EXAM_QUESTIONS} 
        onSubmit={handleSubmitExam} 
      />
    );
  }

  if (currentView === 'RESULT') {
    return (
      <ResultView 
        questions={EXAM_QUESTIONS} 
        userAnswers={userAnswers} 
        onReturnDashboard={handleReturnToDashboard} 
      />
    );
  }

  return null;
};

export default StudentPortal;