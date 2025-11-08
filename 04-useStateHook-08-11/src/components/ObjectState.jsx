import React, { useState } from 'react'

function ObjectState() {
    const [user,setUser] = useState({name:"Karan",age:24})

    function ChangeObj(){
        // const newUser = {...user}
        // newUser.name = "Don"
        // newUser.age = 24;
        // setUser(newUser)
        setUser((prev)=> ({...prev, name : "King", age : 50}));
    }
  return (
    <div>
        <h1 className='p-2'>{user.name} , {user.age}</h1>
        <button type='submit' onClick={ChangeObj} className=' bg-blue-700 rounded-4xl p-2'>AddObject</button>
    </div>
  )
}

export default ObjectState