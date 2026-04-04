<script setup lang="ts">
import type { TransactionStatus } from "@/types/transaction"
import { mockTransactions } from "@/mocks/transaction"

const search = ref("")
const selectedCategory = ref("Semua Kategori")
const selectedStatus = ref("Semua Status")
const perPage = ref("5")

const statuses: TransactionStatus[] = ["Berhasil", "Diproses", "Dikirim"]
const categories = ["BUAH", "SAYUR", "UMBI"]

const filteredTransactions = computed(() => {
  return mockTransactions.filter((trx) => {
    const matchesSearch = trx.productName
      .toLowerCase()
      .includes(search.value.toLowerCase())
    const matchesCategory =
      selectedCategory.value === "Semua Kategori"
      || trx.category === selectedCategory.value
    const matchesStatus =
      selectedStatus.value === "Semua Status"
      || trx.status === selectedStatus.value
    return matchesSearch && matchesCategory && matchesStatus
  })
})

function getStatusBg(status: TransactionStatus) {
  switch (status) {
    case "Berhasil":
      return "background-color: #E9F7EF; color: #1a7a44;"
    case "Diproses":
      return "background-color: #E8F4FD; color: #2980b9;"
    case "Dikirim":
      return "background-color: #FFFBE6; color: #d4a017;"
    default:
      return ""
  }
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value)
}
</script>

<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold text-foreground">
        Riwayat Transaksi
      </h1>
      <nav class="flex items-center gap-1.5 text-sm text-muted-foreground">
        <span>Riwayat</span>
        <span>/</span>
        <span class="text-foreground font-medium">Riwayat Transaksi</span>
      </nav>
    </div>

    <!-- Main Card -->
    <Card class="shadow-sm overflow-hidden">
      <CardContent>
        <!-- Filter Header -->
        <div
          class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <h2 class="text-base font-bold text-foreground whitespace-nowrap">
            Daftar Produk
          </h2>
          <div class="flex items-center gap-2 flex-wrap">
            <!-- Search -->
            <div class="relative">
              <Icon
                name="i-lucide-search"
                class="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground pointer-events-none"
              />
              <Input
                v-model="search"
                placeholder="Cari Nama Produk"
                class="pl-8 h-9 w-40 text-sm"
              />
            </div>

            <!-- Category Select -->
            <Select v-model="selectedCategory">
              <SelectTrigger class="h-9 w-36 text-sm">
                <SelectValue placeholder="Pilih Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Semua Kategori">
                  Semua Kategori
                </SelectItem>
                <SelectItem
                  v-for="cat in categories"
                  :key="cat"
                  :value="cat"
                >
                  {{ cat }}
                </SelectItem>
              </SelectContent>
            </Select>

            <!-- Status Select -->
            <Select v-model="selectedStatus">
              <SelectTrigger class="h-9 w-36 text-sm">
                <SelectValue placeholder="Pilih Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Semua Status">
                  Semua Status
                </SelectItem>
                <SelectItem
                  v-for="stat in statuses"
                  :key="stat"
                  :value="stat"
                >
                  {{ stat }}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>

      <div class="divide-y border-y">
        <div
          v-for="trx in filteredTransactions"
          :key="trx.id"
          class="px-6 py-4 flex items-center gap-4 hover:bg-muted/10 transition-colors"
        >
          <!-- Product Image -->
          <div
            class="shrink-0 rounded-xl overflow-hidden bg-muted"
            style="width: 72px; height: 72px; min-width: 72px"
          >
            <img
              :src="trx.image"
              :alt="trx.productName"
              style="width: 100%; height: 100%; object-fit: cover"
            >
          </div>

          <!-- Product Info -->
          <div class="flex-1 min-w-0">
            <p
              class="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5"
            >
              {{ trx.category }}
            </p>
            <p class="text-sm font-semibold text-foreground leading-snug">
              {{ trx.productName }}
            </p>
            <p class="text-xs text-muted-foreground mt-0.5">
              {{ trx.date }}
            </p>
            <p class="text-sm font-black text-foreground mt-1">
              {{ formatCurrency(trx.price) }}
            </p>
          </div>

          <!-- Status + Action -->
          <div
            class="flex flex-col items-end justify-between gap-3 shrink-0"
            style="min-width: 90px"
          >
            <!-- Status Badge -->
            <span
              class="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap"
              :style="getStatusBg(trx.status)"
            >
              {{ trx.status }}
            </span>

            <!-- Buy Again Button -->
            <Button
              variant="outline"
              class="h-8 px-4 text-xs font-bold border-border text-foreground hover:bg-[#1a4d2e] hover:text-white hover:border-[#1a4d2e] transition-colors"
            >
              Beli Lagi
            </Button>
          </div>
        </div>

        <!-- Empty State -->
        <div
          v-if="filteredTransactions.length === 0"
          class="py-16 flex flex-col items-center justify-center text-muted-foreground gap-3"
        >
          <Icon
            name="i-lucide-receipt-text"
            class="size-12 opacity-20"
          />
          <p class="text-sm">
            Tidak ada riwayat transaksi ditemukan.
          </p>
        </div>
      </div>

      <CardContent>
        <div
          class="flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <!-- Left: count + page arrows -->
          <div class="flex items-center gap-3 text-sm text-muted-foreground">
            <span>
              1–{{ filteredTransactions.length }} of {{ mockTransactions.length }}
            </span>
            <div class="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                class="size-7"
                disabled
              >
                <Icon
                  name="i-lucide-arrow-left"
                  class="size-3.5"
                />
              </Button>
              <Button
                size="icon"
                class="size-7 text-xs font-bold bg-[#1a4d2e] text-white hover:bg-[#1a4d2e]/90"
              >
                1
              </Button>
              <Button
                variant="ghost"
                size="icon"
                class="size-7"
                disabled
              >
                <Icon
                  name="i-lucide-arrow-right"
                  class="size-3.5"
                />
              </Button>
            </div>
          </div>

          <!-- Right: per page selector -->
          <div class="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Show</span>
            <Select v-model="perPage">
              <SelectTrigger class="h-7 w-14 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">
                  5
                </SelectItem>
                <SelectItem value="10">
                  10
                </SelectItem>
                <SelectItem value="20">
                  20
                </SelectItem>
              </SelectContent>
            </Select>
            <span>per page</span>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
