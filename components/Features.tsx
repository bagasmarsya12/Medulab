import React from 'react';
import { FEATURES } from '../constants';
import { FadeIn } from './ui/FadeIn';

const Features: React.FC = () => {
  return (
    <section className="bg-slate-50 py-20 lg:py-28 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-base font-semibold text-teal-600 uppercase tracking-wide">Why Medulab?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Your Lifelong Learning Partner
            </p>
            <p className="mt-4 text-lg text-slate-600">
              Kami berkomitmen memberikan pengalaman belajar terbaik dengan standar kompetensi dokter Indonesia.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <FadeIn key={feature.id} delay={idx * 100}>
              <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="h-12 w-12 bg-teal-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;