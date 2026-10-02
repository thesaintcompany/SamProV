export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: string[];
  ctaText: string;
  targetAudience: string;
}

export interface WorkshopTelemetry {
  activeHoists: number;
  totalHoists: number;
  todayQuotes: number;
  todayRevenue: number;
  approvalRate: number;
  uptime: number;
}

export interface RarVehicleRecord {
  plate: string;
  vin: string;
  makeModel: string;
  year: number;
  engine: string;
  mileageHistory: { date: string; km: number; station: string }[];
  itpStatus: 'VALID' | 'EXPIRAT' | 'ÎN CURÂND';
  itpExpiry: string;
  damageRecords: number;
  status: 'VERIFICAT_RAR';
}

export interface DevizItem {
  id: string;
  name: string;
  code?: string;
  type: 'piesa' | 'manopera';
  category: 'critical' | 'recommended';
  price: number;
  selected: boolean;
  warrantyMonths: number;
}
