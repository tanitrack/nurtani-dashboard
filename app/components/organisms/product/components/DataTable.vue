<script setup lang="ts">
import type { ColumnDef } from "@tanstack/vue-table";
import type { Product } from "../data/schema";
import DataTableMolecule from "@/components/molecules/data-table/DataTable.vue";
import DataTablePagination from "@/components/molecules/data-table/DataTablePagination.vue";
import DataTableToolbar from "./DataTableToolbar.vue";

interface DataTableProps {
  columns: ColumnDef<Product, any>[];
  data: Product[];
}
defineProps<DataTableProps>();
</script>

<template>
  <DataTableMolecule :columns="columns" :data="data">
    <template #toolbar="{ table }">
      <DataTableToolbar :table="table" />
    </template>
    <template #pagination="{ table }">
      <DataTablePagination :table="table" />
    </template>
  </DataTableMolecule>
</template>
