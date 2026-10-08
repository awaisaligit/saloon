import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, ExternalLink, Copy, Check, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest text-[#8F6C3F] font-semibold mb-2">
            Visit & Contact
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#24211E] tracking-tight leading-tight">
            Find Us on Quaid-e-Azam Road, Gojra
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#554E45] leading-relaxed">
            Conveniently situated opposite Borjan Shoes on Quaid-e-Azam Road, our salon is easily reachable from all areas of Gojra and surrounding Punjab districts.
          </p>
        </div>

        {/* 2-Column Info & Directions Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Column 1: Contact Details & Hours Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#E3D9C9] p-6 sm:p-8 flex flex-col justify-between shadow-xs space-y-6">
            
            <div className="space-y-6">
              {/* Address Block */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#E8DEC9] flex items-center justify-center shrink-0 text-[#8F6C3F]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-[#8F6C3F] font-semibold">Address</p>
                  <p className="text-sm font-semibold text-[#24211E] mt-1 leading-snug">
                    {BUSINESS_INFO.fullAddress}
                  </p>
                  <p className="text-xs text-[#736A5E] mt-1">
                    Key Landmark: Directly opposite Borjan Shoes
                  </p>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 mt-2.5 text-xs text-[#8F6C3F] hover:text-[#24211E] font-medium"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Address copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#E8DEC9] flex items-center justify-center shrink-0 text-[#8F6C3F]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-[#8F6C3F] font-semibold">Phone Inquiries</p>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="text-base font-semibold text-[#24211E] hover:text-[#8F6C3F] transition-colors mt-1 block"
                  >
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                  <p className="text-xs text-[#736A5E] mt-0.5">
                    Direct calls and WhatsApp appointments welcomed
                  </p>
                </div>
              </div>

              {/* Hours Block */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#E8DEC9] flex items-center justify-center shrink-0 text-[#8F6C3F]">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-[#8F6C3F] font-semibold">Salon Hours</p>
                  <p className="text-sm font-semibold text-[#24211E] mt-1">
                    {BUSINESS_INFO.status}
                  </p>
                  <p className="text-xs text-[#736A5E] mt-0.5">
                    Appointments available throughout the day until 8 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-6 border-t border-[#EAE3D6] space-y-3">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#24211E] hover:bg-[#3D3730] rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C9A982]" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-[#1F542A] bg-[#E8F3EA] hover:bg-[#D8ECDB] rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat via WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Column 2: Visual Map & Landmark Locator (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E3D9C9] overflow-hidden flex flex-col justify-between shadow-xs">
            
            {/* Styled Map Graphic Representation */}
            <div className="p-6 sm:p-8 bg-[#FAF6F0] border-b border-[#EAE3D6] relative flex-1 flex flex-col justify-center">
              <div className="max-w-lg mx-auto w-full text-center space-y-4">
                
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-[#E3D9C9] shadow-xs text-[#8F6C3F]">
                  <Navigation className="w-7 h-7 text-[#8F6C3F]" />
                </div>

                <div>
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-[#24211E]">
                    Looks Ladies Salon
                  </h3>
                  <p className="text-sm font-medium text-[#8F6C3F] mt-1">
                    Quaid-e-Azam Road, Gojra (Opposite Borjan Shoes)
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E3D9C9] text-left text-xs sm:text-sm text-[#554E45] space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-[#EAE3D6]">
                    <span className="font-semibold text-[#24211E]">City / Region:</span>
                    <span>Gojra, Punjab, Pakistan (56000)</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#EAE3D6]">
                    <span className="font-semibold text-[#24211E]">Main Thoroughfare:</span>
                    <span>Quaid-e-Azam Road</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#24211E]">Landmark Reference:</span>
                    <span className="text-[#8F6C3F] font-medium">Opposite Borjan Shoes</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Map Action Footer */}
            <div className="p-6 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-[#24211E]">
                  Need turn-by-turn directions?
                </p>
                <p className="text-xs text-[#6B6359] mt-0.5">
                  Open our verified location directly in Google Maps for live navigation.
                </p>
              </div>

              <a
                href={BUSINESS_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#24211E] bg-[#EFE9DF] hover:bg-[#E5DACD] rounded-xl transition-colors border border-[#DDD3C2] whitespace-nowrap"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
