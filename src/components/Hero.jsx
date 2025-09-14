import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImg from "../assets/imagen2.jpg"; // 👈 Usa una imagen real en assets

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const typed = new Typed(el.current, {
      strings: [
        "¿Vivimos en una sociedad del cansancio?",
        "Dopaje, rendimiento y agotamiento...",
        "Repensar el trabajo y la lentitud"
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo degradado con imagen real */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Fondo abstracto de pensamiento y energía"
          className="w-full h-full object-cover opacity-70"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/70 to-pink-800/80"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container-max grid md:grid-cols-2 gap-12 items-center px-6 py-16">
        {/* Texto principal */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6 text-center md:text-left"
        >
          <h1
            ref={el}
            className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg tracking-wide"
          ></h1>

          <p
            data-aos="fade-up"
            className="text-base md:text-lg text-white/90 leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            Byung-Chul Han describe cómo pasamos de una sociedad de disciplina a una de autoexplotación: ya no es un amo externo, sino nosotros mismos quienes nos exigimos hasta el agotamiento.
          </p>

          <blockquote
            data-aos="fade-up"
            data-aos-delay="200"
            className="italic border-l-4 border-white/50 pl-4 text-white/80 text-sm md:text-base max-w-md mx-auto md:mx-0"
          >
            “El cansancio fundamental no aísla, sino que abre la posibilidad de comunidad e inspiración.”
          </blockquote>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8"
          >
            <a
              href="#sociedad"
              className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 text-center font-medium"
            >
              Explorar más
            </a>
            <a
              href="/game"
              className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-center font-medium"
            >
              Probar el juego
            </a>
          </div>
        </motion.div>

        {/* Imagen ilustrativa */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
            alt="Ilustración de persona leyendo"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-2xl border-4 border-white/20"
          />
        </motion.div>
      </div>

      {/* Animación flotante decorativa */}
      <motion.div
        className="absolute bottom-10 right-10 text-5xl text-white/50"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ⌛
      </motion.div>
    </header>
  );
}