<script setup lang="ts">
useHead({
  title: "Home",
});
</script>

<template>
  <div class="flex flex-col gap-8 lg:gap-10 pb-10">
    <!-- Greeting Section -->
    <div class="flex flex-col gap-1.5">
      <h2 class="text-2xl font-bold tracking-tight text-foreground">
        Selamat Pagi, Pak Budi 👋
      </h2>
      <p class="text-muted-foreground text-sm">
        Pantau aktivitas dan transaksi Anda dengan mudah
      </p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Green Points Card -->
      <div
        class="md:col-span-2 relative overflow-hidden flex flex-col gap-6 lg:gap-8 p-6 lg:p-8 bg-linear-to-br from-primary to-[#008236] rounded-2xl text-white shadow-xl shadow-primary/10"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <Icon name="i-lucide-leaf" class="size-6 text-white/90" />
            <span class="text-sm font-semibold text-white/90">
              Green Points Terkumpul
            </span>
          </div>
          <Icon name="i-lucide-info" class="size-5 text-white/40" />
        </div>

        <div class="flex flex-col gap-1">
          <div class="flex items-baseline gap-2">
            <span class="text-4xl font-bold tracking-tighter">8,420</span>
            <span class="text-lg font-medium text-white/80">poin</span>
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
              <span>Progres ke tingkat berikutnya</span>
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

      <!-- Total Transaksi Card -->
      <div class="flex flex-col gap-4">
        <div
          class="relative overflow-hidden flex flex-col h-full gap-6 p-6 lg:p-8 bg-[#ffeead] rounded-2xl border-yellow-200"
        >
          <p
            class="text-[10px] font-bold text-yellow-800 uppercase tracking-widest"
          >
            TOTAL TRANSAKSI
          </p>
          <div class="flex flex-col gap-3 z-10">
            <h3 class="text-3xl font-bold text-[#18402F]">Rp 42.5 Jt</h3>
            <div class="flex items-center gap-2">
              <Badge
                class="bg-white text-primary hover:bg-white border-0 font-bold px-2 py-0.5"
              >
                <Icon name="i-lucide-trending-up" class="size-3.5 mr-1" />
                +12.5%
              </Badge>
              <span
                class="text-[10px] font-bold text-yellow-800/60 uppercase tracking-wider"
              >
                dari bulan lalu
              </span>
            </div>
          </div>

          <!-- Banknote Illustration Background -->
          <div
            class="absolute -bottom-4 -right-4 opacity-[0.05] scale-150 rotate-[-10deg]"
          >
            <Icon name="i-lucide-banknote" class="size-32 text-yellow-900" />
          </div>
        </div>

        <div class="mt-auto flex gap-3">
          <Button
            class="grow bg-primary hover:bg-primary/90 text-white font-bold h-11"
          >
            <Icon name="i-lucide-message-circle" class="size-4 mr-2" />
            WhatsApp Bot
          </Button>
        </div>
      </div>

      <!-- Total Produk Card -->
      <div class="flex flex-col gap-4">
        <div
          class="relative overflow-hidden flex flex-col h-full gap-6 p-6 lg:p-8 bg-white rounded-2xl"
        >
          <p
            class="text-[10px] font-bold text-muted-foreground uppercase tracking-widest"
          >
            TOTAL PRODUK
          </p>
          <div class="flex flex-col gap-1 z-10">
            <h3 class="text-4xl font-bold text-foreground">1,248</h3>
            <div class="flex items-center gap-2 mt-2">
              <Icon name="i-lucide-package" class="size-4 text-primary" />
              <span
                class="text-[10px] font-bold text-muted-foreground uppercase tracking-wider"
              >
                Produk tersedia
              </span>
            </div>
          </div>

          <!-- Truck Illustration Background -->
          <div
            class="absolute -bottom-4 -right-4 opacity-[0.04] scale-150 rotate-[-5deg]"
          >
            <Icon name="i-lucide-truck" class="size-36 text-primary" />
          </div>
        </div>

        <div class="mt-auto z-10">
          <Button
            variant="outline"
            class="w-full font-bold h-11 transition-colors border-primary"
          >
            <Icon name="i-lucide-download" class="size-4 mr-2" />
            Download Report
          </Button>
        </div>
      </div>
    </div>

    <!-- Riwayat Terakhir -->
    <div class="flex flex-col gap-6">
      <h3 class="text-lg font-bold text-foreground tracking-tight">
        Riwayat Terakhir
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
              class="text-sm font-bold text-foreground group-hover:text-primary transition-colors"
            >
              Pembayaran Diterima
            </p>
            <p
              class="text-[10px] text-muted-foreground font-medium line-clamp-2 md:line-clamp-1 mt-0.5 whitespace-normal"
            >
              Saldo hasil penjualan dari Toko Berkah berhasil masuk. Dana akan
              diteruskan ke rekening terdaftar dalam 1x24 jam.
            </p>
          </div>
          <div class="flex flex-col items-end shrink-0 gap-1">
            <p class="text-[10px] font-bold text-muted-foreground/60 uppercase">
              5 Jam lalu
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
              class="text-sm font-bold text-foreground group-hover:text-primary transition-colors"
            >
              Kentang Organik berhasil diverifikasi
            </p>
            <p
              class="text-[10px] text-muted-foreground font-medium line-clamp-2 md:line-clamp-1 mt-0.5 whitespace-normal"
            >
              Data harian yang Anda kirim telah divalidasi oleh sistem.
              Sertifikat digital untuk produk Kentang Organik kini aktif.
            </p>
          </div>
          <div class="flex flex-col items-end shrink-0 gap-1">
            <p class="text-[10px] font-bold text-muted-foreground/60 uppercase">
              2 Jam lalu
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
              class="text-sm font-bold text-foreground group-hover:text-primary transition-colors"
            >
              Stok Menipis
            </p>
            <p
              class="text-[10px] text-muted-foreground font-medium line-clamp-2 md:line-clamp-1 mt-0.5 whitespace-normal"
            >
              Persediaan Pupuk B-Type di gudang Anda tersisa kurang dari 10%.
              Segera lakukan pengisian untuk menjaga jadwal tanam.
            </p>
          </div>
          <div class="flex flex-col items-end shrink-0 gap-1">
            <p
              class="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-wider"
            >
              Kemarin
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
