import ProductCard from "./ProductCard";
import { useProducts } from "../../hooks/product";

const ProductsList = () => {
  const products = useProducts();

  return (
    <div className="gap-4 flex flex-col w-full h-80 overflow-scroll">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsList;
