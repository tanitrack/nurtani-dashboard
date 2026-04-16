<script setup lang="ts"></script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <AppHeader />
      <div class="flex flex-col flex-1 pb-[72px] md:pb-0">
        <div class="@container/main p-4 lg:p-6 grow">
          <slot />
        </div>
      </div>
    </SidebarInset>
    <AppBottomNav />
  </SidebarProvider>
</template>

<style scoped></style>
