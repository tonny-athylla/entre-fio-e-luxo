import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

// Note: Using a custom SVG that looks like a brand-aligned WhatsApp icon since Lucide doesn't have it natively.
// But for a better "brand" look, I'll use the official-ish simplified path:
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

interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  category: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Sousplat Pétalas Rosé",
    price: "Sob consulta",
    image: `${import.meta.env.BASE_URL}products/sousplat-rosa.jpg`,
    category: "Mesa Posta",
    description: "Design exclusivo com bordas em pétalas sobrepostas em tons de rosa e areia."
  },
  {
    id: 2,
    title: "Sousplat Tulipas Serenity",
    price: "Sob consulta",
    image: `${import.meta.env.BASE_URL}products/kit-tulipas-azul.jpg`,
    category: "Mesa Posta",
    description: "Delicado contraste entre o azul serenity e bordado de tulipas em relevo."
  },
  {
    id: 3,
    title: "Sousplat Tulipas Noturno",
    price: "Sob consulta",
    image: `${import.meta.env.BASE_URL}products/kit-tulipas-navy.jpg`,
    category: "Mesa Posta",
    description: "Elegância profunda em azul marinho com detalhes de tulipas em rosa chá."
  },
  {
    id: 5,
    title: "Centro de Mesa Contraste Rubi",
    price: "Sob consulta",
    image: `${import.meta.env.BASE_URL}products/kit-mandala-rustica.jpg`,
    category: "Mesa Posta",
    description: "Composição vibrante em tons terrosos com centro geométrico. Inclui conjunto de porta xícaras."
  },
  {
    id: 6,
    title: "Centro de Mesa Lilás",
    price: "Sob consulta",
    image: `${import.meta.env.BASE_URL}products/centro-mesa-lilas.jpg`,
    category: "Mesa Posta",
    description: "Exuberante peça central em tons de lilás e roxo com pontos rendados e acabamento artesanal impecável."
  },
  {
    id: 7,
    title: "Sousplat Coral Rendado",
    price: "Sob consulta",
    image: `${import.meta.env.BASE_URL}products/sousplat-coral-rendado.jpg`,
    category: "Mesa Posta",
    description: "Trabalho primoroso em tom coral com bordas trabalhadas em pontos rendados."
  },
  {
    id: 8,
    title: "Kit Tulipas Rosa Amorosa",
    price: "Sob consulta",
    image: `${import.meta.env.BASE_URL}products/kit-tulipas-rosa-coracao.jpg`,
    category: "Mesa Posta",
    description: "Conjunto romântico com porta-copos coordenados e detalhe de coração em crochê."
  },
  {
    id: 9,
    title: "Trilho de Mesa Floral",
    price: "Sob consulta",
    image: `${import.meta.env.BASE_URL}products/trilho-mesa-flores.jpg`,
    category: "Mesa Posta",
    description: "Caminho de mesa exuberante composto por centros de mesa e flores aplicadas em relevo."
  },
  {
    id: 10,
    title: "Conjunto Chá de Lavanda",
    price: "Sob consulta",
    image: `${import.meta.env.BASE_URL}products/conjunto-mesa-lavanda.jpg`,
    category: "Mesa Posta",
    description: "Composição delicada em tons de lilás e areia, perfeitos para um café da tarde elegante."
  },
  {
    id: 11,
    title: "Sousplat Tulipas Garden",
    price: "Sob consulta",
    image: `${import.meta.env.BASE_URL}products/tulipas-garden.jpg`,
    category: "Mesa Posta",
    description: "Fundo verde floresta com bordas em ponto tulipa 3D vermelho vibrante. Design clássico e sofisticado."
  }
];

const Gallery: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const handleWhatsApp = (number: string, productTitle: string) => {
    const message = encodeURIComponent(`Olá! Vi a peça *${productTitle}* no site Entre Fio e Luxo e gostaria de saber mais informações sobre a encomenda.`);
    window.open(`https://wa.me/${number}?text=${message}`, '_blank');
  };

  return (
    <section id="catalogo" className="py-48 px-6 md:px-12 max-w-[1800px] mx-auto overflow-hidden">
      <div className="text-center mb-40 animate-fade-in-up">
        <span className="text-primary uppercase tracking-[0.5em] text-[11px] font-black mb-6 block">Exclusividade em cada ponto</span>
        <h2 className="font-display text-7xl md:text-9xl text-text-light dark:text-text-dark italic font-light tracking-tighter">Nossa Coleção</h2>
      </div>

      <div className="relative group/carousel">
        <div className="overflow-visible cursor-grab active:cursor-grabbing px-4 md:px-0">
          <motion.div
            className="flex gap-8 lg:gap-12"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            dragMomentum={false}
            onDragEnd={(_e, { offset, velocity }) => {
              const swipe = offset.x + velocity.x;
              const threshold = 40;
              if (swipe < -threshold) {
                nextSlide();
              } else if (swipe > threshold) {
                prevSlide();
              }
            }}
            animate={{
              x: `calc(-${currentIndex * 100}% - ${currentIndex * (window.innerWidth < 1024 ? 32 : 48)}px)`
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}
          >
            {products.map((p) => (
              <motion.article
                key={p.id}
                className="flex-none cursor-pointer group"
                style={{
                  width: window.innerWidth < 768
                    ? "100%"
                    : `calc((100% - ${(itemsPerPage - 1) * (window.innerWidth < 1024 ? 32 : 48)}px) / ${itemsPerPage})`
                }}
                whileHover={window.innerWidth >= 768 ? { y: -15 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => setSelectedProduct(p)}
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-stone-100 dark:bg-stone-900 mb-8 rounded-2xl shadow-inner">
                  <img
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                    src={p.image}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = `https://picsum.photos/600/750?random=${p.id}`; }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700"></div>

                  <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-700">
                    <p className="text-white text-[10px] mb-6 font-light leading-relaxed tracking-wide italic">
                      {p.description}
                    </p>
                    <button className="bg-white dark:bg-stone-900 text-text-light dark:text-white px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-primary hover:text-white transition-all duration-300 w-full rounded-xl shadow-2xl">
                      Encomendar Peça
                    </button>
                  </div>
                </div>
                <div className="text-center space-y-3">
                  <h3 className="font-display text-4xl text-text-light dark:text-text-dark italic font-light group-hover:text-primary transition-all duration-500">
                    {p.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">
                    {p.price}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-4 md:-left-12 lg:-left-20 -translate-y-1/2 p-4 text-stone-400 hover:text-primary transition-colors z-10"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 font-light" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-4 md:-right-12 lg:-right-20 -translate-y-1/2 p-4 text-stone-400 hover:text-primary transition-colors z-10"
          aria-label="Próximo"
        >
          <ChevronRight className="w-8 h-8 md:w-10 md:h-10 font-light" />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12 md:mt-20">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 transition-all duration-500 rounded-full ${currentIndex === i ? "w-12 bg-primary" : "w-4 bg-stone-200 dark:bg-stone-800 hover:bg-stone-400"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Modal - Encomenda */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-stone-900/40 backdrop-blur-md"
            />

            <motion.div
              layoutId={selectedProduct.id.toString()}
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] // Custom quintic ease-out for luxury feel
              }}
              className="relative w-full max-w-5xl bg-white dark:bg-stone-900 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-primary uppercase tracking-[0.5em] text-[10px] font-black mb-4 block">
                  {selectedProduct.category}
                </span>
                <h3 className="font-display text-5xl md:text-6xl text-text-light dark:text-text-dark italic font-light mb-6">
                  {selectedProduct.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base mb-10 leading-relaxed italic">
                  {selectedProduct.description}
                </p>

                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-2">Falar com uma especialista:</p>

                  <button
                    onClick={() => handleWhatsApp('5562982846231', selectedProduct.title)}
                    className="w-full group bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-8 py-5 rounded-2xl flex items-center justify-between hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-500 shadow-lg"
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
                    onClick={() => handleWhatsApp('5564993177772', selectedProduct.title)}
                    className="w-full group border-2 border-stone-200 dark:border-stone-800 text-text-light dark:text-white px-8 py-5 rounded-2xl flex items-center justify-between hover:border-primary hover:text-primary transition-all duration-500"
                  >
                    <div className="flex items-center gap-4 text-left">
                      <div className="p-2 bg-stone-100 dark:bg-stone-800 rounded-lg group-hover:bg-primary/10 transition-colors">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[12px] uppercase tracking-[0.2em] font-black">Rio Verde</span>
                        <span className="text-[8px] opacity-60 uppercase tracking-widest text-gray-400 group-hover:text-primary/70">Pronta Entrega</span>
                      </div>
                    </div>
                    <WhatsApp className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </button>
                </div>

                <p className="mt-8 text-[9px] text-gray-400 text-center uppercase tracking-widest">
                  Envio para todo o Brasil • Peças artesanais exclusivas
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="flex justify-center items-center py-40 opacity-30 pointer-events-none">
        <div className="w-1/4 h-px bg-stone-300 dark:bg-stone-800"></div>
        <div className="px-12">
          <img
            alt="EFL Icon"
            className="w-16 h-16 dark:invert"
            src={`${import.meta.env.BASE_URL}logo-icon.png`}
            onError={(e) => { e.currentTarget.src = 'https://picsum.photos/64/64'; }}
          />
        </div>
        <div className="w-1/4 h-px bg-stone-300 dark:bg-stone-800"></div>
      </div>
    </section>
  );
};

export default Gallery;
