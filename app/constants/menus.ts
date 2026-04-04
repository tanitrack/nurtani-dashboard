import type { NavMenu, NavMenuItems } from "~/types/nav"

export const navMenu: NavMenu[] = [
  {
    heading: "MENU",
    items: [
      {
        title: "Home",
        icon: "i-lucide-home",
        link: "/",
      },
      {
        title: "Produk",
        icon: "i-lucide-package",
        link: "/product",
      },
      {
        title: "Riwayat",
        icon: "i-lucide-history",
        link: "/history",
      },
      {
        title: "Profil",
        icon: "i-lucide-user",
        link: "/profile",
      },
    ],
  },
]

export const navMenuBottom: NavMenuItems = [
  {
    title: "Help & Support",
    icon: "i-lucide-circle-help",
    link: "https://github.com/dianprata/nuxt-shadcn-dashboard",
  },
  {
    title: "Feedback",
    icon: "i-lucide-send",
    link: "https://github.com/dianprata/nuxt-shadcn-dashboard",
  },
]
