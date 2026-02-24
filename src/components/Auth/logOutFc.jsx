import { useEffect } from "react";
import { LogOut } from "../../firebase/Auth";

const LogOutFc = () => {
  useEffect(() => {
    LogOut();
  }, []);
  return <div></div>;
};

export default LogOutFc;
