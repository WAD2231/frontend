import "./App.css";
import AdminLayout from "./layouts/admin/AdminLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "@/routes/routes";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { DarkModeProvider } from './UI/DarkModeContext';

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <BrowserRouter>
        <Routes>
          {privateRoutes.map((route, index) => {
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
          <Route
            path="*"
            element={
              <DarkModeProvider>
                <Header />
                <div className="App">
                  <Routes>
                    {publicRoutes.map((route, index) => {
                      const Page = route.components;
                      return (
                        <Route
                          key={index}
                          path={route.path}
                          element={<Page />}
                        />
                      );
                    })}
                  </Routes>
                </div>
                <Footer />
              </DarkModeProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;