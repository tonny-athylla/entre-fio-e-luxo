
import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center animate-fade-in-up">


        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-text-light dark:text-text-dark italic font-light tracking-tighter mb-10 leading-[0.9] drop-shadow-sm">
          A arte do feito à mão <br className="hidden md:block" /> com <span className="text-primary italic relative inline-block">essência<span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></span></span>.
        </h1>

        <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-light max-w-2xl leading-relaxed tracking-wide mb-12">
          Crochê de luxo onde cada ponto é uma expressão de tempo, cuidado e elegância atemporal.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <a href="#catalogo" className="group relative px-10 py-4 bg-primary text-white rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 active:scale-95">
            <span className="relative z-10 uppercase tracking-[0.2em] text-[10px] font-bold">Explorar Coleção</span>
            <div className="absolute inset-0 bg-primary-hover translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </a>
          <a href="#sobre" className="group px-10 py-4 border border-stone-300 dark:border-stone-700 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-300 active:scale-95">
            <span className="uppercase tracking-[0.2em] text-[10px] font-bold">Nossa História</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
