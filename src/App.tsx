import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickInfoBar } from './components/QuickInfoBar';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { LookbookSection } from './components/LookbookSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { AppointmentModal } from './components/AppointmentModal';
import { BUSINESS_INFO } from './data/salonData';
import { ServiceItem } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenBooking = (service?: ServiceItem) => {
    if (service) {
      setSelectedService(service);
    } else {
      setSelectedService(null);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(null);
  };

  // Structured Data Schema.org for LocalBusiness / BeautySalon in Gojra
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": BUSINESS_INFO.name,
    "description": BUSINESS_INFO.shortDescription,
    "telephone": "+923076846160",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Quaid-e-Azam Road, opposite Borjan Shoes",
      "addressLocality": "Gojra",
      "addressRegion": "Punjab",
      "postalCode": "56000",
      "addressCountry": "PK"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "35",
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHours": "Mo-Su 10:00-20:00",
    "priceRange": "$$"
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#24211E] flex flex-col font-sans-body selection:bg-[#E8DFD3] selection:text-[#24211E]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sticky Top Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <QuickInfoBar />
        <ServicesSection onSelectServiceForBooking={handleOpenBooking} />
        <AboutSection onOpenBooking={() => handleOpenBooking()} />
        <LookbookSection onOpenBooking={() => handleOpenBooking()} />
        <ReviewsSection />
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

      {/* Appointment & Consultation Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedService}
      />
    </div>
  );
}
