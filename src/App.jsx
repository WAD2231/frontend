import "./App.css";
import AdminLayout from "./layouts/admin/AdminLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { privateRoutes } from "@/routes/routes";
function App() {
  return (
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
  );
}

export default App;
