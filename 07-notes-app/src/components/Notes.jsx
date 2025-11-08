import React from "react";
import { useState } from "react";

function Notes() {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, des });
    setTask(copyTask);
    setTitle("");
    setDes("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen lg:flex">
      <form
        className="items-start p-10 lg:w-1/2"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className="flex flex-col w-full">
          <input
            type="text"
            placeholder="Enter Notes Here.."
            className="px-5 border-2 rounded w-full outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Enter Details.."
            className="px-5 border-2 rounded w-full h-50 "
            value={des}
            onChange={(e) => setDes(e.target.value)}
          />
        </div>
        <div className="">
          <button
            type="submit"
            className="px-5 py-2 bg-white text-black w-full font-bold active:scale-95"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="lg:w-1/2 p-10 lg:border-l-2 flex-wrap ">
        <h1 className="text-xl font-bold pl-10">Your Notes</h1>
        <div className="pl-10 mt-5 scroll-remove flex flex-wrap h-full gap-2 overflow-auto justify-start">
          {task.map(function (v, idx) {
            return (
              <div
                key={idx}
                className="flex flex-col justify-between h-52 w-40 rounded-2xl bg-white text-black p-2 bg-cover bg-[url('https://img.freepik.com/premium-psd/blank-lined-paper-notepad_1275358-15.jpg?semt=ais_hybrid&w=740&q=80')]"
              >
                <div className="p-4">
                  <h1 className="font-bold leading-tight text-sm">
                    Title :{" "}
                    <span className="leading-tight font-normal text-sm">
                      {v.title}
                    </span>
                  </h1>
                  <p className=" leading-tight font-bold text-sm">
                    Details :{" "}
                    <span className="leading-tight font-normal text-sm">
                      {v.des}
                    </span>
                  </p>
                </div>
                <button
                  type="button"
                  className="cursor-pointer active:scale-95 bg-red-400 justify-center"
                  onClick={() => deleteNote(idx)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Notes;
