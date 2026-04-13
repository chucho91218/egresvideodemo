"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { PartyPopper, Calendar, MapPin, Clock, ArrowUpRight } from "lucide-react"

export function LogisticsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative px-6 py-32 bg-black overflow-hidden">
      {/* Efecto de luz de fondo para profundidad */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <p className="font-sans text-[10px] tracking-[0.6em] text-amber-500 uppercase font-bold mb-4">Ubicación y Hora</p>
          <h2 className="font-serif text-5xl md:text-6xl text-white italic">La gran noche</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bloque de Imagen o Icono Grande */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-square md:aspect-auto md:h-[400px] rounded-[3rem] overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
               <PartyPopper size={80} strokeWidth={0.5} className="text-amber-500/40" />
            </div>
            {/* Aquí podrías poner una foto del salón si la tuvieras */}
            <div className="absolute inset-0 bg-zinc-900" /> 
          </motion.div>

          {/* Bloque de Datos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-xl bg-amber-500/10 text-amber-500">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Cuándo</p>
                  <p className="text-xl text-white font-serif tracking-wide">12 de Diciembre, 2026</p>
                  <p className="text-sm text-amber-500/80 italic">20:30 hs — Recepción</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-xl bg-amber-500/10 text-amber-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Dónde</p>
                  <p className="text-xl text-white font-serif tracking-wide">Salón Terrazas del Río</p>
                  <p className="text-sm text-slate-400">Av. Costanera 1840, Rosario</p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-col gap-4">
              <button className="flex items-center justify-between w-full group border-b border-white/10 pb-4 hover:border-amber-500 transition-colors">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white group-hover:text-amber-500 transition-colors">Ver en Google Maps</span>
                <ArrowUpRight size={16} className="text-slate-500 group-hover:text-amber-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </button>
              <button className="flex items-center justify-between w-full group border-b border-white/10 pb-4 hover:border-amber-500 transition-colors">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white group-hover:text-amber-500 transition-colors">Agendar en mi Calendario</span>
                <ArrowUpRight size={16} className="text-slate-500 group-hover:text-amber-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}