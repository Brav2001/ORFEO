import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert("Mensaje enviado. Nos pondremos en contacto contigo pronto.");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contacto"
      className="blog-section"
      style={{
        backgroundColor: "var(--blog-bg-secondary)",
        minHeight: "100vh",
        paddingTop: "3rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="blog-container" style={{ width: "100%" }}>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 2.5rem)",
            fontWeight: "700",
            marginBottom: "2rem",
            color: "var(--blog-text-primary)",
            letterSpacing: "-0.01em",
          }}
        >
          CONTACTO
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Información de contacto */}
          <div className="space-y-5">
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.7",
                color: "var(--blog-text-secondary)",
              }}
            >
              ¿Tienes alguna pregunta o necesitas una consultoría? No dudes en
              ponerte en contacto con nosotros.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div
                  style={{
                    padding: "0.65rem",
                    backgroundColor: "var(--blog-bg-primary)",
                  }}
                >
                  <Mail
                    size={22}
                    style={{
                      color: "var(--blog-text-primary)",
                    }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--blog-text-muted)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:contacto@josebayona.com"
                    style={{
                      fontSize: "1rem",
                      color: "var(--blog-text-primary)",
                      textDecoration: "none",
                      fontWeight: "500",
                    }}
                    className="hover:underline"
                  >
                    contacto@josebayona.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  style={{
                    padding: "0.65rem",
                    backgroundColor: "var(--blog-bg-primary)",
                  }}
                >
                  <Phone
                    size={22}
                    style={{
                      color: "var(--blog-text-primary)",
                    }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--blog-text-muted)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Teléfono
                  </p>
                  <a
                    href="tel:+123456789"
                    style={{
                      fontSize: "1rem",
                      color: "var(--blog-text-primary)",
                      textDecoration: "none",
                      fontWeight: "500",
                    }}
                    className="hover:underline"
                  >
                    +1 234 567 89
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  style={{
                    padding: "0.65rem",
                    backgroundColor: "var(--blog-bg-primary)",
                  }}
                >
                  <MapPin
                    size={22}
                    style={{
                      color: "var(--blog-text-primary)",
                    }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--blog-text-muted)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Ubicación
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "var(--blog-text-primary)",
                      fontWeight: "500",
                    }}
                  >
                    Ciudad, País
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label
                htmlFor="nombre"
                style={{
                  display: "block",
                  marginBottom: "0.4rem",
                  fontSize: "0.875rem",
                  color: "var(--blog-text-primary)",
                  fontWeight: "500",
                }}
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "0.7rem 1rem",
                  border: "1px solid var(--blog-border-light)",
                  backgroundColor: "var(--blog-bg-primary)",
                  color: "var(--blog-text-primary)",
                  fontSize: "1rem",
                  outline: "none",
                  transition: "var(--blog-transition)",
                }}
                className="focus:border-gray-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  marginBottom: "0.4rem",
                  fontSize: "0.875rem",
                  color: "var(--blog-text-primary)",
                  fontWeight: "500",
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "0.7rem 1rem",
                  border: "1px solid var(--blog-border-light)",
                  backgroundColor: "var(--blog-bg-primary)",
                  color: "var(--blog-text-primary)",
                  fontSize: "1rem",
                  outline: "none",
                  transition: "var(--blog-transition)",
                }}
                className="focus:border-gray-400"
              />
            </div>

            <div>
              <label
                htmlFor="mensaje"
                style={{
                  display: "block",
                  marginBottom: "0.4rem",
                  fontSize: "0.875rem",
                  color: "var(--blog-text-primary)",
                  fontWeight: "500",
                }}
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={3}
                style={{
                  width: "100%",
                  padding: "0.7rem 1rem",
                  border: "1px solid var(--blog-border-light)",
                  backgroundColor: "var(--blog-bg-primary)",
                  color: "var(--blog-text-primary)",
                  fontSize: "1rem",
                  resize: "vertical",
                  outline: "none",
                  transition: "var(--blog-transition)",
                }}
                className="focus:border-gray-400"
              />
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: "var(--blog-secondary)",
                color: "var(--blog-text-white)",
                padding: "0.8rem 2.5rem",
                border: "none",
                cursor: "pointer",
                transition: "var(--blog-transition)",
                fontSize: "0.9rem",
                fontWeight: "500",
                marginTop: "0.5rem",
              }}
              className="hover:opacity-90"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
