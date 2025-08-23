import OneUseState from "./components/OneUseState";
import MultipleUseState from "./components/MultipleUseState";
import MultiUseStateAlt from "./components/MultiUseStateAlt";
import UseEffect from "./components/UseEffect";
import UseEffect2 from "./components/UseEffect2";
const App = () => {
  return (
    <>
      <h1 className="text-2xl font-bold font-serif">Learn Hooks</h1>
      <OneUseState />
      <MultipleUseState />
      <MultiUseStateAlt />
      <UseEffect />
      <UseEffect2 />
    </>
  );
};

export default App;
