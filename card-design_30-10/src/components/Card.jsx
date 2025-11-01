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
            <h3>
              Amazon <span>5 days Ago</span>
            </h3>
          </div>
          <div className="des-content">
            <h2>Senior ui/ux Designer</h2>
          </div>
          <div className="tag">
            <h5>Part Time</h5>
            <h5>Senior Level</h5>
          </div>
        </div>
        <hr />
        <div className="card-bottom">
          <div className="Left-Side">
            <p>150-220k</p>
            <span>Kochi,India</span>
          </div>
          <div className="right-side">
            <button type="submit">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
