import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseURL = import.meta.env.VITE_BASE_URL;

const Product = ({ addToCart }) => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProductById() {
      const response = await fetch(`${baseURL}/products/${productId}`);
      const data = await response.json();
      setProduct(data);
    }

    fetchProductById();
  }, [productId]);

  return (
    <div>
      {product && (
        <>
          <h2>{product.name}</h2>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </>
      )}
    </div>
  );
};

export default Product;
