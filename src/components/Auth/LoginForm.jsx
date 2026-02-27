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

  const captchaId = useStore((state) => state.captchaId);
  const ChangeCaptchaId = useStore((state) => state.ChangeCaptchaId);

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

  const handleHide = () => {
    setHide(true);
  };

  useEffect(() => {
    const recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "normal",
      callback: function () {
        console.log(recaptchaVerifier);
        ChangeCaptchaId(recaptchaVerifier);
        setMessageAlert("");
        setHide(true);
        onSolvedRecaptcha();
      },
      "expired-callback": function () {
        setMessageAlert("Debe volver a validar el reCaptcha");
        setHide(false);
        ChangeCaptchaId(null);
      },
    });

    recaptchaVerifier.render().then(function () {
      window.recaptchaWidgetId = "recaptcha-container";
    });

    setCaptcha(recaptchaVerifier);
  }, []);

  return (
    <div className="rounded-xl bg-white p-4 sm:p-6">
      <form className="space-y-6" method="post" onSubmit={handleSubmit}>
        <h5 className="text-center text-2xl font-bold text-slate-900">
          JOSÉ BAYONA CONSULTORÍA
        </h5>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-900">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-lg border-2 border-slate-200 bg-slate-50 p-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:invalid:border-red-500"
            placeholder="ejemplo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-slate-900"
          >
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            className="block w-full rounded-lg border-2 border-slate-200 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-primary focus:outline-none focus:invalid:border-red-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex w-full flex-col justify-center gap-2">
          <div id="recaptcha-container"></div>
          <Alert hide={hide} message={messageAlert} handleHide={handleHide} />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg border-2 border-primary bg-white px-5 py-2.5 font-bold text-slate-900 transition-colors duration-200 hover:bg-primary hover:text-white"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
