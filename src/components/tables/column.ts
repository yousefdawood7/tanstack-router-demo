import type { ColumnDef } from "@tanstack/react-table";
import type data from "../../data/MOCK_DATA.json";
import { features } from "../../routes/about";

export const COLUMNS: ColumnDef<typeof features, (typeof data)[number]>[] = [
  {
    header: "id",
    footer: "id",
    accessorKey: "id",
    sortFn: "alphanumberic",
    enableHiding: true,
  },
  {
    header: "name",
    enableSorting: false,
    columns: [
      {
        header: "first_name",
        footer: "first_name",
        accessorKey: "first_name",
      },
      {
        header: "last_name",
        footer: "last_name",
        accessorKey: "last_name",
      },
    ],
  },
  {
    header: "email",
    footer: "email",
    accessorKey: "email",
    filterFn: "includes",
  },
  {
    header: "date_of_birth",
    footer: "date_of_birth",
    accessorKey: "date_of_birth",
    sortFn: "date",
  },
  {
    header: "age",
    footer: "age",
    enableSorting: false,
    accessorKey: "age",
  },
  {
    header: "phone",
    enableSorting: false,
    footer: "phone",
    accessorKey: "phone",
  },
] as const;
