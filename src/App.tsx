
import { useState, useEffect } from 'react';
import {
  Moon,
  Sun,
  Diamond,
  Fingerprint,
  Edit3,
  MessageCircle,
  Instagram,
  Mail
} from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on mount
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 py-4 px-6 md:px-12 flex justify-end">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-sand/30 dark:bg-sage-dark/30 backdrop-blur-sm border border-stone-200 dark:border-stone-700 text-primary dark:text-gray-300 hover:bg-sand/50 dark:hover:bg-sage-dark/50 transition-colors"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </nav>

      <header className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-20">
        <motion.div
          className="max-w-5xl mx-auto flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="mb-12 w-48 md:w-64" variants={fadeInUp}>
            <img
              alt="Entre Fio e Luxo Logo"
              className="w-full h-auto object-contain dark:invert dark:opacity-90"
              src="/logo-full.png"
            />
          </motion.div>

          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl text-text-light dark:text-text-dark italic font-light tracking-tight mb-8 leading-[1.1]"
            variants={fadeInUp}
          >
            A arte do feito à mão <br className="hidden md:block" /> com <span className="text-primary italic">alma</span>.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-light max-w-2xl leading-relaxed tracking-wide"
            variants={fadeInUp}
          >
            Crochê de luxo para quem valoriza a essência artesanal e o tempo dedicado a cada ponto.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-16">
            <a href="#catalogo" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent overflow-hidden">
              <span className="absolute inset-x-0 bottom-0 h-px bg-primary transform origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out scale-x-50"></span>
              <span className="relative uppercase tracking-[0.25em] text-xs font-semibold text-text-light dark:text-text-dark group-hover:text-primary transition-colors duration-300">
                Ver Coleção
              </span>
            </a>
          </motion.div>
        </motion.div>
      </header>

      <section className="py-32 px-6 md:px-16 bg-sand dark:bg-background-dark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div
            className="order-2 md:order-1 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-primary/10 translate-x-4 translate-y-4 -z-10 rounded-sm"></div>
            <img
              alt="Mãos trabalhando com fio de crochê"
              className="w-full h-auto rounded-sm shadow-xl grayscale-[0.2]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVYZJnD0gH4prMHbG2xma5caXSdfM7ujJkZKUQBjJeED0WpTOCshYTa1acB5-R-UeVm6ImrYUnV7PgElbsYdVdMme-AM3aVm4Bmtq122vIuZP9EygWliEGJ-GnhFJElZFVa3vvCv-lyrJ3wQe0j5UdbLFFeT8dbRVYpzrFGTBMxwQN2dj5kOYHpkiaI3IoNqUghI7Tl08pXpbri1nnc7Z1X4EkoSnsob0UA_jvvv0Fp89R-l46pyGuYNdF5Rpr9nURsMwstkLbtb4"
            />
          </motion.div>
          <motion.div
            className="order-1 md:order-2 space-y-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-display text-5xl md:text-6xl italic text-text-light dark:text-text-dark">Slow Fashion & Alma</h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 font-light leading-loose">
              <p>
                Na <strong>Entre Fio e Luxo</strong>, cada ponto conta uma história. Acreditamos no processo <em>'one-by-one'</em>, onde cada peça é tecida pacientemente, garantindo um acabamento impecável.
              </p>
              <p>
                Não vendemos apenas bolsas ou acessórios; entregamos tempo, dedicação e a beleza singular do que é feito humanamente.
              </p>
            </div>
            <div className="pt-4">
              <span className="inline-block border-b border-primary text-primary pb-1 font-display italic text-2xl">Peças com significado.</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-16 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-stone-200 dark:divide-stone-800">
          <Feature
            icon={<Diamond size={32} strokeWidth={1} />}
            title="Design Autoral"
            description="Peças desenhadas para transcender tendências."
            delay={0}
          />
          <Feature
            icon={<Fingerprint size={32} strokeWidth={1} />}
            title="Feito à Mão"
            description="Cada ponto carrega a dedicação de horas de trabalho."
            delay={0.2}
          />
          <Feature
            icon={<Edit3 size={32} strokeWidth={1} />}
            title="Personalização"
            description="Cores e detalhes ajustados ao seu desejo."
            delay={0.4}
          />
        </div>
      </section>

      <section id="catalogo" className="py-40 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="text-center mb-32">
          <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">Nossa Seleção</span>
          <h2 className="font-display text-6xl md:text-7xl text-text-light dark:text-text-dark italic font-light">Catálogo Essencial</h2>

          <div className="flex justify-center gap-8 mt-12 text-sm uppercase tracking-widest text-gray-400 font-medium">
            <button className="text-text-light dark:text-white border-b border-primary pb-1">Todas</button>
            <button className="hover:text-primary transition-colors">Mesa Posta</button>
            <button className="hover:text-primary transition-colors">Decoração</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-32">
          <ProductCard
            title="Sousplat Imperial"
            image="/products/sousplat-rosa.jpg"
            price="R$ 189,00"
            index={0}
          />
          <ProductCard
            title="Kit Tulipas"
            image="/products/kit-tulipas-azul.jpg"
            price="R$ 245,00"
            index={1}
          />
          <ProductCard
            title="Navy Collection"
            image="/products/kit-tulipas-navy.jpg"
            price="R$ 245,00"
            index={2}
          />
          <ProductCard
            title="Mandala Lavanda"
            image="/products/sousplat-lavanda.jpg"
            price="R$ 210,00"
            index={3}
          />
          <ProductCard
            title="Linha Rústica"
            image="/products/kit-mandala-rustica.jpg"
            price="R$ 195,00"
            index={4}
          />
        </div>
      </section>

      <div className="flex justify-center items-center py-12">
        <div className="w-1/3 h-px bg-stone-200 dark:bg-stone-800"></div>
        <div className="px-8 flex items-center justify-center">
          <img src="/logo-icon.png" alt="EFL Icon" className="w-12 h-12 opacity-50 dark:invert" />
        </div>
        <div className="w-1/3 h-px bg-stone-200 dark:bg-stone-800"></div>
      </div>

      <footer className="bg-sand/30 dark:bg-black/30 pt-20 pb-12 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 dark:text-white mb-8">Transforme sua ideia em arte.</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-lg mx-auto text-lg">
            Tem um modelo específico em mente ou gostaria de personalizar uma peça do catálogo? Entre em contato direto conosco.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-block bg-[#25D366] hover:bg-[#20b85a] text-white px-10 py-5 rounded-full font-bold shadow-xl transition-shadow mb-16"
          >
            <div className="flex items-center gap-3">
              <MessageCircle size={24} />
              Conversar no WhatsApp
            </div>
          </motion.a>
          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors p-2">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-pinterest"
              >
                <line x1="12" x2="12" y1="5" y2="19"></line>
                <line x1="5" x2="19" y1="12" y2="12"></line>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors p-2">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-400 dark:text-gray-600 font-body">
            © 2026 Entre Fio e Luxo. Todos os direitos reservados. <br />
            Design com alma artesanal.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div
      className="flex flex-col items-center space-y-4 p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
    >
      <div className="text-primary/80 mb-4 transform hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="font-display text-2xl text-text-light dark:text-gray-200">{title}</h3>
      <p className="text-gray-500 dark:text-gray-500 text-sm font-light max-w-xs">{description}</p>
    </motion.div>
  );
}

function ProductCard({ title, image, price, index }: { title: string, image: string, price: string, index: number }) {
  return (
    <motion.article
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-stone-100 dark:bg-stone-900 mb-6">
        <motion.img
          alt={title}
          className="w-full h-full object-cover"
          src={image}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7 }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

        {/* Quick View Button - Appears on Hover */}
        <div className="absolute inset-x-0 bottom-0 p-6 flex justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <button className="bg-white/90 dark:bg-black/80 backdrop-blur-sm px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-white dark:hover:bg-black transition-colors w-full">
            Detalhes
          </button>
        </div>
      </div>

      <div className="text-center space-y-2">
        <h3 className="font-display text-3xl text-text-light dark:text-text-dark italic font-light group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-xs uppercase tracking-widest text-gray-500">{price}</p>
      </div>
    </motion.article>
  );
}

export default App;

