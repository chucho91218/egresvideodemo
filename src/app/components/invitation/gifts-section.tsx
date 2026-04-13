"use client";

import { Copy, Gift, Heart } from "lucide-react";
import { motion } from "framer-motion";

export const GiftsSection = () => {
  const alias = "promo2026.regalos"; 
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(alias);
    // Idealmente reemplazar por un Toast de Festa
    alert("¡Alias copiado!");
  };

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Detalle decorativo asimétrico */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/5 blur-[80px] rounded-full" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mb-12"
        >
          <div className="inline-flex p-4 rounded-full bg-zinc-950 border border-white/5 mb-8">
            <Heart size={24} className="text-amber-500/60" strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white italic mb-6">Regalos.</h2>
          <p className="text-sm text-slate-500 leading-relaxed italic max-w-sm mx-auto uppercase tracking-tighter">
            "Tu compañía es lo más importante. Si querés colaborar con nuestra fiesta, podés hacerlo aquí."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative group inline-block w-full max-w-sm"
        >
          {/* Fondo con Glassmorphism sutil */}
          <div className="absolute inset-0 bg-white/[0.02] rounded-[3rem] blur-sm transition-all group-hover:bg-white/[0.05]" />
          
          <div className="relative border border-white/10 bg-zinc-950/40 backdrop-blur-md p-12 rounded-[3rem] flex flex-col items-center">
            <p className="text-[9px] uppercase tracking-[0.6em] text-amber-500 font-bold mb-4">Alias Bancario</p>
            
            <p className="text-3xl md:text-4xl font-serif text-white tracking-tight mb-8 select-all selection:bg-amber-500/30">
              {alias}
            </p>

            <button 
              onClick={copyToClipboard}
              className="group/btn relative px-8 py-4 overflow-hidden rounded-full border border-amber-500/20 transition-all hover:border-amber-500"
            >
              <div className="relative z-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-amber-500 group-hover/btn:text-black transition-colors">
                <span>Copiar Alias</span>
                <Copy size={12} strokeWidth={2} />
              </div>
              {/* Efecto de llenado del botón */}
              <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};