import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ShoesList from "./components/ShoesList/ShoesList";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (shoe) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === shoe.id && item.selectedColor === shoe.selectedColor && item.selectedSize === shoe.selectedSize);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === shoe.id && item.selectedColor === shoe.selectedColor && item.selectedSize === shoe.selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...shoe, quantity: 1, price: shoe.price }];
      }
    });
  };
  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  return (
    <BrowserRouter>
      <Navbar cartItemCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shoes" element={<ShoesList onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveItem={handleRemoveItem} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
