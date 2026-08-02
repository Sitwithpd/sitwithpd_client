import React from "react";
import { Sparkles } from "lucide-react";
import GeneralistPathfindersIcon from "@/pd-icons/generalist-pathfinders-icon";
import ImpactVolunteersIcon from "@/pd-icons/impact-volunteers-icon";
import InternshipHubIcon from "@/pd-icons/internship-hub-icon";
import PhilanthropyIcon from "@/pd-icons/philanthropy-icon";
import StewardshipIcon from "@/pd-icons/stewardship-icon";

/**
 * Communities store an `iconKey` string rather than an image, so the bespoke
 * SVG components stay in the codebase. Adding a community with a new visual
 * means adding an entry here and offering the key in the admin form.
 */
export const COMMUNITY_ICONS: Record<string, React.ReactNode> = {
  "generalist-pathfinders": <GeneralistPathfindersIcon />,
  "impact-volunteers": <ImpactVolunteersIcon />,
  "internship-hub": <InternshipHubIcon />,
  philanthropy: <PhilanthropyIcon />,
  stewardship: <StewardshipIcon />,
  mentorship: <Sparkles size={24} color="#60935D" />,
};

/** Options for the admin icon dropdown. */
export const COMMUNITY_ICON_OPTIONS = [
  { value: "generalist-pathfinders", label: "Generalist Pathfinders" },
  { value: "impact-volunteers", label: "Impact Volunteers" },
  { value: "internship-hub", label: "Internship Hub" },
  { value: "philanthropy", label: "Philanthropy" },
  { value: "stewardship", label: "Stewardship" },
  { value: "mentorship", label: "Mentorship (sparkle)" },
] as const;

/** Falls back to the sparkle so an unknown or missing key never renders a hole. */
export function getCommunityIcon(iconKey: string | null | undefined): React.ReactNode {
  if (iconKey && COMMUNITY_ICONS[iconKey]) return COMMUNITY_ICONS[iconKey];
  return <Sparkles size={24} color="#60935D" />;
}
