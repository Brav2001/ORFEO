import { ArrowLeft } from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import { noticiasData } from "@/utils/data/noticias-data";

const NoticiasDetail = ({ id }) => {
  const noticia = noticiasData.find((i) => i.id === id);

  const handleBack = () => {
    window.location.href = "/noticias";
  };

  const socialConfig = [
    {
      key: "link_instagram",
      icon: FaInstagram,
    },
    {
      key: "link_lindekin",
      icon: FaLinkedinIn,
    },
    {
      key: "link_facebook",
      icon: FaFacebookF,
    },
    {
      key: "link_x",
      icon: FaXTwitter,
    },
  ];

  if (!noticia) {
    return (
      <section className="min-h-screen bg-[var(--blog-bg-primary)] pt-28 pb-16">
        <div className="blog-container w-full text-center">
          <h1 className="text-3xl font-bold text-[var(--blog-text-primary)] mb-6">
            Publicación no encontrada
          </h1>

          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                       border border-[var(--blog-border-light)]
                       text-sm font-medium
                       text-[var(--blog-text-secondary)]
                       hover:text-[var(--blog-text-primary)]
                       hover:border-[var(--blog-text-primary)]
                       transition-all duration-300"
          >
            <ArrowLeft size={16} />
            Volver a noticias
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[var(--blog-bg-primary)] pt-28 pb-16">
      <div className="blog-container w-full">
        {/* Botón volver */}
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                     border border-[var(--blog-border-light)]
                     text-sm font-medium
                     text-[var(--blog-text-secondary)]
                     hover:text-[var(--blog-text-primary)]
                     hover:border-[var(--blog-text-primary)]
                     transition-all duration-300
                     cursor-pointer"
        >
          <ArrowLeft size={16} />
          Volver a noticias
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-start mt-10">
          {/* Imagen */}
          <div>
            <div className="w-full h-[480px] rounded-2xl overflow-hidden border border-[var(--blog-border-light)]">
              <img
                src={noticia.imagen}
                alt={noticia.titulo}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>

            {/* Categorías */}
            <div className="flex flex-wrap gap-2 mt-6">
              {noticia.categorias.map((categoria) => (
                <span
                  key={categoria}
                  className="text-xs px-3 py-1 rounded-full
                             bg-[var(--blog-bg-gray)]
                             text-[var(--blog-text-primary)]
                             font-medium tracking-wide"
                >
                  {categoria.toUpperCase()}
                </span>
              ))}
            </div>
            {/* Redes sociales */}
            {socialConfig.some((social) => noticia[social.key]) && (
              <div className="mt-12 border-t border-[var(--blog-border-light)] pt-8">
                <h3
                  className="text-xs font-semibold uppercase tracking-widest 
                   text-[var(--blog-text-secondary)] mb-6"
                >
                  Ver en redes
                </h3>

                <div className="flex gap-4">
                  {socialConfig.map((social) => {
                    const link = noticia[social.key];
                    if (!link) return null;

                    const Icon = social.icon;

                    return (
                      <a
                        key={social.key}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 flex items-center justify-center
                       rounded-full
                       border border-[var(--blog-border-light)]
                       text-[var(--blog-text-secondary)]
                       bg-transparent
                       hover:bg-[var(--blog-bg-gray)]
                       hover:text-[var(--blog-text-primary)]
                       transition-all duration-300
                       hover:scale-105
                       cursor-pointer"
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Información */}
          <div>
            <h1 className="text-4xl font-bold text-[var(--blog-text-primary)] leading-tight">
              {noticia.titulo}
            </h1>

            <div className="mt-8">
              <p className="text-base leading-relaxed text-[var(--blog-text-secondary)]">
                {noticia.texto}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticiasDetail;
