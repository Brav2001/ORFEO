import { ArrowLeft} from "lucide-react";
import { noticiasData } from "@/utils/data/noticias-data"

const NoticiasDetail = ({ id }) => {
  const informe = noticiasData.find((i) => i.id === id);

  if (!informe) {
    return (
      <section
        className="blog-section"
        style={{
          backgroundColor: "var(--blog-bg-primary)",
          minHeight: "100vh",
          paddingTop: "5rem",
          paddingBottom: "3rem",
          textAlign: "center",
        }}
      >
        <div className="blog-container" style={{ width: "100%" }}>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "1rem",
              color: "var(--blog-text-primary)",
            }}
          >
            Publicación no encontrada
          </h1>
          <a
            href="/divulgacion"
            style={{
              color: "var(--blog-secondary)",
              textDecoration: "none",
              fontSize: "1.1rem",
            }}
            className="hover:underline"
          >
            Volver a divulgación
          </a>
        </div>
      </section>
    );
  }

  const handleComprar = () => {
    alert(
      `¡Gracias por tu interés en comprar el informe "${informe.titulo}"! Redirigiéndote al enlace de descarga.`,
    );
  };

  return (
    <section
      className="blog-section"
      style={{
        backgroundColor: "var(--blog-bg-primary)",
        minHeight: "100vh",
        paddingTop: "5rem",
        paddingBottom: "3rem",
      }}
    >
      <div className="blog-container" style={{ width: "100%" }}>
        {/* Breadcrumb / Volver*/}
        <a
          href="/noticias"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--blog-text-secondary)",
            textDecoration: "none",
            marginBottom: "2rem",
            marginTop: "5rem",
            fontSize: "0.95rem",
            transition: "var(--blog-transition)",
          }}
          className="hover:text-black"
        >
          <ArrowLeft size={18} />
          Volver a las noticias
        </a>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Columna izquierda - Imagen */}
            <div>
              <div
                style={{
                  width: "100%",
                  height: "500px",
                  overflow: "hidden",
                  backgroundColor: "var(--blog-bg-gray)",
                  border: "1px solid var(--blog-border-light)",
                  borderRadius: "var(--blog-radius-xl)",
                }}
              >
                <img
                  src={informe.imagen}
                  alt={informe.titulo}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(100%)",
                    borderRadius: "var(--blog-radius-xl)",
                  }}
                />
              </div>

              {/* Categorías debajo de la imagen */}
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  marginTop: "1.5rem",
                  flexWrap: "wrap",
                }}
              >
                {informe.categorias.map((categoria) => (
                  <span
                    key={categoria}
                    style={{
                      fontSize: "0.8rem",
                      padding: "0.4rem 1rem",
                      backgroundColor: "var(--blog-bg-gray)",
                      color: "var(--blog-text-primary)",
                      fontWeight: "500",
                      letterSpacing: "0.02em",
                      borderRadius: "var(--blog-radius-sm)",
                    }}
                  >
                    {categoria.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            {/* Columna derecha - Información */}
            <div>
              <h1
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  fontWeight: "700",
                  marginBottom: "1.5rem",
                  color: "var(--blog-text-primary)",
                  lineHeight: "1.2",
                  letterSpacing: "-0.01em",
                }}
              >
                {informe.titulo}
              </h1>

              <div
                style={{
                  marginBottom: "2.5rem",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    marginBottom: "1rem",
                    color: "var(--blog-text-primary)",
                  }}
                >
                  Descripción
                </h2>
                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: "1.8",
                    color: "var(--blog-text-secondary)",
                  }}
                >
                  {informe.descripcionLarga}
                </p>
              </div>

              <div
                style={{
                  marginBottom: "2.5rem",
                  padding: "1.5rem",
                  backgroundColor: "var(--blog-bg-secondary)",
                  border: "1px solid var(--blog-border-light)",
                  borderRadius: "var(--blog-radius-lg)",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    marginBottom: "0.75rem",
                    color: "var(--blog-text-primary)",
                    letterSpacing: "0.02em",
                  }}
                >
                  DETALLES DE LA PUBLICACIÓN
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.9rem",
                    }}
                  >
                    <span style={{ color: "var(--blog-text-muted)" }}>
                      Fecha de publicación:
                    </span>
                    <span
                      style={{
                        color: "var(--blog-text-primary)",
                        fontWeight: "500",
                      }}
                    >
                      {new Date(informe.fecha).toLocaleDateString("es-CO", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.9rem",
                    }}
                  >
                    <span style={{ color: "var(--blog-text-muted)" }}>
                      Formato:
                    </span>
                    <span
                      style={{
                        color: "var(--blog-text-primary)",
                        fontWeight: "500",
                      }}
                    >
                      PDF Digital
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.9rem",
                    }}
                  >
                    <span style={{ color: "var(--blog-text-muted)" }}>
                      Acceso:
                    </span>
                    <span
                      style={{
                        color: "var(--blog-text-primary)",
                        fontWeight: "500",
                      }}
                    >
                      Descarga inmediata
                    </span>
                  </div>
                </div>
              </div>

              {/* Botones redes sociales */}
              <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                {informe.link_instagram && (
                  <a
                    href={informe.link_instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "2.5rem",
                      height: "2.5rem",
                      backgroundColor: "#E1306C",
                      color: "white",
                      borderRadius: "50%",
                      fontSize: "1.25rem",
                    }}
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                )}
                {informe.link_lindekin && (
                  <a
                    href={informe.link_lindekin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "2.5rem",
                      height: "2.5rem",
                      backgroundColor: "#0077B5",
                      color: "white",
                      borderRadius: "50%",
                      fontSize: "1.25rem",
                    }}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                )}
                {informe.link_facebook && (
                  <a
                    href={informe.link_facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "2.5rem",
                      height: "2.5rem",
                      backgroundColor: "#1877F2",
                      color: "white",
                      borderRadius: "50%",
                      fontSize: "1.25rem",
                    }}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                )}
                {informe.link_x && (
                  <a
                    href={informe.link_x}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "2.5rem",
                      height: "2.5rem",
                      backgroundColor: "#000000", // Color negro para X (Twitter)
                      color: "#FFFFFF", // Texto blanco para contraste
                      borderRadius: "50%",
                      fontSize: ".9rem", // Ajustar tamaño del ícono para X
                    }}
                  >
                     <i className="fab fa-x-twitter"></i> {/* Ícono de X (Twitter) */}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default NoticiasDetail;
