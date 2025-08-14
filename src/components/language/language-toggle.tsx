"use client";

import { useRouter, usePathname } from "next/navigation";
import { Check, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  // { code: "pt", name: "Português", flag: "🇧🇷" },
];

interface LanguageToggleProps {
  icon?: boolean;
}

export function LanguageToggle({ icon = false }: LanguageToggleProps) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split("/");
    if (segments[1] === currentLocale) {
      segments.splice(1, 1);
    }

    segments.splice(1, 0, newLocale);
    const newPath = segments.join("/");

    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          size={icon ? "icon" : "sm"}
          aria-label="Toggle language"
          className={cn(
            "flex items-center gap-1 text-sm",
            "text-black", // color del texto
            icon ? "px-2" : "px-1"
          )}
        >
          <Globe className={icon ? "h-5 w-5" : "h-4 w-4"} />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="bg-primary border-none shadow-xl text-white p-1 rounded-lg"
      >
        {languages.map((language) => {
          const isActive = currentLocale === language.code;
          return (
            <DropdownMenuItem
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={cn(
                "cursor-pointer flex items-center justify-between px-3 py-2 rounded-md transition-colors",
                "bg-transparent",
                "focus:bg-white focus:text-primary", // foco blanco con texto rojo
                isActive ? "font-semibold text-white" : "text-white"
              )}
            >
              <span>
                {language.flag} {language.name}
              </span>
              {isActive && <Check className="ml-2 h-4 w-4 text-white" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
