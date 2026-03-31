<script setup lang="ts">
const router = useRouter();

definePageMeta({
  layout: "blank",
});
</script>

<template>
  <AuthLayout>
    <div class="flex flex-col gap-10">
      <!-- Header -->
      <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-bold tracking-tight text-foreground">
          Selamat Datang Kembali
        </h2>
        <p class="text-muted-foreground text-sm">
          Silakan masukkan data Anda untuk masuk.
        </p>
      </div>

      <!-- Form -->
      <form @submit.prevent="router.push('/')" class="grid gap-6">
        <!-- WhatsApp Field -->
        <Field name="whatsapp">
          <Label>
            Nomor WhatsApp <span class="text-destructive">*</span>
          </Label>
          <div
            class="relative flex items-center mt-1.5 focus-within:ring-2 focus-within:ring-primary/20 rounded-lg border border-input px-3 py-2 transition-all"
          >
            <span class="text-muted-foreground font-medium border-r pr-3 mr-3"
              >+62</span
            >
            <Input
              type="tel"
              placeholder="812 3456 7890"
              class="border-0 p-0 h-auto focus-visible:ring-0 shadow-none text-base"
            />
          </div>
        </Field>

        <!-- OTP Field -->
        <Field name="otp">
          <div class="flex items-center justify-between">
            <Label>
              Kode OTP 6 Digit <span class="text-destructive">*</span>
            </Label>
            <NuxtLink
              to="#"
              class="text-primary text-xs font-medium hover:underline"
            >
              Kirim Ulang Kode
            </NuxtLink>
          </div>
          <div class="mt-1.5 flex justify-between gap-2">
            <PinInput
              id="pin-input"
              :model-value="[]"
              placeholder="○"
              class="flex justify-between w-full h-12"
            >
              <PinInputGroup class="w-full justify-between gap-1 sm:gap-2">
                <PinInputSlot
                  v-for="(id, index) in 6"
                  :key="id"
                  :index="index"
                  class="size-10 sm:size-12 rounded-lg border-input bg-white text-lg font-semibold"
                />
              </PinInputGroup>
            </PinInput>
          </div>
        </Field>

        <!-- Security Info -->
        <div
          class="flex items-start gap-2 text-xs text-muted-foreground/80 leading-snug"
        >
          <Icon name="i-lucide-lock" class="size-3.5 mt-0.5 shrink-0" />
          <p>OTP terenkripsi dengan aman untuk melindungi akun Anda.</p>
        </div>

        <!-- Submit Button -->
        <Button
          size="lg"
          class="w-full bg-primary hover:bg-primary/90 text-white rounded-lg h-12 font-bold flex items-center justify-center gap-2"
        >
          Masuk ke Dashboard
          <Icon name="i-lucide-arrow-right" class="size-5" />
        </Button>

        <!-- Footer -->
        <p class="text-center text-sm text-muted-foreground mt-2">
          Belum punya akun?
          <NuxtLink
            to="/register"
            class="text-primary font-bold hover:underline ml-1"
          >
            Daftar
          </NuxtLink>
        </p>
      </form>
    </div>
  </AuthLayout>
</template>
