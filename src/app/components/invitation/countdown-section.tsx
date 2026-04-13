"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useState, useRef } from "react"

const TARGET_DATE = new Date("2026-12-12T20:30:00")

interface TimeLeft {
  dias: number
  horas: number
  minutos: number
  segundos: number
}

function getTimeLeft(): TimeLeft {
  const now = new Date()
  const diff = TARGET_DATE.getTime() - now.getTime()
  if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 }

  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / (1000 * 60)) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  }
}

function CountdownUnit({ value, label, isMounted }: { value: number; label: string; isMounted: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1 w-16 md:w-24">
      <span className="font-serif text-4xl md:text-6xl text-white tracking-tighter">
        {isMounted ? String(value).padStart(2, "0") : "00"}
      </span>
      <span className="font-sans text-[8px] md:text-[10px] tracking-[0.3em] text-amber-500/60 uppercase font-bold">
        {label}
      </span>
    </div>
  )
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft())
  const [isMounted, setIsMounted] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    setIsMounted(true)
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="flex flex-col items-center gap-12 bg-black py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="space-y-2 text-center"
      >
        <p className="font-sans text-[10px] tracking-[0.5em] text-slate-500 uppercase">
          Faltan solo
        </p>
      </motion.div>

      <motion.div
        className="flex items-start justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <CountdownUnit value={timeLeft.dias} label="Días" isMounted={isMounted} />
        <span className="text-2xl md:text-4xl text-amber-500/20 pt-1 md:pt-3 font-light">:</span>
        <CountdownUnit value={timeLeft.horas} label="Horas" isMounted={isMounted} />
        <span className="text-2xl md:text-4xl text-amber-500/20 pt-1 md:pt-3 font-light">:</span>
        <CountdownUnit value={timeLeft.minutos} label="Min" isMounted={isMounted} />
        <span className="text-2xl md:text-4xl text-amber-500/20 pt-1 md:pt-3 font-light">:</span>
        <CountdownUnit value={timeLeft.segundos} label="Seg" isMounted={isMounted} />
      </motion.div>

      <motion.div
        className="h-16 w-px bg-gradient-to-b from-amber-500/40 to-transparent"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  )
}