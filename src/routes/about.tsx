import { createFileRoute } from "@tanstack/react-router";
import { FlexRender, tableFeatures, useTable } from "@tanstack/react-table";
import { COLUMNS } from "../components/tables/column";
import data from "../data/MOCK_DATA.json";
import { useTanStackTableDevtools } from "@tanstack/react-table-devtools/production";
import styles from "./about.module.css";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

export const features = tableFeatures({});

function RouteComponent() {
  const table = useTable({
    key: "yd7-test",
    features,
    columns: COLUMNS,
    data,
  });

  useTanStackTableDevtools(table);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headers) => (
            <tr key={headers.id} className={styles.headerRow + " text-center"}>
              {headers.headers.map((header) => (
                <th
                  key={header.id}
                  className={styles.headerCell}
                  colSpan={header.colSpan}
                >
                  {header.isPlaceholder ? null : (
                    <table.FlexRender header={header} />
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
