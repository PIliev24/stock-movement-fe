import { ProductDto } from "./ProductDto";
import { WarehouseDto } from "./WarehouseDto";

export type StockMovementDto = {
  id: string;
  product: ProductDto;
  warehouse: WarehouseDto;
  productId: string; // FK to Product
  warehouseId: string; // FK to Warehouse
  quantity: number;
  date: Date;
  type: string; // 'import' or 'export'
};
