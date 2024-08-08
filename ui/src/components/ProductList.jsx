import { Link } from "react-router-dom";
import { handleize } from "../utils";
import ProductCard from "./ProductCard";

const ProductList = ({ data }) => {
  return (
    <>
      <h2 className="section-title">Our Products</h2>
      <section className="product-list">
        {data?.map((product) => (
          <Link
            key={product.id}
            to={`${product.id}-${handleize(product.brand)}`}
            state={product}
          >
            <ProductCard {...product} />
          </Link>
        ))}
      </section>
    </>
  );
};

export default ProductList;
