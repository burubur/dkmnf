import React, { useState, useEffect } from "react";
import { MapPin, Clock } from "lucide-react";

export function TopBar() {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      setTimeStr(`${h}:${m}:${s} WIB`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#064e3b] text-white text-xs border-b border-[#065f46] py-2 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="flex items-center gap-1.5 text-emerald-300 font-medium">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Kp. Sukatani, Cisolok</span>
          </span>
          <span className="hidden sm:inline-block text-emerald-600">•</span>
          <span className="text-amber-300 font-medium hidden sm:inline-block">
            Masjid Nurul Falah Sukatani
          </span>
        </div>

        <div className="flex items-center gap-3 font-mono">
          <span className="text-emerald-200 flex items-center gap-1">
            <Clock className="w-3 h-3 text-emerald-400 inline" />
            {timeStr || "00:00:00 WIB"}
          </span>
          <span className="bg-emerald-800/90 px-2.5 py-0.5 rounded-md text-[11px] text-amber-200 border border-emerald-700/60 font-sans font-semibold">
            Status: <span className="text-emerald-300">Aktif & Makmur</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
