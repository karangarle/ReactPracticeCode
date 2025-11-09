import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function UserEffectHook() {
    const [a,setA] = useState(0)
    const [b,setB] = useState(0)

    useEffect(() => {
        console.log("Use Effect is Running..");
    }, [a])

    useEffect(()=> {
        console.log("Use Effect is Running.. Repeat");
    },[b])
    
  return (
    <div>
    <div className=' flex gap-2'>
    <h1>{a}</h1>
    <h1>{b}</h1>
    </div>
    <div className=' flex gap-22'>
    <button className='  bg-blue-600' onClick={() => setA( a + 1)}>SetA</button>
    <button type='submit' className=' bg-orange-500' onClick={()=> setB( b + 100)}>SetB</button>
    </div>
    </div>
  )
}

export default UserEffectHook