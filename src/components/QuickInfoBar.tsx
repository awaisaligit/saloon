import React from 'react';
import { MapPin, Phone, Clock, Star, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const QuickInfoBar: React.FC = () => {
  return (
    <section className="bg-white border-b border-[#EAE3D6] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Item 1: Location & Landmark */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#E8DEC9] flex items-center justify-center shrink-0 text-[#8F6C3F]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#8F6C3F] font-semibold">Location</p>
              <p className="text-sm font-semibold text-[#24211E] mt-0.5">Quaid-e-Azam Road</p>
              <p className="text-xs text-[#6B6359] mt-0.5">Opposite Borjan Shoes, Gojra</p>
            </div>
          </div>

          {/* Item 2: Phone & Contact */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#E8DEC9] flex items-center justify-center shrink-0 text-[#8F6C3F]">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#8F6C3F] font-semibold">Direct Inquiries</p>
              <a
                href={BUSINESS_INFO.phoneTel}
                className="text-sm font-semibold text-[#24211E] hover:text-[#8F6C3F] transition-colors mt-0.5 block"
              >
                {BUSINESS_INFO.phoneFormatted}
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#2A6E3B] hover:underline mt-0.5 inline-flex items-center gap-1 font-medium"
              >
                <MessageCircle className="w-3 h-3" />
                WhatsApp Available
              </a>
            </div>
          </div>

          {/* Item 3: Hours & Timing */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#E8DEC9] flex items-center justify-center shrink-0 text-[#8F6C3F]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#8F6C3F] font-semibold">Salon Hours</p>
              <p className="text-sm font-semibold text-[#24211E] mt-0.5">Open Daily</p>
              <p className="text-xs text-[#6B6359] mt-0.5">Closes 8:00 PM</p>
            </div>
          </div>

          {/* Item 4: Verified Google Rating */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#E8DEC9] flex items-center justify-center shrink-0 text-[#8F6C3F]">
              <Star className="w-5 h-5 fill-[#D9A036] text-[#D9A036]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#8F6C3F] font-semibold">Google Rating</p>
              <p className="text-sm font-semibold text-[#24211E] mt-0.5 flex items-center gap-1.5">
                <span>4.9 out of 5.0</span>
                <span className="text-xs text-[#D9A036]">★★★★★</span>
              </p>
              <a
                href="#reviews"
                className="text-xs text-[#6B6359] hover:text-[#24211E] underline mt-0.5 block"
              >
                Based on 35 Reviews
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
