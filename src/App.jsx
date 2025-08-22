import OneUseState from "./components/OneUseState";
import MultipleUseState from "./components/MultipleUseState";
import MultiUseStateAlt from "./components/MultiUseStateAlt";
import UseEffect from "./components/UseEffect";
const App = () => {
  return (
    <>
      <h1>Learn Hooks</h1>
      <OneUseState />
      <MultipleUseState />
      <MultiUseStateAlt />
      <UseEffect/>
    </>
  );
};

export default App;
