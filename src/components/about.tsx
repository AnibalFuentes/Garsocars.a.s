"use client";

import { motion } from "framer-motion";
import { Sun, Wind, Zap, Globe, Award, Target, Compass } from "lucide-react";

export default function AboutUs() {
  const services = [
    {
      icon: <Sun className="h-8 w-8 text-primary" />,
      label: "Energía Solar",
    },
    {
      icon: <Wind className="h-8 w-8 text-primary" />,
      label: "Energía Eólica",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      label: "Energía Térmica",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      label: "Biocombustible",
    },
  ];

  return (
    <>
      {/* 🔷 Banner Superior */}
      <motion.section
        className="bg-primary text-white py-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
          <p className="text-lg">
            Conoce nuestra historia y compromiso con el comercio internacional
          </p>
        </div>
      </motion.section>

      {/* 📜 Quiénes Somos / Historia */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">¿Quiénes Somos?</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            </motion.div>

            <motion.p
              className="text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="font-bold text-primary">GARSOCAR S.A.S</span> fue
              fundada en el año 2017 con el objetivo de efectuar actividades de
              comercio exterior y particularmente orientar actividades para la
              promoción y comercialización de productos colombianos en los
              mercados internacionales y viceversa.
            </motion.p>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-lg max-w-3xl mx-auto mb-8">
              A la fecha, Garsocar S.A.S ha desarrollado la exportación y
              comercialización de equipos, accesorios, materia prima y
              herramientas para la producción de energía alternativas como la
              energía eólica, solar, térmica y biocombustible.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {service.icon}
                  <span className="mt-3 font-medium">{service.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 🎯 Misión */}
      <motion.section
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="md:w-1/3 flex justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Target className="w-32 h-32 text-primary" />
              </motion.div>
            </div>

            <div className="md:w-2/3">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
                <div className="w-24 h-1 bg-primary mb-8"></div>
                <p className="text-lg mb-4">
                  Ser líder en el mercado de la exportación e importación
                  desarrollando operaciones de cualquier naturaleza relacionadas
                  con el comercio exterior, así como cualquier actividad similar
                  o complementaria que permitan facilitar el desarrollo del
                  comercio e industria de la sociedad.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 🧭 Visión */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="md:w-1/3 flex justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Compass className="w-32 h-32 text-primary" />
              </motion.div>
            </div>

            <div className="md:w-2/3">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Nuestra Visión</h2>
                <div className="w-24 h-1 bg-primary mb-8"></div>
                <p className="text-lg mb-4">
                  Para 2026, consolidarnos como una empresa referente en el
                  sector de comercio internacional, especializada en energías
                  alternativas, reconocida por la calidad de nuestros servicios
                  y el compromiso con el desarrollo sostenible.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 🏆 Valores */}
      <motion.section
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Nuestros Valores</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-white p-6 rounded-lg shadow text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Excelencia</h3>
              <p>
                Nos comprometemos con los más altos estándares de calidad en
                todos nuestros servicios de comercio internacional.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Sostenibilidad</h3>
              <p>
                Promovemos soluciones energéticas alternativas que contribuyen
                al desarrollo sostenible del planeta.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Innovación</h3>
              <p>
                Buscamos constantemente nuevas tecnologías y soluciones para
                mejorar nuestros servicios y productos.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 🏢 Año de Fundación */}
      <motion.section
        className="py-16 bg-primary text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
            <motion.div
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl font-bold mb-2">2017</p>
              <p className="text-lg">Año de Fundación</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl font-bold mb-2">100%</p>
              <p className="text-lg">Compromiso</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl font-bold mb-2">Global</p>
              <p className="text-lg">Alcance</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
