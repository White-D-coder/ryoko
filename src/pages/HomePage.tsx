import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { InteractiveMap } from '../components/InteractiveMap';
import { TourismAlliancesMarquee } from '../components/TourismAlliancesMarquee';
import { JapaneseFurinChimes } from '../components/JapaneseFurinChimes';
import { TourPackages } from '../components/TourPackages';
import { StickerCutouts } from '../components/StickerCutouts';
import { SakuraPlanner } from '../components/SakuraPlanner';
import { TestimonialsMarquee } from '../components/TestimonialsMarquee';
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

      {/* 2. Dynamic Expanding Bento Grid Showcase ("ESSENCE OF JAPANESE TRAVEL") */}
      <StickerCutouts />

      {/* 3. Tourism Board Alliances Marquee Section */}
      <TourismAlliancesMarquee />

      {/* 4. Japanese Fūrin Wind Chimes Garland (Swaying Paper Streamers with 一期一会旅行) */}
      <JapaneseFurinChimes />

      {/* 5. Featured Tour Packages */}
      <TourPackages
        activeRegionFilter={selectedRegionFilter}
        onClearRegionFilter={() => onSelectRegionFilter(undefined)}
        onViewItinerary={onViewItinerary}
        onQuickBook={onQuickBook}
      />

      {/* View All Packages Callout Banner */}
      <div className="bg-[#FAF9F5] py-8 text-center">
        <button
          onClick={() => navigate('/packages')}
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-rose-600 text-white font-bold text-xs uppercase tracking-widest shadow-xl shadow-slate-900/10 hover:shadow-rose-500/20 transition-all cursor-pointer group rounded-none"
        >
          <Compass className="w-4 h-4 text-rose-400 group-hover:text-white" />
          <span>Explore All 2027 Expeditions</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 6. Interactive Region Vector Map Section ("EXPLORE JAPAN BY REGION") */}
      <InteractiveMap
        onSelectRegion={(regionId) => {
          onSelectRegionFilter(regionId);
          navigate('/packages');
        }}
        selectedRegionId={selectedRegionFilter}
      />

      {/* 7. Interactive Sakura Forecast Planner */}
      <SakuraPlanner onSelectPackage={onViewItinerary} />

      {/* 8. Vertical Marquee Testimonials Section */}
      <TestimonialsMarquee />
    </main>
  );
};
