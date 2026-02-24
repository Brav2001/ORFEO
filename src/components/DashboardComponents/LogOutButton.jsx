import { LogOut } from "../../firebase/Auth";
import { IoLogOut } from "react-icons/io5";

const LogOutButton = () => {
  const handleClick = () => {
    LogOut();
  };
  return (
    <a onClick={handleClick} className="flex items-center w-full">
      <IoLogOut size={25} />
      <span className="ms-3">Salir</span>
    </a>
  );
};

export default LogOutButton;
