import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import LearningMethod from './components/LearningMethod';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Partners from './components/Partners';
import Schedule from './components/Schedule';

function App() {
  const [activePage, setActivePage] = useState('home');

  const handleNavigation = (page: string) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'programs':
        return (
          <>
            <div className="bg-white py-12 border-b border-slate-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-3xl font-bold text-slate-900">Program Bimbingan</h1>
                <p className="mt-2 text-slate-600">Pilihan program terbaik untuk persiapan UKMPPD Anda.</p>
              </div>
            </div>
            <Courses />
            <LearningMethod />
          </>
        );
      case 'partners':
        return <Partners />;
      case 'schedule':
        return <Schedule />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <Features />
            <Courses />
            <LearningMethod />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar onNavigate={handleNavigation} currentPage={activePage} />
      <main className="flex-grow">
        {renderContent()}
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;