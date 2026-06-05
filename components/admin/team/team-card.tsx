"use client";

import { TeamMember } from "@/lib/api/services/team/team.services";
import Image from "next/image";
import { FilePenLine, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TeamMemberCardProps {
  member: TeamMember;
  onEdit: (member: TeamMember) => void;
  onDelete: (id: string) => void;
}

export default function TeamMemberCard({
  member,
  onEdit,
  onDelete,
}: TeamMemberCardProps) {
  return (
    <div className="bg-white dark:bg-dash-secondary-bg rounded-[16px] overflow-hidden border border-[#EAECF0] dark:border-gray-800 shadow-sm hover:shadow-md transition-all group flex flex-col h-full max-w-[450px] mx-auto w-full">
      {/* Image Container */}
      <div className="relative aspect-4/5 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={member.photoUrl || "/images/placeholder.png"}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <Badge
            variant={member.isPublished ? "success" : "secondary"}
            className="shadow-sm"
          >
            {member.isPublished ? "Published" : "Draft"}
          </Badge>
        </div>

        {/* Actions Overlay (visible on hover) */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onEdit(member)}
            className="w-10 h-10 rounded-full p-0 bg-white hover:bg-gray-100"
          >
            <FilePenLine size={18} className="text-gray-700" />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onDelete(member.id)}
            className="w-10 h-10 rounded-full p-0 bg-white hover:bg-red-50 text-red-600 hover:text-red-700"
          >
            <Trash2 size={18} />
          </Button>
        </div>
      </div>

      {/* Info Container */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start gap-2 mb-1">
          <h3 className="font-bold text-lg text-primary-text line-clamp-1">
            {member.name}
          </h3>
          <span className="text-xs font-medium text-gray-400 bg-gray-50 dark:bg-gray-800 px-2 py-0.5 rounded">
            #{member.order}
          </span>
        </div>
        <p className="text-[#649351] font-medium text-sm">{member.role}</p>

        {/* Mobile Actions (always visible but small) */}
        <div className="flex sm:hidden mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(member)}
            className="flex-1 h-9 gap-2"
          >
            <FilePenLine size={14} /> Edit
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onDelete(member.id)}
            className="flex-1 h-9 gap-2 text-red-600 border-red-100 hover:bg-red-50"
          >
            <Trash2 size={14} /> Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
