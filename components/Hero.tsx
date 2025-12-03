import React from 'react';
import { Button } from './ui/Button';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 border border-teal-100 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wide text-teal-700">New Intake</span>
              <span className="ml-2 text-sm text-teal-600">Batch Mei 2025 Dibuka</span>
            </div>
            
            <h1 className="text-4xl tracking-tight font-bold text-slate-900 sm:text-5xl md:text-6xl mb-6 leading-tight">
              Menjadi Dokter Kompeten bersama <span className="text-teal-600">Medulab</span>.
            </h1>
            
            <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-lg text-slate-600 leading-relaxed mb-8">
              Bimbingan belajar kedokteran dengan kurikulum terstruktur, pengajar First Taker terbaik, dan pendampingan Course Director di setiap kelas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" className="h-12 px-8 text-base">
                Lihat Pilihan Program
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-x-8 gap-y-3">
               <div className="flex items-center gap-2">
                 <CheckCircle2 className="h-5 w-5 text-teal-600" />
                 <span className="text-sm font-medium text-slate-600">First Taker Instructors</span>
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle2 className="h-5 w-5 text-teal-600" />
                 <span className="text-sm font-medium text-slate-600">High Pass Rate</span>
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle2 className="h-5 w-5 text-teal-600" />
                 <span className="text-sm font-medium text-slate-600">Real CBT Simulation</span>
               </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="mt-12 lg:mt-0 lg:col-span-6 relative">
             <div className="absolute inset-0 bg-teal-600 rounded-3xl transform -rotate-3 opacity-5 translate-x-4 translate-y-4"></div>
             <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-50 aspect-[4/3] flex items-center justify-center">
                {/* Abstract placeholder for high-quality medical imagery */}
                <div className="text-center p-8">
                  <div className="inline-block bg-teal-100 rounded-full p-4 mb-4">
                     <svg className="w-12 h-12 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                     </svg>
                  </div>
                  <p className="text-slate-400 font-medium">High Fidelity Medical Simulation Image</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
