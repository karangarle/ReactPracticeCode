import React, { useState } from 'react'

function ArrayState() {
    const [num,setNum] = useState([10,20,30])

     function ChangeArr(){
        const newArr = [...num];
        newArr.push(50)
        setNum(newArr)
        console.log(newArr);
    }
    
  return (
    <div>
    <h1 className='p-2'>{num}</h1>
        <button type='submit' onClick={ChangeArr} className=' bg-blue-700 rounded-4xl p-2'>AddObject</button>
    </div>
  )
}

export default ArrayState