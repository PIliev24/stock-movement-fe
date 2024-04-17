import { useTranslation } from "react-i18next";
import ProductsList from "../../components/products/ProductsList";
import { ProductForm } from "../../components/forms/ProductForm";
import { PATHS } from "../../data/constants";
import PageTitle from "../../components/common/PageTitle";

const Products = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle
        title={t("products")}
        navigateTo={PATHS.warehouses}
        btnText={t("warehouses")}
      />
      <div className="flex sm:flex-row flex-col gap-10">
        <ProductsList />
        <ProductForm />
      </div>
    </>
  );
};

export default Products;
