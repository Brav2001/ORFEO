const Footer = () => {
  return (
    <footer
      className="bg-jb-1 relative overflow-hidden"
      style={{
        color: "var(--blog-text-white)",
        paddingTop: "140px",
        paddingBottom: "3rem",
        borderTopLeftRadius: "var(--blog-radius-xl)",
        borderTopRightRadius: "var(--blog-radius-xl)",
      }}
    >
      {/* Onda SVG en la parte superior */}
      <div
        style={{
          position: "absolute",
          top: -1,
          left: 0,
          width: "100%",
          height: "120px",
          lineHeight: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            verticalAlign: "bottom",
          }}
        >
          <path d="M0,80 C360,150 1080,0 1440,80 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      {/* Texto testimonial centrado */}
      <div className="blog-container" style={{ marginBottom: "4rem" }}>
        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto 3rem",
            fontSize: "1.125rem",
            lineHeight: "1.7",
            color: "white",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          "Recibimos servicios de alta calidad que mejoraron nuestro modelo
          financiero y nuestras prácticas organizativas."
        </p>
      </div>

      <div className="blog-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo y descripción */}
          <div>
            <div className="flex flex-col items-start mb-4">
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: "300",
                  lineHeight: "0.9",
                  fontFamily: "serif",
                  letterSpacing: "-0.02em",
                }}
              >
                JB
              </span>
              <span
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  marginTop: "0.1rem",
                  fontWeight: "400",
                }}
              >
                JOSEBAYONA
              </span>
            </div>
            <p style={{ fontSize: "0.9rem", opacity: 0.8, lineHeight: "1.6" }}>
              Análisis estratégico y consultoría especializada
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: "600",
                marginBottom: "1.25rem",
                letterSpacing: "0.02em",
              }}
            >
              NAVEGACIÓN
            </h3>
            <ul className="space-y-2">
              {[
                "Inicio",
                "Servicios",
                "Estudios",
                "Blog",
                "Acerca de",
                "Contacto",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    style={{
                      fontSize: "0.9rem",
                      opacity: 0.8,
                      textDecoration: "none",
                      color: "inherit",
                      transition: "var(--blog-transition)",
                    }}
                    className="hover:opacity-100"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: "600",
                marginBottom: "1.25rem",
                letterSpacing: "0.02em",
              }}
            >
              SERVICIOS
            </h3>
            <ul className="space-y-2">
              {[
                "Análisis Financiero",
                "Consultoría Estratégica",
                "Investigación Aplicada",
              ].map((item) => (
                <li key={item}>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      opacity: 0.8,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: "600",
                marginBottom: "1.25rem",
                letterSpacing: "0.02em",
              }}
            >
              CONTACTO
            </h3>
            <div className="space-y-2">
              <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                contacto@josebayona.com
              </p>
              <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>+1 234 567 89</p>
              <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>Ciudad, País</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            paddingTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <p
            style={{ fontSize: "0.875rem", opacity: 0.7, textAlign: "center" }}
          >
            © {new Date().getFullYear()} JoseBayona. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
