/* eslint-disable @next/next/no-img-element */
"use client";
import Navigation from "@/components/Navigation";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { Link } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import LocaleSwitcher from "./localeSwitcher";

export default function Header() {
  const scrollDirection = useScrollDirection();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const hidden = scrollDirection === "down" && isMobile;

  return (
    <header
      className={`sticky top-0 z-50 bg-white/70 backdrop-blur-lg shadow-sm transition-transform duration-300 rounded-b-lg ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
          <img src="/logo.svg" alt="Logo" className="h-20 w-auto" />
        </Link>
        <div className="flex items-center">
          <Navigation />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
