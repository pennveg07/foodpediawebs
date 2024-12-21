import Cookies from "universal-cookie";

const cookies = new Cookies();

export const setToken = (data: any, navigate: Function) => {
  if (typeof window === "undefined") {
    return;
  }

  cookies.set("username", data.username);
  cookies.set("jwt", data.jwt);

  navigate("/");
};

export const unsetToken = () => {
  if (typeof window === "undefined") {
    return;
  }
  cookies.remove("jwt");
  cookies.remove("username");
};

export const getTokenFromLocalCookie = () => {
  return cookies.get("jwt");
};
