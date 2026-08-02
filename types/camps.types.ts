export interface Camp {
  id: string;
  title: string;
  description: string;
  location: string;
  currency: string;
  capacity: number;
  startDate: string;
  endDate: string;
  thumbnail: string | null;
  benefits: string[];
  status: string;
  createdAt: string;
  updatedAt: string;
  tiers?: CampTier[];
  images?: CampImage[];
  testimonials?: any[];
  _count?: {
    registrations: number;
  };
  seatsTaken?: number;
  seatsRemaining?: number;
}

export interface CampTier {
  id: string;
  campId: string;
  label: string;
  description: string;
  price: number;
  inclusions: string[];
  seatsPerUnit: number;
  maxUnits: number | null;
  order: number;
  isFeatured: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface CampImage {
  id: string;
  campId: string;
  url: string;
  caption?: string;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateCampTierPayload {
  label: string;
  description: string;
  price: number;
  inclusions: string[];
  seatsPerUnit: number;
  maxUnits: number | null;
  order: number;
  isFeatured: boolean;
}

export interface UpdateCampTierPayload {
  label: string;
  description: string;
  price: number;
  inclusions: string[];
  seatsPerUnit: number;
  maxUnits: number | null;
  order: number;
  isFeatured: boolean;
}
