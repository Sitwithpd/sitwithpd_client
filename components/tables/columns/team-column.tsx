"use client";

import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  EllipsisVertical,
  FilePenLine,
  Trash2,
  Eye,
  EyeOff,
} from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { useModalStore } from "@/components/store/use-modal-store";
import { TeamMember } from "@/lib/api/services/team/team.services";

const ActionCell = ({
  row,
  handleEdit,
  handleDelete,
}: {
  row: any;
  handleEdit: (member: TeamMember) => void;
  handleDelete: (id: string) => void;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer transition-all rounded-full duration-300 w-10 h-10 hover:bg-[#EBEBEB] flex justify-center items-center">
        <EllipsisVertical />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[180px]">
        <DropdownMenuItem
          onClick={() => handleEdit(row.original)}
          className="py-3 px-4"
        >
          <FilePenLine className="mr-2 h-4 w-4" /> Edit Member
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleDelete(row.original.id)}
          className="py-3 px-4 text-brand-red hover:text-brand-red"
        >
          <Trash2 className="mr-2 h-4 w-4" /> Delete Member
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const TeamColumns = (
  handleEdit: (member: TeamMember) => void,
  handleDelete: (id: string) => void,
): ColumnDef<TeamMember>[] => [
  {
    accessorKey: "image",
    header: "Photo",
    cell: ({ row }) => (
      <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100">
        <Image
          src={row.original.photoUrl || "/images/placeholder.png"}
          alt={row.original.name}
          fill
          className="object-cover"
        />
      </div>
    ),
    size: 60,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <span className="font-medium">{row.original.name}</span>,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => <span>{row.original.role}</span>,
  },
  {
    accessorKey: "order",
    header: "Order",
    cell: ({ row }) => <span>{row.original.order}</span>,
  },
  {
    accessorKey: "isPublished",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={row.original.isPublished ? "success" : "secondary"}>
        {row.original.isPublished ? "Published" : "Draft"}
      </Badge>
    ),
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => (
      <ActionCell
        row={row}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    ),
    size: 50,
  },
];
