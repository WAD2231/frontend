import routes from "@/config/routes";
// Page
import Dashboard from "@/pages/admin/Dashboard";
import Product from "@/pages/admin/Product/Product";
import AddProduct from "@/pages/admin/Product/AddProduct";
import EditProduct from "@/pages/admin/Product/EditProduct";
import Customer from "@/pages/admin/Customer/Customer";
import Order from "@/pages/admin/Order/Order";
import Analytics from "@/pages/admin/Analytics";
import Support from "@/pages/admin/Support";
import Category from "@/pages/admin/Category/Category";
import AddCategory from "@/pages/admin/Category/AddCategory";
import Setting from "@/pages/admin/Setting";
import DetailProduct from "@/pages/admin/Product/DetailProduct";
import OrderDetail from "@/pages/admin/Order/OrderDetail";
import CustomerDetail from "@/pages/admin/Customer/CustomerDetail";

//Private Routes (for Admin)

const privateRoutes = [
  { path: routes.dashboard, components: Dashboard },
  { path: routes.product, components: Product },
  { path: routes.addProduct, components: AddProduct },
  { path: `${routes.editProduct}/:id`, components: EditProduct },
  { path: `${routes.detailProduct}/:id`, components: DetailProduct },
  { path: routes.analytics, components: Analytics },
  { path: routes.customers, components: Customer },
  { path: `${routes.customerDetail}/:id`, components: CustomerDetail },
  { path: routes.orders, components: Order },
  { path: `${routes.orders}/:id`, components: OrderDetail },
  { path: routes.addCategory, components: AddCategory },
  { path: routes.category, components: Category },
  { path: routes.supports, components: Support },
  { path: routes.settings, components: Setting },
];

//Private Routes (for User)
const publicRoutes = [];

export { publicRoutes, privateRoutes };
