import { DarkModeProvider } from "@/components/DarkModeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

function UserLayout({user, children, setUser }) {
  return (
    <DarkModeProvider>
      <Header user={user} setUser={setUser}/>
      <div className="App">{children}</div>
      <Footer />
    </DarkModeProvider>
  );
}

export default UserLayout;
