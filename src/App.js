import React, { useState } from 'react';
import Weather from './Weather';
import Form from './Form'

<<<<<<< HEAD
const App = props =>{
    const [param, setParam] = useState(
        [
=======
const App = props => {
    const [param, setParam] = useState([
>>>>>>> bcbb5da785c3bcc09c5da32540abbc2ae0c15d89
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
    
<<<<<<< HEAD
            ],
        
    );
    
    const removeforecast = index => {  
        setParam(
            param.filter((param,i) => {
                return i !== index
            }),
        ) 
    }

    const handleSubmit = (inputs) =>{
        setParam(params =>{
            return[...param,inputs]
        })   
        

    }
    



=======
            ]
    );
    
    const removeforecast = index => setParam(param.filter((param,i) => i !== index))
>>>>>>> bcbb5da785c3bcc09c5da32540abbc2ae0c15d89


    return (
        <div className='container'>
                <Weather param={param} removeforecast={removeforecast} />
                <Form handleSubmit={handleSubmit} ></Form>
        </div>
        );

}


export default App;