import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./localeSwitcher";

export default function Navigation() {
  const t = useTranslations("navigation");

  return (
    <nav className="flex gap-4">
      <Link href="/services" passHref>
        <Button variant="ghost" className="text-base font-medium">
          {t("services")}
        </Button>
      </Link>
      <Link href="/about" passHref>
        <Button variant="ghost" className="text-base font-medium">
          {t("about")}
        </Button>
      </Link>
      <Link href="/contact" passHref>
        <Button variant="ghost" className="text-base font-medium">
          {t("contact")}
        </Button>
      </Link>
      <LocaleSwitcher />


    </nav>
  );
}
