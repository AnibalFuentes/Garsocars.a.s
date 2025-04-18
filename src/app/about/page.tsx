// import Services from "@/components/Services";
// import Footer from "@/components/Footer";

import AboutUs from "@/components/about";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sobre nosotros - Garsocar sas",
  description:
    "Garsocar sas - Soluciones de importación confiables y eficientes para su negocio.",
};

export default function services() {
  return <AboutUs />;
}
