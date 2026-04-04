<script setup lang="ts">
const route = useRoute()

function setLinks() {
  const path = route?.fullPath || "/"
  if (path === "/") {
    return [{ title: "Home", href: "/" }]
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

  return [{ title: "Home", href: "/" }, ...breadcrumbs]
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
  () => route.fullPath,
  (val) => {
    if (val) {
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
        Dashboard
      </h1>
    </div>
    <div class="ml-auto flex items-center gap-4">
      <AppHeaderUserMenu />
    </div>
  </header>
</template>

<style scoped></style>
