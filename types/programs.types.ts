export type ProgramCategory = "STUDENTS" | "PROFESSIONALS" | "LEADERS";

export interface Program {
  id: string;
  title: string;
  description: string;
  category: ProgramCategory;
  price: number;
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
}

export interface GetProgramsResponse {
  message: string;
  data: Program[];
}
