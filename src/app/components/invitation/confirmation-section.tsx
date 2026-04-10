"use client";

import React, { useState, useEffect } from "react";
import { Plus, Minus, MessageCircle, Utensils, Music, User } from "lucide-react";

interface Guest {
  name: string;
  diet: string;
  song: string;
}

export const ConfirmationSection = () => {
  const [type, setType] = useState<"cena" | "brindis">("cena");
  const [guests, setGuests] = useState<Guest[]>([{ name: "", diet: "Ninguna", song: "" }]);

  const whatsappNumber = "543573690769";

  // Manejar cantidad de invitados
  const updateGuestCount = (newCount: number) => {
    if (newCount < 1) return;
    if (newCount > guests.length) {
      setGuests([...guests, { name: "", diet: "Ninguna", song: "" }]);
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
    let message = "";
    if (type === "cena") {
      message = `¡Hola! Confirmo asistencia para la CENA de Egresados:%0A`;
      guests.forEach((g, i) => {
        message += `%0A*Invitado ${i + 1}:* ${g.name || "Sin nombre"}%0A• Dieta: ${g.diet}%0A• Canción: ${g.song || "N/A"}%0A`;
      });
    } else {
      message = `¡Hola! Confirmo mi asistencia para el BRINDIS de Egresados. ¡Ahí estaré!`;
    }
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="py-24 px-6 max-w-2xl mx-auto text-center">
      <p className="text-[10px] uppercase tracking-[0.4em] text-primary/40 mb-4 font-bold">Confirmación</p>
      <h2 className="font-serif text-3xl text-primary mb-12 italic">¿Venís a la fiesta?</h2>

      {/* Selector de tipo */}
      <div className="flex gap-2 mb-10 p-1 bg-slate-50 rounded-2xl border border-slate-100">
        <button
          onClick={() => setType("cena")}
          className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all ${
            type === "cena" ? "bg-white text-primary shadow-sm border border-slate-100" : "text-primary/30"
          }`}
        >
          Cena
        </button>
        <button
          onClick={() => setType("brindis")}
          className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all ${
            type === "brindis" ? "bg-white text-primary shadow-sm border border-slate-100" : "text-primary/30"
          }`}
        >
          Brindis
        </button>
      </div>

      <div className="space-y-6">
        {type === "cena" ? (
          <>
            {/* Contador */}
            <div className="bg-white border border-slate-100 p-8 rounded-3xl">
              <p className="text-[9px] uppercase tracking-widest font-bold text-primary/30 mb-6">¿Cuántas personas confirman?</p>
              <div className="flex items-center justify-center gap-10">
                <button 
                  onClick={() => updateGuestCount(guests.length - 1)}
                  className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-primary/40 hover:border-primary/20"
                >
                  <Minus size={14} />
                </button>
                <span className="text-3xl font-serif text-primary">{guests.length}</span>
                <button 
                  onClick={() => updateGuestCount(guests.length + 1)}
                  className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-primary/40 hover:border-primary/20"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Formularios Dinámicos */}
            {guests.map((guest, index) => (
              <div key={index} className="bg-white border border-slate-100 p-8 rounded-3xl text-left space-y-6 animate-in fade-in slide-in-from-top-2 duration-500">
                <div className="flex items-center gap-2 pb-4 border-b border-slate-50">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/20">Invitado {index + 1}</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="flex items-center gap-2 text-[9px] uppercase tracking-widest font-bold text-primary/30 mb-2">
                      <User size={12} /> Nombre y Apellido
                    </label>
                    <input 
                      type="text" 
                      className="w-full border-b border-slate-100 py-2 focus:outline-none focus:border-primary/30 transition-colors text-sm"
                      value={guest.name}
                      onChange={(e) => updateGuestData(index, "name", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[9px] uppercase tracking-widest font-bold text-primary/30 mb-2">
                      <Utensils size={12} /> Restricción alimentaria
                    </label>
                    <select 
                      className="w-full border-b border-slate-100 py-2 focus:outline-none bg-transparent text-sm text-primary/70"
                      value={guest.diet}
                      onChange={(e) => updateGuestData(index, "diet", e.target.value)}
                    >
                      <option>Ninguna</option>
                      <option>Celíaco/a</option>
                      <option>Vegetariano/a</option>
                      <option>Vegano/a</option>
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[9px] uppercase tracking-widest font-bold text-primary/30 mb-2">
                      <Music size={12} /> Canción favorita
                    </label>
                    <input 
                      type="text" 
                      className="w-full border-b border-slate-100 py-2 focus:outline-none focus:border-primary/30 transition-colors text-sm"
                      value={guest.song}
                      onChange={(e) => updateGuestData(index, "song", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="bg-white border border-slate-100 p-12 rounded-3xl">
            <p className="text-sm text-primary/50 leading-relaxed italic">
              "Confirmá tu asistencia para el momento del brindis y baile."
            </p>
          </div>
        )}

        <button
          onClick={handleConfirm}
          className="w-full py-5 bg-[#1a2537] text-white rounded-full flex items-center justify-center gap-3 font-bold text-[11px] uppercase tracking-widest shadow-lg hover:bg-black transition-all mt-6"
        >
          <MessageCircle size={18} /> Confirmar Asistencia
        </button>
      </div>
    </section>
  );
};