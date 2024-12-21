import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Register from "./pages/Register";
import Account from "./pages/Account";
import Checkout from "./pages/Checkout";
import Notfound from "./pages/Notfound";
import Login from "./pages/Login";
import { DarkModeProvider } from './UI/DarkModeContext';

function App() {
  return (
    <>
     <DarkModeProvider>

      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product-detail' element={<ProductDetail />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/sign-up' element={<Register />} />
          <Route path='/my-account' element={<Account />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
        <Footer />
      </Router>
     </DarkModeProvider>
    </>
  );
}

export default App;
