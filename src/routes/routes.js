import routes from "@/config/routes";
// Page
import Dashboard from "@/pages/admin/Dashboard";
import Product from "@/pages/admin/Product";
import Customer from "@/pages/admin/Customer";
import Order from "@/pages/admin/Order";
import Analytics from "@/pages/admin/Analytics";
import Support from "@/pages/admin/Support";
import Seller from "@/pages/admin/Seller";
import Setting from "@/pages/admin/Setting";

//Private Routes (for Admin)

const privateRoutes = [
  { path: routes.dashboard, components: Dashboard },
  { path: routes.product, components: Product },
  { path: routes.analytics, components: Analytics },
  { path: routes.customers, components: Customer },
  { path: routes.orders, components: Order },
  { path: routes.seller, components: Seller },
  { path: routes.supports, components: Support },
  { path: routes.settings, components: Setting },
];

//Private Routes (for User)
const publicRoutes = [];

export { publicRoutes, privateRoutes };
