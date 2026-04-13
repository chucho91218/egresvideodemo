"use client";

import { QrCode, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export const QRSection = () => {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Círculo de luz decorativo de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 blur-[100px] rounded-full" />

      <div className="max-w-xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-amber-500/20 mb-6"
          >
            <Instagram size={20} className="text-amber-500" />
          </motion.div>
          <h2 className="font-serif text-4xl md:text-5xl text-white italic leading-tight">Canal Social.</h2>
          <p className="mt-4 text-[10px] text-amber-500/60 uppercase tracking-[0.5em] font-bold">Promo 2026 San Marcos</p>
        </div>

        <div className="relative flex justify-center">
          {/* Elementos flotantes decorativos */}
          <div className="absolute -left-4 top-10 hidden md:block">
            <p className="text-[9px] text-slate-700 uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180">
              SCAN TO JOIN THE PARTY
            </p>
          </div>

          {/* Tarjeta del QR con Glow */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Resplandor externo (Glow) */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-amber-200/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-zinc-950 border border-white/10 p-10 rounded-[2.5rem] flex flex-col items-center">
              <div className="bg-white p-4 rounded-3xl shadow-2xl mb-8">
                <div className="w-40 h-40 bg-white">
                  <img 
                    src="/images/qr-social.png" 
                    alt="QR Canal San Marcos" 
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="space-y-1">
                  <p className="text-white text-lg font-serif italic tracking-wide">@promo2026sanmarcos</p>
                  <div className="h-px w-8 bg-amber-500/40 mx-auto" />
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed italic max-w-[200px]">
                  Unite para ver todas las fotos y videos compartidos del curso.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="absolute -right-4 bottom-10 hidden md:block">
            <p className="text-[9px] text-slate-700 uppercase tracking-[0.5em] [writing-mode:vertical-lr]">
              EXCLUSIVE CONTENT ONLY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};