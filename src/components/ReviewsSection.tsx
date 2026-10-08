import React from 'react';
import { Star, ExternalLink, ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-b border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest text-[#8F6C3F] font-semibold mb-2">
            Client Reputation & Trust
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#24211E] tracking-tight leading-tight">
            Rated 4.9 on Google Across 35 Reviews
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#554E45] leading-relaxed">
            Our clients in Gojra value our dedication to hygiene, personalized consultations, and a respectful, tranquil ladies-only ambiance.
          </p>
        </div>

        {/* Rating Overview Scorecard + Verified Sentiment Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Rating Summary Card (4 cols) */}
          <div className="lg:col-span-4 bg-[#FAF8F5] rounded-2xl border border-[#EBE4D8] p-6 sm:p-8 space-y-6">
            <div className="text-center pb-6 border-b border-[#EAE3D6]">
              <span className="font-serif-display text-6xl sm:text-7xl font-normal text-[#24211E] tabular-nums">
                {BUSINESS_INFO.googleRating}
              </span>
              <div className="flex items-center justify-center gap-1.5 text-[#E0A838] my-2 text-xl">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-sm font-medium text-[#4D463F]">
                Based on {BUSINESS_INFO.googleReviewCount} Google Reviews
              </p>
              <p className="text-xs text-[#7A7165] mt-0.5">
                Quaid-e-Azam Road, Gojra, Punjab
              </p>
            </div>

            {/* Score distribution breakdown */}
            <div className="space-y-2.5 text-xs text-[#5D554C]">
              <div className="flex items-center gap-2">
                <span className="w-12 tabular-nums">5 stars</span>
                <div className="flex-1 h-2 bg-[#EAE3D6] rounded-full overflow-hidden">
                  <div className="h-full bg-[#8F6C3F] rounded-full" style={{ width: '92%' }} />
                </div>
                <span className="w-8 text-right font-medium text-[#24211E]">92%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 tabular-nums">4 stars</span>
                <div className="flex-1 h-2 bg-[#EAE3D6] rounded-full overflow-hidden">
                  <div className="h-full bg-[#8F6C3F] rounded-full" style={{ width: '8%' }} />
                </div>
                <span className="w-8 text-right font-medium text-[#24211E]">8%</span>
              </div>
              <div className="flex items-center gap-2 text-[#9C9388]">
                <span className="w-12 tabular-nums">3 stars</span>
                <div className="flex-1 h-2 bg-[#EAE3D6] rounded-full overflow-hidden">
                  <div className="h-full bg-[#8F6C3F] rounded-full" style={{ width: '0%' }} />
                </div>
                <span className="w-8 text-right">0%</span>
              </div>
              <div className="flex items-center gap-2 text-[#9C9388]">
                <span className="w-12 tabular-nums">2 stars</span>
                <div className="flex-1 h-2 bg-[#EAE3D6] rounded-full overflow-hidden">
                  <div className="h-full bg-[#8F6C3F] rounded-full" style={{ width: '0%' }} />
                </div>
                <span className="w-8 text-right">0%</span>
              </div>
              <div className="flex items-center gap-2 text-[#9C9388]">
                <span className="w-12 tabular-nums">1 star</span>
                <div className="flex-1 h-2 bg-[#EAE3D6] rounded-full overflow-hidden">
                  <div className="h-full bg-[#8F6C3F] rounded-full" style={{ width: '0%' }} />
                </div>
                <span className="w-8 text-right">0%</span>
              </div>
            </div>

            {/* Direct Google Action */}
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-[#24211E] bg-[#EFE9DF] hover:bg-[#E5DACD] rounded-xl transition-colors border border-[#DDD3C2]"
              >
                <span>Read 35 Reviews on Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Core Customer Satisfaction Themes (8 cols) */}
          <div className="lg:col-span-8 space-y-5">
            <h3 className="font-serif-display text-2xl text-[#24211E] font-medium">
              What Clients Appreciate Most About Our Salon
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-xl border border-[#EAE3D6] bg-[#FAF8F5]/50 space-y-2">
                <div className="flex items-center gap-2 text-[#8F6C3F]">
                  <Sparkles className="w-4 h-4 text-[#8F6C3F]" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Bridal & Party Artistry
                  </span>
                </div>
                <h4 className="font-serif-display text-lg text-[#24211E] font-medium">
                  Radiant, Long-Lasting Bridal Looks
                </h4>
                <p className="text-xs sm:text-sm text-[#5D554C] leading-relaxed">
                  Patrons frequently compliment our natural yet glamorous makeup techniques, ensuring wedding brides and attendees look luminous without an over-caked feel.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-[#EAE3D6] bg-[#FAF8F5]/50 space-y-2">
                <div className="flex items-center gap-2 text-[#8F6C3F]">
                  <ShieldCheck className="w-4 h-4 text-[#8F6C3F]" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Strict Hygiene
                  </span>
                </div>
                <h4 className="font-serif-display text-lg text-[#24211E] font-medium">
                  Sterilized Tools & Clean Environment
                </h4>
                <p className="text-xs sm:text-sm text-[#5D554C] leading-relaxed">
                  From threading threads to manicure bowls and facial basins, sanitization standards are strictly maintained for every single appointment.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-[#EAE3D6] bg-[#FAF8F5]/50 space-y-2">
                <div className="flex items-center gap-2 text-[#8F6C3F]">
                  <Heart className="w-4 h-4 text-[#8F6C3F]" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Privacy & Comfort
                  </span>
                </div>
                <h4 className="font-serif-display text-lg text-[#24211E] font-medium">
                  Respectful Ladies-Only Sanctuary
                </h4>
                <p className="text-xs sm:text-sm text-[#5D554C] leading-relaxed">
                  Our private space allows women and brides to unwind comfortably with complete privacy, considerate hospitality, and attentive care.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-[#EAE3D6] bg-[#FAF8F5]/50 space-y-2">
                <div className="flex items-center gap-2 text-[#8F6C3F]">
                  <MapPin className="w-4 h-4 text-[#8F6C3F]" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Accessible & Reliable
                  </span>
                </div>
                <h4 className="font-serif-display text-lg text-[#24211E] font-medium">
                  Central Gojra Location
                </h4>
                <p className="text-xs sm:text-sm text-[#5D554C] leading-relaxed">
                  Easy to locate right opposite Borjan Shoes on Quaid-e-Azam Road, open until 8:00 PM for easy evening visits after work or family commitments.
                </p>
              </div>

            </div>

            {/* Note regarding authentic feedback */}
            <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#E8DEC9] text-xs text-[#6B6359] flex items-center justify-between gap-4">
              <span>
                Have you recently visited Looks Ladies Salon in Gojra? We invite you to share your experience on our Google Business profile.
              </span>
              <a
                href={BUSINESS_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#8F6C3F] hover:underline whitespace-nowrap flex items-center gap-1"
              >
                <span>Leave a Review</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
