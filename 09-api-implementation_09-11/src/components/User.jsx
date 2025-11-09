import React, { useState } from "react";

function User() {
  const [user, setUser] = useState([]);

  async function DataGet() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const Data = await res.json();
    setUser(Data);
  }

  return (
    <div>
      <button type="submit" className=" bg-blue-700" onClick={DataGet}>
        Fetch
      </button>
      <div className="p-5">
        {/* {user.map(function(v,idx){
                return <div key={idx}>
                    <h1>{v.name}</h1>
                </div>
            })} */}

        {/* () inside arrow function → no need for return  */}
        {/* {user.map((v,idx) => ( 
                <div key={idx}>
                    <h1>{v.name}</h1>
                </div>
            ))} */}
        {/* {} inside arrow function → must use return */}
        {user.map((v, idx) => {
          return <div key={idx}>
            <h1>{v.name}</h1>
          </div>;
        })}
      </div>
    </div>
  );
}

export default User;
