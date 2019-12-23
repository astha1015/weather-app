import React, { useState, useEffect } from 'react'





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
    
   function validate(inputs){
    let errors = {};
    if (!inputs.day) {
      errors.day = 'Day is required';
    } else if (!/\b((Mon|Tues|Wed(nes)?|Thur(s)?|Fri|Sat(ur)?|Sun)(day)?)\b/.test(inputs.day)) {
      errors.day = 'Invalid day';
    }
    if (!inputs.maxtemp) {
        errors.maxtemp = 'Maximuim temperature is required';
      } else if (!/^[0-9]+$/.test(inputs.maxtemp)) {
        errors.maxtemp = 'Invalid temperature';
    }
      if (!inputs.mintemp) {
        errors.mintemp = 'Maximuim temperature is required';
      } else if (!/^[0-9]+$/.test(inputs.mintemp)) {
        errors.mintemp = 'Invalid temperature';
    }
    return errors;
   }
    
    
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
            <label>Image</label>
            <input 
                type="file"
                name="image"
                alt="image"
                onChange={handleInputChange} />
            <label>Climate</label>
            <input 
                type="text"
                name="climate"
                value={inputs.climate}
                onChange={handleInputChange} />
            <label>Maximum Temperature</label>
            <input
                className={`input ${errors.maxtemp }`}
                type = "text"
                name = "maxtemp"
                value = {inputs.maxtemp || ''}
                onChange={handleInputChange} 
                required/>
            {errors.maxtemp && (<p className="text-danger">{errors.maxtemp}</p>)}
            <label>Minimum Temperature</label>
            <input
                className={`input ${errors.mintemp }`}
                type = "text"
                name = "mintemp"
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