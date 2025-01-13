import api from "@/config/axios";

export const createOrder = async (order) => {
  try {
    const res = await api.post("/orders", order);
    return res;
  } catch (error) {
    return error;
  }
};

export const getOrderHistory = async (order, date, status, page, size) => {
  try {
    const res = await api.get(
      `/orders/history?order=${order}&date=${date}&status=${status}&page=${page}&size=${size}`
    );
    return res;
  } catch (error) {
    return error;
  }
};

export const getAllOrders = async (sort, status, page, size) => {
  try {
    const res = await api.get(
      `/orders?sort=${sort}&status=${status}&page=${page}&size=${size}`
    );
    return res;
  } catch (error) {
    return error;
  }
};

export const getOrderById = async (id) => { 
  try {
    const res = await api.get(`/orders/detail/${id}`);
    return res;
  } catch (error) {
    return error
  }
}