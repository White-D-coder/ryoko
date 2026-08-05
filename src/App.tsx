import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { DestinationsPage } from './pages/DestinationsPage';
import { PackagesPage } from './pages/PackagesPage';
import { SakuraPlannerPage } from './pages/SakuraPlannerPage';
import { GuidePage } from './pages/GuidePage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { PackageDetailPage } from './pages/PackageDetailPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { EventsPage } from './pages/EventsPage';
import { BookingModal } from './components/BookingModal';
import { LeadMagnetModal } from './components/LeadMagnetModal';
import { TOUR_PACKAGES, type TourPackage } from './data/japanData';
import { CurrencyProvider } from './context/CurrencyContext';

export function App() {
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<string | undefined>(undefined);

  // Modals state accessible across all routes
  const [bookingPackage, setBookingPackage] = useState<TourPackage | null>(null);
  const [isLeadMagnetOpen, setIsLeadMagnetOpen] = useState(false);

  const handleOpenGeneralInquiry = () => {
    setBookingPackage(TOUR_PACKAGES[0]);
  };

  return (
    <CurrencyProvider>
      <BrowserRouter>
        {/* Scroll restoration helper */}
        <ScrollToTop />

        <div className="min-h-screen bg-[#FAF9F5] text-[#0F172A] font-jakarta selection:bg-rose-500 selection:text-white flex flex-col justify-between">
          {/* Navigation Bar */}
          <Navbar
            onOpenInquiry={handleOpenGeneralInquiry}
          />

          {/* Page View Routes */}
          <AppRoutes
            selectedRegionFilter={selectedRegionFilter}
            setSelectedRegionFilter={setSelectedRegionFilter}
            setBookingPackage={setBookingPackage}
            setIsLeadMagnetOpen={setIsLeadMagnetOpen}
          />

          {/* Footer */}
          <Footer
            onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)}
            onOpenInquiry={handleOpenGeneralInquiry}
          />

          {/* Global Booking & Lead Magnet Modals */}
          <BookingModal
            packageData={bookingPackage}
            onClose={() => setBookingPackage(null)}
          />

          <LeadMagnetModal
            isOpen={isLeadMagnetOpen}
            onClose={() => setIsLeadMagnetOpen(false)}
          />
        </div>
      </BrowserRouter>
    </CurrencyProvider>
  );
}

interface AppRoutesProps {
  selectedRegionFilter?: string;
  setSelectedRegionFilter: (r?: string) => void;
  setBookingPackage: (pkg: TourPackage) => void;
  setIsLeadMagnetOpen: (open: boolean) => void;
}

function AppRoutes({
  selectedRegionFilter,
  setSelectedRegionFilter,
  setBookingPackage,
  setIsLeadMagnetOpen,
}: AppRoutesProps) {
  const navigate = useNavigate();

  const handleViewPackage = (pkg: TourPackage) => {
    navigate(`/package/${pkg.id}`);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            selectedRegionFilter={selectedRegionFilter}
            onSelectRegionFilter={(r) => setSelectedRegionFilter(r)}
            onViewItinerary={handleViewPackage}
            onQuickBook={(pkg) => setBookingPackage(pkg)}
          />
        }
      />
      <Route
        path="/destinations"
        element={
          <DestinationsPage
            onSelectRegionFilter={(regionId) => setSelectedRegionFilter(regionId)}
          />
        }
      />
      <Route
        path="/packages"
        element={
          <PackagesPage
            selectedRegionFilter={selectedRegionFilter}
            onClearRegionFilter={() => setSelectedRegionFilter(undefined)}
            onViewItinerary={handleViewPackage}
            onQuickBook={(pkg) => setBookingPackage(pkg)}
          />
        }
      />
      <Route
        path="/package/:packageId"
        element={
          <PackageDetailPage
            onOpenBooking={(pkg) => setBookingPackage(pkg)}
          />
        }
      />
      <Route
        path="/sakura-planner"
        element={<SakuraPlannerPage />}
      />
      <Route
        path="/events"
        element={<EventsPage />}
      />
      <Route
        path="/events/:eventId"
        element={<EventsPage />}
      />
      <Route
        path="/guide"
        element={
          <GuidePage
            onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)}
          />
        }
      />
      <Route
        path="/contact"
        element={<ContactPage />}
      />
      <Route
        path="/about"
        element={<AboutPage />}
      />
      <Route
        path="/destination/:destinationId"
        element={<DestinationDetailPage onOpenBooking={(pkg) => setBookingPackage(pkg)} />}
      />
    </Routes>
  );
}

export default App;
