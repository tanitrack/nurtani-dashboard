import { z } from 'zod'

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.string(),
  price: z.number(),
  stock: z.number(),
  unit: z.string(),
  lastUpdate: z.string(),
  image: z.string(),
})

export type Product = z.infer<typeof productSchema>
