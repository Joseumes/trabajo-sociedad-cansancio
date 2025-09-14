import React, { useState, useEffect } from "react";

export default function Game() {
  const [speed, setSpeed] = useState(4); // Punto de equilibrio inicial
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Tu alma susurra... encuentra tu ritmo.");
  const [isAnimating, setIsAnimating] = useState(false);

  // Efecto de cambio de mensaje y puntuación
  useEffect(() => {
    const interval = setInterval(() => {
      let newMessage = "";
      let scoreChange = 0;

      if (speed > 7) {
        newMessage = "⚡ Tu fuego se consume... el silencio te llama. (Aislamiento)";
        scoreChange = -1;
      } else if (speed >= 3 && speed <= 6) {
        newMessage = "🌱 Tus raíces crecen en paz. La inspiración florece. (Equilibrio)";
        scoreChange = 2;
      } else {
        newMessage = "🌙 Estás dormido bajo las estrellas... la energía duerme contigo. (Desconexión)";
        scoreChange = 0;
      }

      setMessage(newMessage);
      setScore((s) => s + scoreChange);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500); // Animación leve de brillo
    }, 1800);

    return () => clearInterval(interval);
  }, [speed]);

  // Efecto de "respiración" del fondo según el ritmo
  const getBgClass = () => {
    if (speed > 7) return "bg-gradient-to-br from-red-900 via-purple-900 to-black";
    if (speed >= 3 && speed <= 6) return "bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-100";
    return "bg-gradient-to-br from-slate-50 via-gray-50 to-stone-100";
  };

  // Efecto de brillo del corazón según puntaje
  const getHeartGlow = () => {
    if (score >= 20) return "shadow-lg shadow-yellow-400/50 animate-pulse";
    if (score >= 10) return "shadow-md shadow-green-400/30";
    if (score < 0) return "shadow-md shadow-red-400/30";
    return "";
  };

  return (
    <section className={`min-h-screen flex flex-col items-center justify-center p-6 transition-all duration-1000 ${getBgClass()} text-gray-800`}>
      {/* Fondo decorativo animado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full opacity-20 ${
              speed > 7 ? "bg-red-400" : speed >= 3 && speed <= 6 ? "bg-emerald-400" : "bg-slate-300"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Logo / Símbolo central */}
      <div className="relative mb-8">
        <div className={`w-24 h-24 rounded-full flex items-center justify-center border-4 transition-all duration-700 ${
          speed > 7 ? "border-red-500 bg-red-200/30" :
          speed >= 3 && speed <= 6 ? "border-emerald-500 bg-emerald-200/30" :
          "border-slate-400 bg-slate-100/50"
        } ${isAnimating ? "scale-110" : "scale-100"}`}>
          <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${getHeartGlow()}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-red-600">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.41 4.41 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.59 3 22 5.41 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        Ritmo del Alma
      </h1>
      <p className="text-lg text-gray-600 mb-8 italic">"No es velocidad lo que importa... es la armonía." </p>

      {/* Mensaje dinámico */}
      <div className={`mb-8 px-8 py-4 rounded-2xl max-w-md mx-auto shadow-xl backdrop-blur-sm bg-white/10 border border-white/20 transition-all duration-700 ${
        speed > 7 ? "text-red-100 border-red-500/50" :
        speed >= 3 && speed <= 6 ? "text-emerald-100 border-emerald-500/50" :
        "text-slate-100 border-slate-400/50"
      }`}>
        <p className="text-center text-lg leading-relaxed font-medium">{message}</p>
      </div>

      {/* Contador de ritmo */}
      <div className="flex items-center gap-8 mb-10">
        <button
          onClick={() => setSpeed((s) => Math.max(1, s - 1))}
          className="px-6 py-3 bg-gradient-to-r from-slate-600 to-slate-800 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-slate-500/30"
          disabled={speed <= 1}
        >
          ⬅️ Calma
        </button>

        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-gray-800 dark:text-gray-200">{speed} 🌀</span>
          <span className="text-xs mt-1 text-gray-500">Ritmo interno</span>
        </div>

        <button
          onClick={() => setSpeed((s) => Math.min(10, s + 1))}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-purple-500/30"
          disabled={speed >= 10}
        >
          🔥 Energía
        </button>
      </div>

      {/* Puntaje con efecto luminoso */}
      <div className="glass p-6 rounded-3xl inline-block shadow-2xl backdrop-blur-lg bg-white/10 border border-white/20">
        <p className="text-center text-xl font-bold">
          Puntuación:{" "}
          <span className={`transition-all duration-500 ${score >= 20 ? "text-yellow-400 animate-bounce" : score >= 10 ? "text-green-400" : score < 0 ? "text-red-400" : "text-gray-300"}`}>
            {score}
          </span>
        </p>
        {score >= 20 && (
          <p className="text-sm text-yellow-200 mt-1 italic">✨ ¡Eres un faro!</p>
        )}
        {score < 0 && (
          <p className="text-sm text-red-200 mt-1 italic">🌙 Necesitas descansar...</p>
        )}
      </div>

      {/* Instrucción final poética */}
      <p className="mt-12 text-sm text-gray-300 max-w-md text-center leading-relaxed">
        Cada número es un latido.<br />
        El equilibrio no es estático...<br />
        Es un baile entre el fuego y la calma.
      </p>

      {/* Estilo CSS personalizado para animaciones */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
}