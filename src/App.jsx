import "./App.css";
import AdminLayout from "./layouts/admin/AdminLayout";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { privateRoutes, publicRoutes } from "@/routes/routes";
import { ThemeProvider } from "@/components/ThemeProvider";
import UserLayout from "./layouts/users/UserLayout";
import { getMe } from "@/services/userServices";
import { useEffect, useState } from "react";
import Spinner from "@/components/ui/Spinner";

function App() {
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <BrowserRouter>
        <AppContent
          user={user}
          setUser={setUser}
          checkingAuth={checkingAuth}
          setCheckingAuth={setCheckingAuth}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}
function AppContent({ user, setUser, checkingAuth, setCheckingAuth }) {
  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getMe();
        if (res.status === 200) {
          setUser(res.data);
        } else {
          console.warn("User not authenticated");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setCheckingAuth(false);
      }
    };
    fetchUser();
  }, [location.pathname, setUser, setCheckingAuth]);

  if (checkingAuth) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <Routes>
      {user &&
        user?.permission == 1 &&
        privateRoutes.map((route, index) => {
          let Layout = AdminLayout;
          const Page = route.components;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout user={user} setUser={setUser}>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      {publicRoutes.map((route, index) => {
        const Page = route.components;
        let Layout = UserLayout;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout user={user} setUser={setUser}>
                <Page user={user}/>
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}
export default App;
