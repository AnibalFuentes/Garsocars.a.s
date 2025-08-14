"use client";

import { env } from "@/lib/env";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { VscRobot } from "react-icons/vsc";

const BotonWhatsApp = () => {
  const [open, setOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg cursor-pointer whatsapp-button-glow"
          aria-label="Abrir chat de WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6" />
        </button>
      )}
      {open && (
        <div className="mt-2 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
          <div className="bg-green-600 text-white px-4 py-3 flex items-center gap-3 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-white hover:bg-white/10 rounded-full p-1"
            >
              <IoMdClose className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-700 rounded-full overflow-hidden flex items-center justify-center">
                <VscRobot className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-medium text-sm">Atención al Cliente</h3>
                <p className="text-xs text-green-100">
                  Generalmente responde rápido.
                </p>
              </div>
            </div>
          </div>

          {/* Área de mensajes */}
          <div className="bg-[#efeae2] px-4 py-6 min-h-[120px] relative">
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="flex justify-start">
                <div className="bg-white rounded-lg px-3 py-2 max-w-[250px] shadow-sm">
                  <p className="text-sm text-gray-800 mb-1">
                    ¿Necesitas información sobre nuestros programas?
                  </p>
                  <p className="text-xs text-gray-500">{currentTime}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Botón dentro del cuadro de chat (sin glow) */}
          <div className="bg-[#efeae2] px-4 pb-4">
            <a
              href={`https://wa.me/${env.WHATSAPP_NUMBER}?text=Hola,%20quiero%20información%20sobre%20los%20servicios%20y%20productos%20de%20GARSOCAR`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 transition-colors flex items-center justify-center text-white text-sm font-medium py-3 px-4 rounded-full w-full shadow-lg"
            >
              <FaWhatsapp className="w-4 h-4 mr-2" />
              Chat en WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Estilo para el glow */}
      <style jsx>{`
        .glow-icon {
          animation: pulse-glow 2s infinite;
          border-radius: 9999px;
          box-shadow: 0 0 8px rgba(37, 211, 102, 0.6);
        }

        @keyframes pulse-glow {
          0% {
            box-shadow: 0 0 0px rgba(37, 211, 102, 0.5);
          }
          50% {
            box-shadow: 0 0 12px 6px rgba(37, 211, 102, 0.7);
          }
          100% {
            box-shadow: 0 0 0px rgba(37, 211, 102, 0.5);
          }
        }
      `}</style>
    </div>
  );
};

export default BotonWhatsApp;
