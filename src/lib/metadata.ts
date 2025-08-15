import type { Metadata } from "next";
import { env } from "./env";

export const crearMetadata = ({
  titulo,
  descripcion,
  ruta,
  tipo = "website",
}: {
  titulo: string;
  descripcion: string;
  ruta: string;
  tipo?: "website" | "article";
  imagen?: string;
}): Metadata => {
  const fullTitle = `${titulo} | ${env.APP_NAME}`;

  return {
    title: fullTitle,
    description: descripcion,
    openGraph: {
      title: fullTitle,
      description: descripcion,
      url: `${env.APP_URL!}/${ruta}`,
      siteName: env.APP_NAME,
      type: tipo,
    },
  };
};
