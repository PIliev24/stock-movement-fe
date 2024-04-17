import { FC } from "react";
import { Controller } from "react-hook-form";
import ProductSelect from "../products/ProductsSelect";
import { useTranslation } from "react-i18next";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useStockMovementForm } from "../../hooks/stockMovements";

interface Props {
  warehouseId: string;
}

const StockMovementForm: FC<Props> = ({ warehouseId }) => {
  const { t } = useTranslation();

  const { handleSubmit, onSubmit, register, control, errors } =
    useStockMovementForm(warehouseId);

  return (
    <div className="bg-gray-800 rounded-md p-4 border border-gray-400 w-full md:w-1/2">
      <h3 className="font-semibold text-2xl text-white">
        Create a stock movement
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label
            htmlFor="productId"
            className="block mb-1 text-sm font-medium text-gray-400"
          >
            Product
          </label>
          <ProductSelect register={register} />
          {errors.productId && (
            <p className="mt-2 text-sm text-red-600">
              {errors.productId.message}
            </p>
          )}
        </div>

        <div className="mb-2">
          <label
            htmlFor="quantity"
            className="block mb-1 text-sm font-medium text-gray-400"
          >
            Quantity
          </label>
          <Controller
            name="quantity"
            control={control}
            render={({ field }) => (
              <input
                type="number"
                {...field}
                onChange={(e) => field.onChange(parseFloat(e.target.value))}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              />
            )}
          />
          {errors.quantity && (
            <p className="mt-2 text-sm text-red-600">
              {errors.quantity.message}
            </p>
          )}
        </div>

        <div className="mb-2">
          <label
            htmlFor="type"
            className="block mb-1 text-sm font-medium text-gray-400"
          >
            Type
          </label>
          <select
            {...register("type")}
            className="px-4 py-2 rounded-md bg-gray-400"
          >
            <option value="import">Import</option>
            <option value="export">Export</option>
          </select>
          {errors.type && (
            <p className="mt-2 text-sm text-red-600">{errors.type.message}</p>
          )}
        </div>

        <div className="mb-8">
          <label
            htmlFor="date"
            className="block mb-1 text-sm font-medium text-gray-400"
          >
            Date of Movement
          </label>
          <Controller
            control={control}
            name="date"
            render={({ field }) => (
              <ReactDatePicker
                placeholderText="Select date"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                dateFormat="MMMM d, yyyy"
                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              />
            )}
          />
          {errors.date && (
            <p className="text-red-600 text-sm mt-2">{errors.date.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          {t("add_stock_movement")}
        </button>
      </form>
    </div>
  );
};

export default StockMovementForm;
