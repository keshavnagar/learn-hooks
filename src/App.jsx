import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("blue");
  return (
    <>
      <h1>Learn Hooks</h1>
      <p>My favorite color is {color}</p>
      <button onClick={() => setColor("yellow")}>
        change the color to yellow
      </button>
      <button onClick={() => setColor("green")}>
        change the color to green
      </button>
      <button onClick={() => setColor("red")}>change the color to red</button>
      <button onClick={() => setColor("black")}>
        change the color to black
      </button>
      <button onClick={() => setColor("white")}>
        change the color to white
      </button>
      <button onClick={() => setColor("blue")}>
        change the color to blue
      </button>
    </>
  );
};

export default App;
