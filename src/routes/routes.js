import routes from "@/config/routes";
// Page
import Dashboard from "@/pages/admin/Dashboard";
import Product from "@/pages/admin/Product/Product";
import AddProduct from "@/pages/admin/Product/AddProduct";
import EditProduct from "@/pages/admin/Product/EditProduct";
import Customer from "@/pages/admin/Customer";
import Order from "@/pages/admin/Order";
import Analytics from "@/pages/admin/Analytics";
import Support from "@/pages/admin/Support";
import Category from "@/pages/admin/Category";
import Setting from "@/pages/admin/Setting";
import DetailProduct from "@/pages/admin/Product/DetailProduct";
import OrderDetail from "@/pages/admin/OrderDetail";
import CustomerDetail from "@/pages/admin/CustomerDetail";

// Client Pages
import Home from "@/pages/user/Home";
import Wishlist from "@/pages/user/Wishlist";
import Cart from "@/pages/user/Cart";
import ProductDetail from "@/pages/user/ProductDetail";
import Contact from "@/pages/user/Contact";
import About from "@/pages/user/About";
import Register from "@/pages/user/Register";
import Account from "@/pages/user/Account";
import Checkout from "@/pages/user/Checkout";
import Notfound from "@/pages/user/Notfound";
import Login from "@/pages/user/Login";

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
  { path: routes.category, components: Category },
  { path: routes.supports, components: Support },
  { path: routes.settings, components: Setting },
];

//Private Routes (for User)
const publicRoutes = [
  { path: routes.home, components: Home },
  { path: routes.wishlist, components: Wishlist },
  { path: routes.cart, components: Cart },
  { path: routes.productDetail, components: ProductDetail },
  { path: routes.contact, components: Contact },
  { path: routes.about, components: About },
  { path: routes.signUp, components: Register },
  { path: routes.myAccount, components: Account },
  { path: routes.checkout, components: Checkout },
  { path: routes.login, components: Login },
  { path: routes.notFound, components: Notfound },
];

export { publicRoutes, privateRoutes };
