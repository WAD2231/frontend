import api from "@/config/axios";

const CART = "carts";

export const getCart = async () => {
  try {
    const res = await api.get(`/${CART}`);
    return res;
  } catch (error) {
    return error;
  }
};

export const addToCart = async (product_id) => {
  try {
    const res = await api.post(`/${CART}`, { product_id });
    return res;
  } catch (error) {
    return error;
  }
};

export const updateProductQuantity = async (product_id, quantity) => {
  try {
    const res = await api.put(`/${CART}/${product_id}`, { quantity });
    return res;
  } catch (error) {
    return error;
  }
};

export const deleteProduct = async (product_id) => {
  try {
    const res = await api.delete(`/${CART}/${product_id}`);
    return res;
  } catch (error) {
    return error;
  }
};
