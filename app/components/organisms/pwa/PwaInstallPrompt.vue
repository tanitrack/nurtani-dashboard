<script setup lang="ts">
import { useLocalStorage, useTimeoutFn } from '@vueuse/core'
import {
  DrawerContent,
  DrawerDescription,
  DrawerOverlay,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
} from 'vaul-vue'

const isInstalled = ref(false)
const isIOS = ref(false)
const showPrompt = ref(false)
const deferredPrompt = ref<any>(null)
const hasDismissed = useLocalStorage('pwa-prompt-dismissed', false)

// Check if app is already installed/in standalone mode
function checkStandalone() {
  if (typeof window === 'undefined') {
    return false
  }
  return (
    (window.navigator as any).standalone
    || window.matchMedia('(display-mode: standalone)').matches
  )
}

onMounted(() => {
  if (typeof window === 'undefined') {
    return
  }

  isInstalled.value = checkStandalone()
  isIOS.value = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream

  // Listen for the native install prompt (Android/Chrome/Edge)
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault()
    // Stash the event so it can be triggered later.
    deferredPrompt.value = e
    // Show our custom prompt automatically when the native prompt is available
    if (!isInstalled.value && !hasDismissed.value) {
      showPrompt.value = true
    }
  })

  // Fallback for iOS since it doesn't support 'beforeinstallprompt'
  if (isIOS.value && !isInstalled.value && !hasDismissed.value) {
    useTimeoutFn(() => {
      showPrompt.value = true
    }, 4000)
  }
})

async function installApp() {
  if (deferredPrompt.value) {
    // Show the native install prompt
    deferredPrompt.value.prompt()
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.value.userChoice
    if (outcome === 'accepted') {
      dismiss()
    }
    // We've used the prompt, and can't use it again, so clear it
    deferredPrompt.value = null
  }
  else if (isIOS.value) {
    // For iOS, the button serves as an "I understand, show me where" or we wait for them to finish
    // Since we already Show the instructions, we can just keep the drawer open or provide a confirmation
    dismiss()
  }
}

function dismiss() {
  showPrompt.value = false
  hasDismissed.value = true
}
</script>

<template>
  <DrawerRoot v-model:open="showPrompt">
    <DrawerPortal>
      <DrawerOverlay class="fixed inset-0 bg-black/40 z-50" />
      <DrawerContent
        class="bg-background flex flex-col rounded-t-[10px] h-fit mt-24 fixed bottom-0 left-0 right-0 z-50 border-t outline-none"
      >
        <div class="p-4 bg-background rounded-t-[10px] flex-1">
          <div class="mx-auto w-12 h-1.5 shrink-0 rounded-full bg-muted mb-8" />

          <div class="max-w-md mx-auto">
            <div class="flex items-center gap-4 mb-6">
              <div class="h-16 w-16 rounded-xl border bg-white p-2 shadow-sm overflow-hidden">
                <img src="/pwa-192x192.png" alt="NurTani Icon" class="h-full w-full object-contain" />
              </div>
              <div>
                <DrawerTitle class="font-semibold text-lg leading-none mb-1">
                  {{ $t('pwa.install_title') }}
                </DrawerTitle>
                <DrawerDescription class="text-sm text-muted-foreground">
                  {{ $t('pwa.install_description') }}
                </DrawerDescription>
              </div>
            </div>

            <!-- iOS Instructions -->
            <div v-if="isIOS" class="bg-muted/50 rounded-lg p-4 mb-6 border border-dashed text-sm">
              <p class="mb-3 font-medium flex items-center gap-2">
                {{ $t('pwa.ios_instruction_title') }}
              </p>
              <ol class="space-y-3 list-decimal list-inside text-muted-foreground">
                <li>
                  {{ $t('pwa.ios_step_1').split("'Share'")[0] }}
                  <span class="inline-flex items-center -mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-share text-blue-500 mx-1"
                    >
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                      <polyline points="16 6 12 2 8 6" />
                      <line x1="12" x2="12" y1="2" y2="15" />
                    </svg>
                  </span>
                  <strong>"Share"</strong>
                  {{ $t('pwa.ios_step_1').split("'Share'")[1] }}
                </li>
                <li>{{ $t('pwa.ios_step_2') }}</li>
                <li>{{ $t('pwa.ios_step_3') }}</li>
              </ol>
            </div>

            <!-- Android/Chrome Auto-Install Info -->
            <div v-else class="mb-6">
              <p class="text-sm text-muted-foreground mb-4">
                {{ $t('pwa.android_description') }}
              </p>
            </div>

            <div class="flex gap-3">
              <button
                class="flex-1 bg-primary text-primary-foreground h-11 px-4 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                @click="installApp"
              >
                {{ isIOS ? $t('pwa.install_button_ios') : $t('pwa.install_button_android') }}
              </button>
              <button
                class="h-11 px-6 rounded-xl font-medium text-sm border hover:bg-muted transition-colors"
                @click="dismiss"
              >
                {{ $t('pwa.dismiss_button') }}
              </button>
            </div>
          </div>
        </div>
      </DrawerContent>
    </DrawerPortal>
  </DrawerRoot>
</template>
