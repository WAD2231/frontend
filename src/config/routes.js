const ADMIN = "/admin";
const routes = {
  dashboard: `${ADMIN}/dashboard`,
  product: `${ADMIN}/products`,
  addProduct: `${ADMIN}/products/add`,
  editProduct: `${ADMIN}/products/edit`,
  detailProduct: `${ADMIN}/products/detail`,
  customers: `${ADMIN}/customers`,
  customerDetail: `${ADMIN}/customers/detail`,
  analytics: `${ADMIN}/analytics`,
  supports: `${ADMIN}/supports`,
  settings: `${ADMIN}/settings`,
  category: `${ADMIN}/category`,
  addCategory: `${ADMIN}/category/add`,
  orders: `${ADMIN}/orders`,
  orderDetail: `${ADMIN}/orders/detail`,
  
  // Client routes
  home: "/",
  wishlist: "/wishlist",
  cart: "/cart",
  productDetail: "/product-detail",
  contact: "/contact",
  about: "/about",
  signUp: "/sign-up",
  myAccount: "/my-account",
  checkout: "/checkout",
  login: "/login",
  notFound: "*"
};


export default routes;
