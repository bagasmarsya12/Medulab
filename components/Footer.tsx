import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { Logo } from './ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <Logo className="h-8 w-8" textClassName="text-lg" />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Your Lifelong Learning Partner. Platform bimbingan belajar kedokteran terpercaya.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Programs</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-slate-600 hover:text-teal-600">Comprehensive</a></li>
              <li><a href="#" className="text-sm text-slate-600 hover:text-teal-600">Intensive</a></li>
              <li><a href="#" className="text-sm text-slate-600 hover:text-teal-600">Private Class</a></li>
              <li><a href="#" className="text-sm text-slate-600 hover:text-teal-600">OSCE Prep</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-slate-600 hover:text-teal-600">About Us</a></li>
              <li><a href="#" className="text-sm text-slate-600 hover:text-teal-600">Careers</a></li>
              <li><a href="#" className="text-sm text-slate-600 hover:text-teal-600">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-slate-600 hover:text-teal-600">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-slate-600 hover:text-teal-600">Terms & Condition</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Medulab. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-teal-600 transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-teal-600 transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-teal-600 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;