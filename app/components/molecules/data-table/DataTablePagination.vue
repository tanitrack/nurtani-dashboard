<script setup lang="ts" generic="TData">
import type { Table } from "@tanstack/vue-table"

interface DataTablePaginationProps {
  table: Table<TData>
}
defineProps<DataTablePaginationProps>()
useI18n()
</script>

<template>
  <div
    class="flex flex-col md:flex-row items-center justify-between gap-5 py-2 px-1"
  >
    <!-- Left Group: Results & Navigation -->
    <div
      class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full md:w-auto"
    >
      <!-- Result Count -->
      <div
        class="text-[11px] font-bold text-muted-foreground uppercase tracking-widest text-center sm:text-left min-w-[80px]"
      >
        {{
          table.getState().pagination.pageIndex
            * table.getState().pagination.pageSize
            + 1
        }}-{{
          Math.min(
            (table.getState().pagination.pageIndex + 1)
              * table.getState().pagination.pageSize,
            table.getFilteredRowModel().rows.length,
          )
        }}
        <span class="mx-1 text-muted-foreground/40">{{ $t("common.of") }}</span>
        {{ table.getFilteredRowModel().rows.length }}
      </div>

      <!-- Arrow Controls -->
      <div class="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          class="size-9 rounded-xl border-border/50 hover:bg-slate-50 transition-colors shadow-sm"
          :disabled="!table.getCanPreviousPage()"
          @click="table.previousPage()"
        >
          <Icon name="i-lucide-chevron-left" class="size-5" />
        </Button>
        <div
          class="size-9 flex items-center justify-center bg-slate-100/80 rounded-xl text-xs font-bold text-foreground border border-border/5"
        >
          {{ table.getState().pagination.pageIndex + 1 }}
        </div>
        <Button
          variant="outline"
          size="icon"
          class="size-9 rounded-xl border-border/50 hover:bg-slate-50 transition-colors shadow-sm"
          :disabled="!table.getCanNextPage()"
          @click="table.nextPage()"
        >
          <Icon name="i-lucide-chevron-right" class="size-5" />
        </Button>
      </div>
    </div>

    <!-- Right Group: Page Size Selector -->
    <div
      class="flex items-center gap-3 text-[13px] font-medium border-t md:border-t-0 border-border/30 pt-4 md:pt-0 w-full md:w-auto justify-center md:justify-end"
    >
      <span class="text-muted-foreground">{{ $t("common.show") }}</span>
      <Select
        :model-value="`${table.getState().pagination.pageSize}`"
        @update:model-value="(val) => table.setPageSize(Number(val))"
      >
        <SelectTrigger
          class="h-9 w-[74px] border border-border/50 rounded-xl bg-white focus:ring-1 focus:ring-primary shadow-sm text-xs font-bold"
        >
          <SelectValue
            :placeholder="`${table.getState().pagination.pageSize}`"
          />
        </SelectTrigger>
        <SelectContent side="top" class="rounded-xl border-border/60">
          <SelectItem
            v-for="pageSize in [5, 10, 20, 30, 40, 50]"
            :key="pageSize"
            :value="`${pageSize}`"
            class="text-xs"
          >
            {{ pageSize }}
          </SelectItem>
        </SelectContent>
      </Select>
      <span class="text-muted-foreground">{{ $t("common.per_page") }}</span>
    </div>
  </div>
</template>
