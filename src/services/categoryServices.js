import api from "@/config/axios";

const CATEGORY = "/categories";

export const getAllCategories = async () => {
  try {
    const res = await api.get(`${CATEGORY}`);
    return res;
  } catch (error) {
    return error;
  }
};

export const getManufacturers = async () => { 
  try {
    const res = await api.get(`/manufacturers`);
    return res;
  } catch (error) {
    return error;
  }
}