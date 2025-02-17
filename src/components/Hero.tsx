"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Contenido de texto con animaciones */}
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 50 }} // Inicia invisible y más abajo
            animate={{ opacity: 1, y: 0 }} // Se vuelve visible y sube
            transition={{ duration: 0.8, ease: "easeOut" }} // Transición suave
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Importaciones sin complicaciones
            </h1>
            <p className="text-xl mb-6">
              Conectamos su negocio con el mundo. Soluciones de importación
              eficientes y confiables.
            </p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Solicitar cotización
              </Button>
            </motion.div>
          </motion.div>

          {/* Imagen con animación desde la derecha */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 100 }} // Inicia invisible y más a la derecha
            animate={{ opacity: 1, x: 0 }} // Se mueve a su posición normal
            transition={{ duration: 0.8, ease: "easeOut" }} // Transición suave
          >
            <Image
              src="/import.svg"
              alt="Importaciones globales"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
