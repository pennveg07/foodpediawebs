import { PiHandWaving } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import DynamicLayout from "../components/layouts/DyanmicLayout";
import { apiRegister } from "../api/auth";
import { useUser } from "../contexts/AuthContext";
import { setToken } from "../libs/auth";

export default function Register() {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [data, setData] = useState<{
    email: string;
    password: string;
    username: string;
  }>({
    email: "",
    password: "",
    username: "",
  });
  const [errorInfo, setErrorInfo] = useState<string>("");
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const responseData: any = await apiRegister(data);
      setUser(responseData.data.username);
      setToken(responseData.data, navigate);
    } catch (error: any) {
      setErrorInfo("Error When Registering The User");
    }
  };

  return (
    <div className="h-screen max-w-screen">
      <DynamicLayout border={true}>
        <div className="flex justify-between py-6 mb-2 items-center">
          <Link to={"/"} className="text-2xl font-bold">
            Food Pedia
          </Link>
        </div>
      </DynamicLayout>
      <div className=" w-full flex justify-center items-center mt-20">
        <div className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-5/12 xl:w-3/12 flex flex-col gap-6">
          <p className="text-5xl tracking-widest">Logout</p>
          <p className="flex items-center gap-2">
            <span className="text-custom-orange">Hi,</span>{" "}
            {"Let's register now"}
            <PiHandWaving />
          </p>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <p className="mb-3">Username</p>
              <input
                type="text"
                className="py-3 px-4 w-full border-b border-neutral-600 outline-none"
                placeholder="E.g. Apen"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="mb-3">Email</p>
              <input
                type="text"
                className="py-3 px-4 w-full border-b border-neutral-600 outline-none"
                placeholder="E.g. apen@gmail.com"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="mb-3">Password</p>
              <input
                type="password"
                className="py-3 px-4 w-full border-b border-neutral-600 outline-none"
                placeholder="Enter your password"
                name="password"
                onChange={handleChange}
              />
            </div>
            {errorInfo != "" ? (
              <p className="text-center text-red-600">{errorInfo}</p>
            ) : (
              <></>
            )}
            <button
              type="submit"
              className="w-full bg-custom-orange py-3 rounded-md bg-[#673DE6] text-neutral-50"
            >
              Register
            </button>
          </form>
          <div className="flex gap-1 justify-center">
            Already have and account?{" "}
            <Link to={"/login"} className="text-[#673DE6]">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
