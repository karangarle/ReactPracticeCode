import React from 'react'

function App() {
  const pageScrolling = (page) => {
    if (page > 0) {
      console.log("Page Down");
    }else{
      console.log("Page Up");
      
    }
  }
  return (
    <div onWheel={(elem)=>{
      pageScrolling(elem.deltaY)
    }}>
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
    </div>
  )
}

export default App