import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

// Navigation Component
export function Navigation() {
  const t = useTranslations("navigation");
  const t2 = useTranslations("services");
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      key: "home",
      href: "/",
      label: t("home"),
    },
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
    {
      key: "about",
      href: "/about",
      label: t("about"),
    },
    {
      key: "contact",
      href: "/contact",
      label: t("contact"),
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <nav
      className="hidden md:flex items-center gap-1"
      role="navigation"
      aria-label="Navegación principal"
    >
      {navigationItems.map((item) => (
        <div
          key={item.key}
          className="relative"
          onMouseEnter={() => item.dropdown && setActiveDropdown(item.key)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Button
            variant="ghost"
            className={cn(
              "text-sm font-medium px-4 py-2 h-auto transition-all duration-200",
              "hover:bg-red-50 hover:text-red-600",
              isActive(item.href)
                ? "text-red-600 bg-red-50 font-semibold"
                : "text-gray-700"
            )}
            asChild={!item.dropdown}
          >
            {item.dropdown ? (
              <div className="flex items-center gap-1 cursor-pointer">
                <span>{item.label}</span>
                <ChevronDown
                  className={cn(
                    "w-3 h-3 transition-transform duration-200",
                    activeDropdown === item.key && "rotate-180"
                  )}
                />
              </div>
            ) : (
              <Link href={item.href} className="flex items-center">
                {item.label}
              </Link>
            )}
          </Button>

          {/* Dropdown Menu */}
          {item.dropdown && activeDropdown === item.key && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              {item.dropdown.map(
                (dropdownItem: { href: string; label: string }) => (
                  <Link
                    key={dropdownItem.href}
                    href={dropdownItem.href}
                    className={cn(
                      "block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors",
                      isActive(dropdownItem.href) &&
                        "text-red-600 bg-red-50 font-medium"
                    )}
                  >
                    {dropdownItem.label}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
