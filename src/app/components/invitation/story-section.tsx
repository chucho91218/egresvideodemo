"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const StorySection = () => {
  return (
    <section className="py-24 px-8 bg-[#fdfcf9]">
      <div className="max-w-xl mx-auto text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-44 h-44 mx-auto overflow-hidden rounded-full border-[1px] border-slate-200 p-2"
        >
          <div className="relative w-full h-full overflow-hidden rounded-full">
            <Image 
              src="/images/egres-main.jpg" 
              alt="Nuestra promo" 
              fill 
              className="object-cover"
            />
          </div>
        </motion.div>

        <div className="space-y-6 italic">
          <p className="text-[10px] uppercase tracking-[0.5em] text-primary/40 font-bold not-italic">Nuestra Historia</p>
          <h2 className="font-serif text-3xl text-primary">Un camino inolvidable</h2>
          <p className="text-sm text-primary/60 leading-relaxed max-w-sm mx-auto">
            "Desde el primer día supimos que esta promo sería diferente. Pasamos por risas, 
            desafíos y momentos que guardaremos para siempre. Hoy cerramos esta etapa 
            con la alegría de haberlo vivido todo juntos."
          </p>
          <p className="font-serif text-lg text-primary/80 pt-4">Promo 2026</p>
        </div>
      </div>
    </section>
  );
};