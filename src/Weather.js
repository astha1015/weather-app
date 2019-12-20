import React from "react";
import WeatherCard from "./WeatherCard";

const Weather = (props) => (

    <div className="container">
      <div className="row">
        <h2>Weekly Weather Report</h2>
      </div>

      <div className="row"> {Array.from(props.param).map((row, index) => (
              <div className="text-center col-sm-2 col-md-2">
                <WeatherCard key={index} {...row}></WeatherCard>
                <button onClick={() => props.removeforecast(index)}>Delete</button>
              </div>
            )
          )}
      </div> 
    </div>

);





export default Weather;
