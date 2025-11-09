import React from "react";

function App() {

  // const handleStorage = () => {
  //   const user = "Karan";
  //   localStorage.setItem("user", user);
  //   const getUser = localStorage.getItem("user");
  //   console.log(getUser);
  // };

  function handleStorage (){
    // const user = {
    //   name : "Karan",
    //   age : 25
    // };
    // localStorage.clear();
    localStorage.setItem('token2',Math.random().toString(30).substring(2));
    // const userData  = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token')
    console.log(token);
  }

  return (
    <div>
      <button type="submit" className="" onClick={handleStorage}>
        Add Data
      </button>
    </div>
  );
}

export default App;
