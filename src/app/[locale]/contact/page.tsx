"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t  = useTranslations("contact");
  
  const links = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      label: t("links.call"),
      href: "tel:+573206634483",
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      label: t("links.whatsapp"),
      href: "https://wa.me/573206634483",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      label: t("links.email"),
      href: "mailto:garsocarsas@gmail.com",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      label: t("links.location"),
      href: "https://www.google.com/maps?q=Calle+9b+%235-20+Novalito,+Valledupar,+Colombia",
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

      {/* 🧭 Enlaces de contacto */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">{t("contactTitle")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {links.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {item.icon}
                <span className="mt-2 text-lg font-semibold">{item.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}