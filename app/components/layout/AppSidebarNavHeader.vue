<script setup lang="ts">
import { Icons } from "~/components/atoms/icons/Icons";
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <div class="flex w-full justify-center px-2">
        <div class="flex items-center justify-center">
          <Icons.logo class="size-6 text-white" />
        </div>
        <div class="grid flex-1 text-left text-xl leading-tight ml-2">
          <span class="truncate font-semibold text-white"> NurTani </span>
        </div>
      </div>
    </SidebarMenuItem>
  </SidebarMenu>
</template>

<style scoped></style>
