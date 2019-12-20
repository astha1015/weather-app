import React, { useState } from 'react';
import Weather from './Weather';

const App = props =>{
    const [param, setParam] = useState(
        {
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
    );
    
    const removeforecast = index => {
        const param = {param};
        
        setParam({
            param: param.filter((param,i) => {
                return i !== index
            }),
        }) 
    }


    return (
        <div className='App'>
                <Weather param={param} removeforecast={removeforecast} />
        </div>
        );

}


export default App;