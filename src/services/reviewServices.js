import api from "@/config/axios";

const REVIEWS = "/reviews";

export const getProductReviews = async ({ id, page, size }) => {
  try {
    const res = await api.get(`${REVIEWS}?id=${id}&page=${page}&size=${size}`);
    return res;
  } catch (error) {
    return error;
  }
};
