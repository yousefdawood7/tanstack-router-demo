import { createFileRoute } from "@tanstack/react-router";
import {
  columnFilteringFeature,
  columnOrderingFeature,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  filterFn_includesString,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_datetime,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
import { useTanStackTableDevtools } from "@tanstack/react-table-devtools/production";
import { COLUMNS } from "../components/tables/column";
import data from "../data/MOCK_DATA.json";
import styles from "./about.module.css";
import type { DragEndEvent } from "@dnd-kit/react";
import type React from "react";
import { useSortable } from "@dnd-kit/react/sortable";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

export const features = tableFeatures({
  rowSortingFeature,
  columnFilteringFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  columnOrderingFeature,
  // globalFilteringFeature,

  filteredRowModel: createFilteredRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  sortedRowModel: createSortedRowModel(),

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
    enableRowRangeSelection: true,

    getRowId: (row) => "" + row.id,
    initialState: {
      sorting: [{ id: "id", desc: false }],
      pagination: { pageIndex: 0, pageSize: 10 },
    },
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
              <th className={styles.headerCell}></th>
              {headers.depth === 1 ? (
                <th className={styles.headerCell}>
                  <input
                    type="checkbox"
                    checked={table.getIsAllRowsSelected()}
                    onChange={table.getToggleAllRowsSelectedHandler()}
                  />
                </th>
              ) : (
                <th className={styles.headerCell}></th>
              )}

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
            <Sortable id={row.id} index={row.index}>
              <td className={styles.bodyCell + " cursor-pointer"}>
                <span>=</span>
              </td>

              <td className={styles.bodyCell}>
                <input
                  type="checkbox"
                  checked={row.getIsSelected()}
                  onChange={row.getToggleSelectedHandler({
                    selectChildren: false,
                  })}
                />
              </td>

              {row.getAllCells().map((cell) => (
                <td key={cell.id} className={styles.bodyCell}>
                  <table.FlexRender cell={cell} />
                </td>
              ))}
            </Sortable>
          ))}
        </tbody>
      </table>

      <div className="space-x-2">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-black"
          disabled={!table.getCanPreviousPage()}
          onClick={table.previousPage}
        >
          Prev
        </button>

        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-black"
          onClick={table.nextPage}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
}

type Sortable = {
  id: string;
  index: number;
  children: React.ReactNode;
};

function Sortable({ children, id, index }: Sortable) {
  const { ref, isDragging } = useSortable({ id, index });
  console.log(isDragging);
  return (
    <tr
      ref={ref}
      key={id}
      className={
        styles.bodyRow +
        " transition-shadow" +
        (isDragging ? " shadow-xl bg-black/10" : "")
      }
    >
      {children}
    </tr>
  );
}
