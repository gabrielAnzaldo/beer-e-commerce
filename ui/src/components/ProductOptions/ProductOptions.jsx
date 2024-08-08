import styles from "./product-option.module.css";

const ProductOptions = ({ skus = [], currentSku, handleVariantPrice }) => {
  return (
    <>
      <h3>Size</h3>
      <div style={{ display: "flex" }}>
        {skus.map((item) => (
          <span
            className={`${styles.singleVariantOption} ${
              item.code === currentSku ? `${styles.selectedVariantOption}` : ""
            }`}
            key={item.code}
            onClick={() => handleVariantPrice(item.code)}
          >
            {item.name}
          </span>
        ))}
      </div>
    </>
  );
};

export default ProductOptions;
