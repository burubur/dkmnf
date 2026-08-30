import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function App() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-[#090d16] p-4">
      <Card className="max-w-md w-full border-emerald-500/30 bg-slate-950/70 text-center shadow-[0_0_50px_rgba(5,150,105,0.15)]">
        <CardContent className="py-12 px-6 flex flex-col items-center justify-center">
          <h1 
            className="text-4xl md:text-5xl font-bold text-amber-400 drop-shadow-[0_0_25px_rgba(245,158,11,0.4)]"
            style={{ fontFamily: "'Amiri', serif", direction: "rtl" }}
          >
            مَسْجِدُ نُوْرِ الْفَلَاحِ
          </h1>
        </CardContent>
      </Card>
    </main>
  );
}

export default App;
