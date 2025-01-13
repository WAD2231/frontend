import api from "@/config/axios";

export const getMe = async () => {
  try {
    const res = await api.get(`/users/me`);
    return res;
  } catch (error) {
    return error;
  }
};

export const getUserById = async (id) => {
  try {
    const res = await api.get(`/users/${id}`);
    return res;
  } catch (error) {
    return error;
  }
};

export const getAllUsers = async ({page, size, search}) => { 
  try {
    const res = await api.get(`/users?page=${page}&size=${size}&search=${search}`);
    return res;
  } catch (error) {
    return error;
  }
}

export const deleteUser = async (id) => {
  try {
    const res = await api.delete(`/users/${id}`);
    return res;
  } catch (error) {
    return error;
  }
}