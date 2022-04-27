import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumTwo] = useState("");
  const [operation, setOperation] = useState("");
  const [output, setOutput] = useState("");
  const operationsArr = ["+", "-", "*", "/"];
  let displaySymbols = ["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0"];
  const clearInputOutput = () => {
    setNumOne("");
    setOperation("");
    setNumTwo("");
    setOutput("");
  };
  const findOuput = () => {
    if (operation === "+") {
      setOutput(Number(numOne) + Number(numTwo));
      setNumOne("");
      setNumTwo("");
      setOperation("");
    } else if (operation === "-") {
      setOutput(Number(numOne) - Number(numTwo));
      setNumOne("");
      setNumTwo("");
      setOperation("");
    } else if (operation === "*") {
      setOutput(Number(numOne) * Number(numTwo));
      setNumOne("");
      setNumTwo("");
      setOperation("");
    } else if (operation === "/") {
      setOutput((Number(numOne) / Number(numTwo)).toFixed(4));
      setNumOne("");
      setNumTwo("");
      setOperation("");
    }
  };
  return (
    <div className="App">
      <div className="calculator-box">
        <div className="output-box">
          <div className="result-display">
            {output ? output : numOne ? numOne + operation + numTwo : 0}
          </div>
        </div>
        <div className="clear-screen" onClick={() => clearInputOutput()}>
          clear all
        </div>
        <div className="number-display-operations">
          <div className="number-display">
            {displaySymbols.map((item) => {
              return (
                <div
                  className="single-item"
                  key={item}
                  onClick={() =>
                    output
                      ? (setOutput(""), setNumOne((prev) => prev + item))
                      : operation
                      ? setNumTwo((prev) => prev + item)
                      : setNumOne((prev) => prev + item)
                  }
                >
                  {item}
                </div>
              );
            })}
            <div
              className="single-item"
              onClick={() =>
                numOne && numTwo
                  ? findOuput()
                  : console.log(`enter the input first`)
              }
            >
              =
            </div>
          </div>
          <div className="operations">
            {operationsArr.map((item) => {
              return (
                <div
                  key={item}
                  className="single-item"
                  onClick={() =>
                    numOne
                      ? setOperation(item)
                      : console.log(`select first number`)
                  }
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
