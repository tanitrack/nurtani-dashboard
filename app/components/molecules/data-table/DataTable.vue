<script setup lang="ts" generic="TData, TValue">
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/vue-table"
import {
  FlexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from "@tanstack/vue-table"
import { ref } from "vue"
import { valueUpdater } from "@/lib/utils"
import { useRouter } from "vue-router"

const router = useRouter()

interface DataTableProps {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}
const props = defineProps<DataTableProps>()

const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref({})

const table = useVueTable({
  get data() {
    return props.data
  },
  get columns() {
    return props.columns
  },
  state: {
    get sorting() {
      return sorting.value
    },
    get columnFilters() {
      return columnFilters.value
    },
    get columnVisibility() {
      return columnVisibility.value
    },
    get rowSelection() {
      return rowSelection.value
    },
  },
  enableRowSelection: true,
  onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
  onColumnFiltersChange: updaterOrValue =>
    valueUpdater(updaterOrValue, columnFilters),
  onColumnVisibilityChange: updaterOrValue =>
    valueUpdater(updaterOrValue, columnVisibility),
  onRowSelectionChange: updaterOrValue =>
    valueUpdater(updaterOrValue, rowSelection),
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFacetedRowModel: getFacetedRowModel(),
  getFacetedUniqueValues: getFacetedUniqueValues(),
})

defineExpose({
  table,
})
</script>

<template>
  <Card>
    <CardContent>
      <slot name="toolbar" :table="table" />
    </CardContent>

    <div class="border-collapse border-x-0 overflow-hidden">
      <Table class="border-collapse">
        <TableHeader>
          <TableRow
            v-for="headerGroup in table.getHeaderGroups()"
            :key="headerGroup.id"
            class="bg-slate-50/80 hover:bg-slate-50/80 border-b transition-colors"
          >
            <TableHead
              v-for="header in headerGroup.headers"
              :key="header.id"
              :class="[
                'px-4 py-3 font-bold text-foreground border first:border-l-0 last:border-r-0',
                (header.column.columnDef.meta as any)?.className,
              ]"
            >
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <template v-if="table.getRowModel().rows?.length">
            <TableRow
              v-for="row in table.getRowModel().rows"
              :key="row.id"
              :data-state="row.getIsSelected() && 'selected'"
              class="hover:bg-slate-50/30 transition-colors border-b cursor-pointer"
              @click="router.push(`/product/${(row.original as any).id}`)"
            >
              <TableCell
                v-for="cell in row.getVisibleCells()"
                :key="cell.id"
                :class="[
                  'px-4 py-3 border first:border-l-0 last:border-r-0',
                  (cell.column.columnDef.meta as any)?.className,
                ]"
              >
                <FlexRender
                  :render="cell.column.columnDef.cell"
                  :props="cell.getContext()"
                />
              </TableCell>
            </TableRow>
          </template>

          <TableRow v-else>
            <TableCell
              :colspan="columns.length"
              class="h-24 text-center text-muted-foreground font-medium"
            >
              Data tidak ditemukan.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <CardContent>
      <slot name="pagination" :table="table" />
    </CardContent>
  </Card>
</template>
