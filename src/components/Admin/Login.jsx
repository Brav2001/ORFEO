import AuthForm from "../Auth/AuthForm";
import LoginImagePanel from "./LoginImagePanel";

const Login = () => {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl md:min-h-[640px] md:grid-cols-2">
          <LoginImagePanel />

          <section className="flex h-full items-center justify-center p-4 sm:p-8">
            <div className="w-full max-w-md">
              <AuthForm />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Login;
