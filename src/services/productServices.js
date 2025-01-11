import api from "@/config/axios";

const PRODUCTS = "/products";

export const getProducts = async ({current_page, page_size}) => {
  try {
    const res = await api.get(`${PRODUCTS}?current_page=${current_page}&page_size=${page_size}`);
    return res;
  } catch (error) {
    return error;
  }
};

export const getProduct = async (id) => { 
  try {
    const res = await api.get(`${PRODUCTS}/details?product_id=${id}`);
    return res;
  } catch (error) {
    return error;
  }
}

export const createProduct = async (product) => {
  try {
    const res = await api.post(`${PRODUCTS}/create`, product);
    return res;
  } catch (error) {
    return error;
  }
};

export const updateProduct = async (product, id) => { 
  try {
    const res = await api.put(`${PRODUCTS}/${id}`, product);
    return res;
  } catch (error) {
    return error;
  }
}