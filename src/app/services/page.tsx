// import Services from "@/components/Services";
// import Footer from "@/components/Footer";

import Services from "@/components/Services";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Servicios - Garsocar sas",
  description:
    "Garsocar sas - Soluciones de importación confiables y eficientes para su negocio.",
};

export default function services() {
  return <Services />;
}
