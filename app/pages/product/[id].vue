<script setup lang="ts">
import { mockProducts } from "@/mocks/product"

const route = useRoute()
const productId = route.params.id as string

const product = computed(() => mockProducts.find(p => p.id === productId))

const activeImageIndex = ref(0)
const activeImage = computed(
  () =>
    product.value?.images?.[activeImageIndex.value]
    ?? product.value?.image
    ?? "",
)

function formatCurrency(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value)
}

const progress = 65
</script>

<template>
  <div v-if="product">
    <!-- Header Row -->
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-2xl font-bold text-foreground">
        Detail Produk
      </h1>
      <nav class="flex items-center gap-2 text-sm text-muted-foreground">
        <NuxtLink to="/product" class="hover:text-foreground transition-colors">
          Produk
        </NuxtLink>
        <span>/</span>
        <span class="text-foreground">Detail Produk</span>
      </nav>
    </div>

    <!-- Two-column layout -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- ===== LEFT COLUMN: Gallery + Description ===== -->
      <div class="flex flex-col gap-6">
        <!-- Main image -->
        <div class="rounded-2xl overflow-hidden aspect-4/3 w-full bg-muted">
          <img
            :src="activeImage"
            :alt="product.name"
            class="w-full h-full object-cover"
          >
        </div>

        <!-- Thumbnails -->
        <div
          v-if="product.images && product.images.length > 1"
          class="flex gap-3 overflow-x-auto pb-1"
        >
          <button
            v-for="(img, idx) in product.images"
            :key="idx"
            class="shrink-0 size-20 rounded-xl overflow-hidden border-2 transition-all focus:outline-none"
            :class="
              activeImageIndex === idx
                ? 'border-[#1a4d2e]'
                : 'border-border hover:border-muted-foreground/40'
            "
            @click="activeImageIndex = idx"
          >
            <img
              :src="img"
              class="size-full object-cover"
              :alt="`Thumbnail ${idx + 1}`"
            >
          </button>
        </div>

        <!-- Description Card -->
        <Card>
          <CardContent class="flex flex-col gap-4">
            <div class="flex items-center gap-3">
              <div class="h-1 w-10 rounded-full bg-[#FFBC11]" />
              <h2 class="text-xl font-bold text-foreground">
                Deskripsi Produk
              </h2>
            </div>
            <p class="text-muted-foreground leading-relaxed">
              {{ product.description }}
            </p>
          </CardContent>
        </Card>
      </div>

      <!-- ===== RIGHT COLUMN: Info ===== -->
      <div class="flex flex-col gap-5">
        <!-- Category tag + rating -->
        <div class="flex items-center gap-3 flex-wrap">
          <span class="text-xs font-bold uppercase tracking-widest text-[#1a4d2e] bg-[#E8F2EC] px-3 py-1 rounded-md">
            {{ product.category }} Hijau
          </span>
          <div class="flex items-center gap-1.5">
            <Icon
              name="i-lucide-star"
              class="size-4 fill-[#FFBC11] text-[#FFBC11]"
            />
            <span class="text-sm font-bold text-foreground">
              {{ product.rating }}
            </span>
            <span class="text-sm text-muted-foreground">
              ({{ product.reviewsCount }} Ulasan)
            </span>
          </div>
        </div>

        <!-- Product name -->
        <h2 class="text-4xl font-black text-foreground leading-tight -mt-1">
          {{ product.name }}
        </h2>

        <!-- Price -->
        <div class="flex items-baseline gap-2">
          <span class="text-3xl font-black text-[#1a4d2e]">
            {{ formatCurrency(product.price) }}
          </span>
          <span class="text-muted-foreground text-base font-medium">
            / {{ product.unit }}
          </span>
        </div>

        <!-- Stock + Status Cards (2-col grid) -->
        <div class="grid grid-cols-2 gap-3">
          <!-- Stock Card (yellow bg) -->
          <Card class="bg-[#FFF8E1] border-[#FFE082]">
            <CardContent class="flex flex-col gap-2">
              <span class="text-[10px] font-bold uppercase tracking-widest text-[#8C6D1F]">
                Stok Tersedia
              </span>
              <div class="flex items-center gap-2">
                <Icon
                  name="i-lucide-package-open"
                  class="size-5 text-[#8C6D1F]"
                />
                <span class="text-xl font-black text-[#8C6D1F]">
                  {{ product.stock }} Kg
                </span>
              </div>
            </CardContent>
          </Card>

          <!-- Status Card (green border) -->
          <Card class="border-[#1a4d2e]/30">
            <CardContent class="flex flex-col gap-2">
              <span class="text-[10px] font-bold uppercase tracking-widest text-[#1a4d2e]">
                Status
              </span>
              <div class="flex items-center gap-2">
                <Icon
                  name="i-lucide-check-circle"
                  class="size-5 text-[#1a4d2e]"
                />
                <span class="text-xl font-black text-[#1a4d2e]">
                  {{ product.status }}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <!-- Kategori + Lokasi Cards (2 separate Cards in a grid) -->
        <div class="grid grid-cols-2 gap-3">
          <Card>
            <CardContent class="flex flex-col gap-1">
              <Icon
                name="i-lucide-layout-grid"
                class="size-5 text-muted-foreground mb-1"
              />
              <span class="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Kategori
              </span>
              <span class="text-base font-black text-foreground">
                {{ product.category }}
              </span>
            </CardContent>
          </Card>

          <Card>
            <CardContent class="flex flex-col gap-1">
              <Icon
                name="i-lucide-map-pin"
                class="size-5 text-[#FFBC11] mb-1"
              />
              <span class="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Lokasi Produk
              </span>
              <span class="text-base font-black text-foreground">
                {{ product.location }}
              </span>
            </CardContent>
          </Card>
        </div>

        <!-- Jadwal Tanam & Panen Card -->
        <Card>
          <CardContent class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="size-10 rounded-xl bg-[#1a4d2e] flex items-center justify-center shrink-0">
                <Icon name="i-lucide-calendar-days" class="size-5 text-white" />
              </div>
              <span class="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Jadwal Tanam & Panen
              </span>
            </div>
            <div class="flex items-end justify-between">
              <div class="flex flex-col">
                <span class="text-[10px] text-muted-foreground">
                  Tanggal Tanam
                </span>
                <span class="text-base font-black text-foreground">
                  {{ product.plantingDate }}
                </span>
              </div>
              <div class="flex flex-col items-end">
                <span class="text-[10px] text-muted-foreground">
                  Estimasi Panen
                </span>
                <span class="text-base font-black text-[#1a4d2e]">
                  {{ product.harvestDate }}
                </span>
              </div>
            </div>
            <!-- Progress bar -->
            <div class="h-2.5 bg-muted rounded-full overflow-hidden">
              <div
                class="h-full bg-[#FFBC11] rounded-full transition-all duration-700"
                :style="{ width: `${progress}%` }"
              />
            </div>
          </CardContent>
        </Card>

        <!-- Farmer Card -->
        <Card v-if="product.farmer">
          <CardContent class="flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="relative shrink-0">
                <img
                  :src="product.farmer.avatar"
                  :alt="product.farmer.name"
                  class="size-14 rounded-full object-cover border-2 border-white shadow"
                >
                <div class="absolute -bottom-0.5 -right-0.5 size-4 rounded-full bg-[#1a4d2e] border-2 border-white flex items-center justify-center">
                  <Icon name="i-lucide-check" class="size-2.5 text-white" />
                </div>
              </div>
              <div class="flex flex-col gap-0.5">
                <span class="font-black text-base text-foreground">
                  {{ product.farmer.name }}
                </span>
                <div class="flex items-center gap-1 text-muted-foreground text-xs">
                  <Icon name="i-lucide-map-pin" class="size-3" />
                  {{ product.farmer.location }}
                </div>
                <span class="text-[10px] text-muted-foreground font-medium">
                  ID Petani:
                  <strong class="text-foreground">
                    {{ product.farmer.id }}
                  </strong>
                </span>
              </div>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <span class="text-xl font-black text-foreground">
                {{ product.farmer.points }}
              </span>
              <Icon name="i-lucide-leaf" class="size-5 text-[#1a4d2e]" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>

  <!-- Not found -->
  <div v-else class="h-[60vh] flex flex-col items-center justify-center gap-4">
    <Icon name="i-lucide-package-x" class="size-16 text-muted-foreground/30" />
    <p class="text-lg font-semibold text-muted-foreground">
      Produk tidak ditemukan
    </p>
    <Button variant="outline" as-child>
      <NuxtLink to="/product">
        Kembali ke Daftar Produk
      </NuxtLink>
    </Button>
  </div>
</template>
