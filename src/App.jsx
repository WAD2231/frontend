import "./App.css";
import AdminLayout from "./layouts/admin/AdminLayout";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "@/routes/routes";
import { ThemeProvider } from "@/components/ThemeProvider";
import UserLayout from "./layouts/users/UserLayout";
import { getMe } from "@/services/userServices";
import routes from "@/config/routes";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <BrowserRouter>
        <AppContent user={user} setUser={setUser} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

function AppContent({ user, setUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getMe();
      if (res.status !== 200) {
        // navigate(routes.login);
      } else {
        setUser(res.data);
      }
    };
    fetchUser();
  }, [navigate]);

  return (
    <Routes>
      {user &&
        privateRoutes.map((route, index) => {
          let Layout = AdminLayout;
          const Page = route.components;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
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
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
