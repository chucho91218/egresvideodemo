"use client";

import React, { useState } from "react";
import { Plus, Minus, MessageCircle, Utensils, User, CalendarCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Guest {
  name: string;
  diet: string;
}

export const ConfirmationSection = () => {
  const [guests, setGuests] = useState<Guest[]>([{ name: "", diet: "Ninguna" }]);
  const whatsappNumber = "5493416124587";
  const limitDate = "25 de Noviembre";

  const updateGuestCount = (newCount: number) => {
    if (newCount < 1 || newCount > 6) return;
    if (newCount > guests.length) {
      setGuests([...guests, { name: "", diet: "Ninguna" }]);
    } else {
      setGuests(guests.slice(0, -1));
    }
  };

  const updateGuestData = (index: number, field: keyof Guest, value: string) => {
    const newGuests = [...guests];
    newGuests[index][field] = value;
    setGuests(newGuests);
  };

  const handleConfirm = () => {
    let message = `¡Hola! Confirmo asistencia para la fiesta de Egresados San Marcos (Promo 2026):%0A`;
    guests.forEach((g, i) => {
      message += `%0A*Invitado ${i + 1}:* ${g.name || "Sin nombre"}%0A• Menú: ${g.diet}%0A`;
    });
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="py-32 px-6 bg-black relative">
      <div className="max-w-xl mx-auto relative z-10">
        
        {/* Header Minimalista */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block p-3 rounded-2xl bg-amber-500/5 border border-amber-500/10 mb-2">
            <CalendarCheck className="text-amber-500/60" size={24} strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-5xl text-white italic tracking-tight">Confirmación.</h2>
          <p className="text-[10px] uppercase tracking-[0.6em] text-slate-500 font-bold">
            RSVP ANTES DEL {limitDate}
          </p>
        </motion.div>

        {/* Contenedor Principal con Glassmorphism */}
        <div className="bg-zinc-950/40 border border-white/5 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 space-y-10">
          
          {/* Selector de Cantidad Estilizado */}
          <div className="text-center space-y-6">
            <p className="text-[9px] uppercase tracking-[0.4em] text-amber-500/50 font-bold">Integrantes del grupo</p>
            <div className="flex items-center justify-between max-w-[200px] mx-auto border border-white/10 rounded-full p-2">
              <button 
                onClick={() => updateGuestCount(guests.length - 1)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <Minus size={14} />
              </button>
              <span className="text-3xl font-serif text-white">{guests.length}</span>
              <button 
                onClick={() => updateGuestCount(guests.length + 1)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Formulario Dinámico */}
          <div className="space-y-12">
            <AnimatePresence mode="popLayout">
              {guests.map((guest, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[9px] font-mono text-amber-500/40">0{index + 1}</span>
                    <div className="h-px flex-1 bg-white/5" />
                  </div>
                  
                  <div className="grid gap-8">
                    <div className="relative group">
                      <label className="text-[8px] uppercase tracking-[0.4em] text-slate-600 font-bold absolute -top-5 left-0">Nombre completo</label>
                      <input 
                        type="text" 
                        placeholder="NOMBRE Y APELLIDO"
                        className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-amber-500/40 transition-all text-white text-xs tracking-widest placeholder:text-zinc-800"
                        value={guest.name}
                        onChange={(e) => updateGuestData(index, "name", e.target.value)}
                      />
                    </div>

                    <div className="relative group">
                      <label className="text-[8px] uppercase tracking-[0.4em] text-slate-600 font-bold absolute -top-5 left-0">Menú especial</label>
                      <select 
                        className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none text-xs text-slate-400 tracking-widest appearance-none cursor-pointer"
                        value={guest.diet}
                        onChange={(e) => updateGuestData(index, "diet", e.target.value)}
                      >
                        <option className="bg-zinc-950">NINGUNA</option>
                        <option className="bg-zinc-950">CELÍACO/A</option>
                        <option className="bg-zinc-950">VEGETARIANO/A</option>
                        <option className="bg-zinc-950">VEGANO/A</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Botón de Acción Final */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleConfirm}
            className="w-full py-5 bg-white text-black rounded-2xl flex items-center justify-center gap-3 font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-amber-500 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.05)]"
          >
            <MessageCircle size={16} strokeWidth={2.5} /> 
            Finalizar Confirmación
          </motion.button>
        </div>

      
      </div>
    </section>
  );
};