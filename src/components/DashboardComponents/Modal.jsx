import { IoClose } from "react-icons/io5";
const Modal = ({ hidden, onclose, children }) => {
  return (
    <>
      {hidden && (
        <div
          className="fixed top-0 z-50 left-0 w-full h-full bg-black opacity-50"
          onClick={onclose}
        ></div>
      )}
      <div
        aria-hidden="true"
        className={`${
          !hidden && "hidden"
        }  fixed overflow-y-auto top-0 right-0 bottom-0  z-50 left-0 flex items-center justify-center`}
      >
        <div className="relative p-4 w-full max-w-5xl max-h-full">
          <div className="relative bg-white rounded-xl shadow-2xl">
            <div className="flex items-center justify-between  p-4 pb-0   ">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg p-2 justify-end items-center duration-500"
                onClick={onclose}
              >
                <IoClose size={20} />
              </button>
            </div>

            <div className="p-4 md:p-5 space-y-4">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
