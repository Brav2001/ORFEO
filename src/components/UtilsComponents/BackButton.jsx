import { MdArrowBackIosNew } from "react-icons/md";

const BackButton = ({ href }) => {
  return (
    <a
      href={href}
      className=" border border-primary border-2 font-medium rounded-lg text-sm p-1.5  mr-2  bg-primary text-primary text-white duration-500 hover:scale-110"
    >
      <MdArrowBackIosNew size={20} />
    </a>
  );
};

export default BackButton;
