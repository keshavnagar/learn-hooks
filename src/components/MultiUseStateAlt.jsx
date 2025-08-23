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
    <div>
      <h1>My {car.brand}</h1>
      <h3>
        It is {car.color} {car.model} from {car.year}
      </h3>
      <button onClick={()=>setCar(prevCar=>({...prevCar, color: "blue"}))}>Change Car Color</button>
    </div>
      
    </>
  );
};
export default MultiUseStateAlt;
