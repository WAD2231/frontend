import qr from "@/assets/qr.png";
import { useDarkMode } from "@/components/DarkModeContext";

const Footer = () => {
  const { darkMode } = useDarkMode();
  
  return (
    <footer className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black py-12"}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Exclusive</h3>
            <p>Subscribe</p>
            <p className="text-sm">Get 10% off your first order</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black border border-white px-4 py-2 text-sm focus:outline-none dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300"
              />
              <button className="border border-white border-l-0 px-3 dark:border-gray-500">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor">
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Support</h3>
            <div className="space-y-2 text-sm">
              <p>111 Bijoy sarani, Dhaka,</p>
              <p>DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>

          {/* Account Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-300 dark:hover:text-gray-400">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 dark:hover:text-gray-400">
                  Login / Register
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 dark:hover:text-gray-400">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 dark:hover:text-gray-400">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 dark:hover:text-gray-400">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Link Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Quick Link</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-300 dark:hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 dark:hover:text-gray-400">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 dark:hover:text-gray-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 dark:hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Download App Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Download App</h3>
            <p className="text-xs">Save $3 with App New User Only</p>

            {/* QR Code */}
            <div className="flex gap-4">
              <img src={qr} alt="QR Code" />
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-gray-300 dark:hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300 dark:hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300 dark:hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.015 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.278.261 2.148.63 2.914.306.789.717 1.459 1.384 2.126s.717 1.072 1.384 1.384c.766.299 1.636.5 2.914.563 1.278.06 1.685.072 4.947.072 4.947s3.667-.015 4.947-.072c1.278-.063 2.148-.261 2.914-.563.789-.306 1.459-.717 2.126-1.384.666-.667 1.078-1.437 1.384-2.126.299-.766.5-1.636.563-2.914.057-1.278.072-1.685.072-4.947s-.015-3.667-.072-4.947c-.063-1.278-.261-2.148-.563-2.914-.306-.789-.717-1.459-1.384-2.126s-1.072-.717-1.384-1.384c-.766-.299-1.636-.5-2.914-.563-1.278-.057-1.685-.072-4.947-.072zM12 16.417c-2.472 0-4.417-1.944-4.417-4.417 0-2.472 1.944-4.417 4.417-4.417 2.472 0 4.417 1.944 4.417 4.417 0 2.472-1.944 4.417-4.417 4.417z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
