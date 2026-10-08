import React, { useState } from 'react';
import { Sparkles, Calendar, Maximize2, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface LookbookSectionProps {
  onOpenBooking: () => void;
}

interface LookbookItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  caption: string;
  details: string;
}

const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: 'bridal-artistry',
    title: 'Pakistani Bridal Elegance',
    category: 'Bridal Artistry',
    imageSrc: '/src/assets/images/looks_bridal_makeup_1791468228360.jpg',
    caption: 'Soft-glam complexion with intricate traditional jewelry harmony',
    details: 'Meticulously crafted for Barat and Walima events, keeping your skin radiant and luminous throughout the entire celebration.'
  },
  {
    id: 'hair-styling',
    title: 'Silky Smooth Hair Treatments',
    category: 'Hair Care & Rebonding',
    imageSrc: '/src/assets/images/looks_hair_care_1791468239070.jpg',
    caption: 'Restorative blowouts, keratin gloss, and healthy hair trims',
    details: 'Personalized hair strand care, eliminating frizz and imparting a radiant, healthy shine with long-lasting smoothness.'
  },
  {
    id: 'facial-glow',
    title: 'Hydra Glow & Skin Rejuvenation',
    category: 'Skincare Therapy',
    imageSrc: '/src/assets/images/looks_facial_glow_1791468251349.jpg',
    caption: 'Deep botanical cleansing and soothing moisture infusion',
    details: 'Relax in our tranquil ladies-only treatment suites while our gentle facial therapies clarify and revive your natural complexion.'
  },
  {
    id: 'salon-ambiance',
    title: 'Sanctuary of Comfort in Gojra',
    category: 'Salon Ambiance',
    imageSrc: '/src/assets/images/looks_salon_interior_1791468216574.jpg',
    caption: 'Warm ivory tones, brass arched mirrors, and serene privacy',
    details: 'Conveniently located on Quaid-e-Azam Road opposite Borjan Shoes, offering a welcoming retreat designed for women.'
  }
];

export const LookbookSection: React.FC<LookbookSectionProps> = ({ onOpenBooking }) => {
  const [activeModalItem, setActiveModalItem] = useState<LookbookItem | null>(null);

  return (
    <section id="lookbook" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-[#8F6C3F] font-semibold mb-2">
              Visual Lookbook
            </p>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#24211E] tracking-tight leading-tight">
              Artistry, Ambiance & Transformations
            </h2>
            <p className="mt-3 text-base text-[#554E45] leading-relaxed">
              Explore the delicate details of our bridal makeup, hair care rituals, and tranquil salon interior on Quaid-e-Azam Road.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#24211E] hover:bg-[#3D3730] rounded-xl transition-colors shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C9A982]" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Card 1: Featured Large (7 cols) - Bridal Makeup */}
          <div className="md:col-span-7 group">
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E3D9C9] shadow-xs flex flex-col h-full hover:border-[#D6C4A2] transition-colors">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFE9DF]">
                <img
                  src={LOOKBOOK_ITEMS[0].imageSrc}
                  alt={LOOKBOOK_ITEMS[0].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <button
                  type="button"
                  onClick={() => setActiveModalItem(LOOKBOOK_ITEMS[0])}
                  className="absolute bottom-3 right-3 p-2 bg-white/90 backdrop-blur-xs text-[#24211E] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="View larger preview"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#8F6C3F]">
                    {LOOKBOOK_ITEMS[0].category}
                  </span>
                  <h3 className="font-serif-display text-2xl font-medium text-[#24211E] mt-1">
                    {LOOKBOOK_ITEMS[0].title}
                  </h3>
                  <p className="text-sm text-[#554E45] mt-2 leading-relaxed">
                    {LOOKBOOK_ITEMS[0].caption}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#EAE3D6] flex items-center justify-between">
                  <span className="text-xs text-[#786E63]">{LOOKBOOK_ITEMS[0].details}</span>
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="text-xs font-semibold text-[#8F6C3F] hover:text-[#24211E] underline ml-4 whitespace-nowrap"
                  >
                    Inquire for Bridal
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Hair Care (5 cols) */}
          <div className="md:col-span-5 group">
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E3D9C9] shadow-xs flex flex-col h-full hover:border-[#D6C4A2] transition-colors">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFE9DF]">
                <img
                  src={LOOKBOOK_ITEMS[1].imageSrc}
                  alt={LOOKBOOK_ITEMS[1].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <button
                  type="button"
                  onClick={() => setActiveModalItem(LOOKBOOK_ITEMS[1])}
                  className="absolute bottom-3 right-3 p-2 bg-white/90 backdrop-blur-xs text-[#24211E] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="View larger preview"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#8F6C3F]">
                    {LOOKBOOK_ITEMS[1].category}
                  </span>
                  <h3 className="font-serif-display text-2xl font-medium text-[#24211E] mt-1">
                    {LOOKBOOK_ITEMS[1].title}
                  </h3>
                  <p className="text-sm text-[#554E45] mt-2 leading-relaxed">
                    {LOOKBOOK_ITEMS[1].caption}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#EAE3D6] flex items-center justify-between">
                  <span className="text-xs text-[#786E63]">{LOOKBOOK_ITEMS[1].details}</span>
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="text-xs font-semibold text-[#8F6C3F] hover:text-[#24211E] underline ml-4 whitespace-nowrap"
                  >
                    Book Hair Session
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Skincare & Facial (5 cols) */}
          <div className="md:col-span-5 group">
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E3D9C9] shadow-xs flex flex-col h-full hover:border-[#D6C4A2] transition-colors">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFE9DF]">
                <img
                  src={LOOKBOOK_ITEMS[2].imageSrc}
                  alt={LOOKBOOK_ITEMS[2].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <button
                  type="button"
                  onClick={() => setActiveModalItem(LOOKBOOK_ITEMS[2])}
                  className="absolute bottom-3 right-3 p-2 bg-white/90 backdrop-blur-xs text-[#24211E] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="View larger preview"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#8F6C3F]">
                    {LOOKBOOK_ITEMS[2].category}
                  </span>
                  <h3 className="font-serif-display text-2xl font-medium text-[#24211E] mt-1">
                    {LOOKBOOK_ITEMS[2].title}
                  </h3>
                  <p className="text-sm text-[#554E45] mt-2 leading-relaxed">
                    {LOOKBOOK_ITEMS[2].caption}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#EAE3D6] flex items-center justify-between">
                  <span className="text-xs text-[#786E63]">{LOOKBOOK_ITEMS[2].details}</span>
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="text-xs font-semibold text-[#8F6C3F] hover:text-[#24211E] underline ml-4 whitespace-nowrap"
                  >
                    Book Facial
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Salon Ambiance (7 cols) */}
          <div className="md:col-span-7 group">
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E3D9C9] shadow-xs flex flex-col h-full hover:border-[#D6C4A2] transition-colors">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFE9DF]">
                <img
                  src={LOOKBOOK_ITEMS[3].imageSrc}
                  alt={LOOKBOOK_ITEMS[3].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <button
                  type="button"
                  onClick={() => setActiveModalItem(LOOKBOOK_ITEMS[3])}
                  className="absolute bottom-3 right-3 p-2 bg-white/90 backdrop-blur-xs text-[#24211E] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="View larger preview"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#8F6C3F]">
                    {LOOKBOOK_ITEMS[3].category}
                  </span>
                  <h3 className="font-serif-display text-2xl font-medium text-[#24211E] mt-1">
                    {LOOKBOOK_ITEMS[3].title}
                  </h3>
                  <p className="text-sm text-[#554E45] mt-2 leading-relaxed">
                    {LOOKBOOK_ITEMS[3].caption}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#EAE3D6] flex items-center justify-between">
                  <span className="text-xs text-[#786E63]">{LOOKBOOK_ITEMS[3].details}</span>
                  <a
                    href="#location"
                    className="text-xs font-semibold text-[#8F6C3F] hover:text-[#24211E] underline ml-4 whitespace-nowrap"
                  >
                    View Map & Hours
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#E3D9C9]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-black">
              <img
                src={activeModalItem.imageSrc}
                alt={activeModalItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <span className="text-xs font-semibold text-[#8F6C3F] uppercase tracking-wider">
                {activeModalItem.category}
              </span>
              <h3 className="font-serif-display text-2xl font-medium text-[#24211E]">
                {activeModalItem.title}
              </h3>
              <p className="text-sm text-[#554E45]">
                {activeModalItem.details}
              </p>
              <div className="pt-4 flex items-center justify-between gap-4">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="text-xs sm:text-sm font-medium text-[#24211E] hover:underline flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8F6C3F]" />
                  Call {BUSINESS_INFO.phoneFormatted}
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setActiveModalItem(null);
                    onOpenBooking();
                  }}
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#24211E] hover:bg-[#3D3730] rounded-xl transition-colors"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
