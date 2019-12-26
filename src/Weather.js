import React from "react";
import WeatherCard from "./WeatherCard";
import {Motion, spring} from 'react-motion';

const Weather = (props) => (

    <div className="container">
      <div className="row">
        <h2>Weekly Weather Report</h2>
      </div>

      <div className="row"> {Array.from(props.param).map((row, index) => (
              <div className="text-center col-sm-2 col-md-2">
                <WeatherCard key={index} {...row}></WeatherCard>
                
                <Motion 
                    defaultStyle={{x:-200, opacity: 0}}
                    style={{x:spring(0), opacity:spring(1)}}
                >
                    {style => (
                        <button 
                          style={{
                              transform: `translateX(${style.x}px)`,
                              opacity: style.opacity, 
                          }}
                          onClick={() => props.removeforecast(index)}>
                            Delete
                        </button>

                    )}
                
                </Motion>
                

              </div>
            )
          )}
      </div> 
    </div>

);





export default Weather;
