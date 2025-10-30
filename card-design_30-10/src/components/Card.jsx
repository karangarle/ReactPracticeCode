import React from "react";
import { Icon } from "@iconify/react";

function Card() {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <div className="circle-image">
            <img
              className="image"
              src="https://i.pinimg.com/1200x/0a/06/60/0a06600cc3cedeb49280b54114c88ce6.jpg"
            />
          </div>
          <div className="save-tag">
            <label className="save">Save</label>
            <Icon
              icon="material-symbols:bookmark-outline"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="card-content">
          <div className="title-content">
            <h3>Amazon</h3>
            <p>5 days Ago</p>
          </div>
          <div className="des-content">
            <div>Senior ui/ux Designer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
