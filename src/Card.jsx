import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 ">
        <div className="card">
          <img className="card-img-top" src={props.imgsrc} alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique ipsa cum labore!
            </p>
            <NavLink to="/" className="btn btn-primary">
              See Profile
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
