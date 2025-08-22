import { useEffect, useState } from "react";

const UseEffect = () => {
  const [input, setInput] = useState("");
  useEffect(() => {
    function demo() {
      console.log("hello world");
    }
    demo();
  }, [input]);

  return (
    <>
      <br />
      <br />
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
    </>
  );
};

export default UseEffect;
