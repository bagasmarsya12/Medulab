import React from 'react';
import { Button } from './ui/Button';
import { CheckCircle2, PlayCircle } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const Hero: React.FC = () => {
  return (
    <section className="bg-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 border border-teal-100 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-teal-700">New Intake</span>
                <span className="ml-2 text-sm text-teal-600">Batch Mei 2025 Dibuka</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h1 className="text-4xl tracking-tight font-bold text-slate-900 sm:text-5xl md:text-6xl mb-6 leading-tight">
                Menjadi Dokter Kompeten bersama <span className="text-teal-600">Medulab</span>.
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-lg text-slate-600 leading-relaxed mb-8">
                Bimbingan belajar kedokteran dengan kurikulum terstruktur, pengajar First Taker terbaik, dan pendampingan Course Director di setiap kelas.
              </p>
            </FadeIn>
            
            <FadeIn delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="primary" className="h-12 px-8 text-base shadow-lg shadow-teal-600/20 hover:shadow-teal-600/30 hover:-translate-y-0.5 transition-all">
                  Lihat Pilihan Program
                </Button>
              </div>
            </FadeIn>

            {/* Trust Badges */}
            <FadeIn delay={400}>
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
            </FadeIn>
          </div>

          {/* Right Image */}
          <div className="mt-12 lg:mt-0 lg:col-span-6 relative">
            <FadeIn delay={500} direction="none" className="animate-float">
               <div className="absolute inset-0 bg-teal-600 rounded-3xl transform -rotate-3 opacity-5 translate-x-4 translate-y-4"></div>
               <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-50 aspect-[4/3] group">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-21876ce7234f?auto=format&fit=crop&q=80&w=1600"
                    alt="Medical students and doctor learning" 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4 animate-fade-in">
                      <div className="bg-teal-100 p-2.5 rounded-full relative">
                         <PlayCircle className="w-6 h-6 text-teal-600" />
                         <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                          </span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Live Mentoring Session</p>
                        <p className="text-xs text-slate-500">Dr. Kevin Sanjaya is discussing Cardiology Case</p>
                      </div>
                  </div>
               </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;