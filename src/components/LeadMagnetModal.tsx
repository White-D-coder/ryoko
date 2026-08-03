import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';


interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#FFFFFF', '#E2E8F0', '#94A3B8'],
      });
    } catch {
      // Ignore fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#FCFCFA] w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative p-6 sm:p-8 text-[#121212]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {!downloaded ? (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-800 mx-auto flex items-center justify-center mb-3 shadow-md">
                <FileText className="w-7 h-7" />
              </div>

              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 block">
                Exclusive Travel Asset
              </span>
              <h3 className="font-cinzel text-xl font-bold text-[#121212] mt-1">
                FREE 2027 JAPAN & SAKURA GUIDE
              </h3>
              <p className="text-xs text-slate-500 font-jakarta mt-1">
                68-Page VIP PDF containing secret sakura spots, bullet train tips, ryokan packing lists, and local dining phrases.
              </p>
            </div>

            {/* Guide Highlights */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 mb-5 text-xs space-y-2">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-slate-700" />
                <span>2027 Full Region Bloom Calendar Map</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-slate-700" />
                <span>Top 15 Hidden Onsen Ryokans (No Tourists)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-slate-700" />
                <span>JR Pass Price & Route Calculator Sheet</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleDownload} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">First Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sophia"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-[#121212] focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="sophia@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-[#121212] focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#121212] hover:bg-slate-800 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
              >
                <Download className="w-4 h-4" /> Download Free PDF Guide Instantly
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 pt-1">
                <Shield className="w-3 h-3 text-emerald-600" />
                <span>100% Free • No Spam Guarantee • instant PDF link</span>
              </div>
            </form>
          </div>
        ) : (
          /* Download Success */
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-md">
              <Download className="w-8 h-8 animate-bounce" />
            </div>

            <h3 className="font-cinzel text-2xl font-bold text-[#121212]">
              DOWNLOAD READY!
            </h3>

            <p className="text-xs text-slate-600 font-jakarta max-w-xs mx-auto">
              Thank you, <strong>{name}</strong>! Your download of the <span className="font-bold text-[#121212]">2027 Japan & Sakura Travel Guide (PDF)</span> has been generated.
            </p>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('Downloading 2027_Japan_Sakura_Guide.pdf...');
              }}
              className="inline-flex items-center gap-2 bg-[#121212] text-white font-bold py-3 px-6 rounded-full text-xs shadow-md hover:bg-slate-800 transition-all"
            >
              <Download className="w-4 h-4" /> Click Here to Save PDF (12.4 MB)
            </a>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="text-xs text-slate-400 hover:text-slate-600 underline font-medium"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
