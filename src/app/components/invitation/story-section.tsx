"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const milestones = [
  { year: "2021", text: "Comenzamos esta etapa juntos en secundaria" },
  { year: "2022", text: "Primeros viajes, actos y anécdotas como curso" },
  { year: "2023", text: "Compartimos campamentos, salidas y muchísimos recuerdos" },
  { year: "2024", text: "Se consolidó más la unión del grupo" },
  { year: "2025", text: "Últimos primeros días, nuevas metas y muchos desafíos" },
  { year: "2026", text: "Cerramos una etapa inolvidable y celebramos nuestra noche" },
];

export const StorySection = () => {
  return (
    <section className="py-32 px-6 bg-black overflow-hidden">
      <div className="max-w-screen-md mx-auto">
        {/* Header con diseño asimétrico */}
        <div className="relative mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative z-10"
          >
            <p className="text-[10px] uppercase tracking-[0.6em] text-amber-500 mb-4 font-bold">Timeline</p>
            <h2 className="font-serif text-5xl md:text-6xl text-white leading-none">
              El camino <br /> 
              <span className="text-amber-500 italic">recorrido.</span>
            </h2>
          </motion.div>
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20 blur-3xl bg-amber-500 rounded-full" />
        </div>

        {/* Timeline dinámico */}
        <div className="space-y-24 relative">
          {milestones.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? "items-start" : "items-end"} relative`}
            >
              {/* Año gigante de fondo */}
              <span className="absolute -top-12 text-8xl md:text-9xl font-serif text-white/[0.03] select-none">
                {item.year}
              </span>
              
              <div className={`max-w-[280px] ${index % 2 === 0 ? "text-left pl-4" : "text-right pr-4"} relative z-10`}>
                <div className="h-px w-8 bg-amber-500/50 mb-4 inline-block" />
                <p className="text-amber-500 font-mono text-xs tracking-widest mb-2">{item.year}</p>
                <p className="text-slate-300 text-sm leading-relaxed font-light tracking-wide">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cierre emocional con la foto */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-32 p-8 border border-white/5 bg-zinc-950/50 rounded-[3rem] text-center"
        >
          <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border border-amber-500/30">
            <Image src="/images/egres-main.jpg" alt="Promo 2026" fill className="object-cover grayscale" />
          </div>
          <p className="text-sm text-slate-400 italic max-w-xs mx-auto mb-4">
            "Hoy cerramos esta etapa con la alegría de haberlo vivido todo juntos."
          </p>
          <p className="font-serif text-amber-500 tracking-widest text-lg uppercase">6° Economía</p>
        </motion.div>
      </div>
    </section>
  );
};