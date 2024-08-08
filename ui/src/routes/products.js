import ProductList from "../components/ProductList";
import PLPHeader from "../components/GlobalHeader";
import menuItem from "../icons/menu-icon.svg";
import user from "../icons/user.jpg";
import { useFetcher } from "../hooks";

const Products = () => {
  const [data, isLoading] = useFetcher("/api/products");

  return isLoading ? (
    <div className="loader-indicador">Loading...</div>
  ) : (
    <main>
      <PLPHeader
        leftIcon={{ src: menuItem, width: "24px", height: "24px" }}
        rightIcon={{ src: user, width: "40px", height: "40px" }}
      />
      <section>
        <span className="user-name">Hi Mr. Gabriel,</span>
        <h1 className="page-main-heading">Welcome back!</h1>
      </section>
      <ProductList data={data} />
    </main>
  );
};

export default Products;
