import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home"
import Products from "./pages/Products"
import Navbar from "./Components/Navbar"
import { CartProvider } from "./contexts/CartContext"

function App() {
  return (
    <div className="min-h-screen bg-background pt-16 text-text-main">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            {/* <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/checkout" element={<Checkout />} /> */}
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
