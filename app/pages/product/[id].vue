<script setup lang="ts">
import { mockProducts } from "@/mocks/product";

const route = useRoute();
const productId = route.params.id as string;

const product = computed(() => mockProducts.find((p) => p.id === productId));

const { t, locale } = useI18n();

useHead({
  title: computed(() => product.value?.name ?? t("product.detail")),
});

const activeImageIndex = ref(0);
const activeImage = computed(
  () =>
    product.value?.images?.[activeImageIndex.value] ??
    product.value?.image ??
    "",
);

function formatCurrency(value: number) {
  return new Intl.NumberFormat(locale.value === "id" ? "id-ID" : "en-US", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
}

const progress = 65;

// Slicing Features & History Mock Data
const features = [
  { label: "Bebas Pestisida", icon: "i-lucide-leaf" },
  { label: "Ramah Lingkungan", icon: "i-lucide-wind" },
  { label: "Sertifikasi Organik", icon: "i-lucide-check-circle" },
];

const productHistory = [
  {
    id: 1,
    type: "Panen",
    date: "2 Jan 2026, 10:00 WITA",
    farmer: "Pak Budi Santoso",
    description: "Hari panen terong..",
    icon: "i-lucide-sprout",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    dotColor: "bg-green-500",
  },
  {
    id: 2,
    type: "Perawatan",
    date: "2 Jan 2026, 10:00 WITA",
    farmer: "Pak Budi Santoso",
    description: "Pemberian pupuk kompos..",
    icon: "i-lucide-droplets",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    dotColor: "bg-blue-500",
  },
  {
    id: 3,
    type: "Penanduran",
    date: "2 Jan 2026, 10:00 WITA",
    farmer: "Pak Budi Santoso",
    description: "Pemindahan bibit dari..",
    icon: "i-lucide-wheat",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    dotColor: "bg-blue-500",
  },
];
</script>

<template>
  <div v-if="product" class="max-w-7xl mx-auto">
    <!-- Header Row -->
    <div class="flex items-center justify-between mb-6 lg:mb-10">
      <h1 class="text-lg font-bold text-foreground">
        {{ $t("product.detail") }}
      </h1>
      <nav
        class="flex items-center gap-2 text-[10px] md:text-sm text-muted-foreground uppercase tracking-widest font-bold"
      >
        <NuxtLink to="/product" class="hover:text-foreground transition-colors">
          {{ $t("nav.produk") }}
        </NuxtLink>
        <span class="text-muted-foreground/30">/</span>
        <span class="text-foreground">{{ $t("product.detail") }}</span>
      </nav>
    </div>

    <!-- Responsive Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start">
      <!-- ===== LEFT COLUMN: Gallery + Desc + History ===== -->
      <div class="lg:col-span-7 flex flex-col gap-8 md:gap-10">
        <!-- Gallery Section -->
        <div class="flex flex-col gap-2">
          <div
            class="relative rounded-3xl overflow-hidden aspect-video w-full bg-slate-100 shadow-sm group"
          >
            <img
              :src="activeImage"
              :alt="product.name"
              class="w-full h-full object-cover"
            />
            <!-- Badge -->
            <div
              class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase text-green-700 tracking-wider shadow-sm"
            >
              Produk Siap
            </div>
            <!-- Dots -->
            <div
              class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5"
            >
              <div
                v-for="(_, idx) in product.images"
                :key="idx"
                class="h-1.5 transition-all duration-300 rounded-full"
                :class="
                  activeImageIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/40'
                "
              />
            </div>
          </div>

          <!-- Thumbnails -->
          <div
            v-if="product.images && product.images.length > 1"
            class="flex gap-2 overflow-x-auto pb-2 scrollbar-none"
          >
            <button
              v-for="(img, idx) in product.images"
              :key="idx"
              class="shrink-0 size-20 rounded-2xl overflow-hidden border-2 transition-all p-0.5"
              :class="
                activeImageIndex === idx
                  ? 'border-primary ring-2 ring-primary/10 scale-95'
                  : 'border-transparent opacity-60 hover:opacity-100'
              "
              @click="activeImageIndex = idx"
            >
              <img
                :src="img"
                class="size-full object-cover rounded-xl"
                :alt="`Thumbnail ${idx + 1}`"
              />
            </button>
          </div>
        </div>

        <!-- Description Section (Desktop positioning) -->
        <div class="hidden lg:flex flex-col gap-10">
          <div class="flex flex-col gap-6">
            <div class="flex items-center gap-3">
              <div class="h-1 w-10 rounded-full bg-[#FFBC11] uppercase" />
              <h2 class="text-xl font-bold text-foreground">
                {{ $t("product.description") }}
              </h2>
            </div>
            <div class="space-y-4">
              <p
                class="text-muted-foreground leading-relaxed text-base font-medium"
              >
                {{ product.description }}
              </p>
            </div>

            <!-- Features -->
            <div class="flex flex-col gap-3 mt-4">
              <div
                v-for="feature in features"
                :key="feature.label"
                class="flex items-center gap-3 w-fit px-4 py-2 rounded-2xl bg-slate-50 border border-slate-100/50 group hover:border-primary/20 transition-colors"
              >
                <Icon :name="feature.icon" class="size-5 text-primary" />
                <span class="text-sm font-bold text-slate-700">{{
                  feature.label
                }}</span>
              </div>
            </div>
          </div>

          <!-- Timeline Section -->
          <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-1.5">
              <h2 class="text-xl font-bold text-foreground">Riwayat Produk</h2>
              <p class="text-sm text-muted-foreground font-medium">
                Transparansi penuh dari benih hingga ke tangan Anda
              </p>
            </div>

            <div class="relative pl-8 space-y-10">
              <!-- Timeline vertical line -->
              <div
                class="absolute left-[11px] top-2 bottom-6 w-0.5 bg-slate-200"
              />

              <div
                v-for="item in productHistory"
                :key="item.id"
                class="relative group"
              >
                <!-- Dot -->
                <div
                  class="absolute -left-[26px] top-1.5 size-2.5 rounded-full ring-4 ring-white shadow-sm"
                  :class="item.dotColor"
                />

                <Card
                  class="border-0 shadow-none bg-white lg:bg-slate-50/50 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300"
                >
                  <CardContent class="p-4 lg:p-6 flex flex-col gap-4">
                    <div class="flex items-center gap-4">
                      <div
                        class="size-12 lg:size-14 rounded-2xl flex items-center justify-center shrink-0"
                        :class="[item.iconBg]"
                      >
                        <Icon
                          :name="item.icon"
                          class="size-6 lg:size-7"
                          :class="[item.iconColor]"
                        />
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-base font-bold text-foreground">{{
                          item.type
                        }}</span>
                        <div
                          class="flex items-center gap-1.5 text-xs text-muted-foreground font-bold"
                        >
                          <Icon name="i-lucide-clock" class="size-3.5" />
                          {{ item.date }}
                        </div>
                      </div>
                    </div>

                    <div class="space-y-4">
                      <div
                        class="flex items-center gap-2 text-xs font-bold text-slate-600"
                      >
                        <Icon
                          name="i-lucide-map-pin"
                          class="size-3.5 text-primary"
                        />
                        {{ item.farmer }}
                      </div>
                      <p
                        class="text-sm text-muted-foreground font-medium line-clamp-2"
                      >
                        {{ item.description }}
                      </p>

                      <button
                        class="flex items-center gap-2 text-primary font-bold text-xs hover:gap-3 transition-all duration-300 group/btn uppercase tracking-wider"
                      >
                        Cek Keaslian Digital
                        <Icon
                          name="i-lucide-arrow-right"
                          class="size-3.5 transition-transform"
                        />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== RIGHT COLUMN: Info Area ===== -->
      <div class="lg:col-span-5 flex flex-col gap-2 lg:sticky lg:top-24">
        <!-- Badge & Rating Row -->
        <div class="flex items-center flex-wrap">
          <span
            class="text-xs font-semibold uppercase tracking-widest text-primary bg-[#ECFDF5] px-3 py-1.5 rounded-xl"
          >
            {{ product.category }} HIJAU
          </span>
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl">
            <Icon
              name="i-lucide-star"
              class="size-4 fill-[#FFBC11] text-[#FFBC11]"
            />
            <span class="text-sm font-semibold text-foreground">{{
              product.rating
            }}</span>
            <span
              class="text-[11px] font-bold text-muted-foreground/60 uppercase tracking-widest"
            >
              ({{ product.reviewsCount }} ulasan)
            </span>
          </div>
        </div>

        <!-- Title & Price -->
        <div class="flex flex-col">
          <h2
            class="text-3xl lg:text-4xl font-bold text-foreground leading-[1.1] tracking-tight"
          >
            {{ product.name }}
          </h2>
          <div class="flex items-baseline gap-2 mt-2">
            <span class="text-2xl font-bold text-primary">
              {{ formatCurrency(product.price) }}
            </span>
            <span class="text-muted-foreground text-sm tracking-widest"
              >/ {{ product.unit }}</span
            >
          </div>
        </div>

        <!-- 4-Card Stats Grid -->
        <div class="grid grid-cols-2 gap-2 mt-2">
          <!-- Stok -->
          <Card
            class="bg-[#FFF8E1] border-0 shadow-none rounded-xl overflow-hidden group"
          >
            <CardContent class="flex flex-col gap-1.5 relative overflow-hidden">
              <span
                class="text-[10px] font-bold uppercase tracking-widest text-[#8C6D1F]"
              >
                STOK TERSEDIA
              </span>
              <div class="flex items-center gap-2.5 z-10">
                <Icon
                  name="i-lucide-package-open"
                  class="size-5 text-[#8C6D1F]"
                />
                <span class="text-xs font-semibold text-[#8C6D1F]">
                  {{ product.stock }} Kg
                </span>
              </div>
              <Icon
                name="i-lucide-trending-up"
                class="absolute -right-2 -bottom-2 size-20 text-[#8C6D1F] opacity-[0.05] group-hover:scale-110 transition-transform"
              />
            </CardContent>
          </Card>

          <!-- Status -->
          <Card class="border-2 border-primary/10 shadow-none rounded-xl group">
            <CardContent class="flex flex-col gap-1.5 relative overflow-hidden">
              <span
                class="text-[10px] font-bold uppercase tracking-widest text-primary"
              >
                STATUS
              </span>
              <div class="flex items-center gap-2.5 z-10">
                <Icon
                  name="i-lucide-check-circle"
                  class="size-5 text-primary"
                />
                <span class="text-xs font-semibold text-primary">
                  {{ product.status }}
                </span>
              </div>
              <Icon
                name="i-lucide-award"
                class="absolute -right-2 -bottom-2 size-20 text-primary opacity-[0.05] group-hover:scale-110 transition-transform"
              />
            </CardContent>
          </Card>

          <!-- Kategori -->
          <Card class="border shadow-none rounded-xl group">
            <CardContent class="flex flex-col gap-1.5 relative overflow-hidden">
              <Icon
                name="i-lucide-layout-grid"
                class="size-4 text-muted-foreground opacity-50 mb-1"
              />
              <span
                class="text-[10px] font-bold uppercase tracking-widest text-muted-foreground"
              >
                KATEGORI
              </span>
              <span class="text-xs font-semibold text-foreground z-10">{{
                product.category
              }}</span>
            </CardContent>
          </Card>

          <!-- Lokasi -->
          <Card class="border shadow-none rounded-xl group">
            <CardContent class="flex flex-col gap-1.5 relative overflow-hidden">
              <Icon
                name="i-lucide-map-pin"
                class="size-4 text-[#FFBC11] opacity-60 mb-1"
              />
              <span
                class="text-[10px] font-bold uppercase tracking-widest text-muted-foreground"
              >
                LOKASI PRODUK
              </span>
              <span class="text-xs font-semibold text-foreground z-10">{{
                product.location
              }}</span>
            </CardContent>
          </Card>
        </div>

        <!-- Schedule Section -->
        <Card
          class="border shadow-none rounded-xl p-1 bg-slate-50/30 overflow-hidden"
        >
          <CardContent
            class="p-5 flex flex-col gap-6 bg-white rounded-[1.25rem]"
          >
            <div class="flex items-center gap-3">
              <div
                class="size-10 rounded-2xl bg-[#1a4d2e] flex items-center justify-center shrink-0 shadow-lg shadow-green-900/10"
              >
                <Icon name="i-lucide-calendar-days" class="size-5 text-white" />
              </div>
              <span
                class="text-[10px] font-bold uppercase tracking-widest text-muted-foreground"
              >
                JADWAL TANAM & PANEN
              </span>
            </div>

            <div class="flex items-end justify-between">
              <div class="flex flex-col gap-1">
                <span
                  class="text-[10px] text-muted-foreground uppercase font-bold opacity-50"
                >
                  Tanggal Tanam
                </span>
                <span
                  class="text-base font-bold text-foreground tracking-tight"
                >
                  {{ product.plantingDate }}
                </span>
              </div>
              <div class="flex flex-col items-end gap-1">
                <span
                  class="text-[10px] text-muted-foreground uppercase font-bold opacity-50 text-right"
                >
                  Estimasi Panen
                </span>
                <span
                  class="text-base font-bold text-primary tracking-tight text-right"
                >
                  {{ product.harvestDate }}
                </span>
              </div>
            </div>

            <!-- Progress -->
            <div class="space-y-4">
              <div class="h-3 bg-slate-100 rounded-full overflow-hidden p-0.5">
                <div
                  class="h-full bg-linear-to-r from-orange-400 to-[#FFBC11] rounded-full transition-all duration-700 shadow-[0_0_10px_rgba(255,188,17,0.3)]"
                  :style="{ width: `${progress}%` }"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Farmer Profile -->
        <Card
          class="border-2 border-slate-50 shadow-none rounded-xl bg-white group hover:border-primary/20 transition-all duration-300"
        >
          <CardContent
            class="p-4 lg:p-6 flex items-center justify-between gap-4"
          >
            <div class="flex items-center gap-4">
              <div class="relative shrink-0">
                <img
                  v-if="product.farmer"
                  :src="product.farmer.avatar"
                  :alt="product.farmer.name"
                  class="size-16 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform"
                />
                <div
                  class="absolute bottom-0 right-0 size-5 rounded-full bg-primary border-2 border-white flex items-center justify-center text-white"
                >
                  <Icon name="i-lucide-check-circle-2" class="size-3" />
                </div>
              </div>
              <div class="flex flex-col gap-0.5">
                <span
                  class="font-bold text-lg text-foreground tracking-tight leading-tight"
                >
                  {{ product.farmer?.name }}
                </span>
                <div
                  class="flex items-center gap-1.5 text-muted-foreground text-xs font-bold -mt-0.5"
                >
                  <Icon name="i-lucide-map-pin" class="size-3 text-[#FFBC11]" />
                  {{ product.farmer?.location }}
                </div>
                <div
                  class="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mt-2"
                >
                  ID Petani:
                  <span class="text-foreground font-bold">{{
                    product.farmer?.id
                  }}</span>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col items-end gap-1 shrink-0 px-4 py-2 bg-slate-50 rounded-2xl border border-slate-100 min-w-[80px]"
            >
              <div class="flex items-center gap-1">
                <span class="text-base font-bold text-primary">
                  {{ product.farmer?.points }}
                </span>
                <Icon name="i-lucide-leaf" class="size-4 text-primary" />
              </div>
              <span
                class="text-[8px] font-bold uppercase tracking-tighter text-muted-foreground opacity-60"
              >
                GREEN POINTS
              </span>
            </div>
          </CardContent>
        </Card>

        <!-- Mobile-only sections -->
        <div class="flex lg:hidden flex-col gap-2 lg:pt-4">
          <!-- Description Mobile -->
          <div
            class="flex flex-col gap-5 bg-white p-6 rounded-xl border border-slate-100/50"
          >
            <div class="flex items-center gap-3">
              <div class="h-1 w-10 rounded-full bg-[#FFBC11]" />
              <h2 class="text-2xl font-bold text-foreground tracking-tight">
                {{ $t("product.description") }}
              </h2>
            </div>
            <p
              class="text-muted-foreground leading-relaxed text-sm font-medium"
            >
              {{ product.description }}
            </p>
            <!-- Badge Features Mobile -->
            <div class="flex flex-col gap-3 mt-2">
              <div
                v-for="feature in features"
                :key="feature.label"
                class="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-100/30"
              >
                <Icon :name="feature.icon" class="size-5 text-primary" />
                <span
                  class="text-xs font-bold text-slate-700 uppercase tracking-widest"
                >
                  {{ feature.label }}
                </span>
              </div>
            </div>
          </div>

          <!-- Timeline Mobile -->
          <div class="flex flex-col gap-6 px-2">
            <div class="flex flex-col gap-1">
              <h2 class="text-xl font-bold text-foreground">Riwayat Produk</h2>
              <p
                class="text-xs text-muted-foreground font-medium uppercase tracking-widest opacity-60"
              >
                TRANSPARANSI PRODUK DARI HULU KE HILIR
              </p>
            </div>

            <div class="relative pl-6 space-y-6">
              <div
                class="absolute left-[9px] top-2 bottom-6 w-0.5 bg-slate-200"
              />
              <div
                v-for="item in productHistory"
                :key="item.id"
                class="relative group"
              >
                <div
                  class="absolute -left-[18px] top-1.5 size-2 rounded-full ring-4 ring-white shadow-sm"
                  :class="item.dotColor"
                />
                <Card class="border shadow-none bg-white rounded-2xl">
                  <CardContent class="p-4 flex flex-col gap-4">
                    <div class="flex items-center gap-4">
                      <div
                        class="size-12 rounded-2xl flex items-center justify-center shrink-0"
                        :class="[item.iconBg]"
                      >
                        <Icon
                          :name="item.icon"
                          class="size-6"
                          :class="[item.iconColor]"
                        />
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-base font-bold text-foreground">{{
                          item.type
                        }}</span>
                        <div
                          class="flex items-center gap-1.5 text-[10px] text-muted-foreground font-bold"
                        >
                          <Icon name="i-lucide-clock" class="size-3" />
                          {{ item.date }}
                        </div>
                      </div>
                    </div>
                    <div class="space-y-4">
                      <div
                        class="flex items-center gap-2 text-[10px] font-bold text-slate-600"
                      >
                        <Icon
                          name="i-lucide-user"
                          class="size-3 text-primary"
                        />
                        {{ item.farmer }}
                      </div>
                      <p class="text-xs text-muted-foreground font-medium">
                        {{ item.description }}
                      </p>
                      <button
                        class="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest"
                      >
                        Cek Keaslian Digital
                        <Icon name="i-lucide-arrow-right" class="size-3" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Not found -->
  <div v-else class="h-[60vh] flex flex-col items-center justify-center gap-4">
    <Icon name="i-lucide-package-x" class="size-16 text-muted-foreground/30" />
    <p class="text-lg font-semibold text-muted-foreground">
      {{ $t("product.not_found") }}
    </p>
    <Button variant="outline" as-child>
      <NuxtLink to="/product">
        {{ $t("product.list") }}
      </NuxtLink>
    </Button>
  </div>
</template>

<style scoped>
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
