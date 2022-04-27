import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [finalResult, setFinalResult] = useState("");
  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumTwo] = useState("");

  const multiply = (a, b) => {
    setFinalResult(a * b);
  };
  const subtract = (a, b) => {
    setFinalResult(a - b);
  };
  const add = (a, b) => {
    setFinalResult(a + b);
  };
  const divide = (a, b) => {
    setFinalResult(a / b);
  };
  useEffect(() => {
    setShowResult(finalResult);
  }, [finalResult]);

  const [showResult, setShowResult] = useState("");
  return (
    <div className="App">
      <div className="outer-box">
        <div className="calculation-space">{showResult}</div>
        <div className="all-keys">
          <div className="key-row">
            <div
              onClick={() =>
                numOne === ""
                  ? (setNumOne(7), setShowResult((pre) => pre + "7"))
                  : (setNumTwo(7), setShowResult((pre) => pre + "7"))
              }
            >
              7
            </div>
            <div
              onClick={() =>
                numOne === ""
                  ? (setNumOne(8), setShowResult((pre) => pre + "8"))
                  : (setNumTwo(8), setShowResult((pre) => pre + "8"))
              }
            >
              8
            </div>
            <div
              onClick={() =>
                numOne === ""
                  ? (setNumOne(9), setShowResult((pre) => pre + "9"))
                  : (setNumTwo(9), setShowResult((pre) => pre + "9"))
              }
            >
              9
            </div>
            <div
              onClick={() =>
                numOne !== "" && numTwo !== ""
                  ? multiply(numOne, numTwo)
                  : console.log("enter the values")
              }
            >
              *
            </div>
          </div>
          <div className="key-row">
            <div
              onClick={() =>
                numOne === ""
                  ? (setNumOne(4), setShowResult((pre) => pre + "4"))
                  : (setNumTwo(4), setShowResult((pre) => pre + "4"))
              }
            >
              4
            </div>
            <div
              onClick={() =>
                numOne === ""
                  ? (setNumOne(5), setShowResult((pre) => pre + "5"))
                  : (setNumTwo(5), setShowResult((pre) => pre + "5"))
              }
            >
              5
            </div>
            <div
              onClick={() =>
                numOne === ""
                  ? (setNumOne(6), setShowResult((pre) => pre + "6"))
                  : (setNumTwo(6), setShowResult((pre) => pre + "6"))
              }
            >
              6
            </div>
            <div
              onClick={() =>
                numOne !== "" && numTwo !== ""
                  ? subtract(numOne, numTwo)
                  : console.log("enter the values")
              }
            >
              -
            </div>
          </div>{" "}
          <div className="key-row">
            <div
              onClick={() =>
                numOne === ""
                  ? (setNumOne(1), setShowResult((pre) => pre + "1"))
                  : (setNumTwo(1), setShowResult((pre) => pre + "1"))
              }
            >
              1
            </div>
            <div
              onClick={() =>
                numOne === ""
                  ? (setNumOne(2), setShowResult((pre) => pre + "2"))
                  : (setNumTwo(2), setShowResult((pre) => pre + "2"))
              }
            >
              2
            </div>
            <div
              onClick={() =>
                numOne === ""
                  ? (setNumOne(3), setShowResult((pre) => pre + "3"))
                  : (setNumTwo(3), setShowResult((pre) => pre + "3"))
              }
            >
              3
            </div>
            <div
              onClick={() =>
                numOne !== "" && numTwo !== ""
                  ? add(numOne, numTwo)
                  : console.log("enter the values")
              }
            >
              +
            </div>
          </div>{" "}
          <div className="key-row">
            <div
              onClick={() =>
                numOne !== "" && numTwo !== ""
                  ? divide(numOne, numTwo)
                  : console.log("enter the values")
              }
            >
              /
            </div>
            <div
              onClick={() =>
                numOne === ""
                  ? (setNumOne(0), setShowResult((pre) => pre + "0"))
                  : (setNumTwo(0), setShowResult((pre) => pre + "0"))
              }
            >
              0
            </div>
            <div>.</div>
            {/* <div onClick={() => showResult()}>=</div> */}
            <div>=</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
