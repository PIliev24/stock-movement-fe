import { gql } from "@apollo/client";

export const ADD_PRODUCT = gql`
  mutation AddProduct($createProductInput: CreateProductInput!) {
    addProduct(createProductInput: $createProductInput) {
      id
      name
      sizePerUnit
      isHazardous
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: String!) {
    deleteProduct(id: $id) {
      name
      sizePerUnit
      isHazardous
    }
  }
`;

export const CREATE_STOCK_MOVEMENT = gql`
  mutation CreateStockMovement(
    $createStockMovementInput: CreateStockMovement!
  ) {
    createStockMovement(createStockMovementInput: $createStockMovementInput) {
      id
      quantity
      date
      type
    }
  }
`;
