import api from "@/config/axios";

const AUTH = "/auth";

export const login = async (body) => {
  try {
    const res = await api.post(`${AUTH}/login/local`, body);
    return res;
  } catch (error) {
    return error;
  }
};

export const loginFacebook = async (body) => {
  try {
    const res = await api.post(`${AUTH}/login/facebook`, body);
    return res;
  } catch (error) {
    return error;
  }
};

export const loginGoogle = async (body) => {
  try {
    const res = await api.post(`${AUTH}/login/google`, body);
    return res;
  } catch (error) {
    return error;
  }
};

export const register = async (body) => {
  try {
    const res = await api.post(`/users`, body);
    return res;
  } catch (error) {
    return error;
  }
};

export const getUser = async (headers) => {
  try {
    const res = await api.get(`/user/profile`, headers);
    return res;
  } catch (error) {
    return error;
  }
};
