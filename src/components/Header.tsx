import Link from "next/link";
import { Globe } from "lucide-react";
import Navigation from "@/components/Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
          <Globe className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">Garsocar s.a.s</span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
