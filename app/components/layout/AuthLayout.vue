<script setup lang="ts">
import { Icons } from "~/components/atoms/icons";

defineProps<{
  reverse?: boolean;
}>();
</script>

<template>
  <div class="grid h-screen overflow-hidden lg:grid-cols-2">
    <!-- Left: Branding Side -->
    <div
      class="relative hidden h-full flex-col justify-center p-12 text-white lg:flex lg:p-20"
    >
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <img
          src="/assets/images/auth-background.webp"
          alt="Auth Background"
          class="size-full object-cover"
        />
        <!-- <div class="absolute inset-0 bg-primary/80" /> -->
      </div>

      <!-- Content -->
      <div class="relative z-10 flex flex-col gap-8">
        <div class="flex items-center gap-2">
          <Icons.logo class="size-8 text-white" />
          <span class="text-2xl font-semibold tracking-tight">NurTani</span>
        </div>

        <div class="space-y-6 max-w-xl">
          <h1 class="text-6xl font-serif leading-[1.1] font-semibold">
            Hulu Sehat,<br />
            <span class="italic text-secondary"> Hilir Bahagia </span>
          </h1>
          <p class="text-lg text-white/90 leading-relaxed font-light">
            NurTani menjaga keaslian proses produksi sampai konsumsi secara
            terbuka agar alam kita tetap terjaga untuk kebahagiaan selanjutnya.
          </p>
        </div>
      </div>
    </div>

    <!-- Right: Form Side -->
    <div
      class="flex h-full items-center justify-center p-8 bg-background-secondary overflow-y-auto lg:py-20 lg:px-0 no-scrollbar"
    >
      <div class="w-full max-w-lg my-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
