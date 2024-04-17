import { useQuery } from "@apollo/client";
import { GET_WAREHOUSES } from "../data/queries";
import { WarehouseDto } from "../dto/WarehouseDto";

export const useWarehouses = () => {
  const { data } = useQuery<{ allWarehouses: WarehouseDto[] }>(GET_WAREHOUSES);
  const warehouses = data?.allWarehouses ?? [];
  return warehouses;
};
