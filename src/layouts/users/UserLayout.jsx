import { DarkModeProvider } from "@/components/DarkModeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

function UserLayout({ user, children, setUser }) {
  return (
    <DarkModeProvider>
      <div className="flex flex-col min-h-screen">
        <Header user={user} setUser={setUser} />
        <div className="mt-20">
          {children}
        </div>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default UserLayout;
