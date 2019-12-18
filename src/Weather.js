import React, { Component } from 'react'
import WeatherCard from './WeatherCard'


class Weather extends Component{
    render(){
        const {param} = this.props
        return(
            <div className='container'>
                <div className='row'>
                    <h2>Weekly Weather Report</h2>
                </div>
                <WeatherCard param={param} />
                
            </div> 
        )
    }

}

export default Weather