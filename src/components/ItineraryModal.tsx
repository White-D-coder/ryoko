import React from 'react';
import { X, Calendar, CheckCircle, Utensils, Hotel, Sparkles, Send } from 'lucide-react';
import type { TourPackage } from '../data/japanData';


interface ItineraryModalProps {
  packageData: TourPackage | null;
  onClose: () => void;
  onOpenBooking: (pkg: TourPackage) => void;
}

export const ItineraryModal: React.FC<ItineraryModalProps> = ({
  packageData,
  onClose,
  onOpenBooking,
}) => {
  if (!packageData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md animate-fade-in">
      <div className="bg-[#FCFCFA] w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] my-auto relative">
        {/* Header Hero Banner */}
        <div className="relative h-64 sm:h-72 w-full shrink-0">
          <img
            src={packageData.image}
            alt={packageData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex flex-wrap gap-2 mb-2">
              {packageData.badges.map((b, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 rounded-full bg-slate-900 text-white border border-white/20 text-[11px] font-bold uppercase tracking-wider shadow"
                >
                  {b}
                </span>
              ))}
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-tight">
              {packageData.title}
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm mt-1 font-light">
              {packageData.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-[#121212]">
          {/* Quick Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-200/60 text-center">
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase block">Duration</span>
              <span className="font-bold text-base text-[#121212]">
                {packageData.durationDays} Days / {packageData.durationNights} Nights
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase block">Group Size</span>
              <span className="font-bold text-base text-[#121212]">{packageData.groupSize}</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase block">Rating</span>
              <span className="font-bold text-base text-[#121212]">
                ★ {packageData.rating} ({packageData.reviewsCount} reviews)
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase block">Starting Price</span>
              <span className="font-bold text-lg text-[#121212]">
                ${packageData.priceUSD.toLocaleString()} / person
              </span>
            </div>
          </div>

          {/* Highlights & Inclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60">
              <h3 className="font-outfit text-sm font-bold uppercase tracking-wider text-[#121212] mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-slate-700" /> Tour Highlights
              </h3>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                {packageData.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-slate-800 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60">
              <h3 className="font-outfit text-sm font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> What's Included
              </h3>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                {packageData.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Day by Day Itinerary Timeline */}
          <div>
            <h3 className="font-cinzel text-xl font-bold text-[#121212] mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-slate-700" /> Detailed Day-by-Day Itinerary
            </h3>

            <div className="relative border-l-2 border-slate-300 ml-3 space-y-6">
              {packageData.itinerary.map((item) => (
                <div key={item.day} className="relative pl-6 sm:pl-8 group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#121212] border-2 border-white shadow group-hover:scale-125 transition-transform" />

                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-[#121212] uppercase tracking-wider">
                        Day {item.day}
                      </span>
                      <div className="flex items-center gap-3 text-[11px] text-slate-500">
                        <span className="flex items-center gap-1">
                          <Utensils className="w-3 h-3 text-slate-500" /> {item.meals}
                        </span>
                        <span className="flex items-center gap-1">
                          <Hotel className="w-3 h-3 text-indigo-500" /> {item.accommodation}
                        </span>
                      </div>
                    </div>

                    <h4 className="font-outfit font-bold text-base text-[#121212]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 font-jakarta mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Sticky CTA */}
        <div className="p-4 sm:p-6 bg-white border-t border-slate-100 flex items-center justify-between shrink-0">
          <div>
            <span className="text-xs text-slate-400 block">Total Package From</span>
            <span className="font-bold text-2xl text-[#121212]">
              ${packageData.priceUSD.toLocaleString()}
            </span>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking(packageData);
              }}
              className="bg-[#121212] hover:bg-slate-800 text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-md transition-all flex items-center gap-2"
            >
              <Send className="w-3.5 h-3.5" /> Book / Inquiry Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
