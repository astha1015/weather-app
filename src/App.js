import React, { Component } from 'react';
import Weather from './Weather';

class App extends Component{
    state = {
        param: [
            {
                day: 'Mon',
                image: './images/cloudy.png',
                climate: 'cloudy',
                maxtemp: 80,
                mintemp: 40,
            },
            {
                day: 'Tue',
                image: './images/rain.png',
                climate: 'rain',
                maxtemp: 59,
                mintemp: 52,

            },
            {
                day: 'Wed',
                image: './images/sunny.png',
                climate: 'sunny',
                maxtemp: 70,
                mintemp: 61,

            },
            {
                day: 'Thu',
                image: './images/cloudy.png',
                climate: 'cloudy',
                maxtemp: 60,
                mintemp: 40,

            },
            {
                day: 'Fri',
                image: './images/rain.png',
                climate: 'rain',
                maxtemp: 76,
                mintemp: 56,

            },
            {
                day: 'Sat',
                image: './images/sunny.png',
                climate: 'sunny',
                maxtemp: 80,
                mintemp: 72,

            },
            {
                day: 'Sun',
                image: './images/sunny.png',
                climate: 'sunny',
                maxtemp: 80,
                mintemp: 72,

            },

        ],
    }
    removeforecast = index =>{
        const { param } = this.state

        this.setState({
            param: param.filter((param,i) => {
                return i !== index
            }),
        })
    }
    render(){
        const { param } = this.state
        return (
            <div className='App'>
                <Weather param={param} removeforecast={this.removeforecast} />
            </div>
        );
    }
}

export default App;