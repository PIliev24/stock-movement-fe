import React from "react";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useProductsForm } from "../../hooks/product";

export const ProductForm: React.FC = () => {
  const { t } = useTranslation();

  const { handleSubmit, onSubmit, errors, register, control } =
    useProductsForm();

  return (
    <div className="text-black bg-gray-800 rounded-md p-4 border border-gray-400 w-full">
      <h3 className="font-semibold text-2xl text-white">
        {t("create_product")}
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-400"
          >
            {t("product_name")}
          </label>
          <input
            type="text"
            {...register("name")}
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="sizePerUnit"
            className="block mb-2 text-sm font-medium text-gray-400"
          >
            {t("size_per_unit")}
          </label>
          <Controller
            name="sizePerUnit"
            control={control}
            render={({ field }) => (
              <input
                type="number"
                {...field}
                onChange={(e) => field.onChange(parseFloat(e.target.value))}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          />
          {errors.sizePerUnit && (
            <p className="mt-2 text-sm text-red-600">
              {errors.sizePerUnit.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="isHazardous"
            className="block mb-1 text-sm font-medium text-gray-400"
          >
            {t("is_hazardous")}
          </label>
          <input
            type="checkbox"
            {...register("isHazardous")}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2  bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          {t("add_product")}
        </button>
      </form>
    </div>
  );
};
