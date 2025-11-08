import React, { useState } from "react";

function CounterApp() {
  const [a, setA] = useState(0);

  function increaseNum() {
    setA(a + 1);
  }

  function DecreaseNum() {
    setA(a - 1);
  }

  function Increaseby50() {
    setA(a + 50);
  }
  return (
    <div>
      <h1>{a} </h1>
      <div className="flex gap-2 p-5">
        <div>
          <button
            type="submit"
            className=" bg-blue-700 rounded-4xl p-2"
            onClick={increaseNum}
            // onClick={() => {
            //   setA(a + 1);
            // }}
          >
            increase
          </button>
        </div>
        <div>
          <button
            type="submit"
            className=" bg-blue-700 rounded-4xl p-2"
            // onClick={() => {
            //   setA(a - 1);
            // }}
            onClick={DecreaseNum}
          >
            Decrease
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-700 rounded-4xl p-2"
            // onClick={() => {
            //   setA(a + 50);
            // }}
            onClick={Increaseby50}
          >
            Increaseby50
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterApp;
