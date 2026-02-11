import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const news = [
    {
      title: "Ejemplo de publicación reciente",
      excerpt:
        "Análisis profundo sobre las tendencias del mercado financiero y su impacto en el sector solidario.",
      subtitle: "Finanzas · 5 min de lectura",
    },
    {
      title: "Estrategias de crecimiento organizacional",
      excerpt:
        "Descubre las mejores prácticas para impulsar el desarrollo sostenible de tu organización.",
      subtitle: "Estrategia · 8 min de lectura",
    },
    {
      title: "Innovación en consultoría empresarial",
      excerpt:
        "Nuevos enfoques metodológicos para la transformación digital y operativa.",
      subtitle: "Consultoría · 6 min de lectura",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % news.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + news.length) % news.length);
  };

  return (
    <section
      id="blog"
      className="blog-section"
      style={{
        backgroundColor: "var(--blog-bg-primary)",
        minHeight: "100vh",
        paddingTop: "4rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="blog-container" style={{ width: "100%" }}>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 2.5rem)",
            fontWeight: "700",
            marginBottom: "3rem",
            color: "var(--blog-text-primary)",
            letterSpacing: "-0.01em",
          }}
        >
          NEWS
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Carrusel de noticias (lado izquierdo) */}
          <div className="relative overflow-hidden w-full">
            {/* Pista de slides con transición suave */}
            <div
              className="flex"
              style={{
                width: `${news.length * 100}%`,
                transform: `translateX(-${(currentSlide / news.length) * 100}%)`,
                transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                willChange: "transform",
              }}
            >
              {news.map((item, index) => (
                <div
                  key={index}
                  style={{
                    width: `${100 / news.length}%`,
                    flexShrink: 0,
                    paddingRight: "0.5rem",
                  }}
                >
                  <div className="space-y-6">
                    <h3
                      style={{
                        fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
                        fontWeight: "600",
                        color: "var(--blog-text-primary)",
                        lineHeight: "1.3",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "1rem",
                        color: "var(--blog-text-secondary)",
                        lineHeight: "1.7",
                      }}
                    >
                      {item.excerpt}
                    </p>

                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--blog-text-muted)",
                      }}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Controles de navegación */}
            <div className="flex items-center gap-6 mt-8">
              {/* Indicadores de puntos */}
              <div className="flex gap-2">
                {news.map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor:
                        currentSlide === index
                          ? "var(--blog-text-primary)"
                          : "var(--blog-border-light)",
                      border: "none",
                      cursor: "pointer",
                      transition: "var(--blog-transition)",
                    }}
                    aria-label={`Ir a noticia ${index + 1}`}
                  />
                ))}
              </div>

              {/* Botones de navegación */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid var(--blog-border-light)",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "var(--blog-transition)",
                    borderRadius: "var(--blog-radius-sm)",
                  }}
                  className="hover:bg-gray-50"
                  aria-label="Anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid var(--blog-border-light)",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "var(--blog-transition)",
                    borderRadius: "var(--blog-radius-sm)",
                  }}
                  className="hover:bg-gray-50"
                  aria-label="Siguiente"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Tarjeta destacada (lado derecho) */}
          <div
            style={{
              backgroundColor: "var(--blog-bg-gray)",
              padding: "2.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "350px",
              borderRadius: "var(--blog-radius-lg)",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
                  fontWeight: "600",
                  marginBottom: "1.5rem",
                  color: "var(--blog-text-primary)",
                  lineHeight: "1.3",
                }}
              >
                Ejemplo de publicación reciente
              </h3>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.7",
                  color: "var(--blog-text-secondary)",
                }}
              >
                Descubre nuestras últimas investigaciones y análisis sobre
                tendencias del sector.
              </p>
            </div>

            <button
              style={{
                backgroundColor: "var(--blog-secondary)",
                color: "var(--blog-text-white)",
                padding: "0.875rem 2rem",
                border: "none",
                cursor: "pointer",
                transition: "var(--blog-transition)",
                fontSize: "0.9rem",
                fontWeight: "500",
                alignSelf: "flex-start",
                marginTop: "2rem",
                borderRadius: "var(--blog-radius-sm)",
              }}
              className="hover:opacity-90"
            >
              Ver más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
