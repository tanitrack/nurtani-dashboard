<script setup lang="ts">
const user: {
  name: string
  email: string
  avatar: string
} = {
  name: "Dian Pratama",
  email: "dianpratama2@gmail.com",
  avatar: "/avatars/avatartion.png",
}

function handleLogout() {
  navigateTo("/login")
}

const showModalTheme = ref(false)
useI18n()
</script>

<template>
  <div class="flex items-center gap-4">
    <!-- Notification Bell -->
    <Button
      variant="ghost"
      size="icon"
      class="relative h-9 w-9 rounded-full bg-muted/50 hover:bg-muted transition-colors"
    >
      <Icon name="i-lucide-bell" class="size-5 text-muted-foreground" />
      <span
        class="absolute top-2 right-2.5 size-2 rounded-full bg-destructive border-2 border-background"
      />
    </Button>

    <!-- User Profile Dropdown -->
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button
          variant="ghost"
          class="h-auto px-0 py-0 flex items-center gap-3 hover:bg-transparent focus-visible:ring-0"
        >
          <Avatar class="h-10 w-10 border-2 border-background shadow-sm">
            <AvatarImage :src="user.avatar" :alt="user.name" />
            <AvatarFallback class="bg-primary/5 text-primary text-xs font-bold">
              PB
            </AvatarFallback>
          </Avatar>
          <div class="hidden md:flex flex-col items-start gap-0.5 text-left">
            <p class="text-sm font-bold leading-none text-foreground">
              {{ $t('profile.name') }}
            </p>
            <p class="text-[11px] leading-none text-muted-foreground font-medium">
              {{ $t('profile.location') }}
            </p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-56" align="end">
        <DropdownMenuLabel class="font-normal">
          <div class="flex flex-col space-y-1">
            <p class="text-sm font-semibold leading-none">
              {{ user.name }}
            </p>
            <p class="text-xs leading-none text-muted-foreground">
              {{ user.email }}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Icon name="i-lucide-badge-check" class="mr-2 h-4 w-4" />
            <span>{{ $t('common.account') }}</span>
          </DropdownMenuItem>
          <DropdownMenuItem as-child>
            <NuxtLink to="/settings">
              <Icon name="i-lucide-settings" class="mr-2 h-4 w-4" />
              <span>{{ $t('common.settings') }}</span>
            </NuxtLink>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon name="i-lucide-bell" class="mr-2 h-4 w-4" />
            <span>{{ $t('common.notifications') }}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem @click="showModalTheme = true">
            <Icon name="i-lucide-paintbrush" class="mr-2 h-4 w-4" />
            <span>{{ $t('common.theme') }}</span>
          </DropdownMenuItem>
          <DropdownMenuItem as-child>
            <NuxtLink
              to="https://github.com/dianprata/nuxt-shadcn-dashboard"
              external
              target="_blank"
            >
              <Icon name="i-lucide-github" class="mr-2 h-4 w-4" />
              <span>{{ $t('common.github_repo') }}</span>
            </NuxtLink>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem class="text-destructive focus:text-destructive" @click="handleLogout">
          <Icon name="i-lucide-log-out" class="mr-2 h-4 w-4" />
          <span>{{ $t('common.logout') }}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <Dialog v-model:open="showModalTheme">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{{ $t('common.customize') }}</DialogTitle>
          <DialogDescription class="text-xs text-muted-foreground">
            {{ $t('common.customize_desc') }}
          </DialogDescription>
        </DialogHeader>
        <ThemeCustomize />
      </DialogContent>
    </Dialog>
  </div>
</template>

<style scoped></style>
