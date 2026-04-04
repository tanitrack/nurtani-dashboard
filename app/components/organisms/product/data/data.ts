import { Icon } from "#components"
import { h } from "vue"

export const categories = [
  {
    value: "Sayur",
    label: "Sayur",
    icon: h(Icon, { name: "i-lucide-leaf" }),
  },
  {
    value: "Buah",
    label: "Buah",
    icon: h(Icon, { name: "i-lucide-apple" }),
  },
  {
    value: "Alat Tani",
    label: "Alat Tani",
    icon: h(Icon, { name: "i-lucide-shovel" }),
  },
  {
    value: "Benih",
    label: "Benih",
    icon: h(Icon, { name: "i-lucide-sprout" }),
  },
  {
    value: "Pupuk",
    label: "Pupuk",
    icon: h(Icon, { name: "i-lucide-flask-round" }),
  },
]

export const units = [
  {
    value: "Kilogram",
    label: "Kilogram",
  },
  {
    value: "Gram",
    label: "Gram",
  },
  {
    value: "Liter",
    label: "Liter",
  },
  {
    value: "Packs",
    label: "Packs",
  },
  {
    value: "Unit",
    label: "Unit",
  },
]
