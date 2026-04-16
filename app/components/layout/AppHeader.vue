<script setup lang="ts"></script>

<template>
  <header
    class="sticky top-0 z-50 flex h-20 md:h-16 items-center justify-between border-b-0 md:border-b bg-primary md:bg-background px-4 md:px-8 md:peer-data-[variant=inset]:top-2 transition-colors duration-300"
  >
    <div class="flex items-center gap-4">
      <SidebarTrigger
        class="md:flex hidden text-muted-foreground hover:text-foreground"
      />
      <!-- Dashboard Title (Desktop only) -->
      <h1 class="hidden md:block text-lg font-bold text-foreground">
        Dashboard
      </h1>

      <!-- Profile Section (Mobile only) -->
      <div class="md:hidden flex items-center gap-3">
        <Avatar class="size-10 border-2 border-white/20">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>PB</AvatarFallback>
        </Avatar>
        <div class="flex flex-col text-white">
          <span class="text-sm font-bold leading-none">Pak Budi</span>
          <span class="text-[10px] text-white/60">Cianjur, Jawa Barat</span>
        </div>
      </div>
    </div>

    <!-- Right Section -->
    <div class="flex items-center gap-4 lg:gap-6">
      <!-- Profile Section (Desktop only) -->
      <div class="hidden md:flex items-center gap-3 pr-2 border-r">
        <Avatar class="size-10 border border-border">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>PB</AvatarFallback>
        </Avatar>
        <div class="flex flex-col">
          <span class="text-sm font-bold text-foreground leading-tight">
            Pak Budi
          </span>
          <span class="text-[10px] text-muted-foreground font-medium">
            Cianjur, Jawa Barat
          </span>
        </div>
      </div>

      <!-- Notification Bell -->
      <Button
        variant="ghost"
        size="icon"
        class="relative text-white/80 md:text-muted-foreground hover:bg-white/10 md:hover:bg-accent hover:text-white md:hover:text-foreground"
      >
        <Icon name="i-lucide-bell" class="size-6" />
        <span
          class="absolute right-2.5 top-2.5 size-2.5 rounded-full border-2 border-primary md:border-white bg-red-500"
        />
      </Button>
    </div>
  </header>
</template>

<style scoped></style>
