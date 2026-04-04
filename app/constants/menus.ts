import type { NavMenu, NavMenuItems } from "~/types/nav"

export const navMenu: NavMenu[] = [
  {
    heading: "common.menu",
    items: [
      {
        title: "nav.beranda",
        icon: "i-lucide-house",
        link: "/",
      },
      {
        title: "nav.produk",
        icon: "i-lucide-box",
        link: "/product",
      },
      {
        title: "nav.riwayat",
        icon: "i-lucide-history",
        link: "/history",
      },
      {
        title: "nav.profil",
        icon: "i-lucide-circle-user-round",
        link: "/profile",
      },
    ],
  },
]

export const navMenuBottom: NavMenuItems = [
  {
    title: "nav.help",
    icon: "i-lucide-circle-help",
    link: "https://github.com/dianprata/nuxt-shadcn-dashboard",
  },
  {
    title: "nav.feedback",
    icon: "i-lucide-send",
    link: "https://github.com/dianprata/nuxt-shadcn-dashboard",
  },
]
