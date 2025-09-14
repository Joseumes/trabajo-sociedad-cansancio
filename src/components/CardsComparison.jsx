import React from 'react';
import { color, motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const negative = [
  "Aislamiento",
  "Agotamiento",
  "Autoexplotación"
];

const positive = [
  "Inspiración",
  "Comunidad",
  "Lentitud"
];

// Imágenes simbólicas (usamos Unsplash con licencia libre)
const negativeImages = [
  "https://www.shutterstock.com/image-vector/young-thoughtful-woman-drinking-tea-600nw-1704862768.jpg", // persona sola en ventana
  "https://img.freepik.com/vector-gratis/tareas-planificacion-proyecto-director-proyecto_778687-3026.jpg?semt=ais_hybrid&w=740&q=80.png", // reloj de arena vacío
  "https://www.shutterstock.com/image-vector/dirty-workplace-artist-top-view-260nw-2581940821.jpg"  // escritorio desordenado
];

const positiveImages = [
  "https://www.shutterstock.com/image-vector/girls-friends-watching-sunset-relaxing-600nw-2293889053.jpg", // personas conversando al atardecer
  "https://img.freepik.com/vector-premium/ilustracion-vector-plano-simple-manos-plantando-arbol-planeta-tierra-reforestacion-salvar-tierra_24381-1796.jpg?w=360", // mano sobre tierra, raíces
  "https://www.shutterstock.com/image-vector/reading-under-lamp-read-book-260nw-2074561393.jpg"  // persona leyendo bajo luz suave
];

export default function CardsComparison() {
  const controlsNegative = useAnimation();
  const controlsPositive = useAnimation();

  useEffect(() => {
    // Animación inicial: las tarjetas entran desde los lados
    controlsNegative.start({ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } });
    controlsPositive.start({ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5 } });

    // Efecto de respiración suave en las tarjetas
    const breathe = () => {
      controlsNegative.start({ scale: 1.01, transition: { duration: 3 } });
      controlsPositive.start({ scale: 1.01, transition: { duration: 3 } });
      setTimeout(() => {
        controlsNegative.start({ scale: 1, transition: { duration: 3 } });
        controlsPositive.start({ scale: 1, transition: { duration: 3 } });
      }, 3000);
    };

    breathe();
    const interval = setInterval(breathe, 8000);
    return () => clearInterval(interval);
  }, [controlsNegative, controlsPositive]);

  return (
    <section id="cansancio" className="relative py-20 px-6 overflow-hidden">
      {/* Fondo dinámico: partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full opacity-5 ${
              i % 2 === 0 ? 'bg-indigo-200' : 'bg-emerald-200'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${6 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Sombra cósmica central */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl"></div>

      {/* Título con efecto de luz que se expande */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl md:text-5xl font-serif text-gray-800 mb-16 tracking-wide relative"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
          El cansancio que divide...
        </span>

        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
          ...y el cansancio que une
        </span>
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
        {/* Tarjeta Negativa — Fría, Aislada */}
        <motion.div
          ref={controlsNegative}
          initial={{ opacity: 0, x: -100 }}
          animate={controlsNegative}
          whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          className="group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl p-8 h-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)',
          }}
        >
          {/* Imagen de fondo semitransparente */}
          <div className="absolute inset-0 -z-10 opacity-30">
            <img
              src={negativeImages[0]}
              alt="Aislamiento"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* Overlay oscuro suave */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>

          {/* Etiqueta superior */}
          <div className="inline-block px-4 py-1 bg-red-600/20 border border-red-500/30 rounded-full text-red-200 text-sm font-medium mb-6">
            CANSANCIO NEGATIVO
          </div>

          <h4 className="text-2xl font-serif text-white mb-8 relative z-10">
            La soledad como norma
          </h4>

          <ul className="space-y-4 relative z-10">
            {negative.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="flex items-start gap-4 group-hover:text-red-100 transition-colors duration-500"
              >
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-lg text-gray-100 leading-relaxed font-sans">{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Efecto de gota de lluvia en la esquina inferior */}
          <div className="absolute bottom-4 right-4 w-1 h-1 bg-red-400/40 rounded-full animate-ping"></div>
        </motion.div>

        {/* Tarjeta Positiva — Cálida, Conectada */}
        <motion.div
          ref={controlsPositive}
          initial={{ opacity: 0, x: 100 }}
          animate={controlsPositive}
          whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          className="group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl p-8 h-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 70%)',
          }}
        >
          {/* Imagen de fondo semitransparente */}
          <div className="absolute inset-0 -z-10 opacity-30">
            <img
              src={positiveImages[0]}
              alt="Comunidad"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* Overlay claro suave */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent rounded-3xl"></div>

          {/* Etiqueta superior */}
          <div className="inline-block px-4 py-1 bg-emerald-600/20 border border-emerald-500/30 rounded-full text-emerald-200 text-sm font-medium mb-6">
            CANSANCIO POSITIVO
          </div>

          <h4 className="text-2xl font-serif text-gray-800 mb-8 relative z-10">
            La quietud como revolución
          </h4>

          <ul className="space-y-4 relative z-10">
            {positive.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="flex items-start gap-4 group-hover:text-emerald-900 transition-colors duration-500"
              >
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-lg text-gray-800 leading-relaxed font-sans">{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Efecto de luz que brilla suavemente en la esquina */}
          <div className="absolute top-4 left-4 w-3 h-3 bg-yellow-300/50 rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-green-400/40 rounded-full animate-bounce delay-1000"></div>
        </motion.div>
      </div>

      {/* Elemento decorativo final: hojas cayendo lentamente */}
      <div className="absolute top-1/3 left-10 w-4 h-4 bg-yellow-200 rounded-full opacity-30 animate-fall delay-1000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-orange-200 rounded-full opacity-25 animate-fall delay-2000"></div>
      <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-emerald-200 rounded-full opacity-35 animate-fall delay-3000"></div>

      {/* Texto poético entre tarjetas */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="text-center mt-16 max-w-3xl mx-auto text-lg text-white italic leading-relaxed font-sans"

      >
        El cansancio no es tu enemigo.  
        Es el eco de tu alma gritando:  
        “¿Qué estás haciendo aquí?”  
        — Y la respuesta no está en correr más rápido.  
        Está en detenerse… y escuchar.
      </motion.p>

      {/* Estilo CSS personalizado para animaciones */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.3; }
        }
        .animate-fall {
          animation: fall 14s ease-in-out infinite;
        }
        @keyframes fall {
          0% {
            transform: translateY(-100vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: 0.4; }
          90% { opacity: 0.3; }
          100% {
            transform: translateY(120vh) translateX(15px) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}