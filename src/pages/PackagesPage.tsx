import React from 'react';
import { TourPackages } from '../components/TourPackages';
import { type TourPackage } from '../data/japanData';
import { Compass } from 'lucide-react';

interface PackagesPageProps {
  selectedRegionFilter?: string;
  onClearRegionFilter: () => void;
  onViewItinerary: (pkg: TourPackage) => void;
  onQuickBook: (pkg: TourPackage) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({
  selectedRegionFilter,
  onClearRegionFilter,
  onViewItinerary,
  onQuickBook,
}) => {
  return (
    <div className="min-h-screen bg-[#FAF9F5] pt-24 pb-20">
      {/* Page Header Hero Banner with Iconic Mount Fuji Background */}
      <section className="relative h-[440px] sm:h-[480px] w-full overflow-hidden mb-12">
        <img
          src="/images/mount-fuji-hero.png"
          alt="Mount Fuji Lake Kawaguchiko"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20 opacity-90" />

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-none">
              <Compass className="w-3.5 h-3.5 text-white" />
              <span>Expeditions Directory</span>
            </div>

            <h1 className="font-cinzel text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              ALL JAPAN TOUR PACKAGES
            </h1>

            <p className="font-jakarta text-slate-200 text-xs sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              Curated small-group itineraries and luxury private journeys across Japan with luxury ryokans, gourmet dining, and bullet train passes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Packages Component */}
      <TourPackages
        activeRegionFilter={selectedRegionFilter}
        onClearRegionFilter={onClearRegionFilter}
        onViewItinerary={onViewItinerary}
        onQuickBook={onQuickBook}
      />
    </div>
  );
};
