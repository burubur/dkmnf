import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Check, HeartHandshake, Landmark, MessageCircle } from "lucide-react";
import masjidData from "@/data/masjid.json";

export interface InfaqModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InfaqModal({ open, onOpenChange }: InfaqModalProps) {
  const [copiedAccount, setCopiedAccount] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const account = masjidData.bankAccounts[0];

  const handleCopyAccount = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard && account) {
      navigator.clipboard.writeText(account.accountNumber);
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
    }
  };

  const handleCopyCode = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard && account?.bankCode) {
      navigator.clipboard.writeText(account.bankCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  if (!account) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent onClose={() => onOpenChange(false)} className="max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <HeartHandshake className="h-4 w-4" />
            <span>Infaq & Wakaf</span>
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-extrabold text-slate-100">
            Rekening Resmi Masjid
          </DialogTitle>
          <DialogDescription>
            Salurkan donasi, infaq, dan wakaf terbaik Anda untuk Masjid Nurul Falah Sukatani melalui rekening resmi berikut:
          </DialogDescription>
        </DialogHeader>

        {/* BSI Bank Account Card */}
        <div className="my-4 p-5 rounded-2xl border border-emerald-500/40 bg-gradient-to-b from-slate-900/90 to-slate-950/90 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-emerald-900/40 pb-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-800 text-white shadow-md shadow-emerald-950">
                <Landmark className="h-6 w-6 text-amber-300" />
              </div>
              <div>
                <span className="font-bold text-base text-slate-100 block">
                  {account.bankName}
                </span>
                <span className="text-xs text-emerald-400 font-medium">
                  Bank Syariah Indonesia
                </span>
              </div>
            </div>

            {account.bankCode && (
              <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-700/60 px-2.5 py-1 rounded-lg">
                <span className="text-[11px] text-slate-400">Kode Bank:</span>
                <span className="text-xs font-mono font-bold text-amber-300">{account.bankCode}</span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="text-slate-400 hover:text-slate-200 transition-colors p-0.5"
                  title="Salin Kode Bank"
                >
                  {copiedCode ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                </button>
              </div>
            )}
          </div>

          <div>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block mb-1">
              Nomor Rekening
            </span>
            <div className="flex items-center justify-between bg-slate-950/80 border border-emerald-900/60 rounded-xl p-3 sm:p-3.5">
              <span className="text-xl sm:text-2xl font-mono font-extrabold text-amber-300 tracking-wider">
                {account.accountNumber}
              </span>
              <Button
                variant={copiedAccount ? "default" : "gold"}
                size="sm"
                className="gap-1.5 text-xs px-3"
                onClick={handleCopyAccount}
              >
                {copiedAccount ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Salin No. Rek</span>
                  </>
                )}
              </Button>
            </div>
          </div>

          <div>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block mb-0.5">
              Atas Nama Rekening
            </span>
            <span className="text-sm sm:text-base font-bold text-slate-100 uppercase tracking-wide">
              {account.accountHolder}
            </span>
          </div>
        </div>

        {/* Footer WhatsApp Confirmation */}
        <div className="pt-3 border-t border-slate-800/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <span>Konfirmasi transfer donasi Anda ke panitia:</span>
          <a
            href={masjidData.contacts.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-700/50 text-emerald-300 hover:text-emerald-200 hover:bg-emerald-900/60 font-semibold transition-colors"
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
