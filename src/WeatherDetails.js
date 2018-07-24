import React from 'react'
import './weather-icons.min.css'
import './cssMain/index.css'
class WeatherDetails extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="ui horizontal list">
                <div className="item">
                    <div className="small-item-container"><i className="wi wi-day-sunny"></i></div>
                    <div className="content">
                    <div className="ui sub header">Temperature</div>
                    {this.props.temp}
                    </div>
                </div>
                <div className="item">
                <div className="small-item-container"> <i className="wi wi-sprinkle"></i></div>
                    <div className="content">
                    <div className="ui sub header">Humidity</div>
                    {this.props.humidity}
                    </div>
                </div>
                <div className="item">
                <div className="small-item-container"><i className="wi wi-windy"></i></div>
                    <div className="content">
                    <div className="ui sub header">Wind Speed</div>
                    {this.props.wind}
                    </div>
                </div>
                </div>

        )
    }
}
export default WeatherDetails;