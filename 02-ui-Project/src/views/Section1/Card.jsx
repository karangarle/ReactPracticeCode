import { Icon } from "@iconify/react";
import React from "react";

function Card(props) {
    console.log(props.img);
    
  return (
    <div className="h-full shrink-0 w-80 overflow-hidden relative rounded-4xl">
      <img
        className=" h-full w-full object-cover"
        src={props.img}
      />
      <div className="absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between">
        <h2 className=" bg-white text-2xl font-bold rounded-full h-10 w-10 flex items-center justify-center">
          {props.id + 1}
        </h2>
        <div>
          <p className=" text-xl text-white leading-normal  mb-5">
            A working professional is someone who has a job that requires
            specific knowledge, skills, and training to earn a living
          </p>
          <div className=" flex justify-between gap-2">
            <button style={{backgroundColor:props.color}} className="text-white font-medium px-8 py-2 rounded-full">{props.tag}</button>
            <button style={{backgroundColor:props.color}} className="text-white font-medium px-8 py-2 rounded-full">
              <Icon icon="iconamoon:arrow-right-1-duotone" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
