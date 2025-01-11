import api from "@/config/axios";

const STATISTIC = "/statistic";

export const getCategoryStatistic = async () => { 
  try {
    const response = await api.get(`/products${STATISTIC}/category`);
    return response
  } catch (error) {
    return error
  }
}

export const getManufacturerStatistic = async () => { 
  try {
    const response = await api.get(`/products${STATISTIC}/manufacturer`);
    return response
  } catch (error) {
    return error
  }
}

export const getRevenueStatistic = async () => { 
  try {
    const response = await api.get(`/orders${STATISTIC}/revenue`);
    return response
  } catch (error) {
    return error
  }
}

export const getNewCustomerStatistic = async () => { 
  try {
    const response = await api.get(`/users/statistics/new-users`);
    return response
  } catch (error) {
    return error
  }
}

export const getBestSellingProductStatistic = async (limit) => { 
  try {
    const response = await api.get(`/orders/${STATISTIC}s/best-sellers?limit=${limit}`);
    return response
  } catch (error) {
    return error
  }
}

export const getTopCustomerStatistic = async (limit) => { 
  try {
    const response = await api.get(`/orders/${STATISTIC}s/top-customers?limit=${limit}`);
    return response
  } catch (error) {
    return error
  }
}

