import React, { Component } from "react";
import WeatherCard from "./WeatherCard";

class Weather extends Component {
  render() {
    const { param, removeforecast } = this.props
    return (
      <div className="container">
        <div className="row">
          <h2>Weekly Weather Report</h2>
        </div>
        <div className="row">
          {param
            .map((row, index) => (
              <div className="text-center col-sm-2 col-md-2">
              <WeatherCard key={index} {...row} removeforecast={removeforecast}>
              </WeatherCard>
              <button onClick={() => removeforecast(index)}>Delete</button>
              </div>
            ))}
        </div>
        
      </div>
    );
  }
}

export default Weather;
