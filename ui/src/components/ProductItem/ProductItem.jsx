import { useEffect, useState } from "react";
import EllipsisText from "../EllipsisText";
import ProductOptions from "../ProductOptions/ProductOptions";
import { useLocation } from "react-router-dom";
import { useFetcher } from "../../hooks";
import firstImage from "../../products/budweiser.jpg";
import secondImage from "../../products/corona.jpg";
import thirdImage from "../../products/miller-lite.png";
import fourthImage from "../../products/modelo-especial.png";
import addToBagIcon from "../../icons/add-to-bag.svg";
import "./ProductItem.css";

const imageMap = {
  "/products/budweiser.jpg": firstImage,
  "/products/corona.png": secondImage,
  "/products/miller-lite.png": thirdImage,
  "/products/modelo-especial.png": fourthImage,
};

const ProductItem = () => {
  const location = useLocation();
  const productData = location.state || {};
  const [currentSku, setCurrentSku] = useState(productData?.skus?.[0].code);
  const [data, isLoading, setData] = useFetcher(`/api/products/${currentSku}`);

  useEffect(() => {
    const checkUpdatedStock = async () => {
      try {
        const response = await fetch(`/api/products/${currentSku}`);
        const data = await response.json();
        console.log("Check for updated stock...");
        setData(data);
      } catch (error) {
        console.error("error: ", error);
        window.alert("error: ", error);
      }
    };

    checkUpdatedStock();
    const intervalId = setInterval(checkUpdatedStock, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleVariantPrice = (variantCode) => {
    setCurrentSku(variantCode);
  };

  const handleAddToCart = () => {
    window.alert(
      `Adding "${productData.brand}" to the cart, price: $${(
        data.price / 100
      ).toFixed(2)}`
    );
  };

  return isLoading ? (
    <div className="loader-indicador">Loading...</div>
  ) : (
    <div className="product-detail-page">
      <img src={imageMap[productData.image]} width="240px" height="240px" />
      <div className="pdp-product-info">
        <div className="pdp-stock-info">
          <h2>{productData.brand}</h2>
          <span>
            Origin: {productData.origin} | Stock: {data.stock}
          </span>
        </div>
        <span className="pdp-variant-price">
          ${(data.price / 100).toFixed(2)}
        </span>
      </div>
      <div className="pdp-description">
        <h3>Description</h3>
        <EllipsisText text={productData.information} maxLength={260} />
      </div>
      <div className="pdp-product-variants">
        <ProductOptions
          skus={productData.skus}
          currentSku={currentSku}
          handleVariantPrice={handleVariantPrice}
        />
      </div>
      <div className="pdp-footer">
        <img src={addToBagIcon} width={"54px"} height={"54px"} />
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
