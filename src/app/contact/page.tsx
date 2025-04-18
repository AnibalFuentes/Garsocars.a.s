// import Services from "@/components/Services";
// import Footer from "@/components/Footer";

import Contact from "@/components/Contact";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contactanos - Garsocar sas",
  description:
    "Garsocar sas - Soluciones de importación confiables y eficientes para su negocio.",
};

export default function contacts() {
  return <Contact />;
}
