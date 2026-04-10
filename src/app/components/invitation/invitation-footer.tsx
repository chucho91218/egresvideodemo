"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Instagram } from "lucide-react"

export function InvitationFooter() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-20px" })

  return (
    <footer ref={ref} className="flex flex-col items-center gap-12 px-6 py-24 pb-32 bg-background">
      
      {/* Instagram Link */}
      <motion.a
        href="https://instagram.com/festa_invitaciones"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-[10px] tracking-[0.4em] text-[#8b7d71] uppercase hover:opacity-60 transition-opacity"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Instagram size={14} strokeWidth={1} />
        <span>@festa_invitaciones</span>
      </motion.a>

      {/* Textos de Marca */}
      <div className="flex flex-col items-center gap-4 text-center">
        <motion.p
          className="text-[11px] tracking-[0.5em] text-[#4a3f35] font-bold uppercase"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Diseño exclusivo para eventos
        </motion.p>
        
        <motion.p
          className="font-serif italic text-sm text-[#8b7d71]/80"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hecho con amor por Festa
        </motion.p>
      </div>

     
    </footer>
  )
}