"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const images = [
  { src: "/images/egres.webp", height: "md:h-[300px]" },   
  { src: "/images/egres1.webp", height: "md:h-[450px]" },  
  { src: "/images/egres2.webp", height: "md:h-[350px]" },  
  { src: "/images/egres7.webp", height: "md:h-[500px]" },  
  { src: "/images/egres4.webp", height: "md:h-[400px]" },  
  { src: "/images/egres5.webp", height: "md:h-[450px]" },  
  { src: "/images/egres6.webp", height: "md:h-[320px]" },  
  { src: "/images/egres3.webp", height: "md:h-[380px]" },  
]

export function GallerySection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-black py-24 md:py-32 overflow-hidden">
      <div className="px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="max-w-6xl mx-auto border-l border-amber-500/30 pl-6"
        >
          <p className="font-sans text-[9px] tracking-[0.5em] text-amber-500 uppercase font-bold mb-2">Galería</p>
          <h2 className="font-serif text-3xl md:text-5xl text-white italic leading-tight">Retratos de una etapa.</h2>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto">
        {/* MOBILE: Carousel Horizontal (Evita scroll infinito) */}
        <div className="flex md:hidden overflow-x-auto gap-4 px-6 pb-8 snap-x snap-mandatory scrollbar-hide">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative flex-none w-[80vw] h-[450px] rounded-2xl overflow-hidden border border-white/5 snap-center bg-zinc-900"
            >
              <Image
                src={image.src}
                alt={`Momento ${index + 1}`}
                fill
                className="object-cover"
                sizes="80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-serif italic text-xs tracking-widest uppercase">Promo 2026</span>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP: Masonry Editorial (8 fotos en columnas) */}
        <div className="hidden md:block px-8 columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden bg-zinc-900 border border-white/5 group break-inside-avoid rounded-2xl ${image.height} min-h-[250px]`}
            >
              <Image
                src={image.src}
                alt={`Momento ${index + 1}`}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-[10px] text-slate-600 uppercase tracking-[0.5em] md:hidden animate-pulse">
        Deslizá para ver más →
      </p>
    </section>
  )
}