import { BrowserRouter, Routes, Route } from "react-router-dom";
import Taskbar from "./components/taskbar";
import Home from "./components/Home";
import About from "./components/about";
import Cart from "./components/cart";
import Wishlist from "./components/Wishlist";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Taskbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Newsletter />
      <Footer />

    </BrowserRouter>
  );
}

export default App;