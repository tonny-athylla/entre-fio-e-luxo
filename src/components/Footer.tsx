import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, X, MapPin } from 'lucide-react';

const WhatsApp = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsApp = (number: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de solicitar um *atendimento personalizado* para uma peça exclusiva da Entre Fio e Luxo.`);
    window.open(`https://wa.me/${number}?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-stone-50 dark:bg-black/40 pt-32 pb-16 border-t border-stone-200 dark:border-stone-900">
      <div className="max-w-5xl mx-auto text-center px-6">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="font-display text-5xl md:text-7xl text-gray-900 dark:text-white mb-10 tracking-tight">Crie sua obra-prima.</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-xl mx-auto text-xl font-light leading-relaxed">
            Deseja um modelo exclusivo ou quer adaptar cores? Nossa artesã está pronta para transformar seu sonho em linha e luxo.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-4 bg-[#1C1C1C] dark:bg-primary hover:bg-black dark:hover:bg-primary-hover text-white px-12 py-6 rounded-full font-bold shadow-2xl transition-all duration-300"
          >
            <WhatsApp className="w-6 h-6" />
            <span className="uppercase tracking-[0.2em] text-xs">Atendimento Personalizado</span>
          </button>
        </div>

        <div className="flex justify-center gap-12 mb-20 border-y border-stone-200 dark:border-stone-800 py-10">
          <a
            href="https://www.instagram.com/entrefioeluxo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-all hover:-translate-y-1 flex items-center gap-2 group"
          >
            <Instagram size={28} strokeWidth={1.5} />
            <span className="text-xs uppercase tracking-[0.2em] font-medium opacity-0 group-hover:opacity-100 transition-opacity">@entrefioeluxo</span>
          </a>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">
            © 2026 Entre Fio e Luxo. Feito com alma e paciência.
          </p>
          <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400/80">
            Desenvolvido por <a href="https://www.instagram.com/tonnyathylla" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-bold underline decoration-primary/30 underline-offset-4">Tonny Athylla</a>
          </p>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-md"
              onClick={() => setIsModalOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl bg-white dark:bg-stone-900 rounded-[3rem] shadow-2xl p-8 md:p-16"
            >
              <div className="text-center mb-12 pt-4">
                <span className="text-primary uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">Personalização</span>
                <h3 className="font-display text-5xl md:text-6xl italic text-gray-900 dark:text-white mb-6">Atendimento Exclusivo</h3>
                <p className="text-gray-500 dark:text-gray-400 text-lg font-light leading-relaxed max-w-sm mx-auto">
                  Escolha a região para transformar seu sonho em uma peça única.
                </p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => handleWhatsApp('5562982846231')}
                  className="w-full group bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-8 py-5 rounded-2xl flex items-center justify-between hover:bg-primary transition-all duration-500 shadow-lg"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-2 bg-stone-800 dark:bg-stone-100 rounded-lg group-hover:bg-primary-dark transition-colors">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] uppercase tracking-[0.2em] font-black">Goiânia</span>
                      <span className="text-[8px] opacity-60 uppercase tracking-widest">Encomendas</span>
                    </div>
                  </div>
                  <WhatsApp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>

                <button
                  onClick={() => handleWhatsApp('5564993177772')}
                  className="w-full group border-2 border-stone-200 dark:border-stone-800 text-text-light dark:text-white px-8 py-5 rounded-2xl flex items-center justify-between hover:border-primary transition-all duration-500"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-2 bg-stone-100 dark:bg-stone-800 rounded-lg group-hover:bg-primary/10 transition-colors">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] uppercase tracking-[0.2em] font-black">Rio Verde</span>
                      <span className="text-[8px] opacity-60 uppercase tracking-widest text-gray-400/60 group-hover:text-primary/70">Pronta Entrega</span>
                    </div>
                  </div>
                  <WhatsApp className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </button>
              </div>

              <p className="mt-8 text-[10px] uppercase tracking-widest text-gray-400 font-medium italic text-center">
                Sua peça única começa em um simples ponto.
              </p>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(false);
                }}
                className="absolute top-6 right-6 md:top-10 md:right-10 text-stone-400 hover:text-primary hover:scale-110 transition-all duration-300 z-[100] p-4 cursor-pointer"
                aria-label="Fechar"
              >
                <X size={32} strokeWidth={1.5} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
