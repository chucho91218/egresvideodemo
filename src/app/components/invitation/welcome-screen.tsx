"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface WelcomeScreenProps {
  onEnter: () => void;
}

export default function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnter = () => {
    setIsOpen(true);
    onEnter();
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* Brillo sutil de fondo */}
          <div className="absolute w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full" />

          <div className="relative z-10 flex flex-col items-center space-y-12">
            {/* Logo con efecto de revelado */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-28 h-28 md:w-36 md:h-36 relative"
            >
             
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-center space-y-3"
            >
              <p className="tracking-[0.6em] text-[9px] md:text-[10px] uppercase text-amber-500/60 font-bold">
                Bienvenidos a la noche de
              </p>
              <h1 className="font-serif text-3xl md:text-4xl text-white italic tracking-tight">
                Egresados 2026
              </h1>
            </motion.div>

            {/* Botón Estilizado */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              onClick={handleEnter}
              className="group relative mt-12 overflow-hidden px-14 py-4 rounded-full border border-amber-500/20 text-amber-500 text-[10px] uppercase tracking-[0.4em] transition-all duration-700 hover:border-amber-500 hover:text-black"
            >
              <span className="relative z-10">Ingresar</span>
              {/* Efecto de llenado dorado */}
              <div className="absolute inset-0 z-0 translate-y-full bg-amber-500 transition-transform duration-500 ease-out group-hover:translate-y-0" />
            </motion.button>
          </div>

          {/* Decoración minimalista inferior */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 text-white/10 text-[8px] uppercase tracking-[1em] font-light"
          >
            Festa • San Marcos
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}