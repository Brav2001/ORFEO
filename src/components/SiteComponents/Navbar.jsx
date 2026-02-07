import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "INICIO", href: "#inicio" },
    { name: "SERVICIOS", href: "#servicios" },
    { name: "ESTUDIOS", href: "#estudios" },
    { name: "BLOG", href: "#blog" },
    { name: "ACERCA DE", href: "#acerca-de" },
    { name: "CONTACTO", href: "#contacto" },
  ];

  return (
    <nav
      style={{
        backgroundColor: "var(--blog-bg-primary)",
        borderBottom: `1px solid ${isScrolled ? "var(--blog-border-light)" : "transparent"}`,
        transition: "var(--blog-transition)",
        boxShadow: isScrolled ? "0 2px 8px rgba(0,0,0,0.05)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="blog-container">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <a href="#inicio" className="flex flex-col items-start">
            <span
              style={{
                fontSize: "2rem",
                fontWeight: "300",
                color: "var(--blog-text-primary)",
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
                color: "var(--blog-text-primary)",
                marginTop: "0.1rem",
                fontWeight: "400",
              }}
            >
              JOSEBAYONA
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: "var(--blog-text-primary)",
                  transition: "var(--blog-transition)",
                  fontSize: "0.8rem",
                  fontWeight: "500",
                  letterSpacing: "0.05em",
                }}
                className="hover:opacity-60"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            style={{ color: "var(--blog-text-primary)" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden py-4 border-t"
            style={{ borderColor: "var(--blog-border-light)" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  color: "var(--blog-text-primary)",
                  display: "block",
                  padding: "0.75rem 0",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  letterSpacing: "0.05em",
                }}
                className="hover:opacity-60"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
