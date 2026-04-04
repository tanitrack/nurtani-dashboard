export default defineAppConfig({
  icon: {
    size: "", // default <Icon> size applied
    class: "", // default <Icon> class applied
  },
  appSettings: {
    sidebar: {
      collapsible: "icon", // 'offcanvas' | 'icon' | 'none'
      side: "left", // 'left' | 'right'
      variant: "sidebar", // 'sidebar' | 'floating' | 'inset'
    },
  },
})
