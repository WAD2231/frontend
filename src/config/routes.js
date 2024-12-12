const ADMIN = "/admin";
const routes = {
  // home: `/`,
  dashboard: `${ADMIN}/dashboard`,
  product: `${ADMIN}/products`,
  addProduct: `${ADMIN}/products/add`,
  editProduct: `${ADMIN}/products/edit/:id`,
  detailsProduct: `${ADMIN}/products/details/:id`,
  customers: `${ADMIN}/customers`,
  analytics: `${ADMIN}/analytics`,
  supports: `${ADMIN}/supports`,
  settings: `${ADMIN}/settings`,
  category: `${ADMIN}/category`,
  orders: `${ADMIN}/orders`,
};

export default routes;
