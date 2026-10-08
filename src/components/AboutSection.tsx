import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, SALON_STANDARDS } from '../data/salonData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Editorial Polish */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest text-[#8F6C3F] font-semibold mb-2">
            About Looks Ladies Salon
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#24211E] tracking-tight leading-tight">
            A Dedicated Beauty Sanctuary Designed Exclusively for Women
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#554E45] leading-relaxed">
            Located right on Quaid-e-Azam Road opposite Borjan Shoes in Gojra, Looks Ladies Salon was founded with a singular purpose: to bring high-standard beauty, hair artistry, and skincare into a warm, private, and pristine environment.
          </p>
        </div>

        {/* Narrative & Feature Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Image & Atmosphere card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#E3D9C9] bg-white shadow-xs">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/src/assets/images/looks_hair_care_1791468239070.jpg"
                  alt="Attentive hair styling and care at Looks Ladies Salon in Gojra"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              <div className="p-6 bg-white space-y-3">
                <div className="flex items-center gap-2 text-[#8F6C3F]">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Our Commitment
                  </span>
                </div>
                <h3 className="font-serif-display text-xl text-[#24211E] font-medium">
                  Personalized Care from the Moment You Walk In
                </h3>
                <p className="text-sm text-[#5D554C] leading-relaxed">
                  We don't believe in one-size-fits-all treatments. Whether preparing for your wedding day or refreshing your everyday hair and skin, our team takes the time to listen and tailor every service around your personal comfort.
                </p>
              </div>
            </div>
          </div>

          {/* Core Pillars (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#24211E] font-medium">
                Why Women in Gojra Trust Looks Ladies Salon
              </h3>
              <p className="text-sm sm:text-base text-[#5D554C] leading-relaxed">
                With a 4.9 rating from 35 Google reviews, our reputation has been built on patient listening, hygienic practices, and respectful care. We honor your time and comfort at every step of your salon experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {SALON_STANDARDS.map((standard, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl border border-[#EBE4D8] shadow-xs space-y-2 hover:border-[#D9CCA8] transition-colors"
                >
                  <div className="flex items-center gap-2 text-[#8F6C3F]">
                    <CheckCircle2 className="w-4 h-4 text-[#8F6C3F] shrink-0" />
                    <h4 className="font-serif-display text-lg text-[#24211E] font-medium">
                      {standard.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#665D52] leading-relaxed pl-6">
                    {standard.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Action Band */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-[#24211E] hover:bg-[#3D3730] rounded-xl transition-colors"
              >
                Schedule a Consultation
              </button>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="px-5 py-2.5 text-sm font-medium text-[#24211E] bg-[#EFE9DF] hover:bg-[#E5DACD] rounded-xl transition-colors border border-[#DED4C5]"
              >
                Call: {BUSINESS_INFO.phoneFormatted}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
