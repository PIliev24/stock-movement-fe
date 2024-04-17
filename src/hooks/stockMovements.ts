import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { QUERIES } from "../data/constants";
import { CREATE_STOCK_MOVEMENT } from "../data/mutations";
import { WAREHOUSE_STOCK_MOVEMENTS } from "../data/queries";
import { StockMovementSchemaType, stockMovementSchema } from "../data/schemas";
import { useCustomMutation, useCustomQuery } from "./common";
import { StockMovementDto } from "../dto/StockMovementDto";

export const useStockMovementForm = (warehouseId: string) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<StockMovementSchemaType>({
    resolver: zodResolver(stockMovementSchema),
  });

  const { mutation: createStockMovement, loading } = useCustomMutation(
    CREATE_STOCK_MOVEMENT,
    WAREHOUSE_STOCK_MOVEMENTS,
    QUERIES.warehouseStockMovements
  );

  const onSubmit: SubmitHandler<StockMovementSchemaType> = async (data) => {
    try {
      await createStockMovement({
        variables: {
          createStockMovementInput: {
            productId: data.productId,
            warehouseId: warehouseId,
            quantity: Number(data.quantity),
            date: data.date,
            type: data.type,
          },
        },
      });
      toast.success("Stock movement created successfully");
      reset();
    } catch (e: any) {
      toast.error(e.message || "Error creating stock movement");
    }
  };

  return { onSubmit, register, handleSubmit, errors, control, loading };
};

export const useWarehouseStockMovements = (
  warehouseId: string,
  warehouseCapacity: number
) => {
  const { data } = useCustomQuery<{
    getStockMovementsByWarehouse: StockMovementDto[] | null;
  }>(WAREHOUSE_STOCK_MOVEMENTS, { warehouseId });
  const stockMovements = data?.getStockMovementsByWarehouse ?? [];

  const currentStock = stockMovements.reduce(
    (acc: number, sm: StockMovementDto) =>
      sm.type === "import"
        ? acc + sm.quantity * sm.product.sizePerUnit
        : acc - sm.quantity * sm.product.sizePerUnit,
    0
  );

  const freeSpace = warehouseCapacity - currentStock; // Calculating free space

  return { stockMovements, currentStock, freeSpace };
};
