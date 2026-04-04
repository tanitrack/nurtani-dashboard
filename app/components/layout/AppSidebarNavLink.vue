<script setup lang="ts">
import type { SidebarMenuButtonVariants } from "~/components/atoms/sidebar";
import type { NavLink } from "~/types/nav";
import { useSidebar } from "~/components/atoms/sidebar";

withDefaults(
  defineProps<{
    item: NavLink;
    size?: SidebarMenuButtonVariants["size"];
  }>(),
  {
    size: "default",
  },
);

const { setOpenMobile } = useSidebar();
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton
        as-child
        :tooltip="item.title"
        :size="size"
        :data-active="item.link === $route.path"
        class="group/nav-link h-9 rounded-lg px-2 text-white/60 transition-all duration-200 hover:bg-white/5 hover:text-white data-[active=true]:bg-[#0D2119] data-[active=true]:text-white data-[active=true]:shadow-sm"
      >
        <NuxtLink
          class="flex w-full items-center gap-2"
          :to="item.link"
          @click="setOpenMobile(false)"
        >
          <div
            class="flex items-center justify-center rounded-md shadow-xs size-6"
          >
            <Icon :name="item.icon || ''" class="size-3.5 shrink-0" />
          </div>
          <span class="text-xs font-semibold">{{ $t(item.title) }}</span>
          <span
            v-if="item.new"
            class="ml-auto rounded-sm bg-[#adfa1d] px-1 py-0.5 text-[8px] font-bold uppercase leading-none text-black"
          >
            {{ $t('common.new') }}
          </span>
        </NuxtLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
</template>

<style scoped></style>
