/* eslint-disable @next/next/no-img-element */
"use client";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { LanguageToggle } from "./language/language-toggle";
import { cn } from "@/lib/utils";
import { Navigation } from "./Navigation";

// Mobile Navigation Component
function MobileNavigation({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const t = useTranslations("navigation");
  const t2 = useTranslations("services");
  const pathname = usePathname();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const navigationItems = [
    { key: "home", href: "/", label: t("home") },
    {
      key: "products",
      href: "/#products",
      label: t("products"),
    },
    {
      key: "services",
      href: "/services",
      label: t2("title"),
      dropdown: t2
        .raw("items")
        .map((service: { title: string; desc: string }) => ({
          href: "/contact", // Ajusta el slug si quieres algo más descriptivo
          label: service.title,
        })),
    },
    { key: "about", href: "/about", label: t("about") },
    { key: "contact", href: "/contact", label: t("contact") },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  const handleLinkClick = () => {
    onClose();
    setExpandedSection(null);
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-40 bg-black/50" onClick={onClose}>
      <div
        className="bg-white w-80 h-full shadow-xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <img src="/logo.svg" alt="Garsocar Logo" className="h-12 w-auto" />
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="p-2"
              aria-label="Cerrar menú"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <div key={item.key}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() =>
                        setExpandedSection(
                          expandedSection === item.key ? null : item.key
                        )
                      }
                      className={cn(
                        "w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors",
                        isActive(item.href)
                          ? "bg-red-50 text-red-600 font-semibold"
                          : "hover:bg-gray-50 text-gray-700"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          expandedSection === item.key && "rotate-180"
                        )}
                      />
                    </button>

                    {expandedSection === item.key && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.dropdown.map(
                          (child: { href: string; label: string }) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={handleLinkClick}
                              className={cn(
                                "block p-2 rounded-md text-sm transition-colors",
                                isActive(child.href)
                                  ? "bg-red-50 text-red-600 font-medium"
                                  : "hover:bg-gray-50 text-gray-600"
                              )}
                            >
                              {child.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className={cn(
                      "block p-3 rounded-lg transition-colors",
                      isActive(item.href)
                        ? "bg-red-50 text-red-600 font-semibold"
                        : "hover:bg-gray-50 text-gray-700"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info in Mobile Menu */}
          {/* <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
            <h4 className="font-semibold text-gray-900">Contacto Directo</h4>
            <a
              href="tel:+573206634483"
              className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 text-green-600" />
              <span className="text-sm text-gray-700">+57 320 663 4483</span>
            </a>
            <a
              href="mailto:garsocarsas@gmail.com"
              className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4 text-red-600" />
              <span className="text-sm text-gray-700">
                garsocarsas@gmail.com
              </span>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

// Main Header Component
export default function Header() {
  const scrollDirection = useScrollDirection();
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    checkMobile();
    handleScroll();

    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, []);

  const hidden = scrollDirection === "down" && isMobile && !mobileMenuOpen;

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          "bg-white/80 backdrop-blur-lg shadow-sm",
          isScrolled && "bg-white/95 shadow-md",
          hidden ? "-translate-y-full" : "translate-y-0"
        )}
        role="banner"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 group"
              aria-label="Garsocar - Página de inicio"
            >
              <img
                src="/logo.svg"
                alt="Garsocar Logo"
                className="h-12 md:h-20 w-auto transition-transform duration-200 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-4">
              <Navigation />

              {/* Contact Button - Desktop */}
              {/* <div className="hidden lg:flex items-center gap-2">
                <Button variant="outline" size="sm" className="text-sm" asChild>
                  <a href="tel:+573206634483">
                    <Phone className="w-4 h-4 mr-2" />
                    Llamar
                  </a>
                </Button>
              </div> */}

              <LanguageToggle />

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Abrir menú de navegación"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
