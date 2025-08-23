import OneUseState from "./components/OneUseState";
import MultipleUseState from "./components/MultipleUseState";
import MultiUseStateAlt from "./components/MultiUseStateAlt";
import UseEffect from "./components/UseEffect";
import UseEffect2 from "./components/UseEffect2";
import Timer from "./components/Timer";
import Mount from "./components/Mount";
const App = () => {
  return (
    <>
      <h1 className="text-2xl font-bold font-serif">Learn Hooks</h1>
      <OneUseState />
      <MultipleUseState />
      <MultiUseStateAlt />
      <UseEffect />
      <UseEffect2 />
      <Timer/>
      <Mount/>
    </>
  );
};

export default App;
