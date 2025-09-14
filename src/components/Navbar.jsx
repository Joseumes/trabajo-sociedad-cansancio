import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center backdrop-blur-md bg-white/10 sticky top-0 z-50">
      <div className="font-bold text-lg">Sociedad del Cansancio</div>
      <div className="flex gap-6 text-sm">
        <Link to="/" className="hover:text-cyan-300">Inicio</Link>
        <Link to="/info" className="hover:text-cyan-300">Más info</Link>
        <Link to="/game" className="hover:text-cyan-300">Juego</Link>
      </div>
    </nav>
  );
}
