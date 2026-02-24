import { useRef, useState } from "react";
import { uploadFrontPage, uploadPDF } from "../../firebase/Storage";
import { saveEbook } from "../../firebase/Firestore";
import { useStore } from "../../utils/store";

const EbookForm = ({ onclose, consultAllEbook }) => {
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setURL] = useState("");
  const [DOI, setDOI] = useState("");
  const [anio, setAnio] = useState("");
  const [ChangeLoading, ChangeLoadingValue, ChangeLoadingItem] = useStore(
    (state) => [
      state.ChangeLoading,
      state.ChangeLoadingValue,
      state.ChangeLoadingItem,
    ]
  );

  const imageRef = useRef(null);
  const pdfRef = useRef(null);

  const handleChangeImage = (e) => {
    if (e.target.files.length > 0) {
      const selectedImage = URL.createObjectURL(e.target.files[0]);
      setImage(selectedImage);
      setImageFile(e.target.files[0]);
    }
  };

  const handleChangePdf = (e) => {
    if (e.target.files.length > 0) {
      const selectedPdf = e.target.files[0];
      setPdf(selectedPdf);
    }
  };

  const resetInputsFiles = () => {
    imageRef.current.value = null;
    pdfRef.current.value = null;
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleChangeUrl = (e) => {
    setURL(e.target.value);
  };

  const handleChangeDOI = (e) => {
    setDOI(e.target.value);
  };

  const handleChangeAnio = (e) => {
    setAnio(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const frontPagePromise = await uploadFrontPage(imageFile);
    const pdfPromise = await uploadPDF(pdf);

    try {
      const [frontPageURL, pdfURL] = await Promise.all([
        frontPagePromise,
        pdfPromise,
      ]);
      ChangeLoadingItem("");
      await saveEbook(
        name,
        description,
        author,
        url,
        DOI,
        anio,
        frontPageURL.downloadURL,
        pdfURL.downloadURL,
        frontPageURL.refFile,
        pdfURL.refFile
      );

      ChangeLoadingValue(0);
      ChangeLoading(false);
      setAnio("");
      setAuthor("");
      setDOI("");
      setDescription("");
      setImage("");
      setImageFile(null);
      setName("");
      setPdf(null);
      setURL("");
      resetInputsFiles();
      consultAllEbook();
      onclose();
    } catch (error) {
      console.error("Error al subir imágenes o archivos PDF:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h5 className="text-xl font-bold text-gray-900 text-center">
        Registrar nuevo E-Book.
      </h5>
      <form
        action="#"
        method="POST"
        onSubmit={handleSubmit}
        className="w-full flex justify-center items-center"
      >
        <div className="flex flex-col md:flex-row mx-2 w-full">
          <div className="flex flex-col px-2 w-full md:w-2/5">
            <div className="w-full">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 "
                htmlFor="small_size"
              >
                Portada
              </label>
              <input
                className="block file:bg-primary file:border-none file:text-white w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none "
                id="small_size"
                onChange={handleChangeImage}
                ref={imageRef}
                type="file"
              ></input>
            </div>
            <div className="max-w-xs w-full ml-auto mr-auto aspect-square bg-slate-400 rounded-lg mb-2">
              {image && (
                <img
                  src={image}
                  alt="portada"
                  className="object-cover w-full h-full rounded-lg "
                />
              )}
            </div>
            <div className="w-full">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="default_size"
              >
                Archivo PDF
              </label>
              <input
                className="block file:bg-primary file:border-none file:text-white w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none "
                onChange={handleChangePdf}
                id="default_size"
                ref={pdfRef}
                type="file"
              ></input>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center px-2 w-full md:w-3/5">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 text-left"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className=" bg-gray-50 border-2 placeholder-shown:border-gray-300 text-gray-900 text-sm  my-2 px-0.5 rounded-lg focus:border-primary focus:border-2 focus:outline-none  block w-full  duration-200 "
                placeholder="Nombre del E-book"
                value={name}
                onChange={handleChangeName}
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="descript"
                className="block mb-2 text-sm font-medium text-gray-900 text-left"
              >
                Descripción
              </label>
              <textarea
                id="descript"
                name="descript"
                rows="2"
                placeholder="Descripción del E-book"
                className=" bg-gray-50 border-2 placeholder-shown:border-gray-300 text-gray-900 text-sm  px-0.5 my-2  rounded-lg focus:border-primary focus:border-2 focus:outline-none  block w-full  duration-200 "
                value={description}
                onChange={handleChangeDescription}
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="author"
                className="block mb-2 text-sm font-medium text-gray-900 text-left"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                className=" bg-gray-50 border-2 placeholder-shown:border-gray-300 text-gray-900 text-sm  my-2 px-0.5 rounded-lg focus:border-primary focus:border-2 focus:outline-none  block w-full  duration-200 "
                placeholder="Nombre del autor del E-book"
                value={author}
                onChange={handleChangeAuthor}
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="url"
                className="block mb-2 text-sm font-medium text-gray-900 text-left"
              >
                URL
              </label>
              <input
                type="text"
                id="url"
                name="url"
                className=" bg-gray-50 border-2 placeholder-shown:border-gray-300 text-gray-900 text-sm  my-2 px-0.5 rounded-lg focus:border-primary focus:border-2 focus:outline-none  block w-full  duration-200 "
                placeholder="URL del E-book"
                value={url}
                onChange={handleChangeUrl}
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="doi"
                className="block mb-2 text-sm font-medium text-gray-900 text-left"
              >
                DOI
              </label>
              <input
                type="text"
                id="doi"
                name="doi"
                className=" bg-gray-50 border-2 placeholder-shown:border-gray-300 text-gray-900 text-sm  my-2 px-0.5 rounded-lg focus:border-primary focus:border-2 focus:outline-none  block w-full  duration-200 "
                placeholder="DOI del E-book (opcional)"
                value={DOI}
                onChange={handleChangeDOI}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="anio"
                className="block mb-2 text-sm font-medium text-gray-900 text-left"
              >
                Año
              </label>
              <input
                type="text"
                id="anio"
                name="anio"
                className=" bg-gray-50 border-2 placeholder-shown:border-gray-300 text-gray-900 text-sm  my-2 px-0.5 rounded-lg focus:border-primary focus:border-2 focus:outline-none  block w-full  duration-200 "
                placeholder="Año de publicación del E-book"
                value={anio}
                onChange={handleChangeAnio}
                required
              />
            </div>
            <div className="w-full mt-8 flex justify-end ">
              <button
                type="submit"
                className="bg-white border border-primary border-2   font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  hover:bg-primary hover:text-white duration-500"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EbookForm;
