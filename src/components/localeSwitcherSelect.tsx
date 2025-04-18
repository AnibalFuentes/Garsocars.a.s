"use client";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useTransition } from "react";

type Props = {
  children: ReactNode;
  delfaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  delfaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(`/${nextLocale}${pathname.replace(/^\/[^\/]+/, "")}`, {
        scroll: false,
      });
    });
  }

  return (
    <div className="relative text-gray-400">
      <p className="sr-only">{label}</p>
      <Select
        defaultValue={delfaultValue}
        onValueChange={onSelectChange}
        disabled={isPending}
      >
        <SelectTrigger className="w-[120px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>{children}</SelectContent>
      </Select>
    </div>
  );
}
