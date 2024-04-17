import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { QUERIES } from "../data/constants";
import { ADD_PRODUCT, DELETE_PRODUCT } from "../data/mutations";
import { ALL_PRODUCTS } from "../data/queries";
import { ProductSchemaType, productSchema } from "../data/schemas";
import { ProductDto } from "../dto/ProductDto";
import { useCustomMutation, useCustomQuery } from "./common";

export const useProducts = () => {
  const { data } = useCustomQuery<{ allProducts: ProductDto[] }>(ALL_PRODUCTS);

  const products = data?.allProducts ?? [];

  return products;
};

export const useProductsForm = () => {
  const { mutation: addProduct, loading } = useCustomMutation(
    ADD_PRODUCT,
    ALL_PRODUCTS,
    QUERIES.allProducts
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<ProductSchemaType>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit: SubmitHandler<ProductSchemaType> = async (data) => {
    try {
      await addProduct({
        variables: {
          createProductInput: {
            name: data.name,
            sizePerUnit: data.sizePerUnit,
            isHazardous: data.isHazardous,
          },
        },
      });
      toast.success("Product added successfully");
      reset();
    } catch (e: any) {
      toast.error(e.message || "Error adding product");
    }
  };

  return { onSubmit, register, handleSubmit, errors, control, loading };
};

export const useDeleteProduct = (id: string) => {
  const { mutation: deleteProduct } = useCustomMutation(
    DELETE_PRODUCT,
    ALL_PRODUCTS,
    QUERIES.allProducts
  );

  const handleDelete = async () => {
    try {
      await deleteProduct({
        variables: {
          id: id,
        },
      });
      toast.success("Product deleted successfully");
    } catch (e: any) {
      toast.error(e.message || "Error deleting product");
    }
  };

  return { handleDelete };
};
