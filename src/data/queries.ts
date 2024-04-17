import { gql } from "@apollo/client";

export const ALL_PRODUCTS = gql`
  query AllProducts {
    allProducts {
      id
      name
      sizePerUnit
      isHazardous
    }
  }
`;

export const GET_WAREHOUSES = gql`
  query AllWarehouses {
    allWarehouses {
      id
      name
      capacity
    }
  }
`;

export const WAREHOUSE_STOCK_MOVEMENTS = gql`
  query WarehouseStockMovements($warehouseId: String!) {
    getStockMovementsByWarehouse(warehouseId: $warehouseId) {
      id
      productId
      warehouseId
      quantity
      date
      type
      product {
        id
        name
        sizePerUnit
        isHazardous
      }
    }
  }
`;
