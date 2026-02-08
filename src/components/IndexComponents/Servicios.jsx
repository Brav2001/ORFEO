import { TrendingUp, Lightbulb, FileSearch } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <TrendingUp size={56} strokeWidth={1.5} />,
      title: "ANÁLISIS FINANCIERO",
      description:
        "Evaluación integral en la salud financiera de las organizaciones del sector solidario y empresarial.",
    },
    {
      icon: <Lightbulb size={56} strokeWidth={1.5} />,
      title: "CONSULTORÍA ESTRATÉGICA",
      description:
        "Acompañamiento en procesos estratégicos y de transformación organizacional.",
    },
    {
      icon: <FileSearch size={56} strokeWidth={1.5} />,
      title: "INVESTIGACIÓN APLICADA",
      description:
        "Estudios de caso y análisis profundos con aplicabilidad práctica.",
    },
  ];

  return (
    <section
      id="servicios"
      className="blog-section"
      style={{
        backgroundColor: "var(--blog-bg-primary)",
        minHeight: "100vh",
        paddingTop: "5rem",
        paddingBottom: "3rem",
      }}
    >
      <div className="blog-container" style={{ width: "100%" }}>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 2.5rem)",
            fontWeight: "700",
            marginBottom: "4rem",
            color: "var(--blog-text-primary)",
            letterSpacing: "-0.01em",
          }}
        >
          SERVICIOS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                border: "1px solid var(--blog-border-light)",
                padding: "2.5rem 2rem",
                backgroundColor: "var(--blog-bg-primary)",
                transition: "var(--blog-transition)",
              }}
              className="hover:shadow-lg"
            >
              <div
                style={{
                  color: "var(--blog-text-primary)",
                  marginBottom: "1.5rem",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  color: "var(--blog-text-primary)",
                  letterSpacing: "0.02em",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.7",
                  color: "var(--blog-text-secondary)",
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
