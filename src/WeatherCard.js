import React, { Component } from 'react'

const Day = props =>{
    const rows = props.param.map((row,index) => {
        return(
            <div key={index} >
                {row.day}
            </div>
        )
    })
    return(
            {rows}
    )
}

const Mintemp = props =>{
    const rows = props.param.map((row,index) => {
        return(
            <div key={index} >
                {row.mintemp}&#176;
            </div>
        )
    })
    return(
            {rows}
    )
}
const Maxtemp = props =>{
    const rows = props.param.map((row,index) => {
        return(
            <div key={index} >
                {row.maxtemp}&#176;
            </div>
        )
    })
    return(
            {rows}
    )
}
const Image = props =>{
    const rows = props.param.map((row,index) => {
        return(
            <div key={index}>
                
            </div>
        )
    })
    return(
            {rows}
    )
}




class WeatherCard extends Component{
    render(){
        const {param} = this.props
        return(
            <div className='row'>
                <div className='col-sm-2 col-md-2'>
                    <div className='card'>
                        <div className='card-header text-center'>
                            <Day param={param}></Day>
                        </div>
                        <br></br>
                        <img className='icons card-img-top' src={require('./images/cloudy.png')} alt='weather'></img>
                        <div className='row card-body'>
                            <p className='col-xs-1 card-text'>
                                <Mintemp param={param}></Mintemp>
                            </p>
                            <hr />
                            <p className='col-xs-1 card-text'>
                                <Maxtemp param={param}></Maxtemp>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    
    }   

}

export default WeatherCard