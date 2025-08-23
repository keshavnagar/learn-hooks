import { useState } from "react";

const MultipleUseState = () => {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("blue");
  return (
    <>
      <h2 >My {brand} </h2>
      <h3>
        It is {color} {model} from {year}
      </h3>
    </>
  );
};
export default MultipleUseState;
