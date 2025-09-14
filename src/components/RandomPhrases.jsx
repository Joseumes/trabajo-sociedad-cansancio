import React, { useState } from 'react';
import phrases from '../data/phrases';
import { motion } from 'framer-motion';

export default function RandomPhrases() {
  const [phrase, setPhrase] = useState(phrases[0]);

  function showRandom() {
    const i = Math.floor(Math.random() * phrases.length);
    setPhrase(phrases[i]);
  }

  return (
    <section id="frases" className="py-12 container-max mx-auto text-white">
      <h3 className="text-2xl font-semibold mb-4">Frases interactivas</h3>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="glass p-6 rounded-md">
        <p className="text-lg italic mb-4">"{phrase}"</p>
        <div className="flex gap-3">
          <button onClick={showRandom} className="px-4 py-2 rounded-md bg-white/10 hover:scale-105 transition">Mostrar frase al azar</button>
          <a href="#reflexiones" className="px-4 py-2 rounded-md bg-white/10">Escribe tu reflexión</a>
        </div>
      </motion.div>
    </section>
  );
}
