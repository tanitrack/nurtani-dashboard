<script setup lang="ts">
import type { Table } from "@tanstack/vue-table"
import type { Product } from "@/types/product"
import { computed } from "vue"
import DataTableFacetedFilter from "@/components/molecules/data-table/DataTableFacetedFilter.vue"
import { categories } from "../data/data"

interface DataTableToolbarProps {
  table: Table<Product>
}

const props = defineProps<DataTableToolbarProps>()

const isFiltered = computed(
  () => props.table.getState().columnFilters.length > 0,
)
</script>

<template>
  <div class="flex items-center justify-between gap-4">
    <div class="flex flex-1 items-center space-x-2 overflow-x-auto pb-1">
      <Input
        :placeholder="$t('history.search_placeholder')"
        :model-value="
          (table.getColumn('name')?.getFilterValue() as string) ?? ''
        "
        class="w-[150px] lg:w-[250px] font-medium"
        @input="table.getColumn('name')?.setFilterValue(($event.target as HTMLInputElement).value)"
      />
      <DataTableFacetedFilter
        v-if="table.getColumn('name')"
        :column="table.getColumn('name')"
        :title="$t('product.category')"
        :options="categories"
      />

      <Button
        v-if="isFiltered"
        variant="ghost"
        class="h-8 px-2 lg:px-3"
        @click="table.resetColumnFilters()"
      >
        {{ $t('common.reset') }}
        <Icon name="i-radix-icons-cross-2" class="ml-2 h-4 w-4" />
      </Button>
    </div>

    <div class="flex items-center gap-3">
      <Button>
        <Icon name="i-lucide-plus" class="size-4 mr-2" />
        {{ $t('common.add_data') }}
      </Button>
    </div>
  </div>
</template>
