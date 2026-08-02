import type { ConsultationServiceFormValues } from "@/schemas/consultation-service-schema";

/**
 * Consultation services are submitted as multipart because of the optional
 * cover image. Array fields go over as JSON strings — the API's parsers accept
 * an array, a JSON string, or newline/comma separated text.
 *
 * Shared by the add and edit modals so the two payloads cannot drift.
 */
export function buildConsultationServiceFormData(
  data: ConsultationServiceFormValues,
  calEventTypeId: number | string | undefined,
): FormData {
  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("price", String(Number(data.price)));
  formData.append("duration", String(Number(data.duration)));
  formData.append("calBookingUrl", data.calBookingUrl);
  if (calEventTypeId !== undefined && !Number.isNaN(Number(calEventTypeId))) {
    formData.append("calEventTypeId", String(Number(calEventTypeId)));
  }
  formData.append("currency", data.currency);

  // Sending "" clears the format; the API treats empty as an explicit clear.
  formData.append("format", data.format ?? "");
  formData.append(
    "audience",
    JSON.stringify((data.audience ?? []).map((v) => v.trim()).filter(Boolean)),
  );
  formData.append(
    "whatsIncluded",
    JSON.stringify(
      (data.whatsIncluded ?? []).map((v) => v.trim()).filter(Boolean),
    ),
  );
  formData.append("tags", JSON.stringify(data.tags ?? []));

  // A File means a new upload. A string means the existing Cloudinary URL,
  // which we resend so the API doesn't treat an untouched field as a clear.
  if (data.coverImage instanceof File) {
    formData.append("coverImage", data.coverImage);
  } else if (typeof data.coverImage === "string" && data.coverImage) {
    formData.append("coverImageUrl", data.coverImage);
  }

  return formData;
}
