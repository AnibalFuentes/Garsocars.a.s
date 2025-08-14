"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Box,
  Phone,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";

import product1Image from "@/assets/images/image-hero.jpg";
import product2Image from "@/assets/images/image-render-01.jpg";
import product3Image from "@/assets/images/image-render-02.jpg";
import product4Image from "@/assets/images/image-render-03.jpg";
import product5Image from "@/assets/images/image-render-04.jpg";
import product6Image from "@/assets/images/image-hero.jpg";
import featuredImage from "@/assets/images/image-render-04.jpg";
import { Link } from "@/i18n/navigation";

const ProductsSection = () => {
  const t = useTranslations("products");
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const allProducts = [
    {
      name: "LED Christmas Lights - Premium",
      size: "100 meters",
      price: "1.20",
      features: [
        t("features.titleDeed"),
        t("features.premiumZone"),
        t("features.directAccess"),
      ],
      badge: t("badges.premium"),
      image: product1Image,
    },
    {
      name: "Solar Christmas Lights",
      size: "50 meters",
      price: "2.50",
      features: [
        t("features.titleDeed"),
        t("features.view"),
        t("features.socialArea"),
      ],
      badge: t("badges.popular"),
      image: product2Image,
    },
    {
      name: "RGB Smart Christmas Lights",
      size: "30 meters",
      price: "3.80",
      features: [
        t("features.titleDeed"),
        t("features.recreation"),
        t("features.parking"),
      ],
      badge: t("badges.exclusive"),
      image: product3Image,
    },
    {
      name: "Christmas Net Lights",
      size: "2x3 meters",
      price: "8.90",
      features: [
        t("features.titleDeed"),
        t("features.access"),
        t("features.services"),
      ],
      badge: t("badges.new"),
      image: product4Image,
    },
    {
      name: "Vintage Bulb Lights",
      size: "20 meters",
      price: "4.50",
      features: [
        t("features.titleDeed"),
        t("features.premiumZone"),
        t("features.directAccess"),
      ],
      badge: t("badges.premium"),
      image: product5Image,
    },
    {
      name: "Icicle LED Lights",
      size: "15 meters",
      price: "3.20",
      features: [
        t("features.titleDeed"),
        t("features.view"),
        t("features.socialArea"),
      ],
      badge: t("badges.popular"),
      image: product6Image,
    },
  ];

  const initialProducts = allProducts.slice(0, 4);
  const displayedProducts = showAllProducts ? allProducts : initialProducts;

  const nextProduct = () => {
    setCurrentProductIndex((prev) =>
      Math.min(prev + 1, allProducts.length - (showAllProducts ? 1 : 4))
    );
  };

  const prevProduct = () => {
    setCurrentProductIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            {t("description")}
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-white font-semibold shadow-lg">
            <Star className="h-5 w-5 mr-2" />
            {t("cta")}
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative mb-16 h-96 overflow-hidden rounded-xl shadow-xl">
          <Image
            src={featuredImage}
            alt="Christmas Lights Collection"
            className="w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {t("featured.title")}
              </h3>
              <p className="text-lg">{t("featured.subtitle")}</p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-12">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 overflow-hidden"
            style={{
              maxHeight: showAllProducts ? "none" : "650px",
              transition: "max-height 0.5s ease",
            }}
          >
            {displayedProducts.map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group border border-red-100"
              >
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    fill
                  />
                  <Badge className="absolute top-3 left-3 bg-red-600 text-white shadow-lg">
                    {product.badge}
                  </Badge>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-red-700">
                    {product.name}
                  </h3>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Box className="h-4 w-4 mr-1 text-red-600" />
                      {product.size}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4 p-3 rounded-lg bg-red-50">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full mr-2 bg-red-600"></div>
                        <span className="text-red-900">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-red-100 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-sm text-gray-600">
                          {t("card.from")}
                        </span>
                        <div className="text-2xl font-bold text-red-700">
                          ${product.price}/unit
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl">
                      <Link href="/contact" className="flex items-center gap-2">
                        <Phone className="h-4 w-4 mr-2" />
                        {t("card.moreInfo")}
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Show More/Less Button */}
          <div className="text-center mt-6">
            <Button
              onClick={() => setShowAllProducts(!showAllProducts)}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-lg"
            >
              {showAllProducts ? (
                <>
                  <ChevronUp className="h-5 w-5 mr-2" />
                  {t("showLess")}
                </>
              ) : (
                <>
                  <ChevronDown className="h-5 w-5 mr-2" />
                  {t("showMore")}
                </>
              )}
            </Button>
          </div>

          {/* Navigation Buttons (only shown when showing all products) */}
          {showAllProducts && allProducts.length > 4 && (
            <div className="flex justify-center mt-8 space-x-4">
              <Button
                onClick={prevProduct}
                disabled={currentProductIndex === 0}
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg disabled:opacity-50"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                onClick={nextProduct}
                disabled={currentProductIndex >= allProducts.length - 4}
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg disabled:opacity-50"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-red-600 to-red-700 text-white border-0 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t("finalCTA.title")}
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {t("finalCTA.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-red-700 hover:bg-neutral-100 shadow-lg"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <Phone className="h-4 w-4 mr-2" />
                  {t("finalCTA.callNow")}
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
