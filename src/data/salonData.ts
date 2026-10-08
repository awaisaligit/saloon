import { ServiceItem } from '../types';

export const BUSINESS_INFO = {
  name: "Looks Ladies Salon",
  tagline: "Hair • Skin • Makeup — Beauty Designed Around You",
  shortDescription: "Professional hair, skin and makeup services in Gojra, with personalized consultation and beauty care.",
  fullAddress: "Quaid-e-Azam Road, opposite Borjan Shoes, Gojra, Punjab, Pakistan, 56000",
  road: "Quaid-e-Azam Road",
  landmark: "Opposite Borjan Shoes",
  city: "Gojra",
  province: "Punjab",
  country: "Pakistan",
  postalCode: "56000",
  phoneRaw: "03076846160",
  phoneFormatted: "0307 6846160",
  phoneTel: "tel:+923076846160",
  whatsappUrl: "https://wa.me/923076846160",
  googleRating: 4.9,
  googleReviewCount: 35,
  status: "Open · Closes 8 PM",
  closingTime: "8:00 PM",
  mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Looks+Ladies+Salon+Quaid-e-Azam+Road+Gojra+Punjab+Pakistan",
};

export const SALON_SERVICES: ServiceItem[] = [
  {
    id: 'bridal-signature',
    category: 'bridal',
    title: 'Signature Bridal Makeup',
    subtitle: 'Barat & Walima Haute Makeup Artistry',
    description: 'Bespoke bridal styling tailored to your facial structure, bridal attire, and skin undertone. Includes skin prep, long-lasting high-definition finish, traditional dupatta setting, and jewelry adjustment.',
    durationApprox: '3 – 4 Hours',
    highlights: ['Personalized consultation & skin prep', 'HD sweat-proof & radiant finish', 'Dupatta setting & jewelry placement', 'Complementary touch-up advice']
  },
  {
    id: 'engagement-party-makeup',
    category: 'bridal',
    title: 'Engagement & Party Glam',
    subtitle: 'Soft Glam, Mehndi & Festive Makeup',
    description: 'Subtle glow, sculpted contours, and refined eye styling for weddings, family celebrations, and engagement occasions. Designed to enhance natural beauty without feeling heavy.',
    durationApprox: '1.5 – 2 Hours',
    highlights: ['Dewy or soft-matte complexion', 'Customized eye & lash styling', 'Hair styling / blow-out included', 'Precision setting for all-day wear']
  },
  {
    id: 'hair-rebonding-keratin',
    category: 'hair',
    title: 'Hair Rebonding & Keratin Smoothing',
    subtitle: 'Intensive Restorative & Straightening Treatments',
    description: 'Professional smoothing therapy to tame frizz, infuse deep protein nourishment, and deliver sleek, glossy, manageable hair. Requires in-person strand consultation.',
    durationApprox: '3 – 4 Hours',
    highlights: ['In-depth hair porosity & elasticity check', 'Deep protein replenishment', 'Silk-smooth mirror shine finish', 'Aftercare guidance & product advice']
  },
  {
    id: 'haircut-styling',
    category: 'hair',
    title: 'Precision Hair Cut & Blow Dry',
    subtitle: 'Layering, Feathering, Bob & Volume Blowout',
    description: 'Expert haircutting tailored to your face shape, lifestyle, and hair texture. Finished with a bouncy, voluminous blowout or sleek iron styling.',
    durationApprox: '45 – 60 Mins',
    highlights: ['Detailed face-framing assessment', 'Split-end removal & healthy trim', 'Volumizing wash & conditioner', 'Professional styling blowout']
  },
  {
    id: 'hair-color-highlights',
    category: 'hair',
    title: 'Hair Coloring & Highlights',
    subtitle: 'Root Touch-Ups, Global Color & Dimensional Streaks',
    description: 'Vibrant, rich hair color formulations designed to protect hair integrity while achieving seamless coverage or trendy dimensional highlights.',
    durationApprox: '2 – 3 Hours',
    highlights: ['Careful scalp & strand testing', 'Rich multi-dimensional tonality', 'Gloss treatment for enhanced shine', 'Gentle post-color restorative wash']
  },
  {
    id: 'hydra-glow-facial',
    category: 'skin',
    title: 'Hydra Glow & Deep Cleansing Facial',
    subtitle: 'Revitalizing Moisture & Pore Clarification',
    description: 'Multi-step skin rejuvenation focusing on gentle exfoliation, pore clearing, botanical hydration, and a cooling mask that restores a healthy, luminous complexion.',
    durationApprox: '60 Mins',
    highlights: ['Double cleansing & botanical steam', 'Pore vacuum extraction & gentle scrub', 'Nutrient-rich serum infusion', 'Calming lymphatic facial massage']
  },
  {
    id: 'whitening-polishing-facial',
    category: 'skin',
    title: 'Skin Polishing & Brightening Facial',
    subtitle: 'Even Tone & Radiance Boost',
    description: 'Designed to target dullness, sun-tan, and uneven texture. Clarifies the skin layer and restores immediate radiance for weddings and special gatherings.',
    durationApprox: '60 – 75 Mins',
    highlights: ['Gentle fruit-acid or herbal polisher', 'Targeted pigmentation care', 'Deep moisture seal mask', 'Soothing neck & shoulder relief']
  },
  {
    id: 'herbal-skin-therapy',
    category: 'skin',
    title: 'Herbal Soothing Facial for Sensitive Skin',
    subtitle: 'Gentle Calming & Anti-Redness Care',
    description: 'Mild, plant-infused formulations specifically designed for delicate, sensitive, or reactive skin types that require extra gentle handling without irritation.',
    durationApprox: '50 Mins',
    highlights: ['Hypoallergenic soothing ingredients', 'Gentle aloe & chamomile extracts', 'Barrier-repair hydration mask', 'Anti-inflammatory coolness']
  },
  {
    id: 'luxury-mani-pedi',
    category: 'nails',
    title: 'Luxury Spa Manicure & Pedicure',
    subtitle: 'Exfoliation, Cuticle Care & Paraffin Softening',
    description: 'Complete hands and feet pampering with aromatic soak, callus smoothing, dead skin buffing, cuticle trimming, and deeply hydrating massage.',
    durationApprox: '60 – 75 Mins',
    highlights: ['Soothing warm herb-infused soak', 'Deep heel buffing & exfoliation', 'Cuticle nourishment & nail shaping', 'Relaxing pressure point massage']
  },
  {
    id: 'threading-waxing',
    category: 'grooming',
    title: 'Facial Threading & Hygienic Waxing',
    subtitle: 'Eyebrow Shaping & Silky Smooth Hair Removal',
    description: 'Clean, hygienic hair removal techniques using sanitized threads and gentle waxing for brows, upper lip, chin, and body areas with minimal sensitivity.',
    durationApprox: '20 – 45 Mins',
    highlights: ['Strict sanitary tool hygiene', 'Crisp eyebrow arch definition', 'Post-threading cooling aloe gel', 'Gentle wax for sensitive skin']
  }
];

export const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'bridal', label: 'Bridal & Party' },
  { id: 'hair', label: 'Hair Care & Styling' },
  { id: 'skin', label: 'Skincare & Facials' },
  { id: 'nails', label: 'Hands & Feet' },
  { id: 'grooming', label: 'Threading & Waxing' },
] as const;

export const SALON_STANDARDS = [
  {
    title: 'Ladies-Only Privacy',
    description: 'A completely private, secure, and respectful ladies-only atmosphere designed for comfort and tranquility during every appointment.',
  },
  {
    title: 'Consultation First',
    description: 'Every hair treatment, bridal look, or facial begins with personalized attention to understand your skin type, hair condition, and personal preferences.',
  },
  {
    title: 'Sanitary Hygiene Standards',
    description: 'Impeccable cleanliness with sanitized tools, disposable liners, and premium beauty products for your complete safety and peace of mind.',
  },
  {
    title: 'Central Gojra Location',
    description: 'Conveniently situated on Quaid-e-Azam Road opposite Borjan Shoes, easily accessible with reliable evening hours closing at 8 PM.',
  }
];
