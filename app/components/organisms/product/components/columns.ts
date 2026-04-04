import type { ColumnDef } from "@tanstack/vue-table"

import type { Product } from "@/types/product"
import { h } from "vue"
import DataTableColumnHeader from "@/components/molecules/data-table/DataTableColumnHeader.vue"
import DataTableRowActions from "./DataTableRowActions.vue"

function formatCurrency(value: number, locale = "id-ID") {
  return new Intl.NumberFormat(locale === "id" ? "id-ID" : "en-US", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value)
}

export function getColumns(t: any, locale: string): ColumnDef<Product>[] {
  return [
    {
      accessorKey: "name",
      header: ({ column }) =>
        h(DataTableColumnHeader, { column, title: t("product.name") }),
      cell: ({ row }) => {
        const product = row.original
        return h("div", { class: "flex items-center gap-4 py-1" }, [
          h("div", { class: "size-12 rounded-lg overflow-hidden shrink-0" }, [
            h("img", {
              src: product.image,
              alt: product.name,
              class: "size-full object-cover",
            }),
          ]),
          h("div", { class: "flex flex-col" }, [
            h(
              "span",
              { class: "font-bold text-foreground text-sm leading-tight" },
              product.name,
            ),
            h(
              "span",
              { class: "text-xs text-muted-foreground mt-1" },
              `${t("product.category")}: ${product.category}`,
            ),
          ]),
        ])
      },
    },
    {
      accessorKey: "price",
      header: ({ column }) =>
        h(DataTableColumnHeader, { column, title: t("product.price") }),
      cell: ({ row }) =>
        h(
          "div",
          { class: "font-medium text-foreground text-sm" },
          formatCurrency(row.getValue("price"), locale),
        ),
    },
    {
      accessorKey: "stock",
      header: ({ column }) =>
        h(DataTableColumnHeader, { column, title: t("product.stock") }),
      cell: ({ row }) =>
        h(
          "div",
          { class: "font-medium text-foreground text-sm" },
          row.getValue("stock"),
        ),
    },
    {
      accessorKey: "unit",
      header: ({ column }) =>
        h(DataTableColumnHeader, { column, title: t("product.unit") }),
      cell: ({ row }) =>
        h(
          "div",
          { class: "font-medium text-foreground text-sm" },
          row.getValue("unit"),
        ),
    },
    {
      accessorKey: "lastUpdate",
      header: ({ column }) =>
        h(DataTableColumnHeader, { column, title: t("product.last_update") }),
      cell: ({ row }) =>
        h(
          "div",
          { class: "text-muted-foreground text-sm" },
          row.getValue("lastUpdate"),
        ),
    },
    {
      id: "actions",
      cell: ({ row }) => h(DataTableRowActions, { row }),
    },
  ]
}
