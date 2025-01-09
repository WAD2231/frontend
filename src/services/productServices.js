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
