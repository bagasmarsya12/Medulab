import React from 'react';
import { LayoutDashboard, BookOpen, Clock, Calendar, Settings, PlayCircle, BarChart2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

interface StudentDashboardProps {
  onStartExam: () => void;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ onStartExam }) => {
  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-100">
          {/* Replaced Icon with Logo Component */}
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-8" textClassName="text-lg" />
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-teal-700 bg-teal-50 rounded-lg">
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
            <BookOpen className="h-5 w-5" />
            My Modules
          </button>
          <button 
            onClick={onStartExam}
            className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors"
          >
            <Clock className="h-5 w-5" />
            Tryout Online
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
            <Calendar className="h-5 w-5" />
            Schedule
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
            <Settings className="h-5 w-5" />
            Settings
          </button>
        </nav>

        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100&h=100" 
              alt="Profile" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-slate-900">Dr. Rizky</p>
              <p className="text-xs text-slate-500">Batch 2024</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-6 py-8">
          
          <header className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900">Selamat Pagi, Dr. Rizky</h1>
            <p className="text-slate-600">Siap untuk melanjutkan pembelajaran hari ini?</p>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-slate-500">Learning Progress</h3>
                <div className="p-2 bg-blue-50 rounded-lg">
                  <BarChart2 className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-slate-900">75%</span>
                <span className="text-sm text-emerald-600 mb-1 font-medium">+12% this week</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-slate-500">Average Score</h3>
                <div className="p-2 bg-purple-50 rounded-lg">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-slate-900">82.5</span>
                <span className="text-sm text-slate-400 mb-1">/ 100</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-slate-500">Next Class</h3>
                <div className="p-2 bg-orange-50 rounded-lg">
                  <Calendar className="h-5 w-5 text-orange-600" />
                </div>
              </div>
              <div>
                <span className="text-lg font-bold text-slate-900 block truncate">Kardiologi</span>
                <span className="text-sm text-slate-500">Tomorrow, 19:00 WIB</span>
              </div>
            </div>
          </div>

          {/* Continue Learning */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
             <div className="p-6 sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center gap-4 mb-4 sm:mb-0">
                   <div className="h-16 w-24 bg-slate-200 rounded-lg flex-shrink-0 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                      <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=300&h=200" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="thumbnail" />
                      <PlayCircle className="h-8 w-8 text-white relative z-10" />
                   </div>
                   <div>
                      <h3 className="text-lg font-bold text-slate-900">Penanganan Gagal Jantung Akut</h3>
                      <p className="text-sm text-slate-500">Modul Kardiologi • 45m left</p>
                      <div className="w-48 h-1.5 bg-slate-100 rounded-full mt-2">
                         <div className="h-full bg-teal-600 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                   </div>
                </div>
                <Button variant="primary">Resume Lesson</Button>
             </div>
          </div>

          {/* Mobile Only: Tryout Button */}
          <div className="md:hidden">
             <Button 
                variant="primary" 
                className="w-full justify-center h-12 text-base shadow-md"
                onClick={onStartExam}
             >
                <Clock className="mr-2 h-5 w-5" />
                Mulai Tryout Online
             </Button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;