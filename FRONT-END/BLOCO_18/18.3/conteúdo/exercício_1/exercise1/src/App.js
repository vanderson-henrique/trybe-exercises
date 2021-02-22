import { useState } from "react";
import RenderNumber from "./renderNumber";
import "./App.css";
import NumberContext from "./NumberContext";

function App() {
  const [number, setNumber] = useState(0);
  const [timer, settimer] = useState(4);

  const alterNumber = () => {
    const randomNumber = () => Math.floor(Math.random() * 100);
    setNumber(randomNumber);
  };

  const alterTimer = () => {
    if (timer >= 0) settimer(timer - 1);
  };

  const isDivisible = () => {
    if (number % 3 === 0 || number % 5 === 0) return true;
    else return false;
  };

  return (
    <NumberContext.Provider
      value={{ number, alterNumber, isDivisible, alterTimer, timer }}
    >
      <RenderNumber />
    </NumberContext.Provider>
  );
}

export default App;
