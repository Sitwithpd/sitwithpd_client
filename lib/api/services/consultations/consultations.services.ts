import { api } from "@/lib/axios";
import { buildQueryString, getApiError } from "@/lib/utils";

export interface Consultation {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  consultationType: string;
  experience: string;
  message?: string;
  status?: "pending" | "confirmed" | "completed" | "cancelled";
}

export interface CreateConsultationPayload {
  fullName: string;
  email: string;
  phone: string;
  consultationType: string;
  experience: string;
  message?: string;
}

export type UpdateConsultationPayload = Partial<CreateConsultationPayload>;

export interface BookConsultationPayload {
  serviceId: string | number;
  userId: string | number;
}

export interface ConsultationsResponse {
  data: Consultation[];
  message: string;
}

export interface ConsultationResponse {
  data: Consultation;
  message: string;
}

type BookingApiResponse = {
  meta: {
    page: number;
    limit: number;
    totalPages: number;
    totalCount: number;
  };
  data: {
    id: string;
    status: string;
    user: {
      firstName: string;
      lastName: string;
      email: string;
    };
    service: {
      title: string;
      /** List price, in the base currency it was entered in. */
      price: number;
      currency: string;
      createdAt: string;
    };
    /** Absent until the booking has been paid for. */
    payment: {
      status: "PENDING" | "SUCCESS" | "FAILED";
      amount: number;
      currency: string;
      baseAmount: number;
      baseCurrency: string;
    } | null;
  }[];
};

export const getConsultations = async (
  param = {},
): Promise<BookingApiResponse> => {
  const queryString = buildQueryString(param);
  const url = queryString ? `/consultations?${queryString}` : "/consultations";
  try {
    const res = await api.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error(getApiError(error));
  }
};

export const updateConsultation = async (
  id: string,
  payload: UpdateConsultationPayload,
): Promise<ConsultationResponse> => {
  if (!id) {
    throw new Error("Consultation ID is required for updates.");
  }

  try {
    const res = await api.patch(`/consultations/${id}`, payload);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error(getApiError(error));
  }
};

export const bookConsultation = async (
  payload: BookConsultationPayload,
): Promise<{ message: string }> => {
  try {
    const res = await api.post("/consultations/book", payload);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error(getApiError(error));
  }
};
