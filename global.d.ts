declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "swiper/css*";

interface ProgramColumn {
  id: string;
  title: string;
  category: string;
  price: number;
  isPublished: boolean;
  currency: string;
}

interface ConsultationColumn {
  id: string;
  status: string;
  firstName: string;
  lastName: string;
  email: string;
  serviceTitle: string;
  price: number;
  date: string;
  currency: string;
}

interface ParticipantColumn {
  participant: string;
  program: string;
  dateJoined: string;
  status: "Active" | "Inactive";
}

interface BlogListItem {
  id: string;
  title: string;
  excerpt: string;
  status: "Published" | "Draft";
  category: string;
  author: string;
  date: string;
}

interface SuccessBannerProps {
  title: string;
  description: string;
  location: string;
  thumbnail: string;
  capacity: number;
  startDate: string;
  /** Camps have no price of their own; money lives on the tiers. */
  tiers?: Array<{ price: number; currency?: string }>;
}
