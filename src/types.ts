export interface ServiceItem {
  id: string;
  category: 'hair' | 'skin' | 'bridal' | 'nails' | 'grooming';
  title: string;
  subtitle: string;
  description: string;
  durationApprox?: string;
  highlights: string[];
}

export interface AppointmentInquiry {
  id: string;
  customerName: string;
  phone: string;
  serviceId: string;
  serviceName: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  createdAt: string;
}
