import { useState } from "react";
import AllEbooksDashboard from "../EbooksDashboard/AllEbooksDashboard";
const Ebooks = () => {
  const [open, setOpen] = useState(false);
  const onclose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mt-4">
        <AllEbooksDashboard />
      </div>
    </>
  );
};

export default Ebooks;
