import React, { Component } from 'react'

class Weather extends Component{
    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <h2>Weekly Weather Report</h2>
                    </div>
                <div className='row'>
                    <div className='col-sm-2 col-md-2'>
                        <div className='card'>
                            <div className='card-header text-center'>Mon</div>
                            <br />
                            <img className='icons card-img-top' src={require('./cloudy.png')} alt='cloudy'/>
                            <div className='row card-body'>
                                <p className='col-xs-1 card-text'>40&#176;</p>
                                <hr />
                                <p className='col-xs-1 card-text'>80&#176;</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-2 col-md-2'>
                        <div className='card'>
                            <div className='card-header text-center'>Tue</div>
                            <br />
                            <img className='icons card-img-top' src={require('./images/rain.png')} alt='rainy'/>
                            <div className='row card-body'>
                                <p className='col-xs-1 card-text'>40&#176;</p>
                                <hr />
                                <p className='col-xs-1 card-text'>80&#176;</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-2 col-md-2'>
                        <div className='card'>
                            <div className='card-header text-center'>Wed</div>
                            <br />
                            <img className='icons card-img-top' src={require('./images/sunny.png')} alt='sunny'/>
                            <div className='row card-body'>
                                <p className='col-xs-1 card-text'>40&#176;</p>
                                <hr />
                                <p className='col-xs-1 card-text'>80&#176;</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-2 col-md-2'>
                        <div className='card'>
                            <div className='card-header text-center'>Thur</div>
                            <br />
                            <img className='icons card-img-top' src={require('./cloudy.png')} alt='cloudy'/>
                            <div className='row card-body'>
                                <p className='col-xs-1 card-text'>40&#176;</p>
                                <hr />
                                <p className='col-xs-1 card-text'>80&#176;</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-2 col-md-2'>
                        <div className='card'>
                            <div className='card-header text-center'>Fri</div>
                            <br />
                            <img className='icons card-img-top' src={require('./images/rain.png')} alt='rainy'/>
                            <div className='row card-body'>
                                <p className='col-xs-1 card-text'>40&#176;</p>
                                <hr />
                                <p className='col-xs-1 card-text'>80&#176;</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-2 col-md-2'>
                        <div className='card text-center'>
                            <div className='card-header'>Sat</div>
                            <br />
                            <img className='icons card-img-top' src={require('./images/sunny.png')} alt='sunny'/>
                            <div className='row card-body'>
                                <p className='col-xs-1 card-text'>40&#176;</p>
                                <hr />
                                <p className='col-xs-1 card-text'>80&#176;</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-2 col-md-2'>
                        <div className='card text-center'>
                            <div className='card-header'>Sun</div>
                            <br />
                            <img className='icons card-img-top' src={require('./images/sunny.png')} alt='sunny'/>
                            <div className='row card-body'>
                                <p className='col-xs-1 card-text'>40&#176;</p>
                                <hr />
                                <p className='col-xs-1 card-text'>80&#176;</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div> 
        )
    }

}

export default Weather