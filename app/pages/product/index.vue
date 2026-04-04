<script setup lang="ts">
import { columns } from "@/components/organisms/product/components/columns"
import DataTable from "@/components/organisms/product/components/DataTable.vue"
import { mockProducts } from "@/mocks/product"

const products = ref(mockProducts)
</script>

<template>
  <div class="flex flex-col gap-6 pb-10">
    <!-- Page Header & Breadcrumbs -->
    <div
      class="flex flex-col md:flex-row md:items-center justify-between gap-4"
    >
      <div class="flex flex-col gap-1">
        <h2 class="text-2xl font-bold tracking-tight text-foreground">
          Daftar Produk
        </h2>
        <div class="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Produk</span>
          <span class="text-muted-foreground/40">/</span>
          <span class="text-foreground font-medium">Daftar Produk</span>
        </div>
      </div>
    </div>

    <!-- Main Content Area -->

    <DataTable :columns="columns" :data="products" />
  </div>
</template>
