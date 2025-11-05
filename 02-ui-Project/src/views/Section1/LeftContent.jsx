import React from "react";
import { Icon } from "@iconify/react";

function LeftContent() {
  return (
    <div className="h-full flex flex-col justify-between w-1/4 m-2 ">
        <div className="p-6">
          <h1 className="mb-6 text-6xl text-4xl font-bold">
            Prospective <br /> <span >Customer</span> <br /> Segmentation
          </h1>
          <p>
            Films are produced by recording actual people and objects with
            cameras or by creating them using animation techniques and special
            effects. They comprise a series of individual frames, but when these
            images are shown rapidly in succession, the illusion of motion is
            given to the viewer.
          </p>
        </div>
        <div className="text-6xl">
          <Icon icon="akar-icons:arrow-up-right" />
        </div>
    </div>
  );
}

export default LeftContent;
