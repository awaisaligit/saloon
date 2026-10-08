import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Phone, User, MessageCircle, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO, SALON_SERVICES } from '../data/salonData';
import { ServiceItem } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: ServiceItem | null;
}

const AVAILABLE_TIMES = [
  '10:30 AM',
  '11:30 AM',
  '12:30 PM',
  '01:30 PM',
  '02:30 PM',
  '03:30 PM',
  '04:30 PM',
  '05:30 PM',
  '06:30 PM',
  '07:00 PM' // Salon closes 8 PM
];

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preselectedService ? preselectedService.id : SALON_SERVICES[0].id
  );
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState(AVAILABLE_TIMES[0]);
  const [notes, setNotes] = useState('');
  const [submittedVoucher, setSubmittedVoucher] = useState<{
    id: string;
    serviceName: string;
    date: string;
    time: string;
    name: string;
    phone: string;
  } | null>(null);

  // Set default date to today or tomorrow
  useEffect(() => {
    if (!preferredDate) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      setPreferredDate(`${yyyy}-${mm}-${dd}`);
    }
  }, [preferredDate]);

  // Update selected service if preselectedService prop changes
  useEffect(() => {
    if (preselectedService) {
      setSelectedServiceId(preselectedService.id);
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const currentService = SALON_SERVICES.find((s) => s.id === selectedServiceId) || SALON_SERVICES[0];

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      alert('Please provide your name and phone number so our salon team can confirm your slot.');
      return;
    }

    const message = `Assalam-o-Alaikum Looks Ladies Salon (Gojra),%0A%0AI would like to request an appointment:%0A%0A• Service: ${encodeURIComponent(currentService.title)}%0A• Date: ${encodeURIComponent(preferredDate)}%0A• Preferred Time: ${encodeURIComponent(preferredTime)}%0A• Name: ${encodeURIComponent(fullName)}%0A• Phone: ${encodeURIComponent(phone)}${notes ? `%0A• Notes: ${encodeURIComponent(notes)}` : ''}%0A%0APlease let me know if this slot is available. Thank you!`;

    const whatsappUrl = `https://wa.me/923076846160?text=${message}`;
    window.open(whatsappUrl, '_blank');

    setSubmittedVoucher({
      id: `LOOKS-${Math.floor(1000 + Math.random() * 9000)}`,
      serviceName: currentService.title,
      date: preferredDate,
      time: preferredTime,
      name: fullName,
      phone: phone,
    });
  };

  const handleInAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      alert('Please enter your name and phone number.');
      return;
    }

    setSubmittedVoucher({
      id: `LOOKS-${Math.floor(1000 + Math.random() * 9000)}`,
      serviceName: currentService.title,
      date: preferredDate,
      time: preferredTime,
      name: fullName,
      phone: phone,
    });
  };

  const handleReset = () => {
    setSubmittedVoucher(null);
    setFullName('');
    setPhone('');
    setNotes('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-[#E3D9C9] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Header */}
        <div className="bg-[#FAF8F5] border-b border-[#EAE3D6] p-5 sm:p-6 flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#8F6C3F]">
              Looks Ladies Salon · Gojra
            </span>
            <h2 className="font-serif-display text-2xl text-[#24211E] font-medium mt-0.5">
              Book Your Appointment
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-[#7A7165] hover:text-[#24211E] hover:bg-[#EFE9DF] transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6">
          {submittedVoucher ? (
            /* Confirmation Voucher View */
            <div className="space-y-6 text-center py-4">
              <div className="w-14 h-14 bg-[#E8F3EA] text-[#246B35] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-[#24211E]">
                  Appointment Request Received
                </h3>
                <p className="text-sm text-[#5D554C] mt-1.5 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-[#24211E]">{submittedVoucher.name}</span>. Our salon team will confirm your session for {submittedVoucher.serviceName}.
                </p>
              </div>

              {/* Receipt Summary Card */}
              <div className="bg-[#FAF8F5] border border-[#EBE4D8] rounded-xl p-5 text-left text-xs sm:text-sm space-y-2.5 max-w-md mx-auto">
                <div className="flex justify-between pb-2 border-b border-[#EAE3D6]">
                  <span className="text-[#7A7165]">Reference:</span>
                  <span className="font-mono font-semibold text-[#24211E]">{submittedVoucher.id}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#EAE3D6]">
                  <span className="text-[#7A7165]">Service:</span>
                  <span className="font-medium text-[#24211E]">{submittedVoucher.serviceName}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#EAE3D6]">
                  <span className="text-[#7A7165]">Date & Time:</span>
                  <span className="font-medium text-[#24211E]">{submittedVoucher.date} at {submittedVoucher.time}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#EAE3D6]">
                  <span className="text-[#7A7165]">Location:</span>
                  <span className="text-right text-[#24211E]">Quaid-e-Azam Road (opp. Borjan)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A7165]">Direct Helpline:</span>
                  <a href={BUSINESS_INFO.phoneTel} className="font-semibold text-[#8F6C3F]">
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="flex-1 py-3 px-4 text-xs sm:text-sm font-semibold text-[#24211E] bg-[#EFE9DF] hover:bg-[#E5DACD] rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#8F6C3F]" />
                  <span>Call to Confirm Immediately</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-[#24211E] hover:bg-[#3D3730] rounded-xl transition-colors"
                >
                  Book Another Service
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleInAppSubmit} className="space-y-4">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B6359] mb-1.5">
                  Select Service
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DDD3C2] rounded-xl text-[#24211E] focus:outline-hidden focus:ring-2 focus:ring-[#8F6C3F]/30"
                >
                  {SALON_SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} ({s.category.toUpperCase()})
                    </option>
                  ))}
                </select>
                <p className="text-xs text-[#7A7165] mt-1">
                  {currentService.subtitle}
                </p>
              </div>

              {/* Date and Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B6359] mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DDD3C2] rounded-xl text-[#24211E] focus:outline-hidden focus:ring-2 focus:ring-[#8F6C3F]/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B6359] mb-1.5">
                    Time Slot (Open until 8 PM)
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DDD3C2] rounded-xl text-[#24211E] focus:outline-hidden focus:ring-2 focus:ring-[#8F6C3F]/30"
                  >
                    {AVAILABLE_TIMES.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B6359] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fatima / Sana"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DDD3C2] rounded-xl text-[#24211E] focus:outline-hidden focus:ring-2 focus:ring-[#8F6C3F]/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B6359] mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0300 1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DDD3C2] rounded-xl text-[#24211E] focus:outline-hidden focus:ring-2 focus:ring-[#8F6C3F]/30"
                  />
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B6359] mb-1.5">
                  Special Notes or Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Hair length, sensitive skin, or wedding event date..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-[#DDD3C2] rounded-xl text-[#24211E] focus:outline-hidden focus:ring-2 focus:ring-[#8F6C3F]/30 resize-none"
                />
              </div>

              {/* Notice */}
              <div className="p-3 bg-[#FAF8F5] border border-[#EBE4D8] rounded-xl flex items-center gap-2.5 text-xs text-[#6B6359]">
                <Clock className="w-4 h-4 text-[#8F6C3F] shrink-0" />
                <span>
                  Looks Ladies Salon is open daily until 8:00 PM on Quaid-e-Azam Road, Gojra.
                </span>
              </div>

              {/* Two Submission Options */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-[#1F6E35] hover:bg-[#185A2B] rounded-xl transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Request via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-[#24211E] hover:bg-[#3D3730] rounded-xl transition-colors shadow-xs"
                >
                  <Calendar className="w-4 h-4 text-[#C9A982]" />
                  <span>Confirm In-App</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="text-xs text-[#8F6C3F] hover:underline font-medium inline-flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  Prefer to call directly? Dial {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
