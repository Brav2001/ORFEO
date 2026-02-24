import Login from "./Login";
import Dashboard from "./Dashboard";
import { validateSession } from "../../firebase/Auth";
import { useStore } from "../../utils/store";
import { useEffect } from "react";

const Admin = () => {
  const [logged] = useStore((state) => [state.logged]);

  useEffect(() => {
    validateSession();
  }, []);
  if (logged) {
    return <Dashboard />;
  } else {
    return <Login />;
  }
};

export default Admin;
