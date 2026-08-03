import React, { useState } from 'react';
import { X, Send, Calendar, Users, Sparkles, CheckCircle2, Phone, Mail, User } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { TourPackage } from '../data/japanData';


interface BookingModalProps {
  packageData: TourPackage | null;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ packageData, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelDate: '2027-03-25',
    guests: '2',
    notes: '',
  });

  if (!packageData) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFFFFF', '#E2E8F0', '#94A3B8'],
      });
    } catch {
      // Fallback if confetti script not supported
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md animate-fade-in">
      <div className="bg-[#FCFCFA] w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 pr-8">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Direct Reservation Inquiry
              </span>
              <h2 className="font-cinzel text-2xl font-bold text-[#121212]">
                Inquire: {packageData.title}
              </h2>
              <p className="text-xs text-slate-500 font-jakarta mt-1">
                Starting from <span className="font-bold text-[#121212]">${packageData.priceUSD.toLocaleString()}</span> per guest • {packageData.groupSize}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Name */}
              <div>
                <label className="block font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-slate-500" /> Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor Vance"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-[#121212] focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-slate-500" /> Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="eleanor@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-[#121212] focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-slate-500" /> Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-[#121212] focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>
              </div>

              {/* Date & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" /> Desired Travel Date
                  </label>
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-[#121212] focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-slate-500" /> Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-[#121212] focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    <option value="1">1 Solo Traveler</option>
                    <option value="2">2 Guests (Couple/Pair)</option>
                    <option value="4">3–5 Small Group / Family</option>
                    <option value="6+">6+ Large Group</option>
                  </select>
                </div>
              </div>

              {/* Custom Add-ons */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Custom Upgrades & Preferences (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Prefer Ryokan upgrade with private hot spring bath, dietary preferences, or extending Kyoto stay."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-[#121212] focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#121212] hover:bg-slate-800 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-4 h-4" /> Send VIP Inquiry & Lock 2027 Dates
              </button>

              <p className="text-[10px] text-center text-slate-400">
                🔒 No payment required now. Our Tokyo concierge responds within 2 business hours.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-800 mx-auto flex items-center justify-center shadow-inner animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-cinzel text-2xl font-bold text-[#121212]">
              ARIGATOU GOZAIMASU!
            </h3>

            <p className="text-slate-600 text-sm font-jakarta max-w-md mx-auto">
              Your inquiry for <strong className="text-[#121212]">{packageData.title}</strong> has been received by our Tokyo VIP Desk.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-left max-w-md mx-auto space-y-1 text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-400">Ref Code:</span>
                <span className="font-mono font-bold text-[#121212]">RYOKO-2027-8942</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Assigned Concierge:</span>
                <span className="font-semibold">Kenji Sato (Tokyo Desk)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Est. Response Time:</span>
                <span className="font-semibold text-emerald-600">Under 2 Hours</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="bg-[#121212] hover:bg-slate-800 text-white px-8 py-3 rounded-full text-xs font-bold shadow-md"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
