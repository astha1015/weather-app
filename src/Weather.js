import React, { Component } from 'react'


const Card = props =>{
    const rows = props.param.map((row,index) => {
        return(
            <div key={index} className='col-sm-2 col-md-2'>
            <div className='card'>
            <div className='card-header text-center'>{row.day}</div>
            <br></br>
            <img className='icons card-img-top' src={require('./images/cloudy.png')} alt={row.climate}></img>
            <div className='row card-body'>
                <p className='col-xs-1 card-text'>{row.mintemp}&#176;</p>
                <hr />
                <p className='col-xs-1 card-text'>{row.maxtemp}&#176;</p>
            </div>
        </div>
        </div>

        )
    })
   return (
    <div className='row'>
        
            {rows}
        
    </div>
   )
}



class Weather extends Component{
    render(){
        const {param} = this.props
        return(
            <div className='container'>
                <div className='row'>
                    <h2>Weekly Weather Report</h2>
                </div>
                <Card param={param} />
                
            </div> 
        )
    }

}

export default Weather