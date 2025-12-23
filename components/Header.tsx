
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
              ب
            </div>
            <span className="text-xl font-bold tracking-tight text-white">بن عبدالله</span>
          </div>
          <nav className="hidden md:flex space-x-reverse space-x-8 text-sm font-medium">
            <a href="#home" className="text-slate-400 hover:text-blue-400 transition-colors">الرئيسية</a>
            <a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors">عني</a>
            <a href="#articles" className="text-slate-400 hover:text-blue-400 transition-colors">مقالاتي</a>
          </nav>
          <div className="flex items-center gap-3">
             <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                التواصل 
             </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
