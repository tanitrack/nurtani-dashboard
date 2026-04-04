<script setup lang="ts">
const router = useRouter()
const { locale, locales, setLocale, t } = useI18n()

definePageMeta({
  layout: "blank",
})

useHead({
  title: t('auth.register'),
})
</script>

<template>
  <AuthLayout>
    <div class="flex flex-col gap-10">
      <!-- Header -->
      <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-bold tracking-tight text-foreground">
          {{ $t('auth.registration_form') }}
        </h2>
        <p class="text-muted-foreground text-sm leading-relaxed">
          {{ $t('auth.registration_subtitle') }}
        </p>
      </div>

      <!-- Form -->
      <form class="grid gap-5" @submit.prevent="router.push('/login')">
        <!-- Name Field -->
        <Field name="fullName">
          <Label> {{ $t('auth.full_name') }} <span class="text-destructive">*</span> </Label>
          <Input
            :placeholder="$t('auth.full_name_placeholder')"
            class="mt-1.5 rounded-lg h-11 focus-visible:ring-primary/20"
          />
        </Field>

        <!-- Contact Info (2 columns) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field name="whatsapp">
            <Label>
              {{ $t('auth.whatsapp_number') }} <span class="text-destructive">*</span>
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
            <Label> {{ $t('auth.email_optional') }} </Label>
            <Input
              type="email"
              placeholder="nama@email.com"
              class="mt-1.5 rounded-lg h-11 focus-visible:ring-primary/20"
            />
          </Field>
        </div>

        <!-- Address Field -->
        <Field name="address">
          <Label> {{ $t('auth.address_main') }} <span class="text-destructive">*</span> </Label>
          <Input
            :placeholder="$t('auth.address_placeholder')"
            class="mt-1.5 rounded-lg h-11 focus-visible:ring-primary/20"
          />
        </Field>

        <!-- Profile Photo -->
        <div class="flex flex-col gap-1.5">
          <Label class="text-sm font-semibold block"> {{ $t('auth.profile_photo') }} </Label>
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
                {{ $t('auth.click_to_upload') }}
              </p>
              <p
                class="text-[10px] text-muted-foreground uppercase tracking-wider mt-1 font-medium italic"
              >
                {{ $t('auth.upload_hint') }}
              </p>
            </div>
            <input type="file" class="hidden" accept="image/*">
          </div>
        </div>

        <Button
          size="lg"
          class="w-full bg-primary hover:bg-primary/90 text-white rounded-lg h-12 font-bold flex items-center justify-center gap-2 mt-2"
        >
          {{ $t('auth.complete_registration') }}
          <Icon name="i-lucide-arrow-right" class="size-5" />
        </Button>

        <!-- Footer -->
        <div class="flex flex-col gap-6">
          <p
            class="text-center text-[10px] text-muted-foreground/80 leading-relaxed max-w-sm mx-auto"
          >
            {{ $t('auth.agree_prefix') }}
            <NuxtLink to="#" class="text-foreground font-semibold hover:underline">
              {{ $t('auth.terms') }}
            </NuxtLink>
            {{ $t('auth.agree_conjunction') }}
            <NuxtLink to="#" class="text-foreground font-semibold hover:underline">
              {{ $t('auth.privacy') }}
            </NuxtLink>
            {{ $t('auth.agree_suffix') }}
          </p>

          <Separator />

          <div class="flex justify-center gap-4">
            <button
              v-for="l in (locales as any)"
              :key="l.code"
              type="button"
              class="text-xs font-bold transition-colors hover:text-primary"
              :class="locale === l.code ? 'text-primary underline' : 'text-muted-foreground'"
              @click="setLocale(l.code)"
            >
              {{ l.name }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </AuthLayout>
</template>

<style scoped></style>
