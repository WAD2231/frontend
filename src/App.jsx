import "./App.css";
import AdminLayout from "./layouts/admin/AdminLayout";
import Product from "@/pages/admin/Product";
function App() {
  return (
    <AdminLayout>
      <Product />
    </AdminLayout>
  );
}

export default App;
