
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-40 px-6 md:px-16 bg-white dark:bg-stone-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        <div className="lg:col-span-7 relative animate-fade-in-up">
          <div className="absolute -inset-4 bg-sand/30 dark:bg-stone-900/50 -z-10 rounded-2xl rotate-1"></div>
          <img
            alt="Detalhe de sousplat artesanal premium"
            className="w-full aspect-[16/10] object-cover rounded-xl shadow-2xl grayscale-[0.05]"
            src={`${import.meta.env.BASE_URL}manifesto.png`}
          />
        </div>

        <div className="lg:col-span-5 space-y-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-4">
            <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold">Manifesto</span>
            <h2 className="font-display text-5xl md:text-7xl italic text-text-light dark:text-text-dark leading-tight">
              Slow Fashion <br /> & Essência
            </h2>
          </div>

          <div className="space-y-8 text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
            <p>
              Na <strong>Entre Fio e Luxo</strong>, cada peça é tecida pacientemente, garantindo um acabamento que máquinas jamais poderiam replicar.
            </p>
            <p>
              Acreditamos no luxo consciente: aquele que respeita o tempo, valoriza o artesão e entrega exclusividade em cada detalhe.
            </p>
          </div>

          <div className="pt-6">
            <span className="inline-block border-b-2 border-primary text-primary pb-2 font-display italic text-3xl">
              Peças com significado real.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
