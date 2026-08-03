export type ProgramCategory = "STUDENTS" | "PROFESSIONALS" | "LEADERS";

export interface Program {
  id: string;
  title: string;
  description: string;
  category: ProgramCategory;
  /** Localised presentment price; the currency comes from X-Req-Currency. */
  price: number;
  priceMinor: number;
  currency: string;
  thumbnail: string | null;
  durationWeeks: number;
  hoursPerWeek: number;
  certificateLabel: string | null;
  learningOutcomes: string[];
  isPublished: boolean;
  startDate: string | null;
  facilitatorName: string | null;
  createdAt: string;
  _count: {
    purchases: number;
    weeks: number;
  };
  audience: string[];
  tags: string[];
  /** Ordered YouTube links; the array index is the display order. */
  videoLinks: string[];
}

export interface GetProgramsResponse {
  message: string;
  data: Program[];
}
