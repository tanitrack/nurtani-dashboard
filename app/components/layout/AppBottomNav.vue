<script setup lang="ts">
import { computed } from "vue";
import { navMenu } from "~/constants/menus";

const bottomNavItems = computed(() => {
  return (navMenu[0]?.items || []) as { title: string; icon: string; link: string }[];
});
</script>

<template>
  <nav class="md:hidden fixed bottom-0 left-0 z-50 w-full h-[72px] bg-[#1a4d2e] flex justify-around items-center px-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] pb-safe">
    <NuxtLink
      v-for="item in bottomNavItems"
      :key="item.link"
      :to="item.link"
      class="flex flex-col items-center justify-center w-full h-full text-white/60 transition-colors"
      active-class="!text-white font-medium"
      exact-active-class="!text-white font-medium"
    >
      <Icon :name="item.icon" class="w-[22px] h-[22px] mb-1" />
      <span class="text-[11px] tracking-wide">{{ $t(item.title) }}</span>
    </NuxtLink>
  </nav>
</template>

<style scoped>
/* pb-safe simulation if needed, but standard h-[72px] is good */
</style>
