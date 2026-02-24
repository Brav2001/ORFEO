import { useEffect, useState } from "react";

const Pagination = ({ page, data, items, setPage, setMin, setMax }) => {
  const [pages, setPages] = useState(1);
  const [buttons, setButtons] = useState(null);

  const handleChangePage = (value) => {
    if (value > 1 && value < pages) {
      setMax(value * items);
      setMin((value - 1) * items);
    } else if (value == pages) {
      setMax(data.length);
      setMin((value - 1) * items);
    } else {
      setMax(items);
      setMin(0);
    }
    setPage(value);
  };

  useEffect(() => {
    if (data) {
      const result = Math.ceil(data.length / items);
      const actual = [];
      for (let i = 1; i <= result; i++) {
        actual.push({ id: i });
      }
      if (result == 1) {
        setMax(data.length);
        setMin(0);
        setPage(1);
      }
      setPages(result);
      setButtons(actual);
    }
  }, [data]);

  return (
    <>
      {pages == 1 ? null : (
        <nav>
          <ul className="flex  items-center space-x-2 h-10 text-base">
            {buttons &&
              buttons.map((actual, index) => (
                <li key={index}>
                  <button
                    type="button"
                    className={`flex text-xs items-center justify-center px-3 py-2 border-2 rounded-lg hover:border-primary hover:text-white hover:bg-primary duration-200 font-bold cursor-pointer 
                    ${
                      page === actual.id
                        ? "border-primary text-white bg-primary"
                        : "bg-white "
                    }`}
                    onClick={() => handleChangePage(actual.id)}
                  >
                    {actual.id}
                  </button>
                </li>
              ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Pagination;
