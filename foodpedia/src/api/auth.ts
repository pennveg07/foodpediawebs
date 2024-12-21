import { axiosHttpRequest } from "../libs/api";

export const apiLogin = async (data: { email: string; password: string }) => {
  try {
    const responseData = await axiosHttpRequest({
      endpoint: `auth/signin`,
      body: {
        email: data.email,
        password: data.password,
      },
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    return responseData;
  } catch (error) {
    throw error;
  }
};

export const apiRegister = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const responseData = await axiosHttpRequest({
      endpoint: `auth/signup`,
      body: {
        username: data.username,
        email: data.email,
        password: data.password,
      },
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    return responseData;
  } catch (error) {
    throw error;
  }
};
