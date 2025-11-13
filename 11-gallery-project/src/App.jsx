import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(1);

  const getPic = async () => {
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=20`
    );
    setData(res.data);
  };

  useEffect(() => {
    getPic();
  }, [index]);

  let printUserData = (
    <h3 className="text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      No User Available
    </h3>
  );

  if (data.length > 0) {
    printUserData = data.map((elem, idx) => (
      <div key={idx}>
        <a href={elem.url}>
          <div className="h-40 w-44 overflow-hidden rounded-xl">
            <img
              className=" h-full w-full object-cover"
              src={elem.download_url}
              width={50}
              height={50}
            />
          </div>
          <h2 className=" font-bold text-lg">{elem.author}</h2>
        </a>
      </div>
    ));
  }

  return (
    <div className="h-screen flex flex-col justify-between p-4 m-4">
      <div className="flex flex-wrap gap-5 ">{printUserData}</div>
      <div className="flex justify-center items-center gap-6 p-2 flex-wrap">
        <button
          className=" bg-orange-500 font-semibold active:scale-95 rounded-2xl w-20 cursor-pointer"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setData([]);
            }
          }}
        >
          Prev
        </button>
        <h1 className="">
          Page {index}
        </h1>
        <button
          className="px-4 py-2 text-sm sm:text-base bg-orange-500 font-semibold active:scale-95 rounded-2xl w-20 cursor-pointer"
          onClick={() => {
            setIndex(index + 1);
            setData([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
