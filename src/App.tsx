
import './App.css'
import { Routes, Route } from "react-router-dom";
import Topheader from './components/Topheader';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';

import Signup from './pages/Signup';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Topheader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Homepage />} />
        <Route path="/about" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
