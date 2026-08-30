import React, { useState } from "react";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { InfaqModal } from "@/components/infaq/InfaqModal";

export function App() {
  const [isInfaqOpen, setIsInfaqOpen] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-50 text-slate-800 selection:bg-emerald-600 selection:text-white font-sans antialiased">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Header Navigation Bar */}
      <Navbar onOpenInfaq={() => setIsInfaqOpen(true)} />

      {/* 3. Hero Section with .bg-pattern background */}
      <main className="flex-1">
        <HeroSection onOpenInfaq={() => setIsInfaqOpen(true)} />
      </main>

      {/* 4. Infaq & Wakaf Bank Accounts Modal */}
      <InfaqModal open={isInfaqOpen} onOpenChange={setIsInfaqOpen} />

      {/* 5. Footer */}
      <footer className="bg-[#064e3b] text-slate-300 text-xs py-8 border-t border-[#065f46]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div>
            <div className="text-white font-bold text-sm mb-1">Masjid Nurul Falah Sukatani</div>
            <p className="text-emerald-200/80 text-xs">Kp. Sukatani RT 02 RW 05, Kelurahan Wangunsari, Cisolok, Kabupaten Sukabumi, Jawa Barat.</p>
          </div>
          <div className="text-emerald-300/80 text-xs">
            © 2026 DKM Masjid Nurul Falah. Amanah & Transparan.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
