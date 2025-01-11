const ADMIN = "/admin";
const routes = {
  dashboard: `${ADMIN}/dashboard`,
  product: `${ADMIN}/products`,
  addProduct: `${ADMIN}/products/add`,
  editProduct: `${ADMIN}/products/edit`,
  detailProduct: `${ADMIN}/products/detail`,
  customers: `${ADMIN}/customers`,
  customerDetail: `${ADMIN}/customers/detail`,
  category: `${ADMIN}/category`,
  addCategory: `${ADMIN}/category/add`,
  detailCategory: `${ADMIN}/category/detail`,
  editCategory: `${ADMIN}/category/edit`,
  orderDetail: `${ADMIN}/orders/detail`,
  
  // Client routes
  home: "/",
  wishlist: "/wishlist",
  cart: "/cart",
  productDetail: "/product-detail",
  signUp: "/sign-up",
  myAccount: "/my-account",
  checkout: "/checkout",
  login: "/login",
  notFound: "*"
};


export default routes;
