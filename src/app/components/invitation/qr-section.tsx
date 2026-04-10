import { QrCode } from "lucide-react";

export const QRSection = () => {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-md mx-auto bg-white border border-slate-100 p-12 rounded-[2.5rem] shadow-sm">
        <div className="flex justify-center mb-6 text-primary/20">
          <QrCode size={40} strokeWidth={1} />
        </div>
        <h2 className="font-serif text-2xl mb-4 italic text-primary">QR Social</h2>
        <p className="text-[10px] text-primary/40 uppercase tracking-[0.3em] mb-10 leading-relaxed font-bold">
          Compartí tus mejores fotos <br /> y videos de la fiesta
        </p>
        
        <div className="bg-slate-50 p-8 rounded-3xl mb-8 border border-dashed border-slate-200 inline-block">
          {/* El QR que te pase el cliente */}
          <div className="w-36 h-36 bg-white flex items-center justify-center p-2 shadow-inner">
             <img src="/images/qr-social.png" alt="Escanear QR" className="w-full h-full object-contain" />
          </div>
        </div>

        <p className="text-[11px] text-primary/50 leading-relaxed italic">
          "Escaneá el código para entrar al álbum compartido."
        </p>
      </div>
    </section>
  );
};