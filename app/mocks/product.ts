import type { Product } from "@/types/product"

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Strawberry Segar",
    category: "Buah",
    price: 18500,
    stock: 250,
    unit: "Kilogram",
    lastUpdate: "12 Mar 2026",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800",
    images: [
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800",
      "https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=800",
      "https://images.unsplash.com/photo-1543528176-61b2395106a3?w=800",
    ],
    description: "Strawberry segar pilihan hasil panen petani lokal. Memiliki rasa manis keasaman yang khas dan tekstur yang renyah. Cocok untuk dikonsumsi langsung atau dijadikan bahan olahan makanan dan minuman.",
    rating: 4.8,
    reviewsCount: 156,
    status: "Active",
    location: "Lembang, Bandung",
    plantingDate: "10 Jan 2026",
    harvestDate: "15 Feb 2026",
    farmer: {
      id: "NRT-2024-001",
      name: "Pak Budi Santoso",
      location: "Cianjur, Jawa Barat",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
      points: 2500,
    },
  },
  {
    id: "2",
    name: "Selada Hidroponik",
    category: "Sayuran",
    price: 12500,
    stock: 150,
    unit: "500gr",
    lastUpdate: "11 Mar 2026",
    image: "https://images.unsplash.com/photo-1556801712-76c82207069a?w=800",
    images: [
      "https://images.unsplash.com/photo-1556801712-76c82207069a?w=800",
      "https://images.unsplash.com/photo-1515471209610-dae1c9158a26?w=800",
      "https://images.unsplash.com/photo-1622206141540-584456a9c014?w=800",
    ],
    description: "Selada Hidroponik premium kami ditanam dengan metode NFT (Nutrient Film Technique) yang memastikan sirkulasi nutrisi maksimal tanpa penggunaan pestisida sintetis. Setiap helai daun memiliki tekstur yang sangat renyah dan rasa yang segar tanpa getir.",
    rating: 4.9,
    reviewsCount: 120,
    status: "Active",
    location: "Cianjur, Jabar",
    plantingDate: "31 Jan 2026",
    harvestDate: "20 Feb 2026",
    farmer: {
      id: "NRT-2024-001",
      name: "Pak Budi Santoso",
      location: "Cianjur, Jawa Barat",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
      points: 2500,
    },
  },
  ...Array.from({ length: 48 }, (_, i) => {
    const id = i + 3

    const names = [
      "Apel Fuji", "Pisang Cavendish", "Jeruk Medan", "Mangga Harum Manis",
      "Bayam Hijau", "Kangkung Segar", "Tomat Merah", "Kentang Dieng",
      "Bawang Merah", "Bawang Putih", "Cabai Rawit", "Cabai Merah Besar",
      "Timun Segar", "Terong Ungu", "Brokoli", "Kol Putih",
      "Semangka Merah", "Melon Hijau", "Nanas Madu", "Pepaya California",
      "Daun Selada", "Jagung Manis", "Kacang Panjang", "Kacang Tanah",
      "Alpukat Mentega", "Anggur Merah", "Anggur Hijau", "Buah Naga",
      "Sawi Hijau", "Sawi Putih", "Daun Bawang", "Seledri",
      "Labu Kuning", "Labu Siam", "Jamur Tiram", "Jamur Kancing",
      "Singkong", "Ubi Jalar", "Talas", "Durian Lokal",
      "Salak Pondoh", "Rambutan", "Duku", "Langsat",
      "Markisa", "Belimbing", "Jambu Biji", "Jambu Air",
    ]

    const categories = ["Buah", "Sayur", "Umbi"]
    const units = [
      "Kilogram",
      "Gram",
      "Ikat",
    ]

    return {
      id: id.toString(),
      name: names[i % names.length]!,
      category: categories[i % categories.length]!,
      price: 10000 + (i % 10) * 2500,
      stock: 50 + ((i * 7) % 300),
      unit: units[i % units.length]!,
      lastUpdate: `${10 + (i % 10)} Mar 2026`,
      image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400",
      images: [
        "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800",
      ],
      description: "Produk segar berkualitas tinggi dari petani mitra Nurtani.",
      rating: 4.0 + (i % 10) * 0.1,
      reviewsCount: 10 + i * 2,
      status: "Active",
      location: "Jawa Barat",
      plantingDate: "01 Feb 2026",
      harvestDate: "25 Feb 2026",
      farmer: {
        id: "NRT-2024-001",
        name: "Pak Budi Santoso",
        location: "Cianjur, Jawa Barat",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
        points: 2500,
      },
    }
  }),
]
