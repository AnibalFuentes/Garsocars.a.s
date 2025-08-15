"use client";

import { env } from "@/lib/env";
import { crearMetadata } from "@/lib/metadata";
import { motion } from "framer-motion";
import { Sun, Wind, Zap, Globe, Award, Target, Compass } from "lucide-react";
import { useTranslations } from "next-intl";

export const metadata = crearMetadata({
  titulo: "About",
  descripcion: `Explora en imágenes la vida académica, eventos, actividades y logros destacados de ${env.APP_NAME}, reflejando nuestro compromiso con la educación y el desarrollo regional.`,
  ruta: "about",
});

export default function AboutUs() {
  const t = useTranslations("about");

  const services = [
    {
      icon: <Sun className="h-8 w-8 text-primary" />,
      label: t("services.solar"),
    },
    {
      icon: <Wind className="h-8 w-8 text-primary" />,
      label: t("services.wind"),
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      label: t("services.thermal"),
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      label: t("services.biofuel"),
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
          <h1 className="text-4xl font-bold mb-4">{t("banner.title")}</h1>
          <p className="text-lg">{t("banner.description")}</p>
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
              <h2 className="text-3xl font-bold mb-4">{t("whoWeAre.title")}</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            </motion.div>

            <motion.p
              className="text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="font-bold text-primary">GARSOCAR S.A.S</span>{" "}
              {t("whoWeAre.description")}
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
              {t("whoWeAre.extra")}
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
                <h2 className="text-3xl font-bold mb-6">
                  {t("mission.title")}
                </h2>
                <div className="w-24 h-1 bg-primary mb-8"></div>
                <p className="text-lg mb-4">{t("mission.text")}</p>
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
                <h2 className="text-3xl font-bold mb-6">{t("vision.title")}</h2>
                <div className="w-24 h-1 bg-primary mb-8"></div>
                <p className="text-lg mb-4">{t("vision.text")}</p>
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
              <h2 className="text-3xl font-bold mb-4">{t("values.title")}</h2>
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
              <h3 className="text-xl font-bold mb-3">
                {t("values.excellence.title")}
              </h3>
              <p>{t("values.excellence.desc")}</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">
                {t("values.sustainability.title")}
              </h3>
              <p>{t("values.sustainability.desc")}</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">
                {t("values.innovation.title")}
              </h3>
              <p>{t("values.innovation.desc")}</p>
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
              <p className="text-5xl font-bold mb-2">
                {t("facts.foundation.value")}
              </p>
              <p className="text-lg">{t("facts.foundation.label")}</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl font-bold mb-2">
                {t("facts.commitment.value")}
              </p>
              <p className="text-lg">{t("facts.commitment.label")}</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl font-bold mb-2">
                {t("facts.reach.value")}
              </p>
              <p className="text-lg">{t("facts.reach.label")}</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
