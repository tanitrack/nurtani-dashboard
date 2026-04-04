import type { ColumnDef } from "@tanstack/vue-table"

import type { Product } from "../data/schema"
import { h } from "vue"
import DataTableColumnHeader from "@/components/molecules/data-table/DataTableColumnHeader.vue"
import DataTableRowActions from "./DataTableRowActions.vue"

function formatCurrency(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value)
}

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: ({ column }) =>
      h(DataTableColumnHeader, { column, title: "Nama Produk" }),
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
            `Kategori: ${product.category}`,
          ),
        ]),
      ])
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) =>
      h(DataTableColumnHeader, { column, title: "Harga" }),
    cell: ({ row }) =>
      h(
        "div",
        { class: "font-medium text-foreground text-sm" },
        formatCurrency(row.getValue("price")),
      ),
  },
  {
    accessorKey: "stock",
    header: ({ column }) => h(DataTableColumnHeader, { column, title: "Stok" }),
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
      h(DataTableColumnHeader, { column, title: "Satuan" }),
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
      h(DataTableColumnHeader, { column, title: "Update Terakhir" }),
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
