import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Check, HeartHandshake, CreditCard, MessageCircle } from "lucide-react";
import masjidData from "@/data/masjid.json";

export interface InfaqModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InfaqModal({ open, onOpenChange }: InfaqModalProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent onClose={() => onOpenChange(false)} className="max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <HeartHandshake className="h-4 w-4" />
            <span>Rekening Resmi Pembangunan</span>
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-extrabold text-slate-100">
            Infaq & Wakaf Masjid Nurul Falah
          </DialogTitle>
          <DialogDescription>
            Salurkan infaq, sedekah, dan wakaf terbaik Anda untuk pembangunan Masjid Nurul Falah Sukatani 2 Lantai melalui rekening resmi berikut:
          </DialogDescription>
        </DialogHeader>

        {/* Bank Account List */}
        <div className="space-y-3 my-4">
          {masjidData.bankAccounts.map((account) => {
            const isCopied = copiedId === account.id;
            return (
              <div
                key={account.id}
                className="relative flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-emerald-900/40 bg-slate-900/80 hover:border-emerald-500/40 transition-colors gap-3"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 shrink-0 mt-0.5 sm:mt-0">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-200">
                        {account.bankName}
                      </span>
                      {account.isPrimary && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                          Utama
                        </span>
                      )}
                    </div>
                    <div className="text-base sm:text-lg font-mono font-bold text-amber-300 tracking-wider my-0.5">
                      {account.accountNumber}
                    </div>
                    <div className="text-xs text-slate-400">
                      a.n. <span className="text-slate-300 font-medium">{account.accountHolder}</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant={isCopied ? "default" : "outline"}
                  size="sm"
                  className="gap-1.5 shrink-0 self-end sm:self-center"
                  onClick={() => handleCopy(account.id, account.accountNumber.replace(/[^0-9]/g, ""))}
                >
                  {isCopied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-300" />
                      <span className="text-xs">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span className="text-xs">Salin Rekening</span>
                    </>
                  )}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Footer Confirmation CTA */}
        <div className="pt-3 border-t border-slate-800/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <span>Harap konfirmasi transfer donasi Anda ke panitia:</span>
          <a
            href={masjidData.contacts.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
          >
            <MessageCircle className="h-4 w-4 text-emerald-400" />
            <span>Konfirmasi WhatsApp</span>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default InfaqModal;
