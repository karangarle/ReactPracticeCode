import React, { useState } from "react";

function BatchUpdate() {
  const [num, setNum] = useState(0);

  const BtnClick = () => {
    //Batch Update
    // setNum(10)
    // setNum(20)
    // setNum(30)

    // Solution
    setNum((prev) => (prev + 10))
    setNum((prev) => (prev + 20))
    setNum((prev) => (prev + 20))
    
  }
  return <div>
  <h1>{num}</h1>
  <button type='submit' onClick={BtnClick} className=' bg-blue-700 rounded-4xl p-2'>Add</button>
  </div>;
}

export default BatchUpdate;
