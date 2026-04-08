<script setup lang="ts">
const profile = {
  name: "Pak Budi",
  location: "Lembang, Jawa Barat",
  avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200",
  points: 8420,
  level: "Level 4: Pelopor Keberlanjutan",
  progress: 84,
  fullName: "Pak Budi Santoso",
  whatsapp: "+62 812-3456- 7890",
  email: "budi.santoso@farm.id",
  address: "Jl. Raya Maribaya No. 12, Lembang",
};

function formatPoints(value: number) {
  const { locale } = useI18n();
  return new Intl.NumberFormat(
    locale.value === "id" ? "id-ID" : "en-US",
  ).format(value);
}

useHead({
  title: useI18n().t("nav.profil"),
});
</script>

<template>
  <div class="space-y-6 pb-10">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold text-foreground">
        {{ $t("profile.detail") }}
      </h1>
      <nav class="flex items-center gap-1.5 text-sm text-muted-foreground">
        <span>{{ $t("nav.profil") }}</span>
        <span>/</span>
        <span class="text-foreground font-medium">{{
          $t("profile.detail")
        }}</span>
      </nav>
    </div>

    <!-- Top Section: Left (Profile + Green Points) + Right (Personal Info) -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      <!-- ─── LEFT COLUMN ─── -->
      <div class="space-y-4">
        <!-- Profile Identity (no Card wrapper — matches Figma bare layout) -->
        <div class="flex items-center gap-4 px-1 py-2">
          <!-- Circular avatar with badge -->
          <div class="relative shrink-0">
            <div class="size-20 rounded-full overflow-hidden ring-4 ring-white">
              <img
                :src="profile.avatar"
                :alt="profile.name"
                class="size-full object-cover"
              />
            </div>
            <!-- Green verified badge -->
            <div
              class="absolute bottom-0 right-0 size-5 rounded-full bg-primary flex items-center justify-center ring-2 ring-white"
            >
              <Icon name="i-lucide-check" class="size-2.5 text-white" />
            </div>
          </div>

          <!-- Name + Location -->
          <div>
            <h2 class="text-xl font-bold text-primary leading-tight">
              {{ profile.name }}
            </h2>
            <div
              class="flex items-center gap-1 text-sm text-muted-foreground mt-1"
            >
              <Icon name="i-lucide-map-pin" class="size-3.5 shrink-0" />
              <span>{{ profile.location }}</span>
            </div>
          </div>
        </div>

        <!-- Green Points Card — matching homepage gradient style -->
        <div
          class="relative overflow-hidden flex flex-col gap-6 p-6 lg:p-8 bg-linear-to-br from-primary to-[#008236] rounded-2xl text-white"
        >
          <!-- Card Header -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <Icon name="i-lucide-leaf" class="size-5 text-white/90" />
              <span class="text-sm font-semibold text-white/90">
                {{ $t("profile.green_points") }}
              </span>
            </div>
            <Icon name="i-lucide-info" class="size-5 text-white/40" />
          </div>

          <!-- Points -->
          <div class="flex items-baseline gap-2">
            <span class="text-4xl font-bold tracking-tighter">
              {{ formatPoints(profile.points) }}
            </span>
            <span class="text-lg font-medium text-white/80">{{
              $t("profile.point")
            }}</span>
          </div>

          <!-- Level + Progress -->
          <div class="mt-auto space-y-4">
            <div class="flex flex-col gap-1.5">
              <p class="text-xs font-semibold text-white/90">
                {{ profile.level }}
              </p>
              <div
                class="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-white/60"
              >
                <span>{{ $t("profile.progress_next") }}</span>
                <span>{{ profile.progress }}%</span>
              </div>
            </div>
            <div class="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                class="h-full bg-white/90 rounded-full transition-all duration-500"
                :style="{ width: `${profile.progress}%` }"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- ─── RIGHT COLUMN: Personal Information ─── -->
      <Card class="h-full">
        <CardContent class="">
          <!-- Section title -->
          <div class="mb-8">
            <h3 class="text-lg font-bold text-foreground">
              {{ $t("profile.personal_info") }}
            </h3>
            <p class="text-sm text-muted-foreground mt-0.5">
              {{ $t("profile.keep_updated") }}
            </p>
          </div>

          <Separator class="mb-10" />

          <!-- 2×2 Info Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <!-- Full Name -->
            <div class="flex items-start gap-4">
              <div
                class="size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"
              >
                <Icon name="i-lucide-user" class="size-5 text-primary" />
              </div>
              <div class="flex flex-col gap-1 mt-0.5">
                <p
                  class="text-[10px] font-bold uppercase tracking-widest text-muted-foreground leading-none"
                >
                  {{ $t("profile.full_name") }}
                </p>
                <span
                  class="text-sm font-semibold text-foreground leading-tight"
                >
                  {{ profile.fullName }}
                </span>
              </div>
            </div>

            <!-- WhatsApp -->
            <div class="flex items-start gap-4">
              <div
                class="size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"
              >
                <Icon
                  name="i-lucide-message-square"
                  class="size-5 text-primary"
                />
              </div>
              <div class="flex flex-col gap-1 mt-0.5">
                <p
                  class="text-[10px] font-bold uppercase tracking-widest text-muted-foreground leading-none"
                >
                  {{ $t("profile.whatsapp") }}
                </p>
                <span
                  class="text-sm font-semibold text-foreground leading-tight"
                >
                  {{ profile.whatsapp }}
                </span>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start gap-4">
              <div
                class="size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"
              >
                <Icon name="i-lucide-mail" class="size-5 text-primary" />
              </div>
              <div class="flex flex-col gap-1 mt-0.5">
                <p
                  class="text-[10px] font-bold uppercase tracking-widest text-muted-foreground leading-none"
                >
                  {{ $t("profile.email") }}
                </p>
                <span
                  class="text-sm font-semibold text-foreground leading-tight"
                >
                  {{ profile.email }}
                </span>
              </div>
            </div>

            <!-- Primary Farm Address -->
            <div class="flex items-start gap-4">
              <div
                class="size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"
              >
                <Icon name="i-lucide-map" class="size-5 text-primary" />
              </div>
              <div class="flex flex-col gap-1 mt-0.5">
                <p
                  class="text-[10px] font-bold uppercase tracking-widest text-muted-foreground leading-none"
                >
                  {{ $t("profile.farm_address") }}
                </p>
                <span
                  class="text-sm font-semibold text-foreground leading-snug"
                >
                  {{ profile.address }}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- ─── Local Network CTA Banner ─── -->
    <div
      class="relative rounded-2xl overflow-hidden bg-[#FFFDF5] border border-border/40 flex"
      style="min-height: 160px"
    >
      <!-- CTA Text Content -->
      <div
        class="relative z-10 flex flex-col justify-center gap-3 p-8 lg:p-10 flex-1 max-w-[450px] shrink-0"
      >
        <p class="text-[10px] font-bold uppercase tracking-widest text-primary">
          {{ $t("profile.regional_connection") }}
        </p>
        <div>
          <h3 class="text-2xl font-black text-foreground leading-tight">
            {{ $t("profile.local_network") }}
          </h3>
          <p class="text-sm text-muted-foreground mt-1">
            {{ $t("profile.expand_network") }}
          </p>
        </div>
        <div class="mt-1">
          <Button
            variant="outline"
            class="rounded-full bg-white border-border text-foreground font-semibold hover:bg-muted text-xs h-9 px-6"
          >
            {{ $t("profile.contact_us") }}
          </Button>
        </div>
      </div>

      <!-- Map Graphic (fills the right side) -->
      <div class="absolute inset-0 z-0">
        <img
          src="/assets/images/cta-background.webp"
          alt=""
          class="size-full object-cover object-left opacity-50 md:opacity-100"
          aria-hidden="true"
        />
      </div>
    </div>
  </div>
</template>
