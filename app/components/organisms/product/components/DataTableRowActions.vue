<script setup lang="ts">
import type { Row } from "@tanstack/vue-table"
import type { Product } from "@/types/product"

const props = defineProps<{
  row: Row<Product>
}>()

const router = useRouter()

function goToDetail() {
  router.push(`/product/${props.row.original.id}`)
}
</script>

<template>
  <div class="flex items-center justify-center">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button
          variant="ghost"
          class="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <Icon name="i-radix-icons-dots-horizontal" class="h-4 w-4" />
          <span class="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" class="w-[160px]">
        <DropdownMenuItem class="gap-2">
          <Icon name="i-lucide-edit" class="size-3.5" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem class="gap-2">
          <Icon name="i-lucide-copy" class="size-3.5" />
          Make a copy
        </DropdownMenuItem>
        <DropdownMenuItem class="gap-2">
          <Icon name="i-lucide-star" class="size-3.5" />
          Favorite
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem class="gap-2 text-destructive focus:text-destructive">
          <Icon name="i-lucide-trash" class="size-3.5" />
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <!-- Figma Direct Action: View Eye Icon -->
    <Button
      variant="ghost"
      size="icon"
      class="text-[#1a4d2e] hover:text-[#1a4d2e] hover:bg-green-50 transition-colors ml-2"
      @click="goToDetail"
    >
      <Icon name="i-lucide-eye" class="size-5" />
    </Button>
  </div>
</template>
