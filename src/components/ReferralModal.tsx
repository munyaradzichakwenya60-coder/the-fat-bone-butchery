import React, { useState } from "react";
import { X, Copy, Check, Gift, Share2 } from "lucide-react";

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEmail?: string;
}

export function ReferralModal({ isOpen, onClose, initialEmail = "" }: ReferralModalProps) {
  const [copied, setCopied] = useState(false);
  const referralCode = "FATBONE20";
  const referralUrl = `https://assemble-beauty.vercel.app/?ref=${referralCode}`;

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-ink/60 backdrop-blur-sm transition-opacity"
      />

      <div className="relative bg-paper border border-ink/20 shadow-2xl max-w-md w-full rounded-sm overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        <div className="p-6 border-b border-ink/10 flex items-center justify-between bg-cream/70">
          <div className="flex items-center gap-2">
            <Gift className="h-4 w-4 text-brand" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand">
              Give $20, Get $20
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-ink/50 hover:text-ink transition-colors rounded-full hover:bg-ink/5"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-6 space-y-5 text-center">
          <div className="space-y-2">
            <h3 className="font-display text-2xl font-bold text-ink">
              Your Exclusive Referral Link
            </h3>
            <p className="text-xs text-ink/70 leading-relaxed max-w-xs mx-auto">
              Share your link with family and friends in Bulawayo or in the diaspora. When they place their first meat order, you both get $20 off!
            </p>
          </div>

          <div className="p-3 bg-sand/60 border border-ink/15 rounded flex items-center justify-between gap-2">
            <span className="text-xs font-mono text-ink/80 truncate">{referralUrl}</span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-brand text-brand-foreground hover:bg-ink transition-colors rounded shrink-0"
            >
              {copied ? (
                <>
                  <Check className="h-3 w-3 text-emerald-300" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-2 flex justify-center gap-3">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`Hey! Get $20 off your first grass-fed meat box from The Fat Bone Butchery in Bulawayo using my link: ${referralUrl}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-semibold bg-emerald-700 hover:bg-emerald-800 text-white rounded transition-colors"
            >
              <Share2 className="h-3.5 w-3.5" />
              <span>Share on WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="p-4 border-t border-ink/10 bg-cream/70 text-center">
          <button
            onClick={onClose}
            className="text-[11px] uppercase tracking-wider text-ink/60 hover:text-brand font-medium"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
