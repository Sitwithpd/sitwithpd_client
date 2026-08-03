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
  isOpenForRegistration?: boolean;
  /** False when seats remain but no tier fits in them. */
  hasBookableTier?: boolean;
}

export type TierUnavailableReason =
  | "CAMP_CLOSED"
  | "TIER_SOLD_OUT"
  | "INSUFFICIENT_SEATS"
  | null;

export interface CampParticipant {
  id: string;
  registrationId: string;
  fullName: string;
  isLead: boolean;
  age: number | null;
  relationship: string | null;
  dietaryRequirements: string | null;
  medicalConditions: string | null;
  emergencyContactName: string | null;
  emergencyContactPhone: string | null;
  order: number;
}

export interface ParticipantInput {
  fullName: string;
  age?: string;
  relationship?: string;
  dietaryRequirements?: string;
  medicalConditions?: string;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
}

export type BlockedRegistrationReason =
  | "ACTIVE_HOLD"
  | "PAYMENT_PENDING"
  | "PAYMENT_UNDER_REVIEW"
  | null;


export interface CampTier {
  id: string;
  campId: string;
  label: string;
  description: string;
  price: number;
  priceMinor?: number;
  currency?: string;
  unitsSold?: number;
  /** Null when the tier has no maxUnits cap. */
  unitsRemaining?: number | null;
  isAvailable?: boolean;
  unavailableReason?: TierUnavailableReason;
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
