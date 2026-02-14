const News = () => {
  const news = [
    {
      title: "Ejemplo de publicación reciente",
      excerpt:
        "Análisis profundo sobre las tendencias del mercado financiero y su impacto en el sector solidario.",
      subtitle: "Finanzas · 5 min de lectura",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    },
    {
      title: "Estrategias de crecimiento organizacional",
      subtitle: "Estrategia · 8 min de lectura",
    },
    {
      title: "Innovación en consultoría empresarial",
      subtitle: "Consultoría · 6 min de lectura",
    },
    {
      title: "Panorama económico 2025",
      subtitle: "Economía · 4 min de lectura",
    },
  ];

  const featured = news[0];
  const recent = news.slice(1);

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
          NEWS
        </h2>

        {/* Layout de noticias */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/*  noticia destacada */}
          <article className="space-y-6">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-[260px] md:h-[320px] object-cover rounded-xl"
            />

            <div className="space-y-4">
              <p
                className="text-sm"
                style={{ color: "var(--blog-text-muted)" }}
              >
                {featured.subtitle}
              </p>

              <h3
                className="text-2xl md:text-3xl font-semibold leading-snug"
                style={{ color: "var(--blog-text-primary)" }}
              >
                {featured.title}
              </h3>

              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--blog-text-secondary)" }}
              >
                {featured.excerpt}
              </p>

              <button
                className="mt-4 px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
                style={{
                  backgroundColor: "var(--blog-secondary)",
                  color: "var(--blog-text-white)",
                }}
              >
                Leer artículo
              </button>
            </div>
          </article>

          {/* Noticias recientes */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">

            {recent.map((item, i) => (
              <article
                key={i}
                className="group cursor-pointer p-5 rounded-xl border transition hover:-translate-y-1 hover:shadow-md"
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
                    {item.subtitle}
                  </p>

                  <h4
                    className="text-base font-semibold leading-snug group-hover:opacity-80"
                    style={{ color: "var(--blog-text-primary)" }}
                  >
                    {item.title}
                  </h4>

                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--blog-secondary)" }}
                  >
                    Leer más →
                  </span>

                </div>
              </article>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
