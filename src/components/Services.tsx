"use client";

import { motion } from "framer-motion";
import { Globe, Package, TrendingUp, Users, Plane } from "lucide-react"; // Plane para exportaciones
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <>
      {/* Sección de Servicios */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Importaciones Globales",
                desc: "Acceda a productos de calidad de proveedores internacionales confiables.",
                icon: <Package className="h-12 w-12 text-primary mb-4" />,
              },
              {
                title: "Exportaciones Internacionales",
                desc: "Lleve sus productos a mercados globales con eficiencia y respaldo profesional.",
                icon: <Plane className="h-12 w-12 text-primary mb-4" />,
              },
              {
                title: "Asesoría Especializada",
                desc: "Guía experta en trámites aduaneros y regulaciones de importación.",
                icon: <Users className="h-12 w-12 text-primary mb-4" />,
              },
              {
                title: "Logística Integral",
                desc: "Optimizamos el transporte y almacenamiento de sus productos importados.",
                icon: <TrendingUp className="h-12 w-12 text-primary mb-4" />,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.desc}
                  icon={service.icon}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Sección ¿Por qué elegirnos? */}
      <motion.section
        className="bg-gray-200 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Alcance Global",
                desc: "Conexiones con proveedores de todo el mundo.",
                icon: <Globe className="h-8 w-8" />,
              },
              {
                title: "Eficiencia",
                desc: "Procesos optimizados para ahorrar tiempo y costos.",
                icon: <Package className="h-8 w-8" />,
              },
              {
                title: "Experiencia",
                desc: "Equipo de expertos en comercio internacional.",
                icon: <Users className="h-8 w-8" />,
              },
              {
                title: "Exportaciones Efectivas",
                desc: "Expanda su negocio a nivel internacional con confianza.",
                icon: <Plane className="h-8 w-8" />,
              },
            ].map((reason, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {reason.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
