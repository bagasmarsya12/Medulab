import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle, ChevronRight, ChevronLeft, CheckCircle, XCircle, AlertCircle, Flag, Menu, ZoomIn } from 'lucide-react';
import { Button } from '../ui/Button';
import { ExamQuestion } from '../../types';
import { ImageModal } from '../ui/ImageModal';

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
          <h1 className="text-2xl font-bold text-white mb-2">Mini Tryout: Sistem Respirasi & Klinis</h1>
          <p className="text-teal-100">Uji pemahaman klinis Anda dengan simulasi kasus nyata.</p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-100">
              <span className="block text-2xl font-bold text-slate-900">10</span>
              <span className="text-xs text-slate-500 uppercase font-semibold">Menit</span>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-100">
              <span className="block text-2xl font-bold text-slate-900">10</span>
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
                <span>Anda dapat berpindah antar soal dan menandai soal yang masih ragu.</span>
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
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(new Set());
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [viewingImage, setViewingImage] = useState<string | null>(null);


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

  const toggleFlag = () => {
    const questionId = questions[currentIdx].id;
    setFlaggedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const jumpToQuestion = (index: number) => {
    setCurrentIdx(index);
  };

  const getQuestionStatus = (questionId: string) => {
    if (flaggedQuestions.has(questionId)) {
      return 'flagged';
    }
    if (answers[questionId] !== undefined) {
      return 'answered';
    }
    return 'unanswered';
  };

  const currentQuestion = questions[currentIdx];
  const isFlagged = flaggedQuestions.has(currentQuestion.id);

  return (
    <>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Menu className="h-5 w-5 text-slate-600" />
            </button>
            <span className="font-semibold text-slate-700">
              Soal No. <span className="text-teal-600 text-lg">{currentIdx + 1}</span> <span className="text-slate-400">/ {questions.length}</span>
            </span>
          </div>
          <div className={`flex items-center gap-2 font-mono font-bold text-lg ${timeLeft < 60 ? 'text-rose-600' : 'text-slate-700'}`}>
            <Clock className="h-5 w-5" />
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Main Container */}
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar - Question List */}
          <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-10 w-64 bg-white border-r border-slate-200 transition-transform duration-300 ease-in-out flex flex-col`}
            style={{ top: '64px' }}>
            <div className="p-4 border-b border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm">Daftar Soal</h3>
              <p className="text-xs text-slate-500 mt-1">Klik untuk pindah soal</p>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <div className="grid grid-cols-5 gap-2">
                {questions.map((q, idx) => {
                  const status = getQuestionStatus(q.id);
                  let bgColor = 'bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-200';

                  if (status === 'flagged') {
                    bgColor = 'bg-amber-500 hover:bg-amber-600 text-white border-amber-600';
                  } else if (status === 'answered') {
                    bgColor = 'bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-600';
                  }

                  const isActive = idx === currentIdx;

                  return (
                    <button
                      key={q.id}
                      onClick={() => jumpToQuestion(idx)}
                      className={`
                      aspect-square rounded-lg border-2 font-bold text-sm
                      transition-all duration-200 flex items-center justify-center
                      ${bgColor}
                      ${isActive ? 'ring-2 ring-teal-400 ring-offset-2 scale-110' : ''}
                    `}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="mt-6 pt-4 border-t border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-6 h-6 rounded bg-slate-100 border-2 border-slate-200"></div>
                  <span className="text-slate-600">Belum dijawab</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-6 h-6 rounded bg-emerald-500 border-2 border-emerald-600"></div>
                  <span className="text-slate-600">Sudah dijawab</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-6 h-6 rounded bg-amber-500 border-2 border-amber-600"></div>
                  <span className="text-slate-600">Ditandai (ragu)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Overlay for mobile */}
          {sidebarOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black/20 z-0"
              style={{ top: '64px' }}
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto w-full p-4 sm:p-8">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 min-h-[400px]">
                {/* Question Header with Flag */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <h2 className="text-lg sm:text-xl font-medium text-slate-900 leading-relaxed flex-1">
                    {currentQuestion.question}
                  </h2>
                  <button
                    onClick={toggleFlag}
                    className={`flex-shrink-0 p-2 rounded-lg border-2 transition-all ${isFlagged
                      ? 'bg-amber-500 border-amber-600 text-white hover:bg-amber-600'
                      : 'bg-white border-slate-200 text-slate-400 hover:border-amber-400 hover:text-amber-500'
                      }`}
                    title={isFlagged ? 'Hapus tanda' : 'Tandai soal (ragu)'}
                  >
                    <Flag className="h-5 w-5" fill={isFlagged ? 'currentColor' : 'none'} />
                  </button>
                </div>

                {/* IMAGES RENDER LOGIC */}
                {currentQuestion.images && currentQuestion.images.length > 0 && (
                  <div className={`mb-8 grid gap-4 ${currentQuestion.images.length > 1 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                    {currentQuestion.images.map((imgUrl, i) => (
                      <button 
                        key={i} 
                        onClick={() => setViewingImage(imgUrl)}
                        className={`relative group rounded-lg overflow-hidden border border-slate-200 bg-slate-100 ${currentQuestion.images && currentQuestion.images.length === 1 ? 'max-w-md' : ''}`}>
                         <img 
                           src={imgUrl} 
                           alt={`Lampiran Soal ${i+1}`} 
                           className="w-full h-auto object-contain max-h-80"
                         />
                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer">
                           <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm text-slate-900 px-3 py-1.5 rounded-full text-xs font-semibold">
                              <ZoomIn className="w-4 h-4" /> View Image
                           </div>
                         </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Options */}
                <div className="space-y-3">
                  {currentQuestion.options.map((option, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`p-4 rounded-lg border cursor-pointer transition-all flex items-center gap-4 ${answers[currentQuestion.id] === idx
                        ? 'border-teal-500 bg-teal-50 ring-1 ring-teal-500'
                        : 'border-slate-200 hover:border-teal-200 hover:bg-slate-50'
                        }`}
                    >
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ${answers[currentQuestion.id] === idx ? 'border-teal-600 bg-teal-600' : 'border-slate-300'
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-white border-t border-slate-200 p-4 sticky bottom-0 z-10">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="w-32"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>

            {/* Flag button for mobile */}
            <button
              onClick={toggleFlag}
              className={`sm:hidden p-2 rounded-lg border-2 transition-all ${isFlagged
                ? 'bg-amber-500 border-amber-600 text-white'
                : 'bg-white border-slate-300 text-slate-400'
                }`}
            >
              <Flag className="h-5 w-5" fill={isFlagged ? 'currentColor' : 'none'} />
            </button>

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
      {viewingImage && (
        <ImageModal imageUrl={viewingImage} onClose={() => setViewingImage(null)} />
      )}
    </>
  );
};


// --- VIEW 4: RESULT ---
interface ResultViewProps {
  questions: ExamQuestion[];
  userAnswers: Record<string, number>;
  onReturnDashboard: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({ questions, userAnswers, onReturnDashboard }) => {
  const [viewingImage, setViewingImage] = useState<string | null>(null);
  const correctCount = questions.filter(q => userAnswers[q.id] === q.correctAnswer).length;
  const score = (correctCount / questions.length) * 100;
  const isPassed = score >= 70;

  return (
    <>
      <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
        <div className="max-w-3xl mx-auto">

          {/* Header Card */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-900 mb-6">Hasil Ujian Anda</h1>

            <div className="flex flex-col items-center justify-center mb-6">
              <div className={`w-32 h-32 rounded-full border-8 flex items-center justify-center mb-4 ${isPassed ? 'border-emerald-100 text-emerald-600' : 'border-rose-100 text-rose-600'
                }`}>
                <span className="text-4xl font-bold">{Math.round(score)}</span>
              </div>
              <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide ${isPassed ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
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

              return (
                <div key={q.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-slate-100">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500 text-sm">
                        {idx + 1}
                      </span>
                      <p className="text-slate-900 font-medium leading-relaxed mt-1">{q.question}</p>
                    </div>

                    {/* IMAGES IN REVIEW */}
                    {q.images && q.images.length > 0 && (
                       <div className={`mb-6 ml-11 grid gap-4 ${q.images.length > 1 ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-1'}`}>
                         {q.images.map((imgUrl, i) => (
                           <button 
                              key={i}
                              onClick={() => setViewingImage(imgUrl)}
                              className={`rounded-lg overflow-hidden border border-slate-200 bg-slate-50 ${q.images && q.images.length === 1 ? 'max-w-sm' : ''} group relative`}
                           >
                              <img src={imgUrl} alt="Soal" className="w-full h-auto object-cover" />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <ZoomIn className="w-6 h-6 text-white" />
                              </div>
                           </button>
                         ))}
                       </div>
                    )}

                    {/* All Options with Color Coding */}
                    <div className="space-y-3">
                      {q.options.map((option, optIdx) => {
                        const isCorrectOption = optIdx === q.correctAnswer;
                        const isUserAnswer = optIdx === userAnswer;
                        const optionExplanation = q.optionExplanations?.[optIdx];

                        let bgColor = 'bg-slate-50 border-slate-200 text-slate-700';
                        let icon = null;

                        if (isCorrectOption) {
                          bgColor = 'bg-emerald-50 border-emerald-500 text-emerald-900';
                          icon = <CheckCircle className="h-5 w-5 text-emerald-600" />;
                        } else if (isUserAnswer && !isCorrectOption) {
                          bgColor = 'bg-rose-50 border-rose-500 text-rose-900';
                          icon = <XCircle className="h-5 w-5 text-rose-600" />;
                        }

                        return (
                          <div
                            key={optIdx}
                            className={`p-4 rounded-lg border-2 ${bgColor}`}
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-0.5">
                                {icon || <div className="w-5 h-5" />}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-semibold text-sm">
                                    {String.fromCharCode(65 + optIdx)}.
                                  </span>
                                  {isUserAnswer && (
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/50 font-medium">
                                      Jawaban Anda
                                    </span>
                                  )}
                                  {isCorrectOption && (
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/50 font-medium">
                                      Jawaban Benar
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm leading-relaxed mb-2">{option}</p>

                                {/* Per-option explanation */}
                                {optionExplanation && (
                                  <div className="mt-2 pt-2 border-t border-current/10">
                                    <p className="text-xs leading-relaxed opacity-90">
                                      <span className="font-semibold">Penjelasan: </span>
                                      {optionExplanation}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
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
      {viewingImage && (
        <ImageModal imageUrl={viewingImage} onClose={() => setViewingImage(null)} />
      )}
    </>
  );
};