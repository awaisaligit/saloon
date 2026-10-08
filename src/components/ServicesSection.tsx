import React, { useState } from 'react';
import { Sparkles, Clock, ArrowRight, Check, HelpCircle } from 'lucide-react';
import { SALON_SERVICES, SERVICE_CATEGORIES, BUSINESS_INFO } from '../data/salonData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = selectedCategory === 'all'
    ? SALON_SERVICES
    : SALON_SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <p className="text-xs uppercase tracking-widest text-[#8F6C3F] font-semibold mb-2">
            Our Salon Menu
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#24211E] tracking-tight leading-tight">
            Hair, Skincare & Bridal Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#554E45] leading-relaxed">
            Every service is conducted with sanitized tools, high-grade beauty formulations, and personalized consultations tailored to your individual skin and hair needs.
          </p>
        </div>

        {/* Category Tabs (Segmented control) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-[#24211E] text-white shadow-xs'
                  : 'bg-[#FAF6F0] text-[#554E45] hover:bg-[#EFE9DF] hover:text-[#24211E]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#FAF8F5] rounded-2xl border border-[#EBE4D8] p-6 flex flex-col justify-between hover:border-[#D6C4A2] hover:shadow-sm transition-all group"
            >
              <div className="space-y-4">
                
                {/* Header info */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#8F6C3F]">
                      {service.category === 'bridal'
                        ? 'Bridal & Occasion'
                        : service.category === 'hair'
                        ? 'Hair Care'
                        : service.category === 'skin'
                        ? 'Skin & Facial'
                        : service.category === 'nails'
                        ? 'Hand & Foot Care'
                        : 'Grooming'}
                    </span>
                    {service.durationApprox && (
                      <span className="text-xs text-[#70675D] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#9E7D53]" />
                        {service.durationApprox}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif-display text-2xl font-medium text-[#24211E] group-hover:text-[#7E5E36] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#8F6C3F] font-medium">
                    {service.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#554E45] leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 pt-2 border-t border-[#EAE3D6]/70">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#4F473E]">
                      <Check className="w-3.5 h-3.5 text-[#8F6C3F] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Bottom Action & Consultation Note */}
              <div className="pt-6 mt-6 border-t border-[#EAE3D6] flex items-center justify-between gap-3">
                <span className="text-xs text-[#756C62]">
                  Quote on Consultation
                </span>
                
                <button
                  type="button"
                  onClick={() => onSelectServiceForBooking(service)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#24211E] bg-[#EFE9DF] hover:bg-[#24211E] hover:text-white rounded-lg transition-colors"
                >
                  <span>Book / Inquire</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Transparent Pricing & Consultation Note */}
        <div className="mt-12 p-5 sm:p-6 bg-[#FAF6F0] rounded-2xl border border-[#E8DEC9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-[#8F6C3F] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-[#24211E]">
                Personalized Consultation & Pricing Transparency
              </p>
              <p className="text-xs sm:text-sm text-[#61584D] mt-0.5 max-w-3xl">
                Because every client has unique hair length, density, skin goals, and bridal preferences, our rates are tailored transparently upon consultation. Call <a href={BUSINESS_INFO.phoneTel} className="font-semibold text-[#8F6C3F] underline">{BUSINESS_INFO.phoneFormatted}</a> or visit us opposite Borjan Shoes on Quaid-e-Azam Road.
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.phoneTel}
            className="shrink-0 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#24211E] hover:bg-[#3D3730] rounded-xl transition-colors whitespace-nowrap"
          >
            Call for Pricing
          </a>
        </div>

      </div>
    </section>
  );
};
