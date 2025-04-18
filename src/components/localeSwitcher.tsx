import { useLocale, useTranslations } from "next-intl";
import React from "react";
import LocaleSwitcherSelect from "./localeSwitcherSelect";
import { routing } from "@/i18n/routing";
import { SelectItem } from "./ui/select";

export default function LocaleSwitcher() {
  // Get the root translations object if localeSwitcher is at the top level
  const t = useTranslations();
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      delfaultValue={locale}
      label={t("localeSwitcher.label")}
    >
      {routing.locales.map((cur) => (
        <SelectItem key={cur} value={cur}>
          {t("localeSwitcher.locale", { locale: cur })}
        </SelectItem>
      ))}
    </LocaleSwitcherSelect>
  );
}
