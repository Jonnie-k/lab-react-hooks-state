import { useState } from "react";
import { sampleProducts } from "./components/ProductList";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartItems, setCartItems] = useState([]);

  function handleToggleDarkMode() {
    setDarkMode(!darkMode);
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function handleAddToCart(product) {
    setCartItems([...cartItems, product]);
  }

  const filteredProducts =
    selectedCategory === "All"
      ? sampleProducts
      : sampleProducts.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>Shopping App</h1>

      <button onClick={handleToggleDarkMode}>
        Toggle {darkMode ? "Light" : "Dark"}
      </button>

      <select role="combobox" onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Fruits">Fruits</option>
        <option value="Bakery">Bakery</option>
      </select>

      <h2>Products</h2>

      {filteredProducts.length === 0 ? (
        <p>no products available</p>
      ) : (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name}
              <button
                data-testid={`product-${product.id}`}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      )}

      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} is in your cart</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;