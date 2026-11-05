import { createFileRoute } from "@tanstack/react-router";
import {
  columnFilteringFeature,
  createFilteredRowModel,
  createSortedRowModel,
  filterFn_includesString,
  FlexRender,
  globalFilteringFeature,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_datetime,
  tableFeatures,
  useTable,
  type ColumnFiltersState,
} from "@tanstack/react-table";
import { COLUMNS } from "../components/tables/column";
import data from "../data/MOCK_DATA.json";
import { useTanStackTableDevtools } from "@tanstack/react-table-devtools/production";
import styles from "./about.module.css";
import { useState } from "react";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

export const features = tableFeatures({
  rowSortingFeature,
  columnFilteringFeature,
  // globalFilteringFeature,
  sortedRowModel: createSortedRowModel(),
  filteredRowModel: createFilteredRowModel(),

  filterFns: {
    includes: filterFn_includesString,
  },

  sortFns: {
    alphanumberic: sortFn_alphanumeric,
    date: sortFn_datetime,
  },
});

function RouteComponent() {
  const table = useTable({
    key: "yd7-test",
    features,
    columns: COLUMNS,
    data,
    enableSortingRemoval: false,
    sortDescFirst: true,
    enableMultiSort: true,
    initialState: { sorting: [{ id: "id", desc: false }] },
  });

  useTanStackTableDevtools(table);

  return (
    <div className={styles.container}>
      <input
        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search...."
        onChange={(e) =>
          table.setColumnFilters([
            { id: "email", value: String(e.target.value) },
          ])
        }
      />
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headers) => (
            <tr key={headers.id} className={styles.headerRow + " text-center"}>
              {headers.headers.map((header) => (
                <th
                  key={header.id}
                  className={styles.headerCell}
                  colSpan={header.colSpan}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder ? null : (
                    <>
                      <table.FlexRender header={header} />
                      {header.column.getIsSorted() === "asc" && " ↑"}
                      {header.column.getIsSorted() === "desc" && " ↓"}
                    </>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={styles.bodyRow}>
              {row.getAllCells().map((cell) => (
                <td key={cell.id} className={styles.bodyCell}>
                  <table.FlexRender cell={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>

        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id} className={styles.headerRow}>
              {footerGroup.headers.map((footer) => (
                <th key={footer.id} className={styles.headerCell}>
                  <FlexRender footer={footer} />
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}
