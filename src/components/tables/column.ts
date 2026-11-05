import type { ColumnDef } from "@tanstack/react-table";
import type data from "../../data/MOCK_DATA.json";
import { features } from "../../routes/about";

export const COLUMNS: ColumnDef<typeof features, (typeof data)[number]>[] = [
  {
    header: "id",
    footer: "id",
    accessorKey: "id",
  },
  {
    header: "name",
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
  },
  {
    header: "date_of_birth",
    footer: "date_of_birth",
    accessorKey: "date_of_birth",
  },
  {
    header: "age",
    footer: "age",
    accessorKey: "age",
  },
  {
    header: "phone",
    footer: "phone",
    accessorKey: "phone",
  },
];
