import { api } from "@/lib/axios";
import { getApiError } from "@/lib/utils";
import type { Tag } from "@/lib/api/services/tags/tags.services";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ConsultationService {
  id: string;
  title: string;
  description: string;
  /** Localised presentment price; the currency comes from X-Req-Currency. */
  price: number;
  priceMinor: number;
  duration: number; // minutes
  calEventTypeId: number | string | null;
  calBookingUrl: string;
  isActive: boolean;
  currency: string;
  coverImageUrl: string | null;
  /** "Who's it for" / "What's included" — full-sentence bullets, not tags. */
  audience: string[];
  whatsIncluded: string[];
  /** Single FORMAT tag, lifted out of the FK by the API serializer. */
  format?: Tag | null;
  formatTagId?: string | null;
  /** Short reusable TOPIC pills. */
  tags?: Tag[];
  createdAt?: string;
  updatedAt?: string;
}

export interface CalEventType {
  calEventTypeId: number;
  title: string;
  slug: string;
  lengthInMinutes: number;
  calBookingUrl: string;
  username: string;
}

export interface CalEventTypesResponse {
  success: boolean;
  message: string;
  data: CalEventType[];
}

export interface CreateConsultationServicePayload {
  title: string;
  description: string;
  price: number;
  duration: number;
  calBookingUrl: string;
  calEventTypeId: number;
}

export interface UpdateConsultationServicePayload {
  title?: string;
  description?: string;
  price?: number;
  duration?: number;
  calBookingUrl?: string;
  calEventTypeId?: number;
  isActive?: boolean;
  currency?: string;
}

export interface UpdateConsultationStatusPayload {
  status: "CONFIRMED" | "PENDING" | "CANCELLED" | "COMPLETED";
  confirmedDate?: string;
}

export interface ConsultationServicesResponse {
  message: string;
  data: ConsultationService[];
}

export interface ConsultationServiceResponse {
  message: string;
  data: ConsultationService;
}

// ─── Service Functions ────────────────────────────────────────────────────────

export const getAllConsultationServices =
  async (): Promise<ConsultationServicesResponse> => {
    try {
      const res = await api.get("/consultations/services");
      return res.data;
    } catch (error) {
      throw new Error(getApiError(error));
    }
  };

/**
 * The public list is filtered to active services, which would hide a
 * deactivated service from the screen that manages it. Prices come back in the
 * base currency they were entered in.
 */
export const getAdminConsultationServices =
  async (): Promise<ConsultationServicesResponse> => {
    try {
      const res = await api.get("/consultations/admin/services");
      return res.data;
    } catch (error) {
      throw new Error(getApiError(error));
    }
  };

export const getConsultationServiceById = async (
  id: string,
): Promise<ConsultationServiceResponse> => {
  if (!id) throw new Error("Service ID is required.");
  try {
    const res = await api.get(`/consultations/services/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const createConsultationService = async (
  payload: CreateConsultationServicePayload | FormData,
) => {
  try {
    const res = await api.post("/consultations/services", payload, {
      // FormData carries the optional cover image; axios sets the boundary.
      ...(payload instanceof FormData && {
        headers: { "Content-Type": "multipart/form-data" },
      }),
    });
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const updateConsultationService = async (
  id: string,
  payload: UpdateConsultationServicePayload | FormData,
): Promise<ConsultationServiceResponse> => {
  if (!id) throw new Error("Service ID is required.");
  try {
    const res = await api.patch(`/consultations/services/${id}`, payload, {
      ...(payload instanceof FormData && {
        headers: { "Content-Type": "multipart/form-data" },
      }),
    });
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const updateConsultationStatus = async (
  consultationId: string,
  payload: UpdateConsultationStatusPayload,
): Promise<{ message: string }> => {
  if (!consultationId) throw new Error("Consultation ID is required.");
  try {
    const res = await api.patch(`/consultations/${consultationId}`, payload);
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};

export const getCalEventTypes = async (): Promise<CalEventTypesResponse> => {
  try {
    const res = await api.get("/admin/cal/event-types");
    return res.data;
  } catch (error) {
    throw new Error(getApiError(error));
  }
};
