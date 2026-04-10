"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

// Mapeo exacto para seguir el diseño de la captura
const images = [
  { src: "/images/egres.jpg", class: "col-span-2 row-span-1" },   // La de arriba a la izquierda (Ancha)
  { src: "/images/egres1.jpg", class: "col-span-1 row-span-1" },  // Arriba derecha
  { src: "/images/egres2.jpg", class: "col-span-1 row-span-1" },  // Debajo de la anterior
  { src: "/images/egres3.jpg", class: "col-span-1 row-span-2" },  // La vertical del chico de espaldas
  { src: "/images/egres4.jpg", class: "col-span-1 row-span-1" },  // El diploma al centro
  { src: "/images/egres5.jpg", class: "col-span-1 row-span-1" },  // Chica de perfil derecha
  { src: "/images/egres6.jpg", class: "col-span-2 row-span-1" },  // La ancha de la chica sonriendo
  { src: "/images/egres7.jpg", class: "col-span-1 row-span-1" },  // El birrete abajo
]

export function GallerySection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-[#fdfcf9] px-4 md:px-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="mb-12 text-center font-sans text-[10px] tracking-[0.5em] text-primary/40 uppercase font-bold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          Nuestros momentos..
        </motion.p>

        {/* Grilla estilo Mosaico Editorial */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 auto-rows-[180px] md:auto-rows-[220px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden bg-slate-100 shadow-sm group ${image.class}`}
            >
              <Image
                src={image.src}
                alt={`Momento ${index + 1}`}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}