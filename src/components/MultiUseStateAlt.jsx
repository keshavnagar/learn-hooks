import { useState } from "react";

const MultiUseStateAlt = () => {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1234",
    color: "black",
  });

  return (
    <>
      <h1>My {car.brand}</h1>
      <h3>
        It is {car.color} {car.model} from {car.year}
      </h3>
    </>
  );
};
export default MultiUseStateAlt;
