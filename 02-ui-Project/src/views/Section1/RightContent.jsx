import React from "react";
import Card from "./Card";

function RightContent(props) {
  return (
    <div id="right" className="flex gap-10 overflow-x-auto flex-nowrap h-full w-2/3 p-6">
        {
            props.users.map(function (e,idx){
                return <Card id={idx} color={e.color} img={e.img} tag={e.tag} />
            })
        }
    </div>
  );
}

export default RightContent;
