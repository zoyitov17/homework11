import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Product from "./components/product/Product";
import Cart from "./components/card/Card"; 

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex >= 0) {
      // If yes, update quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If no, add product with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <Router>
        <header>
          <nav className="navbar">
            <ul>
              <li>
                <NavLink activeClassName="activeLink" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeLink" to="/products">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeLink" to="/cart">
                  Cart ({cart.reduce((total, item) => total + item.quantity, 0)}
                  )
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products addToCart={addToCart} />} // Pass addToCart directly to Products component
          />
          <Route
            path="/products/:productId"
            element={<Product addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} />} // Pass cart state to Cart component
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
