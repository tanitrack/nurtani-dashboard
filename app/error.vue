<script setup>
const { theme } = useAppSettings()

useHead({
  bodyAttrs: {
    class: computed(() => `color-${theme.value?.color || 'default'} theme-${theme.value?.type || 'default'}`),
  },
})

const router = useRouter()
</script>

<template>
  <div class="h-svh">
    <div class="m-auto h-full w-full flex flex-col items-center justify-center gap-2">
      <h1 class="text-[7rem] font-bold leading-tight">
        404
      </h1>
      <span class="font-medium">{{ $t('error.oops') }}</span>
      <p class="text-center text-muted-foreground" v-html="$t('error.not_exist')">
      </p>
      <div class="mt-6 flex gap-4">
        <Button variant="outline" @click="router.back()">
          {{ $t('error.go_back') }}
        </Button>
        <Button @click="router.push('/')">
          {{ $t('error.go_home') }}
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
