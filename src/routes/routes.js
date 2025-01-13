import routes from "@/config/routes";
// Page
import Dashboard from "@/pages/admin/Dashboard";
import Product from "@/pages/admin/Product/Product";
import AddProduct from "@/pages/admin/Product/AddProduct";
import EditProduct from "@/pages/admin/Product/EditProduct";
import Customer from "@/pages/admin/Customer/Customer";
import Category from "@/pages/admin/Category/Category";
import AddCategory from "@/pages/admin/Category/AddCategory";
import DetailProduct from "@/pages/admin/Product/DetailProduct";
import OrderDetail from "@/pages/admin/OrderDetail";
import CustomerDetail from "@/pages/admin/Customer/CustomerDetail";
import DetailCategory from "@/pages/admin/Category/DetailCategory";
import EditCategory from "@/pages/admin/Category/EditCategory";

// Client Pages
import Home from "@/pages/user/Home";
import Cart from "@/pages/user/Cart";
import ProductDetail from "@/pages/user/ProductDetail";
import Register from "@/pages/user/Register";
import Account from "@/pages/user/Account";
import Checkout from "@/pages/user/Checkout";
import Notfound from "@/pages/user/Notfound";
import Login from "@/pages/user/Login";
import ProductCategory from "@/pages/user/ProductCategory";
import SearchPage from "@/pages/user/Search";
import Profile from "@/pages/user/Profile";
import EditProfile from "@/pages/user/EditProfile";
import OrderDetailClient from "@/pages/user/OrderDetail";

//Private Routes (for Admin)

const privateRoutes = [
  { path: routes.dashboard, components: Dashboard },
  { path: routes.product, components: Product },
  { path: routes.addProduct, components: AddProduct },
  { path: `${routes.editProduct}/:id`, components: EditProduct },
  { path: `${routes.detailProduct}/:id`, components: DetailProduct },
  { path: routes.customers, components: Customer },
  { path: `${routes.customerDetail}/:id`, components: CustomerDetail },
  { path: `${routes.orderDetail}/:id`, components: OrderDetail },
  { path: routes.addCategory, components: AddCategory },
  { path: routes.category, components: Category },
  { path: `${routes.detailCategory}/:id`, components: DetailCategory },
  { path: `${routes.editCategory}/:id`, components: EditCategory },
];

//Private Routes (for User)
const publicRoutes = [
  { path: routes.home, components: Home },
  { path: routes.cart, components: Cart },
  { path: `${routes.productDetail}/:id`, components: ProductDetail },
  { path: routes.signUp, components: Register },
  { path: routes.myAccount, components: Account },
  { path: routes.checkout, components: Checkout },
  { path: routes.login, components: Login },
  { path: routes.search, components: SearchPage },
  { path: routes.profile, components: Profile },
  { path: routes.editProfile, components: EditProfile },
  { path: routes.notFound, components: Notfound },
  { path: `${routes.orderDetailClient}/:id`, components: OrderDetailClient },
  { path: `${routes.productCategory}/:id`, components: ProductCategory },

];

export { publicRoutes, privateRoutes };
