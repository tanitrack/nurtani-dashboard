import type { Product } from "@/types/product";

// ─── Farmers ────────────────────────────────────────────────────────────────
const farmers = {
  budi: {
    id: "NRT-2024-001",
    name: "Pak Budi Santoso",
    location: "Cianjur, Jawa Barat",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop",
    points: 2500,
  },
  sari: {
    id: "NRT-2024-002",
    name: "Bu Sari Dewi",
    location: "Lembang, Bandung",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop",
    points: 1850,
  },
  agus: {
    id: "NRT-2024-003",
    name: "Pak Agus Wijaya",
    location: "Malang, Jawa Timur",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop",
    points: 3200,
  },
  rina: {
    id: "NRT-2024-004",
    name: "Bu Rina Kusuma",
    location: "Magelang, Jawa Tengah",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop",
    points: 1420,
  },
  hendra: {
    id: "NRT-2024-005",
    name: "Pak Hendra Pratama",
    location: "Garut, Jawa Barat",
    avatar:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&auto=format&fit=crop",
    points: 2780,
  },
  wati: {
    id: "NRT-2024-006",
    name: "Bu Sri Wati",
    location: "Boyolali, Jawa Tengah",
    avatar:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&auto=format&fit=crop",
    points: 980,
  },
} as const;

export const mockProducts: Product[] = [
  // ─── 1. Strawberry ──────────────────────────────────────────────────────
  {
    id: "1",
    name: "Strawberry Segar",
    category: "Buah",
    price: 28_000,
    stock: 120,
    unit: "250gr",
    lastUpdate: "14 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Strawberry segar pilihan hasil panen petani lokal Lembang. Ditanam di ketinggian 1.400 mdpl dengan suhu udara yang ideal, menghasilkan buah berukuran besar dengan rasa manis-asam yang khas. Bebas pestisida kimia — hanya menggunakan pupuk organik dan pestisida nabati. Dipetik pagi hari dan langsung dikemas dingin agar kesegaran terjaga hingga ke tangan Anda.",
    rating: 4.8,
    reviewsCount: 214,
    status: "Active",
    location: "Lembang, Bandung",
    plantingDate: "10 Jan 2026",
    harvestDate: "15 Feb 2026",
    farmer: farmers.sari,
  },

  // ─── 3. Apel Fuji ────────────────────────────────────────────────────────
  {
    id: "3",
    name: "Apel Fuji Premium",
    category: "Buah",
    price: 35_000,
    stock: 90,
    unit: "Kilogram",
    lastUpdate: "13 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Apel Fuji lokal dari dataran tinggi Malang dengan ukuran jumbo dan rasa yang renyah manis. Ditanam di ketinggian 900 mdpl dengan teknik GAP (Good Agricultural Practice). Kulit merah merata, daging buah padat, dan kadar air tinggi menjadikannya pilihan favorit keluarga. Setiap kilogram berisi 3–4 buah dengan berat rata-rata 250–300 gram per buah.",
    rating: 4.7,
    reviewsCount: 92,
    status: "Active",
    location: "Batu, Malang",
    plantingDate: "01 Sep 2025",
    harvestDate: "05 Mar 2026",
    farmer: farmers.agus,
  },

  // ─── 4. Pisang Cavendish ─────────────────────────────────────────────────
  {
    id: "4",
    name: "Pisang Cavendish",
    category: "Buah",
    price: 22_000,
    stock: 300,
    unit: "Sisir",
    lastUpdate: "12 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Pisang Cavendish segar kualitas ekspor dari kebun sendiri di Boyolali. Satu sisir berisi 12–15 buah berukuran seragam dengan tingkat kematangan sempurna — tidak terlalu matang agar tahan 4–5 hari lagi. Kulitnya kuning merata, daging buah lembut, dan manis alami tanpa rasa sepat. Cocok untuk konsumsi langsung, smoothie, maupun bahan olahan kue.",
    rating: 4.6,
    reviewsCount: 145,
    status: "Active",
    location: "Boyolali, Jawa Tengah",
    plantingDate: "15 Nov 2025",
    harvestDate: "10 Mar 2026",
    farmer: farmers.wati,
  },

  // ─── 5. Tomat Cherry ─────────────────────────────────────────────────────
  {
    id: "5",
    name: "Tomat Cherry",
    category: "Sayuran",
    price: 18_000,
    stock: 180,
    unit: "250gr",
    lastUpdate: "14 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1561136594-7f68413baa99?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1592841200221-a6898f8f6754?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Tomat cherry merah segar dari kebun organik Garut. Berukuran kecil mungil dengan rasa manis asam yang kuat dan aroma segar khas tomat segar. Ditanam dengan pupuk kompos dan pestisida nabati. Cocok untuk salad, pasta, pizza, atau dimakan langsung sebagai camilan sehat. Dikemas dalam wadah tertutup agar tidak mudah memar saat pengiriman.",
    rating: 4.8,
    reviewsCount: 103,
    status: "Active",
    location: "Garut, Jawa Barat",
    plantingDate: "20 Jan 2026",
    harvestDate: "01 Mar 2026",
    farmer: farmers.hendra,
  },

  // ─── 6. Kangkung Organik ─────────────────────────────────────────────────
  {
    id: "6",
    name: "Kangkung Organik",
    category: "Sayuran",
    price: 8_000,
    stock: 250,
    unit: "Ikat",
    lastUpdate: "14 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Kangkung darat organik segar, dipanen pagi hari sebelum jam 07.00 untuk memastikan kadar air daun masih optimal. Batang muda, daun hijau pekat, bebas hama ulat. Tidak menggunakan pestisida kimia sama sekali — lahan sudah tersertifikasi organik selama 3 tahun. Satu ikat berisi ±300 gram. Cocok untuk tumis, lalap, atau campuran pecel.",
    rating: 4.7,
    reviewsCount: 88,
    status: "Active",
    location: "Cianjur, Jawa Barat",
    plantingDate: "28 Feb 2026",
    harvestDate: "14 Mar 2026",
    farmer: farmers.budi,
  },

  // ─── 8. Brokoli ───────────────────────────────────────────────────────────
  {
    id: "8",
    name: "Brokoli Segar",
    category: "Sayuran",
    price: 16_000,
    stock: 130,
    unit: "500gr",
    lastUpdate: "12 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1601600576337-c1d8a0d1373c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Brokoli segar dari dataran tinggi Lembang, ukuran kepala jumbo 15–18 cm dengan warna hijau tua merata. Dipanen saat kuncup masih rapat sempurna untuk kandungan nutrisi paling tinggi. Kaya vitamin C, K, dan serat. Dikemas dengan cold pack agar tetap segar 3–5 hari. Ideal untuk tumis bawang putih, sup krim brokoli, salad, atau steam & grill.",
    rating: 4.8,
    reviewsCount: 99,
    status: "Active",
    location: "Lembang, Bandung",
    plantingDate: "05 Jan 2026",
    harvestDate: "28 Feb 2026",
    farmer: farmers.sari,
  },

  // ─── 9. Kentang Dieng ────────────────────────────────────────────────────
  {
    id: "9",
    name: "Kentang Dieng",
    category: "Umbi",
    price: 14_000,
    stock: 400,
    unit: "Kilogram",
    lastUpdate: "11 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590165482129-1b8b27698780?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565590452329-9a9e4e15ef3a?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Kentang dataran tinggi Dieng (2.000 mdpl) yang terkenal sebagai penghasil kentang terbaik Indonesia. Tekstur pulen dan padat, kadar pati tinggi, dengan kulit tipis kekuningan. Ukuran besar seragam (grade A, >150g/umbi), cocok untuk kentang goreng, perkedel, sup, atau potato wedges. Disimpan dengan baik di gudang sejuk sehingga daya tahan hingga 3–4 minggu.",
    rating: 4.7,
    reviewsCount: 133,
    status: "Active",
    location: "Dieng, Wonosobo",
    plantingDate: "15 Nov 2025",
    harvestDate: "08 Mar 2026",
    farmer: farmers.rina,
  },

  // ─── 10. Mangga Harum Manis ──────────────────────────────────────────────
  {
    id: "10",
    name: "Mangga Harum Manis",
    category: "Buah",
    price: 26_000,
    stock: 160,
    unit: "Kilogram",
    lastUpdate: "14 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605027990121-cbae9e0642df?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Mangga harum manis Probolinggo grade super — varietas unggulan yang dikenal dengan aroma harum kuat dan rasa manis legit tanpa serat berlebih. Ukuran besar (250–400g per buah), kulitnya hijau kekuningan, daging oranye pekat dan juicy. Dipetik saat matang pohon untuk tingkat kemanisan tertinggi. Dikirim dengan matras pelindung agar tidak memar.",
    rating: 4.9,
    reviewsCount: 187,
    status: "Active",
    location: "Probolinggo, Jawa Timur",
    plantingDate: "01 Aug 2025",
    harvestDate: "12 Mar 2026",
    farmer: farmers.agus,
  },

  // ─── 11. Alpukat Mentega ─────────────────────────────────────────────────
  {
    id: "11",
    name: "Alpukat Mentega",
    category: "Buah",
    price: 32_000,
    stock: 110,
    unit: "Kilogram",
    lastUpdate: "13 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1601039641847-7857b994d704?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Alpukat mentega Malang dengan tekstur creamy seperti mentega, kadar lemak baik (omega-9) tinggi, dan rasa gurih lembut. Ukuran besar 300–450g per buah, biji kecil, daging tebal oranye kekuningan. Dipetik saat fisiologis matang dan dikirim dalam kondisi setengah matang agar tidak memar — siap konsumsi 1–2 hari setelah diterima. Sangat cocok untuk smoothie, guacamole, atau olesan roti.",
    rating: 4.8,
    reviewsCount: 124,
    status: "Active",
    location: "Batu, Malang",
    plantingDate: "01 Jul 2025",
    harvestDate: "10 Mar 2026",
    farmer: farmers.agus,
  },

  // ─── 12. Bayam Merah ─────────────────────────────────────────────────────
  {
    id: "12",
    name: "Bayam Merah Organik",
    category: "Sayuran",
    price: 9_000,
    stock: 200,
    unit: "Ikat",
    lastUpdate: "14 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Bayam merah organik segar dengan warna merah-ungu cerah — tanda kandungan antosianin dan zat besi yang tinggi. Ditanam tanpa pestisida kimia di lahan organik bersertifikat. Daun muda lembut, batang renyah, rasa sedikit manis dan earthy. Satu ikat berisi ±250 gram. Ideal untuk sayur bening, tumis, atau dijus bersama buah bit dan wortel.",
    rating: 4.7,
    reviewsCount: 71,
    status: "Active",
    location: "Cianjur, Jawa Barat",
    plantingDate: "01 Mar 2026",
    harvestDate: "14 Mar 2026",
    farmer: farmers.budi,
  },

  // ─── 13. Jeruk Keprok ────────────────────────────────────────────────────
  {
    id: "13",
    name: "Jeruk Keprok Batu",
    category: "Buah",
    price: 24_000,
    stock: 220,
    unit: "Kilogram",
    lastUpdate: "12 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1547514701-42782101795e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Jeruk keprok Batu Malang — varietas lokal yang terkenal dengan kandungan vitamin C tinggi, rasa manis-asam seimbang, dan aroma sitrus kuat. Kulit oranye mulus, mudah dikupas, biji sedikit. Ukuran seragam 120–180g per buah. Dipanen saat matang optimal dan dikemas dalam jaring pelindung. Tahan 1–2 minggu di suhu ruang, lebih lama di kulkas.",
    rating: 4.6,
    reviewsCount: 108,
    status: "Active",
    location: "Batu, Malang",
    plantingDate: "01 Sep 2025",
    harvestDate: "05 Mar 2026",
    farmer: farmers.agus,
  },

  // ─── 14. Timun Jepang ────────────────────────────────────────────────────
  {
    id: "14",
    name: "Timun Jepang",
    category: "Sayuran",
    price: 12_000,
    stock: 170,
    unit: "500gr",
    lastUpdate: "13 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Timun Jepang (Japanese cucumber) varietas mini slim dengan kulit tipis hijau gelap dan daging renyah berair. Biji sangat sedikit, tidak perlu dikupas. Rasa segar ringan dengan kadar air 96%. Cocok untuk acar, salad Jepang, infused water, atau dimakan langsung dengan hummus. Ditanam dalam greenhouse dengan kontrol kelembaban ketat untuk ukuran dan tekstur yang konsisten.",
    rating: 4.7,
    reviewsCount: 55,
    status: "Active",
    location: "Magelang, Jawa Tengah",
    plantingDate: "15 Feb 2026",
    harvestDate: "12 Mar 2026",
    farmer: farmers.rina,
  },

  // ─── 15. Bawang Merah ────────────────────────────────────────────────────
  {
    id: "15",
    name: "Bawang Merah Brebes",
    category: "Umbi",
    price: 28_000,
    stock: 350,
    unit: "Kilogram",
    lastUpdate: "11 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Bawang merah Brebes grade super — asal-usul varietas terbaik Indonesia dengan aroma tajam khas dan rasa gurih yang kuat. Umbi besar seragam, kulit merah mengkilap, kering sempurna (kadar air <14%) sehingga tahan lama. Cocok untuk bumbu masak, bawang goreng, dan acar. Dikemas dalam jaring agar sirkulasi udara terjaga. Tahan hingga 2–3 bulan jika disimpan di tempat kering dan sejuk.",
    rating: 4.8,
    reviewsCount: 162,
    status: "Active",
    location: "Brebes, Jawa Tengah",
    plantingDate: "01 Dec 2025",
    harvestDate: "01 Mar 2026",
    farmer: farmers.rina,
  },

  // ─── 16. Jamur Tiram ─────────────────────────────────────────────────────
  {
    id: "16",
    name: "Jamur Tiram Putih",
    category: "Sayuran",
    price: 18_000,
    stock: 140,
    unit: "300gr",
    lastUpdate: "14 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Jamur tiram putih (Pleurotus ostreatus) segar dari rumah jamur dengan kontrol suhu dan kelembaban optimal. Tudung lebar 6–12 cm, berwarna putih bersih, tekstur kenyal dan lembut. Tinggi protein (±3g/100g) dan rendah kalori. Dipanen pagi hari dan dikemas dalam kemasan breathable agar tetap segar 3–4 hari. Cocok untuk tumis, soup, dimsum, atau pengganti daging.",
    rating: 4.8,
    reviewsCount: 93,
    status: "Active",
    location: "Magelang, Jawa Tengah",
    plantingDate: "01 Mar 2026",
    harvestDate: "14 Mar 2026",
    farmer: farmers.rina,
  },

  // ─── 17. Semangka Tanpa Biji ─────────────────────────────────────────────
  {
    id: "17",
    name: "Semangka Tanpa Biji",
    category: "Buah",
    price: 12_000,
    stock: 75,
    unit: "Kilogram",
    lastUpdate: "12 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Semangka triploid (tanpa biji) segar dari kebun Boyolali. Daging merah cerah, sangat manis (brix >12°), kadar air tinggi, dan menyegarkan. Berat per buah 3–5 kg, dipilih yang matang sempurna. Penjualan per kilogram. Dikemas dengan bubble wrap untuk mencegah benturan. Sangat cocok untuk es buah, jus, atau dimakan langsung di siang hari.",
    rating: 4.5,
    reviewsCount: 76,
    status: "Active",
    location: "Boyolali, Jawa Tengah",
    plantingDate: "01 Jan 2026",
    harvestDate: "08 Mar 2026",
    farmer: farmers.wati,
  },

  // ─── 18. Jagung Manis ────────────────────────────────────────────────────
  {
    id: "18",
    name: "Jagung Manis Super Sweet",
    category: "Sayuran",
    price: 8_000,
    stock: 280,
    unit: "Buah",
    lastUpdate: "14 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505764761634-34c7d4d2c553?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1601924351433-d7c87ab09abb?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Jagung manis varietas super sweet dengan kadar gula alami tinggi (brix >15°). Biji penuh, berwarna kuning cerah merata, tekstur renyah saat direbus dan tetap manis. Satu tongkol berisi ±400–500g bersih. Dipanen pagi hari sebelum matahari penuh untuk menjaga kadar gula. Terbaik dinikmati dalam 1–2 hari setelah panen. Cocok untuk jagung rebus, bakar, sup, atau salad.",
    rating: 4.7,
    reviewsCount: 148,
    status: "Active",
    location: "Garut, Jawa Barat",
    plantingDate: "20 Jan 2026",
    harvestDate: "14 Mar 2026",
    farmer: farmers.hendra,
  },

  // ─── 19. Buah Naga Merah ─────────────────────────────────────────────────
  {
    id: "19",
    name: "Buah Naga Merah",
    category: "Buah",
    price: 22_000,
    stock: 130,
    unit: "Kilogram",
    lastUpdate: "13 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1527325678964-54921661f888?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1527325678964-54921661f888?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600783245777-080fd7ff9253?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1607362289416-64ce97e83b91?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Buah naga merah (Hylocereus costaricensis) segar dari kebun Boyolali. Daging merah tua dengan rasa manis sedang dan sedikit earthy. Kaya antosianin, vitamin C, dan serat. Ukuran besar 400–600g per buah. Kulit merah cerah dengan sisik hijau — tanda kesegaran optimal. Simpan di kulkas untuk rasa terbaik. Cocok untuk smoothie bowl, salad buah, atau dimakan langsung.",
    rating: 4.6,
    reviewsCount: 84,
    status: "Active",
    location: "Boyolali, Jawa Tengah",
    plantingDate: "15 Sep 2025",
    harvestDate: "10 Mar 2026",
    farmer: farmers.wati,
  },

  // ─── 20. Ubi Jalar Ungu ──────────────────────────────────────────────────
  {
    id: "20",
    name: "Ubi Jalar Ungu",
    category: "Umbi",
    price: 11_000,
    stock: 310,
    unit: "Kilogram",
    lastUpdate: "11 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1574226516831-e1dff420e562?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1574226516831-e1dff420e562?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590165482129-1b8b27698780?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Ubi jalar ungu (purple sweet potato) kaya antosianin dengan warna ungu pekat dari dalam hingga ke kulit. Rasa manis alami, tekstur pulen dan lembut setelah dikukus. Indeks glikemik rendah, cocok untuk diet sehat. Ukuran sedang 200–350g per umbi. Tahan 2–3 minggu di tempat sejuk dan kering. Cocok untuk kolak, nagasari, brownies ubi, atau toping overnight oat.",
    rating: 4.7,
    reviewsCount: 97,
    status: "Active",
    location: "Dieng, Wonosobo",
    plantingDate: "01 Nov 2025",
    harvestDate: "05 Mar 2026",
    farmer: farmers.rina,
  },

  // ─── 21. Daun Bawang ─────────────────────────────────────────────────────
  {
    id: "21",
    name: "Daun Bawang Segar",
    category: "Sayuran",
    price: 7_000,
    stock: 300,
    unit: "Ikat",
    lastUpdate: "14 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Daun bawang segar hijau muda dari Cianjur, dipanen pagi hari dengan ukuran batang sedang (±1cm). Aroma kuat, daun lurus tidak layu, bebas penyakit busuk. Satu ikat berisi ±200 gram. Cocok untuk taburan bakso, mie ayam, omelette, tumis, atau campuran bumbu masak apa saja.",
    rating: 4.5,
    reviewsCount: 62,
    status: "Active",
    location: "Cianjur, Jawa Barat",
    plantingDate: "28 Feb 2026",
    harvestDate: "14 Mar 2026",
    farmer: farmers.budi,
  },

  // ─── 22. Labu Kuning ─────────────────────────────────────────────────────
  {
    id: "22",
    name: "Labu Kuning Organik",
    category: "Sayuran",
    price: 10_000,
    stock: 95,
    unit: "Kilogram",
    lastUpdate: "12 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Labu kuning (Cucurbita moschata) organik dari Magelang. Daging tebal, warna oranye cekat, rasa manis dan gurih. Kaya beta-karoten, vitamin A dan C. Ukuran 1,5–2,5 kg per buah. Dijual per kilogram. Kulit keras membuatnya tahan hingga 1–2 bulan di suhu ruang. Cocok untuk kolak labu, bubur labu, sup labu, atau dessert labu.",
    rating: 4.6,
    reviewsCount: 73,
    status: "Active",
    location: "Magelang, Jawa Tengah",
    plantingDate: "15 Nov 2025",
    harvestDate: "10 Feb 2026",
    farmer: farmers.rina,
  },

  // ─── 23. Singkong Manis ──────────────────────────────────────────────────
  {
    id: "23",
    name: "Singkong Manis",
    category: "Umbi",
    price: 6_000,
    stock: 500,
    unit: "Kilogram",
    lastUpdate: "10 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1565590452329-9a9e4e15ef3a?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1565590452329-9a9e4e15ef3a?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Singkong putih manis segar dari kebun Garut, sudah dibersihkan dari tanah. Dagingnya putih bersih, tekstur pulen setelah dikukus, rasa manis alami. Ukuran sedang 400–700g per umbi. Tahan 5–7 hari jika disimpan kering. Cocok untuk singkong rebus, getuk, tape, keripik singkong, atau bahan olahan mocaf.",
    rating: 4.4,
    reviewsCount: 49,
    status: "Active",
    location: "Garut, Jawa Barat",
    plantingDate: "01 Sep 2025",
    harvestDate: "08 Mar 2026",
    farmer: farmers.hendra,
  },

  // ─── 24. Anggur Shine Muscat ─────────────────────────────────────────────
  {
    id: "24",
    name: "Anggur Lokal Shine Muscat",
    category: "Buah",
    price: 65_000,
    stock: 60,
    unit: "500gr",
    lastUpdate: "14 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596363505729-4190a9506133?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Anggur shine muscat lokal hasil budidaya modern di greenhouse Garut. Warna hijau kekuningan cerah, berkilau, dan tampak premium. Rasa sangat manis (brix >18°) dengan sedikit aroma muscat. Biji sedikit dan kulit tipis sehingga bisa dimakan langsung tanpa dikupas. Per pax berisi 1 tangkai ±500g. Tahan 7–10 hari di kulkas. Cocok untuk buah meja, hamper, atau makanan penutup.",
    rating: 4.9,
    reviewsCount: 211,
    status: "Active",
    location: "Garut, Jawa Barat",
    plantingDate: "01 Oct 2025",
    harvestDate: "14 Mar 2026",
    farmer: farmers.hendra,
  },

  // ─── 25. Nanas Madu ──────────────────────────────────────────────────────
  {
    id: "25",
    name: "Nanas Madu Subang",
    category: "Buah",
    price: 18_000,
    stock: 145,
    unit: "Buah",
    lastUpdate: "12 Mar 2026",
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Nanas madu Subang — varietas queen dengan rasa paling manis (brix >15°) dan hampir tidak berserat. Ukuran sedang 0,8–1,2 kg per buah. Daging kuning cerah, juicy, aroma harum kuat. Sedikit asam di tepi daun — tanda nanas segar. Dijual per buah dengan mahkota masih utuh. Tahan 5–7 hari di suhu ruang. Cocok untuk rujak, es buah, jus, atau dimakan langsung.",
    rating: 4.7,
    reviewsCount: 115,
    status: "Active",
    location: "Subang, Jawa Barat",
    plantingDate: "01 Oct 2025",
    harvestDate: "01 Mar 2026",
    farmer: farmers.sari,
  },
];
