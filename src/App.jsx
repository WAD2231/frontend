import "./App.css";
import AdminLayout from "./layouts/admin/AdminLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { privateRoutes } from "@/routes/routes";
import { ThemeProvider } from "@/components/theme-provider";
function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <BrowserRouter>
        <div className="App">
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
                      <Page></Page>
                    </Layout>
                  }
                ></Route>
              );
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
