import React from "react";

const WeatherCard = ({day, climate, image, mintemp, maxtemp}) => (
  <div className="col-sm-2 col-md-2">
    <div className="card">
      <div className="card-header text-center">{day}</div>
      <br></br>
      <img
        className="icons card-img-top"
        src={`${process.env.PUBLIC_URL}${image}`}
        alt={climate}
      ></img>
      <div className="row card-body">
        <p className="col-xs-1 card-text">{mintemp}&#176;</p>
        <hr />
        <p className="col-xs-1 card-text">{maxtemp}&#176;</p>
      </div>
    </div>
  </div>
);


export default WeatherCard;