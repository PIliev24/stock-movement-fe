import { z } from "zod";

export const productSchema = z.object({
  name: z.string().trim().min(1, "Product name is required"),
  sizePerUnit: z.number().min(0.01, "Size per unit must be greater than 0"),
  isHazardous: z.boolean(),
});

export const stockMovementSchema = z.object({
  productId: z.string().trim().min(1, "Product is required"),
  quantity: z.number().min(1, "Quantity is required"),
  date: z.date(),
  type: z.string().min(1, "Type is required"),
});

export type ProductSchemaType = z.infer<typeof productSchema>;
export type StockMovementSchemaType = z.infer<typeof stockMovementSchema>;
