import React from "react";
import { Compass, Calendar, ShieldCheck, Eye, Sparkles } from "lucide-react";

export interface HeroSectionProps {
  onOpenInfaq?: () => void;
}

export function HeroSection({ onOpenInfaq }: HeroSectionProps) {
  return (
    <section id="beranda" className="relative bg-pattern text-white pt-12 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient ambient shadow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading & Introduction */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Arabic Calligraphy Header */}
            <div 
              className="text-3xl sm:text-4xl font-bold text-amber-300 drop-shadow-[0_0_20px_rgba(245,158,11,0.4)] select-none"
              style={{ fontFamily: "'Amiri', serif", direction: "rtl" }}
            >
              مَسْجِدُ نُوْرِ الْفَلَاحِ
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/90 border border-emerald-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-inner">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              Pusat Dakwah & Kegiatan Umat Sukatani
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Membangun Generasi Madani, Memakmurkan Masjid{" "}
              <span className="text-amber-300">Nurul Falah</span>
            </h1>

            <p className="text-emerald-100/90 text-base sm:text-lg max-w-2xl leading-relaxed">
              Wadah informasi, publikasi syiar Islam, kajian rutin, layanan sosial, dan transparansi kegiatan ibadah bersama warga lingkungan Sukatani, Cisolok, Sukabumi.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://burubur.github.io/drftr/?project=masjid"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Compass className="w-4 h-4" />
                <span>3D CAD Blueprint (DRFTR)</span>
              </a>

              <button
                type="button"
                onClick={onOpenInfaq}
                className="px-6 py-3.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-400/40 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Rekening Resmi Infaq</span>
              </button>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-emerald-700/60 text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">360</div>
                <div className="text-xs text-emerald-200 font-medium">Kapasitas Jamaah</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">2 Lantai</div>
                <div className="text-xs text-emerald-200 font-medium">Struktur Permanen</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
                <div className="text-xs text-emerald-200 font-medium">Kas Transparan</div>
              </div>
            </div>
          </div>

          {/* Right Column: Strategic Project Highlight Card */}
          <div className="lg:col-span-5 text-left">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-7 border border-white/20 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-400/20 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between mb-4">
                <span className="bg-amber-500 text-slate-950 font-bold text-xs uppercase px-2.5 py-1 rounded-md tracking-wider">
                  Program Strategis
                </span>
                <span className="text-xs text-emerald-200 flex items-center gap-1 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Visi 2 Lantai</span>
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 text-white">
                Pembangunan Masjid Permanen 2 Lantai
              </h3>
              <p className="text-emerald-100/85 text-xs sm:text-sm mb-5 leading-relaxed">
                Struktur beton bertulang K-300 seluas 344 m² di atas tanah wakaf 500 m² (Lantai 1 Utama + Lantai 2 Mezzanine Balkon & Kantor DKM).
              </p>

              {/* Specs pill list */}
              <div className="space-y-2.5 bg-emerald-950/60 p-4 rounded-xl border border-emerald-500/20 text-xs text-emerald-100 mb-5">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Arah Kiblat Terkalibrasi:</span>
                  <span className="font-bold text-amber-300 font-mono">Azimuth 294.5° BBL</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Luas Bangunan:</span>
                  <span className="font-bold text-slate-100 font-mono">224 m² + 120 m² = 344 m²</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Akses Jalan Utama:</span>
                  <span className="font-semibold text-emerald-300">Sisi Selatan</span>
                </div>
              </div>

              <a
                href="https://burubur.github.io/drftr/?project=masjid&phase=PONDASI&step=3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-white hover:bg-emerald-50 text-emerald-950 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-98"
              >
                <Eye className="w-4 h-4 text-emerald-700" />
                <span>Pelajari Gambar Kerja CAD 2 Lantai</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
