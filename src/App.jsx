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
  const [user, setUser] = useState({
    name: "Phi Ho",
    avatar:
      "https://res.cloudinary.com/dnrz2djhd/image/upload/v1732345477/awntumlaewyx3smdjbmf.jpg",
  });

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await getMe();
  //     if (res.status !== 200) {
  //       navigate(routes.login);
  //     } else {
  //       setUser(res.data);
  //     }
  //   };
  //   fetchUser();
  // }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <BrowserRouter>
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
                  <Layout user={user}>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
