import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-cyan-800 text-white py-8 mt-12">
      <div className="container-max mx-auto px-6 text-center space-y-6">
        <p className="text-lg font-semibold">Creado por:</p>
        <div className="flex justify-center gap-8 text-white/90">
          <span>👨‍💻 José Tun</span>
          <span>👩‍💻 Glenda Marisol Choc</span>
        </div>

        <div>
          <p className="mb-2">Más información en:</p>
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            <li>
              <a
                href="https://es.wikipedia.org/wiki/Byung-Chul_Han"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 flex items-center gap-1"
              >
                Byung-Chul Han (Wikipedia) <FaExternalLinkAlt className="text-xs" />
              </a>
            </li>
            <li>
              <a
                href="https://www.perlentaucher.de/buch/byung-chul-han/muedigkeitsgesellschaft.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 flex items-center gap-1"
              >
                La sociedad del cansancio (artículo) <FaExternalLinkAlt className="text-xs" />
              </a>
            </li>
            <li>
              <a
                href="https://www.clarin.com/cultura/sociedad-cansancio-libro-byung-chul-han_0_ryZh0v9s.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 flex items-center gap-1"
              >
                Reseña en Clarín <FaExternalLinkAlt className="text-xs" />
              </a>
            </li>
          </ul>
        </div>

        <p className="text-white/60 text-sm">
          © {new Date().getFullYear()} — Proyecto educativo sobre filosofía social
        </p>
      </div>
    </footer>
  );
}
