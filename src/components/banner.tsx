"use client";

import { env } from "@/lib/env";
import { Phone, Globe, Instagram } from "lucide-react";

const Banner = () => {
  return (
    <div className=" text-red-500 text-sm px-4 py-2">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-2">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-1">
            <Phone size={14} />
            <span>{env.WHATSAPP_NUMBER}</span>
          </div>
          <div className="flex items-center gap-1">
            <Globe size={14} />
            <span>{env.APP_URL}</span>
          </div>
          <div className="flex items-center gap-1">
            <Instagram size={14} />
            <span>@{env.IG}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
