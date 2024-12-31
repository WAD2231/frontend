import icon_search from "../assets/icon-search.png";
import icon_cart from "../assets/icon-cart.png";
import icon_heart from "../assets/icon-heart.png";
import { Link } from "react-router-dom";
import { useDarkMode } from "../UI/DarkModeContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
      <div className={darkMode ? "bg-gray-800" : "bg-[#000]"}>
        <div className="container mx-auto py-3 relative text-right">
          <select className="bg-transparent outline-none text-sm text-white">
            <option>English</option>
          </select>
          <p className="absolute font-light text-[#FAFAFA] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span className="font-semibold"> ShopNow</span>
          </p>
        </div>
      </div>
      <nav className="px-[130px]">
        <div className="container py-10 mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/">Exclusive</Link>
          </div>
          <div className="hidden md:flex text-lg font-medium space-x-8">
            <Link to="/" className="hover:underline transition-all duration-300">
              Home
            </Link>
            <Link to="/contact" className="hover:underline transition-all duration-300">
              Contact
            </Link>
            <Link to="/about" className="hover:underline transition-all duration-300">
              About
            </Link>
            <Link to="/sign-up" className="hover:underline transition-all duration-300">
              Sign Up
            </Link>
            <div className="relative group">
              <button className="hover:underline transition-all duration-1000">
                More
              </button>
              <ul className="absolute top-[120%] left-0 py-2 px-4 flex flex-col gap-2 bg-black dark:bg-gray-700 backdrop-blur-2xl bg-opacity-90 rounded-md text-white w-[180px] invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-50">
                <li className="hover:bg-gray-800 p-2 rounded-md cursor-pointer">
                  <Link to="/services">Services</Link>
                </li>
                <li className="hover:bg-gray-800 p-2 rounded-md cursor-pointer">
                  <Link to="/faq">FAQ</Link>
                </li>
                <li className="hover:bg-gray-800 p-2 rounded-md cursor-pointer">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="hover:bg-gray-800 p-2 rounded-md cursor-pointer">
                  <Link to="/terms-of-service">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            {/* Search Bar */}
            <div className={`gap-4 px-5 py-1 flex items-center rounded ${darkMode ? 'bg-gray-700' : 'bg-[#F5F5F5]'
              }`}>
              <input
                className={`w-full py-2 rounded-md bg-transparent outline-none ${darkMode ? 'placeholder-gray-400 text-white' : 'placeholder-gray-500'
                  }`}
                type="text"
                placeholder="What are you looking for?"
              />
              <button>
                <img className="w-9" src={icon_search} alt="Search" />
              </button>
            </div>
            <Link to="/wishlist">
              <button className={`text-2xl rounded-md ${darkMode ? 'text-white' : 'text-black'
                }`}>
                <img className="w-9" src={icon_heart} alt="Wishlist" />
              </button>
            </Link>

            {/* Cart Icon */}
            <Link to="/cart">
              <button className={`text-2xl rounded-md ${darkMode ? 'text-white' : 'text-black'
                }`}>
                <img className="w-9" src={icon_cart} alt="Cart" />
              </button>
            </Link>

            <div
              className={`relative w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${darkMode ? 'bg-gray-600' : 'bg-gray-300'
                }`}
              onClick={toggleDarkMode}>
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${darkMode ? "translate-x-6" : ""
                  }`}
              ></div>
            </div>
          </div>
        </div>
        <hr />
      </nav>
    </header>
  );
};

export default Header;
