import Link from "next/link";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-700 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Garsocar</h3>
            <p className="text-sm text-gray-600">
              Soluciones de importación confiables y eficientes para su negocio.
            </p>
          </div>

          {/* Enlaces rápidos */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-gray-900 transition"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-600 hover:text-gray-900 transition"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-gray-900 transition"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-gray-900 transition"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div> */}

          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctenos</h3>
            <p className="flex items-center text-sm text-gray-600 mb-2">
              <Mail className="w-4 h-4 mr-2" />
              <a
                href="mailto:garsocarsas@gmail.com"
                className="hover:text-gray-900 transition"
              >
                garsocarsas@gmail.com
              </a>
            </p>
            <p className="flex items-center text-sm text-gray-600 mb-2">
              <Phone className="w-4 h-4 mr-2" />
              <a
                href="tel:+573206634483"
                className="hover:text-gray-900 transition"
              >
                +57 3206634483
              </a>
            </p>
            <p className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <a
                href="https://www.google.com/maps?q=Calle+9b+%235-20+Novalito,+Valledupar,+Colombia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition"
              >
                Calle 9b #5-20 Novalito, Valledupar, Colombia
              </a>
            </p>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              {/* <Link href="https://facebook.com" className="text-gray-600 hover:text-gray-900 transition">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-600 hover:text-gray-900 transition">
                <Twitter className="w-6 h-6" />
              </Link> */}
              <Link
                href="https://www.instagram.com/garsocarsas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="text-gray-600 hover:text-gray-900 transition"
                target="_blank"
              >
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="mt-12 pt-6 border-t border-gray-400 text-center">
          <p className="text-sm text-gray-600">
            &copy; 2025 Garsocar. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
