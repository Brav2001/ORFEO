import { ArrowLeft, ShoppingCart } from "lucide-react";
import { informesData } from "@/utils/data/informes";

const InformeDetail = ({ id }) => {
  const informe = informesData.find((i) => i.id === id);

  if (!informe) {
    return (
      <div className="min-h-screen bg-white">
        <div
          style={{
            paddingTop: "120px",
            paddingBottom: "4rem",
            textAlign: "center",
          }}
        >
          <div className="blog-container">
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                marginBottom: "1rem",
                color: "var(--blog-text-primary)",
              }}
            >
              Informe no encontrado
            </h1>
            <a
              to="/informes"
              style={{
                color: "var(--blog-secondary)",
                textDecoration: "none",
                fontSize: "1.1rem",
              }}
              className="hover:underline"
            >
              Volver al listado
            </a>
          </div>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleComprar = () => {
    alert(
      `Procesando compra de "${informe.titulo}" por ${formatPrice(informe.precio)}\n\nEsta es una demo. En producción, aquí se integraría con una pasarela de pagos.`,
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div
        style={{
          paddingTop: "120px",
          paddingBottom: "4rem",
        }}
      >
        <div className="blog-container">
          {/* Breadcrumb / Volver*/}
          <a
            href="/informes"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--blog-text-secondary)",
              textDecoration: "none",
              marginBottom: "2rem",
              fontSize: "0.95rem",
              transition: "var(--blog-transition)",
            }}
            className="hover:text-black"
          >
            <ArrowLeft size={18} />
            Volver a informes
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
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  color: "var(--blog-secondary)",
                  marginBottom: "2rem",
                }}
              >
                {formatPrice(informe.precio)}
              </div>

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
                  DETALLES DEL INFORME
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

              {/* Botón de comprar */}
              <button
                onClick={handleComprar}
                style={{
                  width: "100%",
                  padding: "1.25rem 2rem",
                  backgroundColor: "var(--blog-secondary)",
                  color: "var(--blog-text-white)",
                  border: "none",
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "var(--blog-transition)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  letterSpacing: "0.02em",
                }}
                className="hover:opacity-90"
              >
                <ShoppingCart size={22} />
                COMPRAR INFORME
              </button>

              <p
                style={{
                  marginTop: "1.5rem",
                  fontSize: "0.85rem",
                  color: "var(--blog-text-muted)",
                  textAlign: "center",
                  lineHeight: "1.6",
                }}
              >
                Al realizar la compra, recibirás un enlace de descarga inmediata
                en tu correo electrónico. Todos los precios incluyen IVA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformeDetail;
