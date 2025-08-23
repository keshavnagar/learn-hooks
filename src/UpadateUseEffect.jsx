import { useEffect, useState } from "react";

const UpdateUseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`run this whenever you click button ${count}`);
  }, [count]);
  return (
    <>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 "
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update useEffect
      </button>
      <h1>{count}</h1>
    </>
  );
};
export default UpdateUseEffect;
