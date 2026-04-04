<script setup lang="ts">
const route = useRoute()

const { locale, locales, setLocale, t } = useI18n()

function setLinks() {
  const path = route?.fullPath || "/"
  if (path === "/") {
    return [{ title: t('nav.beranda'), href: "/" }]
  }

  const segments = path.split("/").filter(item => item !== "")

  const breadcrumbs = segments.map((item, index) => {
    const str = item.replace(/-/g, " ")
    const title = str
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ")

    return {
      title,
      href: `/${segments.slice(0, index + 1).join("/")}`,
    }
  })

  return [{ title: t('nav.beranda'), href: "/" }, ...breadcrumbs]
}

const links = ref<
  {
    title: string
    href: string
  }[]
>([])

onMounted(() => {
  links.value = setLinks()
})

watch(
  [() => route.fullPath, () => locale.value],
  ([pathVal]) => {
    if (pathVal) {
      links.value = setLinks()
    }
  },
)
</script>

<template>
  <header
    class="sticky top-0 z-10 flex h-(--header-height) items-center gap-4 border-b bg-background-secondary px-4 md:px-6 md:rounded-tl-xl md:rounded-tr-xl md:peer-data-[variant=inset]:top-2"
  >
    <div class="flex items-center gap-4 h-4">
      <SidebarTrigger />
      <Separator orientation="vertical" class="h-4" />
      <h1 class="text-sm font-semibold tracking-tight text-foreground">
        {{ t('nav.dashboard') }}
      </h1>
    </div>
    <div class="ml-auto flex items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="ghost" size="icon" class="h-9 w-9 border border-border/40 rounded-md">
            <Icon name="i-lucide-languages" class="h-4 w-4" />
            <span class="sr-only">Toggle Language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="w-[200px]">
          <DropdownMenuLabel>{{ t('common.theme') }}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            v-for="l in (locales as any)"
            :key="l.code"
            class="flex items-center gap-2 cursor-pointer"
            :class="{ 'bg-muted font-bold': locale === l.code }"
            @click="setLocale(l.code)"
          >
            <span class="uppercase text-[10px] bg-muted px-1.5 py-0.5 rounded font-bold border border-border/40">
              {{ l.code }}
            </span>
            <span class="text-xs">{{ l.name }}</span>
            <Icon
              v-if="locale === l.code"
              name="i-lucide-check"
              class="ml-auto h-4 w-4 text-primary"
            />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AppHeaderUserMenu />
    </div>
  </header>
</template>

<style scoped></style>
