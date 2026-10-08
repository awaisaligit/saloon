import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Quick contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/98 backdrop-blur-md border-t border-[#E8DFD3] p-2.5 shadow-lg"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={BUSINESS_INFO.phoneTel}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-[#24211E] bg-[#EFE9DF] active:bg-[#E2D6C5] rounded-xl border border-[#DED3C1] transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#8F6C3F]" />
          <span>Call 0307 6846160</span>
        </a>

        <button
          type="button"
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-white bg-[#24211E] active:bg-[#3D3730] rounded-xl transition-colors shadow-xs"
        >
          <Calendar className="w-3.5 h-3.5 text-[#C9A982]" />
          <span>Book Appointment</span>
        </button>
      </div>
    </aside>
  );
};
