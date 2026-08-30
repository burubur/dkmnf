import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Calendar, CheckCircle } from "lucide-react";

export interface EventModalProps {
  open: boolean;
  eventTitle: string;
  onOpenChange: (open: boolean) => void;
}

export function EventModal({ open, eventTitle, onOpenChange }: EventModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onOpenChange(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent onClose={() => onOpenChange(false)} className="max-w-md">
        <div className="text-left">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#047857] flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6" />
          </div>

          <h3 className="text-lg font-bold text-slate-900 mb-1">
            Konfirmasi Partisipasi Kegiatan
          </h3>
          <p className="text-xs text-slate-500 mb-4">
            Daftarkan diri untuk kegiatan: <b className="text-slate-800">{eventTitle}</b>
          </p>

          {submitted ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-emerald-800 text-xs font-semibold flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Pendaftaran berhasil disimpan oleh pengurus DKM.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Abdullah"
                  className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white text-slate-800"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">No. WhatsApp</label>
                <input
                  type="tel"
                  required
                  placeholder="Contoh: 08123456789"
                  className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white text-slate-800"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">RT / RW Lingkungan Sukatani</label>
                <input
                  type="text"
                  placeholder="Contoh: RT 03 / RW 05"
                  className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white text-slate-800"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs rounded-xl transition mt-2 cursor-pointer active:scale-95"
              >
                Simpan Partisipasi
              </button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default EventModal;
