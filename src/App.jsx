import OneUseState from "./components/OneUseState";
import MultipleUseState from "./components/MultipleUseState";
import MultiUseStateAlt from "./components/MultiUseStateAlt";
import UseEffect from "./components/UseEffect";
import UseEffect2 from "./components/UseEffect2";
import Timer from "./components/Timer";
import Mount from "./components/Mount";
import { useState } from "react";
import SimpleUseEffect from "./components/SimpleUseEffect";
const App = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <h1 className="text-2xl font-bold font-serif">Learn Hooks</h1>
      <OneUseState />
      <MultipleUseState />
      <MultiUseStateAlt />
      <UseEffect />
      <UseEffect2 />
      <Timer />
      <Mount />
      <button onClick={() => setShow(!show)}>Toggle Mount Component</button>
      {show && <Mount />}
      <SimpleUseEffect/>
    </>
  );
};

export default App;
