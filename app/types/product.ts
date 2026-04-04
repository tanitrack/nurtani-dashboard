import { z } from "zod"

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.string(),
  price: z.number(),
  stock: z.number(),
  unit: z.string(),
  lastUpdate: z.string(),
  image: z.string(),
  // Expanded fields for detail page
  images: z.array(z.string()).optional(),
  description: z.string().optional(),
  rating: z.number().optional(),
  reviewsCount: z.number().optional(),
  status: z.string().optional(),
  location: z.string().optional(),
  plantingDate: z.string().optional(),
  harvestDate: z.string().optional(),
  // Farmer data
  farmer: z.object({
    id: z.string(),
    name: z.string(),
    location: z.string(),
    avatar: z.string(),
    points: z.number(),
  }).optional(),
})

export type Product = z.infer<typeof productSchema>
