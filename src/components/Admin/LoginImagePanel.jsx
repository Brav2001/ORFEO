const LoginImagePanel = () => {
  return (
    <section className="relative flex min-h-52 items-center justify-center overflow-hidden bg-slate-900 md:min-h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-700 opacity-95" />
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 right-0 h-60 w-60 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative z-10 flex w-full max-w-sm flex-col items-center gap-3 px-6 py-6 text-center text-white md:gap-6 md:px-10">
        <img
          className="h-auto w-24 drop-shadow-2xl md:w-40"
          src="/jb_logo.svg"
          alt="Logo Jose Bayona"
        />
        <div>
          <h2 className="text-xl font-semibold tracking-tight md:text-3xl">
            Panel administrativo
          </h2>
          <p className="mt-2 text-xs text-slate-200 md:mt-3 md:text-sm">
            Accede con tus credenciales para gestionar contenido y recursos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginImagePanel;
