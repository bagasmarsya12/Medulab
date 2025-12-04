import React, { useState } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';
import { Button } from './ui/Button';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Programs', id: 'programs' },
    { name: 'Learning Partner', id: 'partners' },
    { name: 'Schedule', id: 'schedule' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="bg-teal-600 p-1.5 rounded-lg">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-teal-700 tracking-tight">MEDULAB</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === link.id ? 'text-teal-600 font-semibold' : 'text-slate-600 hover:text-teal-600'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              onClick={() => onNavigate('student')}
            >
              Masuk
            </Button>
            <Button variant="primary">Daftar Sekarang</Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === link.id 
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="pt-4 pb-4 border-t border-slate-200 flex flex-col gap-3 px-5">
             <Button 
                variant="secondary" 
                className="w-full justify-center"
                onClick={() => handleNavClick('student')}
             >
                Masuk
             </Button>
             <Button variant="primary" className="w-full justify-center">Daftar Sekarang</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;