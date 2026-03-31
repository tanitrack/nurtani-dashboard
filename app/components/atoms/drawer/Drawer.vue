<script lang="ts" setup>
import type { DrawerRootEmits, DrawerRootProps } from 'vaul-vue'
import { useForwardPropsEmits } from 'reka-ui'
import { DrawerRoot } from 'vaul-vue'
import { computed } from 'vue'

const props = defineProps<DrawerRootProps>()

const emits = defineEmits<DrawerRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
const forwardedProps = computed<Record<string, unknown>>(() => forwarded as unknown as Record<string, unknown>)
</script>

<template>
  <DrawerRoot
    data-slot="drawer"
    v-bind="forwardedProps"
  >
    <slot />
  </DrawerRoot>
</template>
