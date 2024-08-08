import firstImage from "../products/budweiser.jpg";
import secondImage from "../products/corona.jpg";
import thirdImage from "../products/miller-lite.png";
import fourthImage from "../products/modelo-especial.png";
import addIcon from "../icons/add-icon.svg";

const imageMap = {
  "/products/budweiser.jpg": firstImage,
  "/products/corona.png": secondImage,
  "/products/miller-lite.png": thirdImage,
  "/products/modelo-especial.png": fourthImage,
};

const ProductCard = ({ brand, image }) => {
  return (
    <article className="product-card">
      <h3 className="product-title">{brand}</h3>
      <img className="main-product-img" src={imageMap[image]} />
      <div className="product-info">
        <div className="product-price">$28.65</div>
        <img
          className=""
          src={addIcon}
          width="40px"
          height="40px"
          alt="add icon"
        />
      </div>
    </article>
  );
};

export default ProductCard;
