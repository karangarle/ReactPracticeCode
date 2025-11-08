import React from "react";

function InputComponent() {
  const btnClick = (value) => {
    console.log(value);
  };
  return (
    <div>
      <input
        // onChange={(e) => {console.log(e.target.value);}}
        // onChange={function btnClick(e){
        //   console.log(e.target.value)
        // }}

        onChange={function (e) {
          btnClick(e.target.value);
        }}
        className=" border-2 border-b-white rounded-4xl p-2"
        type="text"
        placeholder="Please Enter Name"
      />
    </div>
  );
}

export default InputComponent;
