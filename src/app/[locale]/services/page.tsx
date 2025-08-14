"use client";

import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { Globe, Package, TrendingUp, Users, Plane } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("services");

  const serviceIcons = [Package, Plane, Users, TrendingUp];
  const reasonIcons = [Globe, Package, Users, Plane];

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
          <h2 className="text-3xl font-bold text-center mb-12">{t("title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t
              .raw("items")
              .map(
                (service: { title: string; desc: string }, index: number) => {
                  const Icon = serviceIcons[index];
                  return (
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
                        icon={<Icon className="h-12 w-12 text-primary mb-4" />}
                      />
                    </motion.div>
                  );
                }
              )}
          </div>
        </div>
      </motion.section>

      {/* Sección ¿Por qué elegirnos? */}
      <motion.section
        className="bg-pink-50 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("whyUsTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t
              .raw("reasons")
              .map((reason: { title: string; desc: string }, index: number) => {
                const Icon = reasonIcons[index];
                return (
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
                      <Icon className="h-8 w-8" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600">{reason.desc}</p>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </motion.section>
    </>
  );
}
