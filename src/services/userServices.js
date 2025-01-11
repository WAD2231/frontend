import api from "@/config/axios";

export const getMe = async () => {
  try {
    const res = await api.get(`/users/me`);
    return res;
  } catch (error) {
    return error;
  }
};

export const getAllUsers = async ({page, size, search}) => { 
  try {
    const res = await api.get(`/users?page=${page}&size=${size}`);
    return res;
  } catch (error) {
    return error;
  }
}
