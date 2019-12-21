import React, { useState } from 'react'





const Form = (props) =>{
    const useInputForm = () =>{
        const [inputs, setInputs] = useState({});
    
        const onFormSubmit = (event) => {  
            event.preventDefault();
            props.handleSubmit({...inputs}) 
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
        inputs
        };
    }
    
   
    
    
    const {inputs, handleInputChange, onFormSubmit} = useInputForm()

    return(
        <div className='Container'>
        <h4>Add a new weather card</h4>
        <form>
            <label>Day</label>
            <input
                type = "text"
                name = "day"
                value = {inputs.day}
                onChange={handleInputChange} />
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
                type = "text"
                name = "maxtemp"
                value = {inputs.maxtemp}
                onChange={handleInputChange} />
            <label>Minimum Temperature</label>
            <input
                type = "text"
                name = "mintemp"
                value = {inputs.mintemp}
                onChange={handleInputChange} />
            <button onClick={onFormSubmit} type="submit"> Submit </button>
        </form>
        </div>
    );
}



  export default Form;