import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDarkMode } from "@/components/DarkModeContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Header = ({ user }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header
      className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}
    >
      <nav className="px-[130px]">
        <div className="container py-3 mx-auto flex justify-between items-center">
          <div className="flex items-center justify-between w-7/12">
            <div className="text-2xl font-bold">
              <Link to="/">Exclusive</Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <div
                className={`gap-4 w-96 px-5 py-1 flex items-center rounded ${
                  darkMode ? "bg-gray-700" : "bg-[#F5F5F5]"
                }`}
              >
                <input
                  className={`w-full py-2 rounded-md bg-transparent outline-none ${
                    darkMode
                      ? "placeholder-gray-400 text-white"
                      : "placeholder-gray-500"
                  }`}
                  type="text"
                  placeholder="What are you looking for?"
                />
                <button>
                  <Search
                    className={`h-4 w-4 ${
                      darkMode
                        ? "placeholder-gray-400 text-white"
                        : "placeholder-gray-500 text-gray-900"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex gap-6 items-center w-5/12 justify-end">
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart />
              </Button>
            </Link>
            <div
              className={`relative w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
                darkMode ? "bg-gray-600" : "bg-gray-300"
              }`}
              onClick={toggleDarkMode}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                  darkMode ? "translate-x-6" : ""
                }`}
              ></div>
            </div>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
            )}
          </div>
        </div>
        <hr />
      </nav>
    </header>
  );
};

export default Header;
