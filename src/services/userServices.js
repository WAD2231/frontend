import api from "@/config/axios";

export const getMe = async () => {
  try {
    const res = await api.get(`/users/me`);
    return res;
  } catch (error) {
    return error;
  }
};
