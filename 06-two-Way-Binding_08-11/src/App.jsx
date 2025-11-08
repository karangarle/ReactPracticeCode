import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");

  function formHandler(e) {
    e.preventDefault();
    console.log("Form Submitted By",title);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          formHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Please Enter Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
