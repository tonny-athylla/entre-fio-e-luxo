
import React from 'react';
import { Diamond, Fingerprint, PenLine } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Diamond size={40} strokeWidth={1} />,
      title: "Design Autoral",
      desc: "Peças exclusivas criadas para transcender tendências passageiras."
    },
    {
      icon: <Fingerprint size={40} strokeWidth={1} />,
      title: "Essência Artesanal",
      desc: "Cada ponto carrega a alma e a dedicação de horas de trabalho manual."
    },
    {
      icon: <PenLine size={40} strokeWidth={1} />,
      title: "Sua Versão",
      desc: "Personalizamos cores e detalhes para que a peça seja verdadeiramente sua."
    }
  ];

  return (
    <section className="py-40 px-6 md:px-16 bg-sand/20 dark:bg-background-dark/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-12">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center space-y-6 p-10 group animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="text-primary p-4 rounded-2xl bg-white dark:bg-stone-900 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              {f.icon}
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-3xl text-text-light dark:text-gray-100 italic">{f.title}</h3>
              <p className="text-gray-500 dark:text-gray-500 text-base font-light max-w-xs leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
