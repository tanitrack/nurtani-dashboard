<script setup lang="ts">
useHead({
  title: useI18n().t("nav.beranda"),
});
</script>

<template>
  <div class="flex flex-col gap-8 lg:gap-10 pb-10">
    <!-- Greeting Section -->
    <div class="flex flex-col gap-1.5 px-1">
      <h2
        class="text-xl font-bold tracking-tight text-foreground flex items-center gap-2"
      >
        {{ $t("home.greeting", { name: "Pak Budi" }) }} 👋🏻
      </h2>
      <p class="text-muted-foreground text-xs">
        {{ $t("home.sub_greeting") }}
      </p>
    </div>

    <!-- Stats Section -->
    <div class="flex flex-col lg:grid lg:grid-cols-12 gap-5 lg:gap-6">
      <!-- Green Points Card -->
      <div
        class="relative lg:col-span-7 overflow-hidden flex flex-col gap-4 lg:gap-8 p-6 lg:p-8 bg-linear-to-br from-primary to-[#008236] rounded-2xl text-white shadow-xl shadow-primary/10"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <Icon name="i-lucide-leaf" class="size-6 text-white/90" />
            <span class="text-sm font-semibold text-white/90">
              {{ $t("profile.green_points") }}
            </span>
          </div>
          <Icon name="i-lucide-info" class="size-5 text-white/40" />
        </div>

        <div class="flex flex-col gap-1">
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-bold tracking-tighter">8,420</span>
            <span class="text-base font-medium text-white/80">{{
              $t("profile.point")
            }}</span>
          </div>
        </div>

        <div class="mt-auto space-y-4">
          <div class="flex flex-col gap-1.5">
            <p class="text-xs font-semibold text-white/90">
              Level 4: Pelopor Keberlanjutan
            </p>
            <div
              class="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-white/60"
            >
              <span>{{ $t("profile.progress_next") }}</span>
              <span>84%</span>
            </div>
          </div>
          <div class="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              class="h-full bg-white/90 rounded-full transition-all duration-500"
              style="width: 84%"
            />
          </div>
        </div>
      </div>

      <!-- Right Column (Small Stats & Actions) -->
      <div class="flex flex-col lg:col-span-5 gap-5 lg:gap-4 h-full">
        <!-- Small Stats Grid -->
        <div class="grid grid-cols-2 gap-4 grow">
          <!-- Total Transaksi Card -->
          <div
            class="relative overflow-hidden flex flex-col gap-4 p-5 bg-[#ffeead] rounded-2xl border border-yellow-200/50"
          >
            <p
              class="text-[10px] font-bold text-yellow-800 uppercase tracking-widest"
            >
              {{ $t("home.total_transaction") }}
            </p>
            <div class="flex flex-col gap-2 z-10">
              <h3 class="text-xl font-bold text-[#18402F]">Rp 42.5 Jt</h3>
              <div class="flex items-center flex-wrap gap-1">
                <Badge
                  class="bg-white text-primary hover:bg-white border-0 font-bold px-1.5 py-0.5 text-[9px]"
                >
                  <Icon name="i-lucide-trending-up" class="size-3 mr-1" />
                  +12.5%
                </Badge>
                <span
                  class="text-[9px] font-bold text-yellow-800/60 uppercase tracking-wider"
                >
                  {{ $t("home.from_last_month") }}
                </span>
              </div>
            </div>
            <!-- Banknote Illustration Background -->
            <div
              class="absolute -bottom-2 -right-2 opacity-[0.05] scale-125 rotate-[-10deg]"
            >
              <Icon name="i-lucide-banknote" class="size-24 text-yellow-900" />
            </div>
          </div>

          <!-- Total Produk Card -->
          <div
            class="relative overflow-hidden flex flex-col gap-4 p-5 bg-white rounded-2xl border border-border/50"
          >
            <p
              class="text-[10px] font-bold text-muted-foreground uppercase tracking-widest"
            >
              {{ $t("home.total_product") }}
            </p>
            <div class="flex flex-col gap-1 z-10">
              <h3 class="text-2xl font-bold text-foreground">1,248</h3>
              <div class="flex items-center gap-2 mt-1">
                <Icon
                  name="i-lucide-truck"
                  class="size-3.5 text-muted-foreground/40"
                />
                <span
                  class="text-[10px] font-bold text-muted-foreground uppercase tracking-wider"
                >
                  {{ $t("home.products_available") }}
                </span>
              </div>
            </div>
            <!-- Truck Illustration Background -->
            <div
              class="absolute -bottom-2 -right-2 opacity-[0.04] scale-125 rotate-[-5deg]"
            >
              <Icon name="i-lucide-truck" class="size-24 text-primary" />
            </div>
          </div>
        </div>

        <!-- Action Buttons Row -->
        <div class="grid grid-cols-2 gap-4">
          <Button
            class="bg-[#1a4d2e] hover:bg-[#1a4d2e]/90 text-white font-bold h-12 rounded-xl"
          >
            <Icon name="i-lucide-message-circle" class="size-5 mr-2" />
            WhatsApp Bot
          </Button>
          <Button
            variant="outline"
            class="font-bold h-12 transition-colors border-primary text-primary rounded-xl"
          >
            <Icon name="i-lucide-download" class="size-5 mr-2" />
            {{ $t("home.download_report") }}
          </Button>
        </div>
      </div>
    </div>

    <!-- Riwayat Terakhir -->
    <div class="flex flex-col gap-6">
      <h3 class="text-base font-bold text-foreground tracking-tight">
        {{ $t("home.recent_history") }}
      </h3>

      <div class="grid border rounded-2xl p-2 lg:p-3 bg-white">
        <!-- Item 1: Pembayaran -->
        <div
          class="flex items-center gap-4 lg:gap-6 p-4 lg:p-5 hover:border-primary/20 transition-all cursor-pointer group border-b last:border-b-0"
        >
          <div
            class="size-10 lg:size-12 bg-blue-50 flex items-center justify-center shrink-0"
          >
            <Icon name="i-lucide-wallet" class="size-6 text-blue-500" />
          </div>
          <div class="flex flex-col flex-1 min-w-0">
            <p
              class="text-xs font-bold text-foreground group-hover:text-primary transition-colors"
            >
              {{ $t("home.history_payment_title") }}
            </p>
            <p
              class="text-[10px] text-muted-foreground font-medium line-clamp-2 md:line-clamp-1 mt-0.5 whitespace-normal"
            >
              {{ $t("home.history_payment_desc") }}
            </p>
          </div>
          <div class="flex flex-col items-end shrink-0 gap-1">
            <p class="text-[10px] font-bold text-muted-foreground/60 uppercase">
              {{ $t("home.hours_ago", { n: 5 }) }}
            </p>
            <p class="text-xs font-bold text-foreground">Rp 2.5 Juta</p>
          </div>
        </div>

        <!-- Item 2: Verifikasi -->
        <div
          class="flex items-center gap-4 lg:gap-6 p-4 lg:p-5 hover:border-primary/20 transition-all cursor-pointer group border-b last:border-b-0"
        >
          <div
            class="size-10 lg:size-12 bg-green-50 flex items-center justify-center shrink-0"
          >
            <Icon name="i-lucide-check-circle" class="size-6 text-green-500" />
          </div>
          <div class="flex flex-col flex-1 min-w-0">
            <p
              class="text-xs font-bold text-foreground group-hover:text-primary transition-colors"
            >
              {{ $t("home.history_verify_title") }}
            </p>
            <p
              class="text-[10px] text-muted-foreground font-medium line-clamp-2 md:line-clamp-1 mt-0.5 whitespace-normal"
            >
              {{ $t("home.history_verify_desc") }}
            </p>
          </div>
          <div class="flex flex-col items-end shrink-0 gap-1">
            <p class="text-[10px] font-bold text-muted-foreground/60 uppercase">
              {{ $t("home.hours_ago", { n: 2 }) }}
            </p>
            <p class="text-xs font-bold text-primary">+150 poin</p>
          </div>
        </div>

        <!-- Item 3: Stok -->
        <div
          class="flex items-center gap-4 lg:gap-6 p-4 lg:p-5 hover:border-primary/20 transition-all cursor-pointer group"
        >
          <div
            class="size-10 lg:size-12 bg-orange-50 flex items-center justify-center shrink-0"
          >
            <Icon
              name="i-lucide-alert-triangle"
              class="size-6 text-orange-500"
            />
          </div>
          <div class="flex flex-col flex-1 min-w-0">
            <p
              class="text-xs font-bold text-foreground group-hover:text-primary transition-colors"
            >
              {{ $t("home.history_stock_title") }}
            </p>
            <p
              class="text-[10px] text-muted-foreground font-medium line-clamp-2 md:line-clamp-1 mt-0.5 whitespace-normal"
            >
              {{ $t("home.history_stock_desc") }}
            </p>
          </div>
          <div class="flex flex-col items-end shrink-0 gap-1">
            <p
              class="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-wider"
            >
              {{ $t("home.yesterday") }}
            </p>
            <Icon
              name="i-lucide-chevron-right"
              class="size-4 text-muted-foreground/40 group-hover:text-primary transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
