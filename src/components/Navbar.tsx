import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Notification / Hours Banner */}
      <div className="bg-[#24211E] text-[#EDE7DE] text-xs py-2 px-4 sm:px-6 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#C9A982] font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.status}</span>
            </span>
            <span className="text-[#8C8276] hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-[#BDB2A3] hidden sm:flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#C9A982]" />
              <span>{BUSINESS_INFO.landmark}, Gojra</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-[#D8CFBF] flex items-center gap-1">
              <span className="text-[#E5B552]">★</span>
              <span className="font-semibold text-white">{BUSINESS_INFO.googleRating}</span>
              <span className="text-[#9C9286]">({BUSINESS_INFO.googleReviewCount} Google Reviews)</span>
            </span>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="text-[#E8DFD3] hover:text-[#C9A982] transition-colors font-medium hidden md:inline-flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#C9A982]" />
              {BUSINESS_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation - strictly adhering to 3-zone Top Bar Contract */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-[#E8DFD3] shadow-xs'
            : 'bg-[#FAF8F5] border-[#EFEAE1]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-18 flex items-center justify-between gap-4">
            {/* Zone 1: Single text element wordmark in display face */}
            <a
              href="#"
              className="font-serif-display text-2xl sm:text-3xl font-medium tracking-normal text-[#24211E] hover:text-[#7A5B36] transition-colors whitespace-nowrap"
            >
              Looks Ladies Salon
            </a>

            {/* Zone 2: 4-6 clean text navigation links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4D463F]">
              <a
                href="#services"
                className="hover:text-[#9E7D53] transition-colors py-1 hover:border-b-2 hover:border-[#9E7D53]"
              >
                Services
              </a>
              <a
                href="#about"
                className="hover:text-[#9E7D53] transition-colors py-1 hover:border-b-2 hover:border-[#9E7D53]"
              >
                About
              </a>
              <a
                href="#lookbook"
                className="hover:text-[#9E7D53] transition-colors py-1 hover:border-b-2 hover:border-[#9E7D53]"
              >
                Lookbook
              </a>
              <a
                href="#reviews"
                className="hover:text-[#9E7D53] transition-colors py-1 hover:border-b-2 hover:border-[#9E7D53]"
              >
                Reviews
              </a>
              <a
                href="#location"
                className="hover:text-[#9E7D53] transition-colors py-1 hover:border-b-2 hover:border-[#9E7D53]"
              >
                Location & Hours
              </a>
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-2.5">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium text-[#24211E] bg-[#EFEAE1] hover:bg-[#E5DDCF] rounded-lg transition-colors whitespace-nowrap"
                title={`Call Looks Ladies Salon at ${BUSINESS_INFO.phoneFormatted}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#9E7D53]" />
                <span>Call Now</span>
              </a>

              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-white bg-[#24211E] hover:bg-[#3D3730] rounded-lg transition-colors whitespace-nowrap shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C9A982]" />
                <span>Book Appointment</span>
              </button>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#4D463F] hover:text-[#24211E] hover:bg-[#EFEAE1] rounded-lg transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E8DFD3] bg-[#FAF8F5] px-4 pt-3 pb-5 space-y-3 shadow-md animate-in fade-in duration-150">
            <div className="flex flex-col space-y-2 text-sm font-medium text-[#38332E]">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-[#F2ECE1] transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-[#F2ECE1] transition-colors"
              >
                About Looks Salon
              </a>
              <a
                href="#lookbook"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-[#F2ECE1] transition-colors"
              >
                Lookbook & Ambiance
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-[#F2ECE1] transition-colors"
              >
                Google Reviews (4.9★)
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-[#F2ECE1] transition-colors"
              >
                Location & Directions
              </a>
            </div>

            <div className="pt-2 border-t border-[#E8DFD3] flex flex-col gap-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-medium text-[#24211E] bg-[#EFEAE1] hover:bg-[#E3D9C9] rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-[#9E7D53]" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-medium text-white bg-[#24211E] hover:bg-[#3D3730] rounded-lg transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#C9A982]" />
                <span>Book an Appointment</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
