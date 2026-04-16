<script setup lang="ts">
import { Icons } from "~/components/atoms/icons";
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <div class="flex items-center gap-3 px-2 pt-3">
        <div class="flex items-center justify-center">
          <Icons.logo class="size-8 text-white" />
        </div>
        <div class="flex flex-col">
          <span
            class="text-lg font-bold text-white tracking-tight leading-none"
          >
            NurTani
          </span>
        </div>
      </div>
    </SidebarMenuItem>
  </SidebarMenu>
</template>

<style scoped></style>
