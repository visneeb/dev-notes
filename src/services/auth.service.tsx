import { api } from "@/utils/axios";
import type { SignUpData } from "@/validations/schemas/signup.schema";
import type { LogInData } from "@/validations/schemas/login.schema";

export const register = async (data: SignUpData) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};

export const login = async (value: LogInData) => {
  const res = await api.post("/auth/login", value);

  const { access_token, refresh_token } = res.data;

  localStorage.setItem("access_token", access_token);
  localStorage.setItem("refresh_token", refresh_token);

  return res.data;
};

export const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};
