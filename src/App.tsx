
import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Topheader from './components/Topheader';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import About from './pages/About';
import Signup from './pages/Signup';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';

function App() {

  return (
    <>
      <Topheader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </>
  )
}

export default App
