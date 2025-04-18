import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="flex gap-4">
      <Link href="/services" passHref>
        <Button variant="ghost" className="text-base font-medium">
          Servicios
        </Button>
      </Link>
      <Link href="/about" passHref>
        <Button variant="ghost" className="text-base font-medium">
          Nosotros
        </Button>
      </Link>
      <Link href="/contact" passHref>
        <Button variant="ghost" className="text-base font-medium">
          Contacto
        </Button>
      </Link>
    </nav>
  );
}
