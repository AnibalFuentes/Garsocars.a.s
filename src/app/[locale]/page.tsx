"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Star } from "lucide-react";
import SeccionTextosMovimientoService from "@/components/seccion-textos-movimiento";
import ProductsSection from "@/components/products-section";

export default function Home() {
  const t = useTranslations("home");

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] flex items-center pb-24 bg-gradient-to-br from-slate-900 via-primary to-slate-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="py-10 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
              {/* Contenido de texto */}
              <motion.div
                className="space-y-8 text-center lg:text-left"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-white/20"
                >
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span>{t("since_quality")}</span>
                </motion.div>

                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
                      {t("title")}
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-red-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    {t("description")}
                  </p>
                </div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Button
                    size="lg"
                    className="bg-white text-slate-900 hover:bg-red-50 text-lg px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    asChild
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      {t("cta")}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Imagen mejorada */}
              <motion.div
                className="relative order-first lg:order-last"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-500/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>

                  {/* Main image container */}
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                    <div className="relative overflow-hidden rounded-2xl bg-white/5">
                      <Image
                        src="/import.svg"
                        alt={t("title")}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        priority
                      />
                    </div>

                    {/* Floating stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20"
                    >
                      <div className="text-slate-900">
                        <div className="text-2xl font-bold text-red-600">
                          {new Date().getFullYear() - 2017}+
                        </div>
                        <div className="text-sm text-slate-600">{t("xp")}</div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1 }}
                      className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20"
                    >
                      <div className="text-slate-900">
                        <div className="flex items-center gap-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 text-yellow-400 fill-yellow-400"
                            />
                          ))}
                        </div>
                        <div className="text-sm text-slate-600">{t("qa")}</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </motion.div>
      </section>
      <section id="services">
        <SeccionTextosMovimientoService />
      </section>

      <section id="products">
        <ProductsSection />
      </section>
    </>
  );
}
