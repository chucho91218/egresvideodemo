"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-svh w-full overflow-hidden flex items-center justify-center bg-black">
      {/* 1. Fondo con zoom suave al entrar */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Egresados Promo 2026"
          fill
          className="object-cover opacity-60 grayscale-[50%]"
          priority
        />
        {/* Overlay degradado para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </motion.div>

      {/* 2. Texto con revelación escalonada */}
      <div className="relative z-10 text-center text-white px-6">
        <motion.p
          className="mb-4 font-sans text-xs tracking-[0.4em] uppercase text-amber-500/90"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Nuestra noche llegó
        </motion.p>

        <motion.h1
          className="font-serif text-6xl md:text-8xl tracking-tight leading-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Promoción 
          <span className="block mt-2 text-amber-500">2026</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xs mx-auto text-sm md:text-base text-slate-300 font-light italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          "Después de tanto camino, celebramos juntos este gran final"
        </motion.p>

        <motion.div
          className="mt-10 h-16 w-px bg-gradient-to-b from-amber-500/50 to-transparent mx-auto"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        />
      </div>
    </section>
  );
}