import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { InteractiveMap } from '../components/InteractiveMap';
import { TourPackages } from '../components/TourPackages';
import { TourismAlliancesMarquee } from '../components/TourismAlliancesMarquee';
import { JapaneseFurinChimes } from '../components/JapaneseFurinChimes';
import { StickerCutouts } from '../components/StickerCutouts';
import { TestimonialsMarquee } from '../components/TestimonialsMarquee';
import { CustomInquiryForm } from '../components/CustomInquiryForm';
import { type TourPackage } from '../data/japanData';
import { ArrowRight, Compass } from 'lucide-react';

interface HomePageProps {
  selectedRegionFilter?: string;
  onSelectRegionFilter: (regionId?: string) => void;
  onViewItinerary: (pkg: TourPackage) => void;
  onQuickBook: (pkg: TourPackage) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  selectedRegionFilter,
  onSelectRegionFilter,
  onViewItinerary,
  onQuickBook,
}) => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#FAF9F5]">
      {/* 1. Hero Section */}
      <Hero onSearch={() => navigate('/packages')} />

      {/* 2. Interactive Map Section ("EXPLORE JAPAN BY REGION") */}
      <InteractiveMap
        onSelectRegion={(regionId) => {
          onSelectRegionFilter(regionId);
          navigate('/packages');
        }}
        selectedRegionId={selectedRegionFilter}
      />

      {/* 3. Expeditions Section (Curated Japan Expeditions - Image 1) */}
      <TourPackages
        activeRegionFilter={selectedRegionFilter}
        onClearRegionFilter={() => onSelectRegionFilter(undefined)}
        onViewItinerary={onViewItinerary}
        onQuickBook={onQuickBook}
      />

      {/* View All Packages Callout Banner */}
      <div className="bg-[#FAF9F5] py-6 text-center border-b border-slate-200/50">
        <button
          onClick={() => navigate('/packages')}
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-rose-600 text-white font-bold text-xs uppercase tracking-widest shadow-xl shadow-slate-900/10 hover:shadow-rose-500/20 transition-all cursor-pointer group rounded-none"
        >
          <Compass className="w-4 h-4 text-rose-400 group-hover:text-white" />
          <span>Explore All 2027 Expeditions</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 4. Carousel Section (Tourism Board Alliances Marquee - Image 2) */}
      <TourismAlliancesMarquee />

      {/* 5. Chimes Section (Fūrin Wind Chimes - Image 3) */}
      <JapaneseFurinChimes />

      {/* 6. Essence Section (Essence of Japanese Travel - Image 4) */}
      <StickerCutouts />

      {/* 7. Testimonial Section (What Our Guests Are Saying - Image 5) */}
      <TestimonialsMarquee />

      {/* 8. Custom Form Section (Bespoke Travel Inquiry Form) */}
      <CustomInquiryForm />
    </main>
  );
};
