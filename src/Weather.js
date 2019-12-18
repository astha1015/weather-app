import React, { Component } from "react";
import WeatherCard from "./WeatherCard";

class Weather extends Component {
  render() {
    const { param } = this.props;
    return (
      <div className="container">
        <div className="row">
          <h2>Weekly Weather Report</h2>
        </div>
        <div className="row">
          {param
            .map(info => ({ ...info }))
            .map((row, index) => (
              <WeatherCard key={index} {...row}></WeatherCard>
            ))}
        </div>
      </div>
    );
  }
}

export default Weather;
