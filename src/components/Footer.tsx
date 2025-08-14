import { useTranslations } from "next-intl";
import { Instagram, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { env } from "@/lib/env";

export default function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: Mail,
      href: "mailto:garsocarsas@gmail.com",
      text: "garsocarsas@gmail.com",
      label: "Email",
    },
    {
      icon: Phone,
      href: `tel:${env.WHATSAPP_NUMBER}`,
      text: env.WHATSAPP_NUMBER,
      label: "Teléfono",
    },
    {
      icon: MapPin,
      href: "https://www.google.com/maps?q=Calle+9b+%235-20+Novalito,+Valledupar,+Colombia",
      text: "Calle 9b #5-20 Novalito, Valledupar, Colombia",
      label: "Dirección",
      external: true,
    },
  ];

  return (
    <footer className="bg-gray-50 text-gray-700 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo y descripción */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Garsocar
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                {t("description")}
              </p>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              {t("contact.title")}
            </h3>
            <div className="space-y-4">
              {contactInfo.map(
                ({ icon: Icon, href, text, label, external }) => (
                  <div key={label} className="flex items-start group">
                    <Icon
                      className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0 group-hover:text-gray-600 transition-colors"
                      aria-hidden="true"
                    />
                    <a
                      href={href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-1"
                      aria-label={`${label}: ${text}`}
                      {...(external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      <span>{text}</span>
                      {external && (
                        <ExternalLink
                          className="w-3 h-3 opacity-60"
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              {t("social.title")}
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/garsocarsas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="group p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* Espacio para más redes sociales futuras */}
            </div>
            {/* <p className="text-xs text-gray-500 mt-3">
              {t("social.follow")}
            </p> */}
          </div>
        </div>

        {/* Separador y derechos reservados */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Garsocar. {t("copyright")}
            </p>

            {/* Links adicionales opcionales */}
            {/* <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                {t("privacy", { defaultValue: "Política de Privacidad" })}
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                {t("terms", { defaultValue: "Términos de Servicio" })}
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
