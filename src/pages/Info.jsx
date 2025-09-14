import React from "react";

export default function Info() {
  return (
    <section className="min-h-screen py-16 px-6 md:px-12 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Título con efecto de desvanecimiento */}
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-12 text-center tracking-wide leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 via-purple-700 to-slate-700">
            El cansancio que nos salva
          </span>
        </h1>

        {/* Imagen central simbólica: persona sentada en silencio */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative group cursor-pointer">
              <img
                src="https://us.123rf.com/450wm/seredim/seredim2102/seredim210200078/164774863-chica-vectora-a-la-sombra-del-estilo-de-l%C3%ADneas-n%C3%ADtidas.jpg?ver=6"
                alt="Persona sentada en silencio, mirando al horizonte"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl transition-all duration-700 group-hover:scale-105 group-hover:shadow-2xl border-4 border-white/80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="absolute bottom-4 left-4 text-white text-sm font-light italic">"La quietud es la primera forma de resistencia." — B.-C. Han</p>
            </div>
          </div>

          <div className="md:w-2/3 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed font-sans">
              Byung-Chul Han nos revela cómo nuestra sociedad ha reemplazado la opresión externa por una <strong>dictadura interna</strong>: ya no hay un amo que te grita, sino tú mismo, convirtiéndote en tu propio gerente, tu productor, tu esclavo entusiasta.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-sans">
              El agotamiento ya no es un accidente... es el precio pagado por convertir cada respiración en una KPI. Pero aquí reside la paradoja: <em>el cansancio negativo no es debilidad, es señal</em>. Es el cuerpo que grita: “¡Deja de correr!”
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-sans">
              En cambio, el <strong>cansancio positivo</strong> — ese que llega tras caminar sin destino, leer bajo la luz del atardecer, o simplemente estar sin hacer nada — es el único espacio donde la creatividad vuelve a nacer. Allí, donde el tiempo no es mercancía, surge la <em>contemplación</em>.
            </p>
          </div>
        </div>

        {/* Tarjetas simbólicas — tres pilares */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Autoexplotación */}
          <div className="group p-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-serif text-gray-800 mb-3">Autoexplotación</h3>
            <p className="text-gray-600 leading-relaxed">
              No hay jefe. Solo tú, tu agenda, tus metas. Y tu culpa si descansas.
            </p>
          </div>

          {/* Lentitud como resistencia */}
          <div className="group p-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif text-gray-800 mb-3">Lentitud como resistencia</h3>
            <p className="text-gray-600 leading-relaxed">
              No es pereza. Es rebelión. Pararse. Respirar. Dejar que el tiempo fluya, sin medirlo.
            </p>
          </div>

          {/* Comunidad y conexión */}
          <div className="group p-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-violet-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif text-gray-800 mb-3">Comunidad y conexión</h3>
            <p className="text-gray-600 leading-relaxed">
              La soledad es el producto del rendimiento. La presencia, el antídoto.
            </p>
          </div>
        </div>

        {/* Citación final con efecto de tinta */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-serif text-gray-700 italic leading-relaxed max-w-3xl mx-auto pb-6 border-b-2 border-dashed border-gray-300">
            “No se trata de trabajar menos, sino de vivir más.  
            La verdadera revolución es dejar de ser útil.”
          </blockquote>
          <p className="text-gray-500 mt-4 text-lg">— Byung-Chul Han, <em>La sociedad de la cansancio</em></p>
        </div>

        {/* Elemento decorativo final: hojas cayendo suavemente */}
        <div className="absolute top-20 right-10 w-4 h-4 bg-green-300 rounded-full opacity-40 animate-fall delay-1000"></div>
        <div className="absolute top-32 left-16 w-3 h-3 bg-yellow-300 rounded-full opacity-30 animate-fall delay-2000"></div>
        <div className="absolute bottom-40 right-20 w-5 h-5 bg-orange-200 rounded-full opacity-35 animate-fall delay-3000"></div>
      </div>

      {/* Estilo CSS personalizado para animaciones de hojas */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}