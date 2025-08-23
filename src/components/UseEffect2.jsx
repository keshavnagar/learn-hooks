import { useEffect, useState } from "react";

const UseEffect2 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    function clicked(){
      document.title = `${count} time`;
    }
    clicked();
  }, [count]);
  return (
    <>
      <h1>you clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Click to change the count</button>
    </>
  );
};

export default UseEffect2;
