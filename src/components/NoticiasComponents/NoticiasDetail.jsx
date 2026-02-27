import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import { noticiasData } from "@/utils/data/noticias-data";

// We expect Astro to supply the `id` parameter from the dynamic route as a prop.
// This keeps the component framework‑agnostic and avoids parsing `window.location`.
const NoticiasDetail = ({ id }) => {
  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    // IDs in noticiasData are stored as strings, so normalize everything
    const idStr = id != null ? String(id) : null;

    // fallback: if we didn't receive a prop, parse from the URL segments
    let noticiaEncontrada = null;
    if (idStr) {
      noticiaEncontrada = noticiasData.find((item) => String(item.id) === idStr);
    } else {
      const path = window.location.pathname;
      const segments = path.split("/").filter(Boolean); // drop empty segments
      const last = segments[segments.length - 1];
      if (last) {
        noticiaEncontrada = noticiasData.find(
          (item) => String(item.id) === last,
        );
      }
    }

    setNoticia(noticiaEncontrada);
  }, [id]);

  const handleBack = () => {
    window.location.href = "/noticias";
  };

  const socialConfig = [
    { key: "link_instagram", icon: FaInstagram },
    { key: "link_lindekin", icon: FaLinkedinIn },
    { key: "link_facebook", icon: FaFacebookF },
    { key: "link_x", icon: FaXTwitter },
  ];

  if (!noticia) {
    return (
      <section className="min-h-screen pt-28 text-center">
        <h1 className="text-3xl font-bold mb-6">Publicación no encontrada</h1>

        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
        >
          <ArrowLeft size={16} />
          Volver a noticias
        </button>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-10"
        >
          <ArrowLeft size={16} />
          Volver a noticias
        </button>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <img
              src={noticia.imagen}
              alt={noticia.titulo}
              className="w-full h-[480px] object-cover rounded-2xl"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold">{noticia.titulo}</h1>

            <p className="mt-8 text-base leading-relaxed">{noticia.texto}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticiasDetail;
