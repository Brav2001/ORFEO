import Modal from "../DashboardComponents/Modal";
import EbookForm from "./EbookForm";
import ProgressBar from "../DashboardComponents/ProgressBar";
import { useEffect, useState } from "react";
import { getAllEbook } from "../../firebase/Firestore";
import { TbBookUpload } from "react-icons/tb";
import EbookFormEdit from "./EbookFormEdit";
import Pagination from "../UtilsComponents/Pagination";

const AllEbooksDashboard = () => {
  const [data, setData] = useState(null);
  const [dataFilter, setDataFilter] = useState(null);
  const [valueInput, setValueInput] = useState("");
  const [ebooks, setEbooks] = useState([]);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [docEdit, setDocEdit] = useState(null);
  const [page, setPage] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(12);

  const onclose = () => {
    setOpen(false);
  };

  const oncloseEdit = () => {
    setOpenEdit(false);
    setDocEdit(null);
  };

  const consultAllEbook = () => {
    const ebook = getAllEbook();
    ebook.then((result) => {
      setData(result.docs);
      setDataFilter(result.docs);
    });
    setValueInput("");
  };

  const handleChangeValueInput = (e) => {
    setValueInput(e.target.value);
  };

  useEffect(() => {
    consultAllEbook();
  }, []);

  useEffect(() => {
    const actual = [];
    if (data && data.length > 0) {
      data.forEach((doc) => {
        (doc.data().name.toLowerCase().includes(valueInput.toLowerCase()) ||
          doc.data().author.toLowerCase().includes(valueInput.toLowerCase())) &&
          actual.push(doc);
      });
      setMin(0);
      setMax(12 > actual.length ? actual.length : 12);
      setDataFilter(actual);
    }
  }, [valueInput]);

  useEffect(() => {
    const actual = [];

    if (dataFilter && dataFilter.length > 0) {
      try {
        if (dataFilter && dataFilter.length > 0)
          max > dataFilter.length ? dataFilter.length : max;
        for (let index = min; index < max; index++) {
          actual.push(
            <div
              className={`rounded-lg  w-full  mb-6 break-inside-avoid-column `}
              key={dataFilter[index].id}
            >
              <div
                className=" border-2 w-11/12 mx-auto rounded-lg aspect-video mb-4 hover:scale-105 hover:border-primary duration-200 p-4 cursor-pointer bg-white"
                onClick={() => handleClick(dataFilter[index])}
              >
                <div className="w-full ">
                  <p className="text-xl font-bold mb-4 text-center">
                    {dataFilter[index].data().name}
                  </p>
                </div>
                <div className="w-full aspect-[2/3]">
                  <img
                    src={dataFilter[index].data().frontPage}
                    alt={`img-${dataFilter[index].data().name}`}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          );
        }
      } catch (e) {
        console.error(e);
      }
    }
    setEbooks(actual);
  }, [dataFilter, page]);

  useEffect(() => {
    if (docEdit) {
      setOpenEdit(true);
    }
  }, [docEdit]);

  const handleClick = (value) => {
    setDocEdit(value);
  };

  return (
    <>
      <div className="flex items-center">
        <button
          id="modal-trigger"
          className="bg-white border border-primary border-2 font-medium rounded-lg text-sm p-1.5  mr-2  hover:bg-primary text-primary hover:text-white duration-500 "
          onClick={() => {
            setOpen(true);
          }}
        >
          <TbBookUpload size={28} />
        </button>
        <input
          type="text"
          id="name"
          name="name"
          className="bg-gray-50 border-2 placeholder-shown:border-gray-300 text-gray-900 text-sm px-5 py-2.5 rounded-lg focus:border-primary focus:border-2 focus:outline-none duration-200 w-full"
          placeholder="Nombre del E-book"
          value={valueInput}
          onChange={handleChangeValueInput}
          required
        />
      </div>
      <Modal hidden={open} onclose={onclose}>
        <EbookForm onclose={onclose} consultAllEbook={consultAllEbook} />
      </Modal>
      <Modal hidden={openEdit} onclose={oncloseEdit}>
        <EbookFormEdit
          onclose={oncloseEdit}
          doc={docEdit}
          consultAllEbook={consultAllEbook}
        />
      </Modal>
      <ProgressBar />
      <div className={`w-full columns-1 md:columns-2 lg:columns-3 mt-6  `}>
        {ebooks}
      </div>
      <div className="w-full flex flex-row flex-wrap justify-center mt-6">
        <Pagination
          page={page}
          data={dataFilter}
          items={12}
          setPage={setPage}
          setMin={setMin}
          setMax={setMax}
        />
      </div>
    </>
  );
};

export default AllEbooksDashboard;
