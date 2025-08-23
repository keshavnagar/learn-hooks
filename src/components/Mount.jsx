import { useState } from "react";

const Mount = () => {
  {
    console.log("Component now is mounted");
  }
  const [count, setCount] = useState(0);
  {
    console.log(`component re render ${count}`);
  }

  return (
    <>
      <h1>Hello Mount</h1>
      <button
        className="bg-amber-300 border-amber-700"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>{" "}
      {/*here is upadate phase whenever we click the button the component rerender*/}
      <h1>{count}</h1>
    </>
  );
};

export default Mount;
