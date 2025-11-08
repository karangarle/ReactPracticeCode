import React from 'react'

function App() {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submited");
  } 
  return (
    <div>
      <form onSubmit={(e)=> submitHandler(e)}>
        <input type='text' placeholder='Please Enter Name' />
        <button type='Submit' >Submit</button> 
      </form>
    </div>
  )
}

export default App