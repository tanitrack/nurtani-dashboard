import { z } from "zod"

export const transactionStatusSchema = z.enum(["Berhasil", "Diproses", "Dikirim"])

export const transactionSchema = z.object({
  id: z.string(),
  productName: z.string(),
  category: z.string(),
  date: z.string(),
  price: z.number(),
  image: z.string(),
  status: transactionStatusSchema,
})

export type TransactionStatus = z.infer<typeof transactionStatusSchema>
export type Transaction = z.infer<typeof transactionSchema>
