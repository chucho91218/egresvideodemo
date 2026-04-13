"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

function HangerIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="text-amber-500/50"
    >
      <path d="M24 8a4 4 0 1 1 0 8" />
      <path d="M24 16 6 32h36L24 16Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function DressCodeSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-black py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        {/* Lado Izquierdo: El Bloque Visual */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="w-64 h-80 border border-amber-500/20 rounded-t-[8rem] rounded-b-2xl flex flex-col items-center justify-center p-8 bg-zinc-950/50 relative z-10">
            <HangerIcon />
            <div className="mt-8 h-px w-12 bg-amber-500/30" />
            <p className="mt-8 font-serif text-3xl text-white italic tracking-widest text-center uppercase">
              Formal <br />
              <span className="text-amber-500 text-xl not-italic">Elegante</span>
            </p>
          </div>
          {/* Sombra decorativa de fondo */}
          <div className="absolute -bottom-4 -right-4 w-64 h-80 border border-white/5 rounded-t-[8rem] rounded-b-2xl z-0" />
        </motion.div>

        {/* Lado Derecho: La Información */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-[10px] tracking-[0.5em] text-amber-500 uppercase font-bold mb-4">Código de vestimenta</p>
            <h2 className="font-serif text-4xl text-white leading-tight">
              Preparen su <br /> <span className="italic">mejor look.</span>
            </h2>
          </motion.div>

          <motion.p
            className="text-slate-400 text-sm leading-relaxed tracking-wide font-light max-w-xs md:max-w-none mx-auto md:mx-0"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Queremos que se sientan increíbles. Para esta noche, te pedimos asistir con vestimenta formal. 
            Es un cierre de etapa importante y la elegancia será parte de la emoción.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="pt-4 flex items-center justify-center md:justify-start gap-4"
          >
            <div className="flex -space-x-2">
               <div className="w-8 h-8 rounded-full bg-white border-2 border-black" />
               <div className="w-8 h-8 rounded-full bg-amber-500 border-2 border-black" />
               <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-black" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-slate-500">Paleta sugerida</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}