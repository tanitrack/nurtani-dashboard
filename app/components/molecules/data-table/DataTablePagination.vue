<script setup lang="ts" generic="TData">
import type { Table } from "@tanstack/vue-table"

interface DataTablePaginationProps {
  table: Table<TData>
}
defineProps<DataTablePaginationProps>()
useI18n()
</script>

<template>
  <div class="flex items-center justify-between">
    <!-- Left: Result Count (e.g., 1-4 of 4) -->
    <div class="flex gap-3 items-center">
      <div class="text-sm text-foreground">
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
        {{ $t('common.of') }} {{ table.getFilteredRowModel().rows.length }}
      </div>

      <div class="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          class="size-8"
          :disabled="!table.getCanPreviousPage()"
          @click="table.previousPage()"
        >
          <Icon name="i-lucide-arrow-left" class="size-4" />
        </Button>
        <div
          class="size-8 flex items-center justify-center bg-slate-100 rounded-lg text-xs text-foreground"
        >
          {{ table.getState().pagination.pageIndex + 1 }}
        </div>
        <Button
          variant="ghost"
          size="icon"
          class="size-8"
          :disabled="!table.getCanNextPage()"
          @click="table.nextPage()"
        >
          <Icon name="i-lucide-arrow-right" class="size-4" />
        </Button>
      </div>
    </div>

    <!-- Right: Page Size Selector (Show 5 per page) -->
    <div class="flex items-center gap-3 text-sm">
      <span class="text-foreground">{{ $t('common.show') }}</span>
      <Select
        :model-value="`${table.getState().pagination.pageSize}`"
        @update:model-value="(val) => table.setPageSize(Number(val))"
      >
        <SelectTrigger class="h-10 w-[70px] border rounded-lg">
          <SelectValue
            :placeholder="`${table.getState().pagination.pageSize}`"
          />
        </SelectTrigger>
        <SelectContent side="top">
          <SelectItem
            v-for="pageSize in [5, 10, 20, 30, 40, 50]"
            :key="pageSize"
            :value="`${pageSize}`"
          >
            {{ pageSize }}
          </SelectItem>
        </SelectContent>
      </Select>
      <span class="text-foreground">{{ $t('common.per_page') }}</span>
    </div>
  </div>
</template>
