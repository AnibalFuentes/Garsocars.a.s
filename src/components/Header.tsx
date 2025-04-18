/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg shadow-sm transition-all duration-300 rounded-b-lg">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center ">
        <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
          <img src="/logo.svg" alt="Logo" className="h-20 w-auto" />
        </Link>

        <Navigation />
      </div>
    </header>
  );
}
