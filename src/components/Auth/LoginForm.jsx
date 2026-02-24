import { useEffect, useState } from "react";
import { Login } from "/src/firebase/Auth.js";
import Alert from "../DashboardComponents/Alert";
import { RecaptchaVerifier } from "firebase/auth";
import { auth, validateSession } from "../../firebase/Auth";
import { useStore } from "../../utils/store";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState(null);
  const [messageAlert, setMessageAlert] = useState("");
  const [hide, setHide] = useState(true);

  const [captchaId, ChangeCaptchaId] = useStore((state) => [
    state.captchaId,
    state.ChangeCaptchaId,
  ]);

  useEffect(() => {
    validateSession();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (captchaId != captcha) {
      setMessageAlert("Debe validar el reCaptcha");
      setHide(false);
      return;
    }
    Login(email, password);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleHide = () => {
    setHide(true);
  };

  useEffect(() => {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",

      // Optional reCAPTCHA parameters.
      {
        size: "normal",
        callback: function (response) {
          // reCAPTCHA solved, you can proceed with
          // phoneAuthProvider.verifyPhoneNumber(...).
          console.log(recaptchaVerifier);
          ChangeCaptchaId(recaptchaVerifier);
          setMessageAlert("");
          setHide(true);
          onSolvedRecaptcha();
        },
        "expired-callback": function () {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
          setMessageAlert("Debe volver a validar el reCaptcha");
          setHide(false);
          ChangeCaptchaId(null);
        },
      }
    );

    recaptchaVerifier.render().then(function () {
      window.recaptchaWidgetId = "recaptcha-container";
    });

    setCaptcha(recaptchaVerifier);
  }, []);

  return (
    <div className=" p-4 bg-white  rounded-lg  sm:p-6 md:p-8 ">
      <form className="space-y-6" method="post" onSubmit={handleSubmit}>
        <h5 className="text-xl font-bold text-gray-900 text-center">
          INGRESA A LA PLATAFORMA
        </h5>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className=" bg-gray-50 border-2 placeholder-shown:border-gray-300 text-gray-900 text-sm rounded-lg focus:border-primary focus:border-2 focus:outline-none  block w-full p-2.5 focus:invalid:border-red-500 duration-200 "
            placeholder="ejemplo@ejemplo.com"
            value={email}
            onChange={handleChangeEmail}
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:border-primary focus:border-2 focus:outline-none  block w-full p-2.5 focus:invalid:border-red-500 duration-200"
            value={password}
            onChange={handleChangePassword}
            required
          />
        </div>
        <div className="w-full flex flex-col justify-center">
          <div id="recaptcha-container"></div>
          <Alert hide={hide} message={messageAlert} handleHide={handleHide} />
        </div>
        <button
          type="submit"
          className="w-full bg-white border border-primary border-2 font-bold rounded-lg px-5 py-2.5 mr-2 mb-2  hover:bg-primary hover:text-white duration-200"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
