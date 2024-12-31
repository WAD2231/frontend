import { DarkModeProvider } from "@/components/DarkModeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
// eslint-disable-next-line react/prop-types
function UserLayout({ children }) {
  return (
    <DarkModeProvider>
      <Header />
      <div className="App">{children}</div>
      <Footer />
    </DarkModeProvider>
  );
}

export default UserLayout;
