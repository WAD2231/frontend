import api from "@/config/axios";

export const createOrder = async (order) => {
  try {
    const res = await api.post("/orders", order);
    return res;
  } catch (error) {
    return error.response;
  }
};

export const getOrderHistory = async (order, date, status, page, size) => {
  try {
    const res = await api.get(
      `/orders/history?order=${order}&date=${date}&status=${status}&page=${page}&size=${size}`
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

export const getAllOrders = async (sort, status, page, size) => {
  try {
    const res = await api.get(
      `/orders?sort=${sort}&status=${status}&page=${page}&size=${size}`
    );
    return res;
  } catch (error) {
    return error.response;
  }
};
