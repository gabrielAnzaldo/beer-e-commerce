import { Link } from "react-router-dom";

export const PLPHeader = ({ leftIcon, rightIcon, title }) => (
  <header className="products-header">
    {leftIcon.hasLink ? (
      <Link to={leftIcon.linkTo}>
        <img
          className="menu-icon"
          src={leftIcon.src}
          width={leftIcon.width}
          height={leftIcon.height}
          alt="menu icon"
        />
      </Link>
    ) : (
      <img
        className="menu-icon"
        src={leftIcon.src}
        width={leftIcon.width}
        height={leftIcon.height}
        alt="menu icon"
      />
    )}
    {title && <h1 className="header-title-navigation">Detail</h1>}
    <img
      className="logged-in-user"
      src={rightIcon.src}
      width={rightIcon.width}
      height={rightIcon.height}
      alt="logged in user"
    />
  </header>
);

export default PLPHeader;
