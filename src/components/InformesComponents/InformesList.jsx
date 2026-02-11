import { useState } from "react";
import { Search } from "lucide-react";
import { informesData } from "@/utils/data/informes";

const InformesList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filtrar informes según búsqueda
  const filteredInformes = informesData.filter(
    (informe) =>
      informe.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      informe.descripcionCorta
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      informe.categorias.some((cat) =>
        cat.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  // Paginación
  const totalPages = Math.ceil(filteredInformes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentInformes = filteredInformes.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // Formatear precio en pesos colombianos
  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);
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
          {/* Header */}
          <div style={{ marginBottom: "3rem" }}>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: "700",
                marginBottom: "1rem",
                color: "var(--blog-text-primary)",
                letterSpacing: "-0.01em",
              }}
            >
              INFORMES FINANCIEROS
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--blog-text-secondary)",
                maxWidth: "700px",
              }}
            >
              Accede a análisis especializados y estudios profundos sobre el
              sector solidario y financiero.
            </p>
          </div>

          {/* Buscador */}
          <div style={{ marginBottom: "3rem" }}>
            <div
              style={{
                position: "relative",
                maxWidth: "600px",
              }}
            >
              <Search
                size={20}
                style={{
                  position: "absolute",
                  left: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--blog-text-muted)",
                }}
              />
              <input
                type="text"
                placeholder="Buscar por título, descripción o categoría..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                  console.log(e.target.value);
                }}
                style={{
                  width: "100%",
                  padding: "0.875rem 1rem 0.875rem 3rem",
                  border: "2px solid var(--blog-border-light)",
                  fontSize: "1rem",
                  outline: "none",
                  transition: "var(--blog-transition)",
                }}
                className="focus:border-gray-400"
              />
            </div>
          </div>

          {/* Grid de informes */}
          <div
            className="grid md:grid-cols-2 gap-6"
            style={{ marginBottom: "3rem" }}
          >
            {currentInformes.map((informe) => (
              <a
                key={informe.id}
                href={`/informes/${informe.id}`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    border: "1px solid var(--blog-border-light)",
                    transition: "var(--blog-transition)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  className="hover:shadow-lg"
                >
                  {/* Imagen */}
                  <div
                    style={{
                      width: "100%",
                      height: "250px",
                      overflow: "hidden",
                      backgroundColor: "var(--blog-bg-gray)",
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
                        transition: "var(--blog-transition)",
                      }}
                      className="hover:scale-105"
                    />
                  </div>

                  {/* Contenido */}
                  <div
                    style={{
                      padding: "1.5rem",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Categorías */}
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        marginBottom: "1rem",
                        flexWrap: "wrap",
                      }}
                    >
                      {informe.categorias.slice(0, 3).map((categoria) => (
                        <span
                          key={categoria}
                          style={{
                            fontSize: "0.75rem",
                            padding: "0.25rem 0.75rem",
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

                    {/* Título */}
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        marginBottom: "0.75rem",
                        color: "var(--blog-text-primary)",
                        lineHeight: "1.3",
                      }}
                    >
                      {informe.titulo}
                    </h3>

                    {/* Descripción */}
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "var(--blog-text-secondary)",
                        lineHeight: "1.6",
                        marginBottom: "1.5rem",
                        flex: 1,
                      }}
                    >
                      {informe.descripcionCorta}
                    </p>

                    {/* Precio */}
                    <div
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        color: "var(--blog-secondary)",
                      }}
                    >
                      {formatPrice(informe.precio)}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Paginación */}
          {totalPages > 1 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--blog-border-light)",
                  backgroundColor: "white",
                  color: "var(--blog-text-primary)",
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                  opacity: currentPage === 1 ? 0.5 : 1,
                  transition: "var(--blog-transition)",
                }}
                className="hover:bg-gray-50"
              >
                Anterior
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    style={{
                      padding: "0.5rem 1rem",
                      border: "1px solid var(--blog-border-light)",
                      backgroundColor:
                        currentPage === page
                          ? "var(--blog-secondary)"
                          : "white",
                      color:
                        currentPage === page
                          ? "white"
                          : "var(--blog-text-primary)",
                      cursor: "pointer",
                      fontWeight: currentPage === page ? "600" : "400",
                      transition: "var(--blog-transition)",
                    }}
                    className="hover:bg-gray-50"
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--blog-border-light)",
                  backgroundColor: "white",
                  color: "var(--blog-text-primary)",
                  cursor:
                    currentPage === totalPages ? "not-allowed" : "pointer",
                  opacity: currentPage === totalPages ? 0.5 : 1,
                  transition: "var(--blog-transition)",
                }}
                className="hover:bg-gray-50"
              >
                Siguiente
              </button>
            </div>
          )}

          {/* No hay resultados */}
          {filteredInformes.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "4rem 2rem",
              }}
            >
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--blog-text-muted)",
                }}
              >
                No se encontraron informes que coincidan con tu búsqueda.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InformesList;
