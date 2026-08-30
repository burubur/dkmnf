import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent } from "@/components/ui/card";

export function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#090d16] text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      {/* 1. Header Navigation Bar */}
      <Navbar />

      {/* 2. Main Content Body */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <Card className="max-w-xl w-full border-emerald-500/30 bg-slate-950/70 text-center shadow-[0_0_60px_rgba(5,150,105,0.15)] backdrop-blur-2xl">
          <CardContent className="py-16 px-6 flex flex-col items-center justify-center">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-400 drop-shadow-[0_0_30px_rgba(245,158,11,0.45)] select-none"
              style={{ fontFamily: "'Amiri', serif", direction: "rtl" }}
            >
              مَسْجِدُ نُوْرِ الْفَلَاحِ
            </h1>
          </CardContent>
        </Card>
      </main>

      {/* 3. Footer */}
      <footer className="py-6 border-t border-slate-800/60 text-center text-xs text-slate-500">
        <p>© 2026 DKM Masjid Nurul Falah Sukatani, Cisolok, Sukabumi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
