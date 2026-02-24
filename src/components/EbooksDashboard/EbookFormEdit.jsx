import { useEffect, useState } from "react";
import { updatedFrontPage, updatedPDF } from "../../firebase/Storage";
import { deleteEbook, updateEbook } from "../../firebase/Firestore";
import { useStore } from "../../utils/store";
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import ConfirmModal from "../DashboardComponents/ConfirmModal";

const EbookFormEdit = ({ onclose, doc, consultAllEbook }) => {
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [pdf, setPdf] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setURL] = useState("");
  const [DOI, setDOI] = useState("");
  const [anio, setAnio] = useState("");
  const [edit, setEdit] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [ChangeLoading, ChangeLoadingValue, ChangeLoadingItem] = useStore(
    (state) => [
      state.ChangeLoading,
      state.ChangeLoadingValue,
      state.ChangeLoadingItem,
    ]
  );

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

  const valuesDefault = () => {
    if (doc) {
      setImage(doc.data().frontPage);
      setName(doc.data().name);
      setDescription(doc.data().description);
      setAuthor(doc.data().author);
      setURL(doc.data().URL);
      setDOI(doc.data().DOI);
      setAnio(doc.data().anio);
      setImageFile("");
      setPdf("");
    }
    setEdit(false);
  };

  const closeOpenModal = () => {
    setOpenModal(false);
  };

  const deletedEbook = async () => {
    await deleteEbook(doc);
    consultAllEbook();
    onclose();
    closeOpenModal();
  };

  useEffect(() => {
    valuesDefault();
  }, [doc]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const frontPagePromise = imageFile
        ? await updatedFrontPage(imageFile, doc.data().frontPageRef)
        : Promise.resolve({
            downloadURL: doc.data().frontPage,
            refFile: doc.data().frontPageRef,
          });

      const pdfPromise = pdf
        ? await updatedPDF(pdf, doc.data().PDFRef)
        : Promise.resolve({
            downloadURL: doc.data().PDF,
            refFile: doc.data().PDFRef,
          });
      ChangeLoadingItem("");

      const [frontPageURL, pdfURL] = await Promise.all([
        frontPagePromise,
        pdfPromise,
      ]);

      await updateEbook(
        doc.id,
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
      consultAllEbook();
      onclose();
    } catch (error) {
      console.error("Error al subir imágenes o archivos PDF:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <form
          action="#"
          method="POST"
          className="w-full flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row mx-2 w-full">
            <div className="flex flex-col px-2 w-full md:w-2/5">
              {edit && (
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
                    type="file"
                  ></input>
                </div>
              )}
              <div className="max-w-xs w-full ml-auto mr-auto aspect-square bg-slate-400 rounded-lg mb-2">
                {image && (
                  <img
                    src={image}
                    alt="portada"
                    className="object-cover w-full h-full rounded-lg "
                  />
                )}
              </div>
              {!edit && (
                <div className="w-full">
                  <a
                    href={doc ? doc.data().PDF : ""}
                    target="_blank"
                    className="bg-white border border-primary border-2 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 hover:bg-primary hover:text-white duration-200 block text-center w-full mt-4"
                  >
                    Ver PDF
                  </a>
                </div>
              )}
              {edit && (
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
                    type="file"
                  ></input>
                </div>
              )}
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
                  disabled={!edit}
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
                  disabled={!edit}
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
                  disabled={!edit}
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
                  disabled={!edit}
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
                  disabled={!edit}
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
                  disabled={!edit}
                  required
                />
              </div>

              {!edit && (
                <div className="w-full mt-8 flex justify-end ">
                  <button
                    type="button"
                    className="bg-white border border-primary border-2  text-primary font-medium rounded-lg text-sm p-1.5 mr-2 mb-2  hover:bg-primary hover:text-white duration-500"
                    onClick={() => {
                      setEdit(true);
                    }}
                  >
                    <FaPen size={25} />
                  </button>
                  <button
                    type="button"
                    className="bg-white border border-red-500 border-2  text-red-500 font-medium rounded-lg text-sm p-1.5 mr-2 mb-2  hover:bg-red-500 hover:text-white duration-500"
                    onClick={() => {
                      setOpenModal(true);
                    }}
                  >
                    <FaTrashAlt size={25} />
                  </button>
                </div>
              )}

              {edit && (
                <div className="w-full mt-8 flex justify-end ">
                  <button
                    type="submit"
                    className="bg-white border border-primary border-2 text-primary  font-medium rounded-lg text-sm p-1.5 mr-2 mb-2  hover:bg-primary hover:text-white duration-500"
                  >
                    <FaCheck size={25} />
                  </button>
                  <button
                    type="button"
                    className="bg-white border border-red-500 border-2  text-red-500 font-medium rounded-lg text-sm p-1.5 mr-2 mb-2  hover:bg-red-500 hover:text-white duration-500"
                    onClick={valuesDefault}
                  >
                    <FaTimes size={25} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
      <ConfirmModal
        hidden={openModal}
        text={"¿Estás seguro?"}
        onclose={closeOpenModal}
        onConfirm={deletedEbook}
      ></ConfirmModal>
    </>
  );
};

export default EbookFormEdit;
