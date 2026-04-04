<script setup lang="ts">
const router = useRouter()

definePageMeta({
  layout: "blank",
})
</script>

<template>
  <AuthLayout>
    <div class="flex flex-col gap-10">
      <!-- Header -->
      <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-bold tracking-tight text-foreground">
          Form Registrasi
        </h2>
        <p class="text-muted-foreground text-sm leading-relaxed">
          Isi data berikut untuk memulai perjalanan Anda bersama NurTani.
        </p>
      </div>

      <!-- Form -->
      <form class="grid gap-5" @submit.prevent="router.push('/login')">
        <!-- Name Field -->
        <Field name="fullName">
          <Label> Nama Lengkap <span class="text-destructive">*</span> </Label>
          <Input
            placeholder="contoh: Ahmad Suherman"
            class="mt-1.5 rounded-lg h-11 focus-visible:ring-primary/20"
          />
        </Field>

        <!-- Contact Info (2 columns) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field name="whatsapp">
            <Label>
              Nomor WhatsApp <span class="text-destructive">*</span>
            </Label>
            <div
              class="relative flex items-center mt-1.5 rounded-lg border border-input px-3 py-2 focus-within:ring-2 focus-within:ring-primary/20 transition-all"
            >
              <span
                class="text-muted-foreground font-medium border-r pr-3 mr-3 segment-border"
              >+62</span>
              <Input
                type="tel"
                placeholder="812 3456 7890"
                class="border-0 p-0 h-auto focus-visible:ring-0 shadow-none text-base"
              />
            </div>
          </Field>

          <Field name="email">
            <Label> Email (Opsional) </Label>
            <Input
              type="email"
              placeholder="nama@email.com"
              class="mt-1.5 rounded-lg h-11 focus-visible:ring-primary/20"
            />
          </Field>
        </div>

        <!-- Address Field -->
        <Field name="address">
          <Label> Alamat Utama <span class="text-destructive">*</span> </Label>
          <Input
            placeholder="Nama jalan, desa, kecamatan, provinsi..."
            class="mt-1.5 rounded-lg h-11 focus-visible:ring-primary/20"
          />
        </Field>

        <!-- Profile Photo -->
        <div class="flex flex-col gap-1.5">
          <Label class="text-sm font-semibold block"> Foto Profil </Label>
          <div
            class="border-2 border-dashed border-input rounded-xl p-8 flex flex-col items-center justify-center gap-3 bg-muted/5 hover:bg-muted/10 transition-colors cursor-pointer group"
          >
            <div
              class="size-12 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors"
            >
              <Icon
                name="i-lucide-user"
                class="size-6 text-muted-foreground/60"
              />
            </div>
            <div class="text-center">
              <p class="text-sm font-bold text-foreground">
                Klik untuk mengunggah foto
              </p>
              <p
                class="text-[10px] text-muted-foreground uppercase tracking-wider mt-1 font-medium italic"
              >
                JPG, PNG hingga 5MB
              </p>
            </div>
            <input type="file" class="hidden" accept="image/*">
          </div>
        </div>

        <!-- Submit Button -->
        <Button
          size="lg"
          class="w-full bg-primary hover:bg-primary/90 text-white rounded-lg h-12 font-bold flex items-center justify-center gap-2 mt-2"
        >
          Selesaikan Pendaftaran
          <Icon name="i-lucide-arrow-right" class="size-5" />
        </Button>

        <!-- Footer -->
        <p
          class="text-center text-[10px] text-muted-foreground/80 leading-relaxed max-w-sm mx-auto"
        >
          Dengan mendaftar, Anda menyetujui
          <NuxtLink to="#" class="text-foreground font-semibold hover:underline">
            Syarat & Ketentuan
          </NuxtLink>
          serta
          <NuxtLink to="#" class="text-foreground font-semibold hover:underline">
            Kebijakan Privasi
          </NuxtLink>
          kami.
        </p>
      </form>
    </div>
  </AuthLayout>
</template>

<style scoped></style>
