import PDPHeader from "../components/GlobalHeader";
import ProductItem from "../components/ProductItem";
import backIcon from "../icons/back-icon.svg";
import dotsIcon from "../icons/icon-dots.svg";

const ProductDetail = () => {
  return (
    <main>
      <PDPHeader
        leftIcon={{
          src: backIcon,
          width: "40px",
          height: "40px",
          hasLink: true,
          linkTo: "/products",
        }}
        rightIcon={{ src: dotsIcon, width: "40px", height: "40px" }}
        title={"Detail"}
      />
      <section>
        <ProductItem />
      </section>
    </main>
  );
};

export default ProductDetail;
