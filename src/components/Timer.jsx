import { useState, useEffect, useRef } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // cleanup function
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>{seconds} seconds passed</h1>
     
    </>
  );
}

export default Timer;
