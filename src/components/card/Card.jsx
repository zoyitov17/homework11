import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import styles from "./Card.module.scss";

const Card = ({ product, cart, setCart }) => {
  const handleAddToCart = () => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  return (
    <div className={styles.card}>
      <img src={product.image_url} alt={product.product_name} />
      <h4>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </h4>
      <p>{product.description}</p>

      <div className={styles.colors}>
        {product.color_options.map((color, index) => (
          <div
            key={index}
            style={{
              background: color,
            }}
            className={styles.color}
          />
        ))}
      </div>

      <strong>{product.price}</strong>
      <div>
        <Button onClick={handleAddToCart}>
          <FaCartShopping />
          <span style={{ marginLeft: "0.8em" }}>Add to Cart</span>
        </Button>
      </div>
    </div>
  );
};

export default Card;
