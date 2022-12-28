import React from "react";
import "./car.css";
import { BsFillStarFill } from "react-icons/bs";

const Car = (props) => {
  return (
    <>
      {/* <h3 className="d-flex justify-content-center">Trending Cars</h3> */}
      <div className=" mx-2 my-3 d-flex justify-content-center">
        <div className="card" style={{ width: "18rem" }}>
          <img src={props.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.Name}</h5>
            <p className="card-text">Price: 50.6 L</p>
            <p className="card-text">
              Safety: <BsFillStarFill className="mx-1" />
              <BsFillStarFill className="mx-1" />
              <BsFillStarFill className="mx-1" />
              <BsFillStarFill className="mx-1" />
              <BsFillStarFill className="mx-1" />
            </p>
            <a href="/" className="btn btn-outline-info">
              View
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Car;
