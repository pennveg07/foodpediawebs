import DynamicLayout from "./DyanmicLayout";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/AuthContext";
import { unsetToken } from "../../libs/auth";

export default function Header() {
  const { user, setUser } = useUser();
  console.log("testing", user);
  const navigate = useNavigate();
  const handleLogout = () => {
    unsetToken();
    setUser("");
    navigate("/login");
  };
  return (
    <div className="shadow-md">
      <DynamicLayout border={true}>
        <div className="flex justify-between py-6 items-center px-4">
          <div className="text-2xl font-bold">Food Pedia</div>
          <div className="flex gap-8">
            <Link to={"/"}>Home</Link>
            <Link to={"/about-us"}>About us</Link>
            <Link to={"/menu"}>Search Food</Link>
            <Link to={"/profile"}>Profile</Link>
            {user != "" ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <Link to={"/login"}>Login</Link>
            )}
          </div>
        </div>
      </DynamicLayout>
    </div>
  );
}
