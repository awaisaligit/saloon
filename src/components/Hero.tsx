import React from 'react';
import { Phone, Calendar, Star, MapPin, Clock, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative bg-[#FAF8F5] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#EAE3D6] overflow-hidden">
      {/* Decorative subtle ambient backdrop glow */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#F3E8D8]/50 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 bg-[#EFE0D0]/40 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typography & CTAs (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7">
            
            {/* Location & Rating unboxed trust marker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#635B51]">
              <span className="flex items-center gap-1.5 font-medium text-[#8F6C3F]">
                <MapPin className="w-3.5 h-3.5 text-[#A37B47]" />
                Quaid-e-Azam Road, Gojra
              </span>
              <span className="text-[#C4B9AA]" aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-[#423C35]">
                <span className="text-[#D9A036]">★</span>
                <span className="font-semibold">{BUSINESS_INFO.googleRating}</span>
                <span className="text-[#786F64]">({BUSINESS_INFO.googleReviewCount} Google Reviews)</span>
              </span>
              <span className="text-[#C4B9AA]" aria-hidden="true">·</span>
              <span className="text-[#3F7547] font-medium flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {BUSINESS_INFO.status}
              </span>
            </div>

            {/* Main Brand Title & Tagline */}
            <div className="space-y-3">
              <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#24211E] leading-[1.12]">
                Looks Ladies Salon
              </h1>
              <p className="font-serif-display text-2xl sm:text-3xl text-[#7E5E36] font-normal leading-snug">
                {BUSINESS_INFO.tagline}
              </p>
            </div>

            {/* Short Supporting Text */}
            <p className="text-base sm:text-lg text-[#554E45] max-w-xl font-normal leading-relaxed">
              {BUSINESS_INFO.shortDescription}
            </p>

            {/* Prominent CTA Buttons - Highly visible on Mobile & Desktop */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#24211E] hover:bg-[#3D3730] active:scale-[0.99] rounded-xl transition-all shadow-sm group"
              >
                <Calendar className="w-4 h-4 text-[#C9A982]" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 text-[#C9A982] transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#24211E] bg-[#EFE9DF] hover:bg-[#E5DBCF] active:scale-[0.99] rounded-xl border border-[#DED4C5] transition-all"
                title={`Call Looks Ladies Salon directly at ${BUSINESS_INFO.phoneFormatted}`}
              >
                <Phone className="w-4 h-4 text-[#8F6C3F]" />
                <span>Call Now · {BUSINESS_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Key Salon Distinctions */}
            <div className="pt-4 border-t border-[#EAE3D6] grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="font-serif-display text-lg sm:text-xl font-medium text-[#24211E]">Ladies Only</p>
                <p className="text-xs text-[#70675D] mt-0.5">Private & comfortable</p>
              </div>
              <div>
                <p className="font-serif-display text-lg sm:text-xl font-medium text-[#24211E]">Opposite Borjan</p>
                <p className="text-xs text-[#70675D] mt-0.5">Quaid-e-Azam Road</p>
              </div>
              <div>
                <p className="font-serif-display text-lg sm:text-xl font-medium text-[#24211E]">Open till 8 PM</p>
                <p className="text-xs text-[#70675D] mt-0.5">Daily salon hours</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset (5 cols on desktop) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#E3D9C9] bg-[#EFE9DF] shadow-md group">
              <div className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/src/assets/images/looks_salon_interior_1791468216574.jpg"
                  alt="Looks Ladies Salon interior with elegant mirrors and styling stations in Gojra, Punjab"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Graceful fallback container if needed
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Floating Bottom Card */}
              <div className="p-4 sm:p-5 bg-[#FAF8F5]/95 backdrop-blur-xs border-t border-[#E8DFD3]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#9E7D53]">
                      Sanctuary of Beauty in Gojra
                    </p>
                    <p className="text-sm font-medium text-[#24211E] mt-0.5">
                      Personalized hair, skincare & bridal consultations
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-[#EFE9DF] text-[#8F6C3F]">
                    <Star className="w-5 h-5 fill-[#D9A036] text-[#D9A036]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
