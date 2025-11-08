import React from "react";

function btnComponent() {
  // const btnClick = () => {
  //   console.log("Function called");
  // }

  // function btnClick() {
  //   console.log("Function Called");
  // }

  // function mouseOver() {
  //   console.log("Function Mouse Called");
  // }
  return (
    <div>
      <h1>Hello, Karan</h1>
      <div>
        <button
          type="submit"
          className=" bg-blue-600 rounded-4xl p-2 mt-5"
          // onClick={btnClick}
          // onMouseEnter={mouseOver}
          onClick={function () {
            console.log("Function Called");
          }}
        >
          Add User
        </button>
      </div>
    </div>
  );
}

export default btnComponent;
