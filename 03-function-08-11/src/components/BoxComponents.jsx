import React from 'react'

function BoxComponents() {
  return (
    <div>
    <div onMouseMove={(e) => {console.log(e.clientY)}} className='box'>
      </div>
    </div>
  )
}

export default BoxComponents