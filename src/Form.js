import React, { useState, useEffect, useRef } from 'react'
import Cleave from 'cleave.js/react';

const Form = (props) =>{
    const useInputForm = (validate) =>{
        const [inputs, setInputs] = useState({});
        const [errors, setErrors] = useState({});
        const [isSubmitting, setIsSubmitting] = useState(false);
    
        useEffect(() => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                props.handleSubmit({...inputs}) 
            }
          }, [errors]);


        const onFormSubmit = (event) => {  
            event.preventDefault();
            setIsSubmitting(true);
            setErrors(validate(inputs));
            
          }
        
        
        const handleInputChange = (event) => {
            event.persist();
            setInputs(prevState => {
                return {...prevState, [event.target.name]: event.target.value }
            })
            
        }
        
    
        return {
        onFormSubmit,
        handleInputChange,
        inputs,
        errors
        };
    }

    function getImage(climate){
        let image = './images/sunny.png'
        if (climate == 1){
            image = './images/sunny.png'
        }
        if (climate == 2){
            image = './images/rain.png'
        }
        if (climate == 3){
            image = './images/cloudy.png'
        }
        return image;
    }

    function validate(inputs){
    let errors = {};
    if (!inputs.day) {
      errors.day = 'Day is required';
    } else if (!/\b((Mon|Tues|Wed(nes)?|Thur(s)?|Fri|Sat(ur)?|Sun)(day)?)\b/.test(inputs.day)) {
      errors.day = 'Invalid day';
    }
    if (!inputs.maxtemp) {
        errors.maxtemp = 'Maximum temperature is required';
      } else if (!/[\d]*,?[\d]*/.test(inputs.maxtemp)) {
        errors.maxtemp = 'Invalid temperature';
    }


    if (!inputs.mintemp) {
        errors.mintemp = 'Minimum temperature is required';
      } else if (!/[\d]*,?[\d]*/.test(inputs.mintemp)) {
        errors.mintemp = 'Invalid temperature';
    }
    return errors;
   }
    
    const [climate, setClimate]= useState()
    const imageSource = getImage(climate)
    const {inputs, errors, handleInputChange, onFormSubmit} = useInputForm(validate)



    return(
        <div className='Container'>
        <h4>Add a new weather card</h4>
        <form>
        <div className="control">
            <label>Day</label>
            <input
                className={`input ${errors.day }`}
                type = "text"
                name = "day"
                value = {inputs.day || ''}
                onChange={handleInputChange}
                required />
            {errors.day && (<p className="text-danger">{errors.day}</p>)}
            <label>Select a Weather</label>
            <select placeholder = 'Select a Weather'onChange={(event) => {setClimate(Number(event.target.value))}}>
                <option value={1}>Sunny</option>
                <option value={2}>Rainy</option>
                <option value={3}>Cloudy</option>
            </select><br />
            <label>Image</label>
            <img className='formImage'
                src = {imageSource} />

            <br />


            <label>Maximum Temperature</label>
            <Cleave 
                className={`input ${errors.maxtemp }`}
                name = "maxtemp"
                options={{numeral: true, }}
                value={inputs.maxtemp || ''}
                onChange={handleInputChange} />
            {errors.maxtemp && (<p className="text-danger">{errors.maxtemp}</p>)}
            <label>Minimum Temperature</label>
            <Cleave
                className={`input ${errors.mintemp }`}
                type = "text"
                name = "mintemp"
                options={{numeral: true, }}
                value = {inputs.mintemp || ''}
                onChange={handleInputChange} 
                required/>
            {errors.mintemp && (<p className="text-danger">{errors.mintemp}</p>)}
            <button onClick={onFormSubmit} type="submit"> Submit </button>
        </div>
        </form>
        </div>
    );
}



  export default Form;