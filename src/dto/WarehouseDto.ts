import { StockMovementDto } from "./StockMovementDto";

export type WarehouseDto = {
  id: string;
  name: string;
  capacity: number;
  stockMovements: StockMovementDto[];
};
