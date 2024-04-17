import { FC } from "react";
import { ALL_PRODUCTS } from "../../data/queries";
import { UseFormRegister } from "react-hook-form";
import { useProducts } from "../../hooks/product";
import { useTranslation } from "react-i18next";

type formType = {
  productId: string;
  quantity: number;
  date: Date;
  type: string;
};

interface Props {
  register: UseFormRegister<formType>;
}

const ProductSelect: FC<Props> = ({ register }) => {
  const { t } = useTranslation();
  const products = useProducts();

  return (
    <>
      <select
        {...register("productId")}
        className="px-4 py-2 mb-2 rounded-md bg-gray-400"
        defaultValue={""}
      >
        <option value="" disabled>
          {t("select_product")}
        </option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default ProductSelect;
