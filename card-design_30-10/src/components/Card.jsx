import React from "react";
import { Icon } from "@iconify/react";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <div className="circle-image">
            <img
              className="image"
              src={props.img}
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
              {props.name} <span>{props.postAt}</span>
            </h3>
          </div>
          <div className="des-content">
            <h2>{props.jobTitle}</h2>
          </div>
          <div className="tag">
            <h5>{props.tagPrimary}</h5>
            <h5>{props.tagSecondary}</h5>
          </div>
        </div>
        <hr />
        <div className="card-bottom">
          <div className="Left-Side">
            <p>{props.salaryRange}</p>
            <span>{props.location}</span>
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
