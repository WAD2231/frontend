import { DarkModeProvider } from "@/components/DarkModeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

function UserLayout({
  user,
  children,
  setUser,
  cartItems,
  setCartItems,
  setIsOpenCart,
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        user={user}
        setUser={setUser}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setIsOpenCart={setIsOpenCart}
      />
      <div className="mt-20">{children}</div>
      <Footer />
    </div>
  );
}

export default UserLayout;
