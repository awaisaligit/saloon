import React from 'react';
import { Phone, MapPin, Clock, Star, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1A18] text-[#D8CFBF] pt-16 pb-24 md:pb-16 border-t border-[#2F2C28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#2F2C28]">
          
          {/* Column 1: Brand & Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif-display text-3xl font-medium text-white tracking-normal">
              Looks Ladies Salon
            </h3>
            <p className="text-sm text-[#A89F91] leading-relaxed max-w-sm">
              {BUSINESS_INFO.tagline}
            </p>
            <p className="text-xs text-[#8A8173] leading-relaxed max-w-sm">
              A private, respectful ladies beauty salon dedicated to personalized hair care, skincare, bridal and party makeup in Gojra, Punjab.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs">
              <span className="text-[#E5B552]">★</span>
              <span className="font-semibold text-white">{BUSINESS_INFO.googleRating}</span>
              <span className="text-[#8A8173]">({BUSINESS_INFO.googleReviewCount} Google Reviews)</span>
              <span className="text-[#595247]" aria-hidden="true">·</span>
              <span className="text-[#589E68] font-medium">{BUSINESS_INFO.status}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#C9A982] font-semibold">
              Explore
            </p>
            <ul className="space-y-2 text-sm text-[#BDB2A3]">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services Menu
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Our Salon
                </a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-white transition-colors">
                  Bridal & Hair Lookbook
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Google Reviews (4.9★)
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Visiting Info (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#C9A982] font-semibold">
              Visit or Call
            </p>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-[#BDB2A3]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A982] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A982] shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="hover:text-white transition-colors font-medium text-white"
                >
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C9A982] shrink-0" />
                <span>Open Daily · Closes 8:00 PM</span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <MessageCircle className="w-4 h-4 text-[#43A059] shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#43A059] hover:underline font-medium"
                >
                  WhatsApp Inquiries: 0307 6846160
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7165]">
          <p>
            © {new Date().getFullYear()} Looks Ladies Salon, Gojra, Punjab, Pakistan. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span>Quaid-e-Azam Road (opposite Borjan Shoes)</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-[#292622] hover:bg-[#3D3833] text-[#C9A982] transition-colors"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
