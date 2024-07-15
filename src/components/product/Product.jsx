import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseURL = import.meta.env.VITE_BASE_URL;

const Product = ({ addToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProductById() {
      try {
        const response = await fetch(`${baseURL}/products/${productId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProductById();
  }, [productId]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <div>
      {product && (
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <strong>{product.price}</strong>
          <div>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
