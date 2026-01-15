
import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav className="fixed top-0 w-full z-50 py-3 px-6 md:px-12 flex justify-between items-center backdrop-blur-md bg-white/5 dark:bg-black/5 border-b border-stone-200/50 dark:border-stone-800/50">
      <a href="/" className="flex items-center gap-3 group hover:opacity-90 transition-opacity">
        <img
          alt="Entre Fio e Luxo Icon"
          className="h-8 md:h-10 w-auto dark:invert transition-all brightness-90 contrast-125 object-contain"
          src="/logo-icon.png"
          onError={(e) => { e.currentTarget.src = 'https://picsum.photos/50/50?text=EFL'; }}
        />
        <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-primary dark:text-sand">
          Entre Fio e Luxo
        </span>
      </a>

      <button
        onClick={toggleTheme}
        className="p-2.5 rounded-full bg-sand/50 dark:bg-stone-800/50 backdrop-blur-md border border-stone-200 dark:border-stone-700 text-primary dark:text-gray-300 hover:bg-sand dark:hover:bg-stone-700 transition-all duration-300 shadow-sm"
        aria-label="Toggle Theme"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </nav>
  );
};

export default Navbar;
