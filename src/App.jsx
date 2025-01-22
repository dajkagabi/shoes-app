import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import About from "./components/About/About";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
