"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const SeccionTextosMovimientoService = () => {
  const t = useTranslations("services");

  // Obtenemos los títulos de los servicios
  const items = t.raw("items") as { title: string; desc: string }[];
  const textos = items.map((item) => item.title);

  return (
    <div className="py-14 md:py-12 bg-amber-50">
      <div className="container mx-auto px-4 py-10">
        {/* Zona roja con el título y el ticker */}
        <div className="bg-primary py-8 md:py-12 rounded-xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-white">
              {t("title")}
            </h2>
          </div>

          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]">
            <motion.div
              className="flex gap-14 whitespace-nowrap pr-14"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...textos, ...textos].map((texto, index) => (
                <span
                  key={index}
                  className={`tracking-tighter text-lg md:text-2xl font-bold flex-shrink-0 uppercase ${
                    index % 2 === 0 ? "text-white" : "text-gray-200"
                  }`}
                >
                  {texto}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeccionTextosMovimientoService;
