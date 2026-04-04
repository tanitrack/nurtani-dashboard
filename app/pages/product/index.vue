<script setup lang="ts">
import { getColumns } from "@/components/organisms/product/components/columns"
import DataTable from "@/components/organisms/product/components/DataTable.vue"
import { mockProducts } from "@/mocks/product"

const products = ref(mockProducts)
const { t, locale } = useI18n()

const columns = computed(() => getColumns(t, locale.value))

useHead({
  title: t('product.list'),
})
</script>

<template>
  <div class="flex flex-col gap-6 pb-10">
    <!-- Page Header & Breadcrumbs -->
    <div
      class="flex flex-col md:flex-row md:items-center justify-between gap-4"
    >
      <div class="flex flex-col gap-1">
        <h2 class="text-2xl font-bold tracking-tight text-foreground">
          {{ $t('product.list') }}
        </h2>
        <div class="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{{ $t('nav.produk') }}</span>
          <span class="text-muted-foreground/40">/</span>
          <span class="text-foreground font-medium">{{ $t('product.list') }}</span>
        </div>
      </div>
    </div>

    <!-- Main Content Area -->

    <DataTable :columns="columns" :data="products" />
  </div>
</template>
