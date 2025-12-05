import React from 'react';
import { LEARNING_STEPS } from '../constants';
import { FadeIn } from './ui/FadeIn';

const LearningMethod: React.FC = () => {
  return (
    <section className="bg-slate-50 py-20 lg:py-28 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold text-slate-900">Metode Pembelajaran</h2>
            <p className="mt-2 text-slate-600">Alur belajar sistematis untuk hasil maksimal.</p>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEARNING_STEPS.map((step, idx) => (
              <FadeIn key={step.id} delay={idx * 150}>
                <div className="relative flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-50 shadow-sm flex items-center justify-center mb-6 z-10 relative group-hover:border-teal-100 transition-colors duration-300">
                    <div className="absolute top-0 right-0 bg-teal-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                    <step.icon className="h-8 w-8 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed px-4">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningMethod;