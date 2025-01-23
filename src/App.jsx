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
      const existingItemIndex = prevItems.findIndex(
        item => item.id === shoe.id && item.selectedColor === shoe.selectedColor && item.selectedSize === shoe.selectedSize
      );
  
      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...shoe, quantity: 1, images: shoe.images }];
      }
    });
  };

  const handleRemoveItem = (shoeId, selectedColor, selectedSize) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        item => item.id === shoeId && item.selectedColor === selectedColor && item.selectedSize === selectedSize
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        if (updatedItems[existingItemIndex].quantity > 1) {
          updatedItems[existingItemIndex].quantity -= 1;
        } else {
          updatedItems.splice(existingItemIndex, 1);
        }
        return updatedItems;
      }
      return prevItems;
    });
  };

  return (
    <BrowserRouter>
     <Navbar cartItemCount={cartItems.length} />
  <div className="flex flex-col min-h-screen">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/shoes" element={<ShoesList onAddToCart={handleAddToCart} />} />
    <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveItem={handleRemoveItem} />} />
  </Routes>
  <Footer />
</div>
  </BrowserRouter>
  );
}

export default App;
