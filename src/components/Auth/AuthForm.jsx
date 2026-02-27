import LoginForm from "./LoginForm";
import CodeForm from "./CodeForm";
import { useStore } from "../../utils/store";

const AuthForm = () => {
  // const [firstPass, captcha, number] = useStore((state) => [
  //   state.firstPass,
  //   state.captcha,
  //   state.number,
  // ]);

  return <LoginForm />;

  // if (firstPass === false) {
    
  // } else if (number === false) {
  //   return <CodeForm />;
  // }
};

export default AuthForm;
