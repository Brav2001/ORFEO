import { useEffect, useState, useRef } from "react";
import { useStore } from "../../utils/store";

const CodeForm = () => {
  const [ChangeNumber] = useStore((state) => [state.ChangeNumber]);

  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const inputRefs = Array.from({ length: 6 }, () => useRef(null));

  const handleChange = (index, value) => {
    value = value.replace(/[^0-9]/g, "");

    setVerificationCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[index] = value;
      return newCode;
    });

    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const areAllInputsFilled = () => {
    return verificationCode.every((code) => code !== "");
  };

  useEffect(() => {
    if (areAllInputsFilled()) {
      let code = "";
      verificationCode.map((value) => (code += value));
      ChangeNumber(code);
    }
  }, [verificationCode]);

  useEffect(() => {
    inputRefs[0].current.focus();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h5 className="text-xl font-bold text-gray-900 text-center">
        INGRESA EL CÓDIGO SMS
      </h5>
      <div className="flex flex-row items-center justify-center mx-2">
        {Array.from({ length: 6 }, (_, index) => (
          <input
            ref={inputRefs[index]}
            key={index}
            type="text"
            name={`number${index}`}
            id={`number${index}`}
            minLength={1}
            maxLength={1}
            value={verificationCode[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            className=" bg-gray-50 border-2 placeholder-shown:border-gray-300 text-gray-900 md:text-4xl text-center mx-2 my-4 p-0.5 rounded-lg focus:border-primary focus:border-2 focus:outline-none  block w-full  duration-200 "
            required
          />
        ))}
      </div>
    </div>
  );
};

export default CodeForm;
