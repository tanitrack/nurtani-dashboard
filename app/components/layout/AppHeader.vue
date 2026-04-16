<script setup lang="ts">
</script>

<template>
  <header
    class="sticky top-0 z-50 flex h-20 items-center justify-between border-b-0 bg-primary px-4 md:px-6 md:rounded-tl-xl md:rounded-tr-xl md:peer-data-[variant=inset]:top-2"
  >
    <div class="flex items-center gap-4">
      <SidebarTrigger class="md:flex hidden text-white/70 hover:text-white" />
      <Separator
        orientation="vertical"
        class="h-4 md:block hidden bg-white/20"
      />

      <!-- Profile Info -->
      <div class="flex items-center gap-3">
        <Avatar class="h-11 w-11 shadow-sm">
          <AvatarImage src="/avatars/avatartion.png" alt="Pak Budi" />
          <AvatarFallback class="bg-white/10 text-white text-xs font-bold">
            PB
          </AvatarFallback>
        </Avatar>
        <div class="flex flex-col items-start text-left">
          <p class="text-base font-bold leading-none text-white tracking-wide">
            Pak Budi
          </p>
          <p class="text-[12px] leading-none text-white/80 font-medium mt-1.5">
            Cianjur, Jawa Barat
          </p>
        </div>
      </div>
    </div>

    <div class="flex items-center gap-4">
      <!-- Notification Bell -->
      <Button
        variant="ghost"
        size="icon"
        class="relative h-10 w-10 rounded-full hover:bg-white/10 transition-colors"
      >
        <Icon name="i-heroicons-bell-solid" class="size-6 text-white" />
        <span
          class="absolute top-2 right-2.5 size-[10px] rounded-full bg-[#e7000b] border-2 border-primary"
        />
      </Button>
    </div>
  </header>
</template>

<style scoped></style>
