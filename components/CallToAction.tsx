import React from 'react';
import { Button } from './ui/Button';
import { MessageCircle } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1600" 
          alt="Medical Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-teal-900/90 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
          Siap Menghadapi UKMPPD?
        </h2>
        <p className="text-teal-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Bergabung dengan ribuan partner lain yang telah lulus kompetensi bersama Medulab. Dapatkan akses materi lengkap dan bimbingan eksklusif sekarang.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="white" className="w-full sm:w-auto px-8 h-12 text-base font-semibold shadow-lg">
            <MessageCircle className="mr-2 h-5 w-5" />
            Hubungi Admin via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;