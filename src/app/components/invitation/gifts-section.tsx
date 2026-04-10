"use client";
import { Copy, Gift } from "lucide-react";

export const GiftsSection = () => {
  const alias = "TU.ALIAS.AQUI"; // <--- Cambiar por el real del cliente
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(alias);
    // Podés usar un toast si tenés instalado, sino el alert clásico
    alert("¡Alias copiado!");
  };

  return (
    <section className="py-20 px-6 text-center">
      <div className="flex justify-center mb-6">
        <div className="p-4 rounded-full border border-gold/20">
          <Gift className="text-gold" size={32} strokeWidth={1} />
        </div>
      </div>
      <h2 className="font-serif text-3xl mb-4 italic">Regalos</h2>
      <p className="text-sm text-muted-foreground max-w-xs mx-auto mb-10 leading-relaxed">
        Si deseás colaborar con nuestra fiesta de egresados, podés hacerlo a través de nuestro Alias:
      </p>
      
      <div className="inline-flex flex-col items-center gap-3 p-8 border border-gold/10 bg-muted/30">
        <p className="text-[10px] uppercase tracking-widest font-bold opacity-50">Alias</p>
        <p className="text-xl font-serif text-primary italic selection:bg-gold/20">{alias}</p>
        <button 
          onClick={copyToClipboard}
          className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold border-b border-primary pb-1 hover:opacity-50 transition-all"
        >
          Copiar Alias <Copy size={12} />
        </button>
      </div>
    </section>
  );
};