import { noticiasData } from "@/utils/data/noticias-data";
import { useEffect, useState } from "react";

const News = () => {
  const [currentPath, setCurrentPath] = useState("");
  const news = noticiasData;

  const featured = news[0];
  const recent = news.slice(1, 4);

  return (
    <section
      id="news"
      className="py-16"
      style={{ backgroundColor: "var(--blog-bg-primary)" }}
    >
      <div className="blog-container max-w-7xl mx-auto px-4">
        {/* Título */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-12"
          style={{ color: "var(--blog-text-primary)" }}
        >
          NOTICIAS RECIENTES
        </h2>

        {/* Layout de noticias */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/*  noticia destacada */}
          <article className="space-y-6">
            <img
              src={featured.imagen}
              alt={featured.titulo}
              className="w-full h-[260px] md:h-[320px] object-cover rounded-xl"
            />

            <div className="space-y-4">
              <p
                className="text-sm"
                style={{ color: "var(--blog-text-muted)" }}
              >
                {featured.descripcion}
              </p>

              <h3
                className="text-2xl md:text-3xl font-semibold leading-snug"
                style={{ color: "var(--blog-text-primary)" }}
              >
                {featured.titulo}
              </h3>

              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--blog-text-secondary)" }}
              >
                {featured.texto}
              </p>

              <a
                href={`/noticias/${featured.id}`}
                className="mt-4 inline-block px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
                style={{
                  backgroundColor: "var(--blog-secondary)",
                  color: "var(--blog-text-white)",
                }}
              >
                Leer artículo
              </a>
            </div>
          </article>

          {/* Noticias recientes */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {recent.map((item) => (
              <a
                href={`/noticias/${item.id}`}
                className="group p-5 rounded-xl border transition hover:-translate-y-1 hover:shadow-md block"
                style={{
                  backgroundColor: "var(--blog-bg-gray)",
                  borderColor: "var(--blog-border-light)",
                }}
              >
                <div className="space-y-3">
                  <p
                    className="text-xs"
                    style={{ color: "var(--blog-text-muted)" }}
                  >
                    {item.descripcion}
                  </p>

                  <h4
                    className="text-base font-semibold leading-snug group-hover:opacity-80"
                    style={{ color: "var(--blog-text-primary)" }}
                  >
                    {item.titulo}
                  </h4>

                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--blog-secondary)" }}
                  >
                    Leer más →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
