import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle, ChevronRight, ChevronLeft, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { ExamQuestion } from '../../types';

// --- VIEW 2: INTRO ---
interface IntroViewProps {
  onStart: () => void;
  onBack: () => void;
}

export const IntroView: React.FC<IntroViewProps> = ({ onStart, onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-teal-600 p-8 text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Mini Tryout: Sistem Respirasi</h1>
          <p className="text-teal-100">Uji pemahaman klinis Anda dengan simulasi kasus nyata.</p>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-100">
              <span className="block text-2xl font-bold text-slate-900">10</span>
              <span className="text-xs text-slate-500 uppercase font-semibold">Menit</span>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-100">
              <span className="block text-2xl font-bold text-slate-900">5</span>
              <span className="text-xs text-slate-500 uppercase font-semibold">Soal</span>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-100">
              <span className="block text-2xl font-bold text-slate-900">70</span>
              <span className="text-xs text-slate-500 uppercase font-semibold">Pass Grade</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-slate-900 mb-4">Peraturan Ujian:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-600 text-sm">
                <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
                <span>Koneksi internet stabil sangat disarankan.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600 text-sm">
                <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
                <span>Waktu akan terus berjalan, dilarang melakukan pause.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600 text-sm">
                <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
                <span>Mode satu soal per halaman (One way navigation).</span>
              </li>
            </ul>
          </div>

          <div className="flex gap-4">
            <Button variant="secondary" onClick={onBack} className="w-full">Batal</Button>
            <Button variant="primary" onClick={onStart} className="w-full">Mulai Ujian Sekarang</Button>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- VIEW 3: EXAM INTERFACE ---
interface ExamViewProps {
  questions: ExamQuestion[];
  onSubmit: (answers: Record<string, number>) => void;
}

export const ExamView: React.FC<ExamViewProps> = ({ questions, onSubmit }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) {
      onSubmit(answers);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onSubmit, answers]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (idx: number) => {
    setAnswers(prev => ({ ...prev, [questions[currentIdx].id]: idx }));
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      onSubmit(answers);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
  };

  const currentQuestion = questions[currentIdx];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Bar */}
      <div className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-10">
        <span className="font-semibold text-slate-700">
          Soal No. <span className="text-teal-600 text-lg">{currentIdx + 1}</span> <span className="text-slate-400">/ {questions.length}</span>
        </span>
        <div className={`flex items-center gap-2 font-mono font-bold text-lg ${timeLeft < 60 ? 'text-rose-600' : 'text-slate-700'}`}>
          <Clock className="h-5 w-5" />
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 max-w-4xl mx-auto w-full p-4 sm:p-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 min-h-[400px]">
          <h2 className="text-lg sm:text-xl font-medium text-slate-900 leading-relaxed mb-8">
            {currentQuestion.question}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => (
              <div 
                key={idx}
                onClick={() => handleSelectOption(idx)}
                className={`p-4 rounded-lg border cursor-pointer transition-all flex items-center gap-4 ${
                  answers[currentQuestion.id] === idx 
                    ? 'border-teal-500 bg-teal-50 ring-1 ring-teal-500' 
                    : 'border-slate-200 hover:border-teal-200 hover:bg-slate-50'
                }`}
              >
                <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ${
                  answers[currentQuestion.id] === idx ? 'border-teal-600 bg-teal-600' : 'border-slate-300'
                }`}>
                  {answers[currentQuestion.id] === idx && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                </div>
                <span className={`text-sm sm:text-base ${answers[currentQuestion.id] === idx ? 'text-teal-900 font-medium' : 'text-slate-700'}`}>
                  {option}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border-t border-slate-200 p-4 sticky bottom-0 z-10">
        <div className="max-w-4xl mx-auto flex justify-between">
          <Button 
            variant="ghost" 
            onClick={handlePrev} 
            disabled={currentIdx === 0}
            className="w-32"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          
          <Button 
            variant={currentIdx === questions.length - 1 ? 'primary' : 'secondary'}
            onClick={handleNext}
            className="w-32"
          >
            {currentIdx === questions.length - 1 ? 'Finish' : 'Next'} 
            {currentIdx !== questions.length - 1 && <ChevronRight className="ml-2 h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
};


// --- VIEW 4: RESULT ---
interface ResultViewProps {
  questions: ExamQuestion[];
  userAnswers: Record<string, number>;
  onReturnDashboard: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({ questions, userAnswers, onReturnDashboard }) => {
  const correctCount = questions.filter(q => userAnswers[q.id] === q.correctAnswer).length;
  const score = (correctCount / questions.length) * 100;
  const isPassed = score >= 70;

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-6">Hasil Ujian Anda</h1>
          
          <div className="flex flex-col items-center justify-center mb-6">
            <div className={`w-32 h-32 rounded-full border-8 flex items-center justify-center mb-4 ${
              isPassed ? 'border-emerald-100 text-emerald-600' : 'border-rose-100 text-rose-600'
            }`}>
              <span className="text-4xl font-bold">{Math.round(score)}</span>
            </div>
            <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide ${
              isPassed ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
            }`}>
              {isPassed ? 'LULUS' : 'TIDAK LULUS'}
            </div>
          </div>
          
          <p className="text-slate-500">
            Anda menjawab <span className="font-semibold text-slate-900">{correctCount}</span> dari <span className="font-semibold text-slate-900">{questions.length}</span> soal dengan benar.
          </p>
        </div>

        {/* Discussion Section */}
        <div className="space-y-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 ml-1">Pembahasan & Evaluasi</h2>
          
          {questions.map((q, idx) => {
            const userAnswer = userAnswers[q.id];
            const isCorrect = userAnswer === q.correctAnswer;

            return (
              <div key={q.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500 text-sm">
                      {idx + 1}
                    </span>
                    <p className="text-slate-900 font-medium leading-relaxed mt-1">{q.question}</p>
                  </div>
                  
                  <div className="grid gap-2 sm:grid-cols-2">
                     <div className={`p-3 rounded-lg border flex items-center gap-2 ${
                        isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-rose-50 border-rose-200 text-rose-700'
                     }`}>
                        {isCorrect ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                        <span className="text-sm">Jawaban Anda: <span className="font-semibold">{q.options[userAnswer] ?? "Tidak dijawab"}</span></span>
                     </div>
                     {!isCorrect && (
                        <div className="p-3 rounded-lg border bg-emerald-50 border-emerald-200 text-emerald-700 flex items-center gap-2">
                           <CheckCircle className="h-4 w-4" />
                           <span className="text-sm">Kunci: <span className="font-semibold">{q.options[q.correctAnswer]}</span></span>
                        </div>
                     )}
                  </div>
                </div>
                
                <div className="p-6 bg-slate-50">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-teal-600 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-teal-700 mb-1">Pembahasan Medis:</h4>
                      <p className="text-sm text-slate-600 leading-relaxed text-justify">
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center pb-12">
          <Button variant="primary" onClick={onReturnDashboard} className="w-full sm:w-auto min-w-[200px]">
            Kembali ke Dashboard
          </Button>
        </div>

      </div>
    </div>
  );
};