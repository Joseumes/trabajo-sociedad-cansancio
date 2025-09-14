import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImg from "../assets/hero-bg.svg"; // pon tu propia imagen en assets

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
      {/* Fondo degradado con imagen */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Fondo"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/80 via-pink-600/70 to-indigo-800/80"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 container-max grid md:grid-cols-2 gap-12 items-center px-6">
        {/* Texto */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6"
        >
          <h1
            ref={el}
            className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
          ></h1>

          <p
            data-aos="fade-up"
            className="text-lg md:text-xl text-white/90 leading-relaxed"
          >
            Byung-Chul Han describe cómo pasamos de una sociedad de disciplina
            a una de autoexplotación: ya no es un amo externo, sino nosotros
            mismos quienes nos exigimos hasta el agotamiento. 
          </p>

          <blockquote
            data-aos="fade-up"
            data-aos-delay="200"
            className="italic border-l-4 border-white/50 pl-4 text-white/80"
          >
            “El cansancio fundamental no aísla, sino que abre la posibilidad de
            comunidad e inspiración.”
          </blockquote>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex gap-4 mt-6"
          >
            <a
              href="#sociedad"
              className="px-6 py-3 rounded-lg bg-white/20 backdrop-blur-md hover:scale-105 transition"
            >
              Explorar más
            </a>
            <a
              href="/game"
              className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
            >
              Probar el juego
            </a>
          </div>
        </motion.div>

        {/* Imagen extra / gráfico */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:block"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
            alt="Ilustración de trabajo"
            className="w-4/5 mx-auto drop-shadow-2xl"
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
