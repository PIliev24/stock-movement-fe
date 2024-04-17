import { FC } from "react";
import { ProductDto } from "../../dto/ProductDto";
import {
  faTrash,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDeleteProduct } from "../../hooks/product";
import { useTranslation } from "react-i18next";

interface Props {
  product: ProductDto;
}

const ProductCard: FC<Props> = ({ product }) => {
  const { t } = useTranslation();
  const { handleDelete } = useDeleteProduct(product.id);

  return (
    <div className="bg-gray-500 p-4 rounded-md w-full">
      <div className="flex justify-between w-full items-center">
        <h3 className="font-semibold text-2xl">{product.name}</h3>
        {product.isHazardous && (
          <FontAwesomeIcon size="lg" icon={faTriangleExclamation} />
        )}
      </div>
      <p className="text-lg text-gray-300 mb-2">{`${t("size_per_unit")}: ${
        product.sizePerUnit
      }`}</p>
      <button
        className="py-2 px-4 rounded-md bg-red-400 hover:bg-red-600 active:bg-red-800 group"
        onClick={handleDelete}
      >
        <span className="text-white font-sm font-medium mr-2">
          {t("delete")}
        </span>
        <FontAwesomeIcon
          icon={faTrash}
          className="text-red-200 group-hover:text-red-400 group-active:text-red-600"
        />
      </button>
    </div>
  );
};

export default ProductCard;
