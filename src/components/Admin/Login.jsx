import AuthForm from "../Auth/AuthForm";

const Login = () => {
  return (
    <main>
      <div className="h-screen flex flex-wrap items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center bg-white border-2 border-primary rounded-lg  md:flex-row md:max-w-5xl max-w-xl m-8 ">
            <img
              className="object-cover w-full  md:w-2/4"
              src="/jb_logo.svg"
              alt="logo Jose Bayona"
            />
            <div className="flex flex-col w-full  md:w-2/4 leading-normal">
              {/* <AuthForm /> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
