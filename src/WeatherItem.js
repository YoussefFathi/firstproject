import React from'react'
import styles from "./cssMain/index.css"
import WeatherDetails from './WeatherDetails.js'
import './weather-icons.min.css'
class WeatherItem extends React.Component{
    constructor(props){
        super(props);
        this.updateData=this.updateData.bind(this);
        this.changeColors=this.changeColors.bind(this);
        this.state={
            temp:0,
            humidity:0,
            wind:0,
            imgSrc:'',

            
        }
        this.handleClick=this.handleClick.bind(this)
    }
    changeColors(temp){
        let backColor = "";
        console.log(temp+"temp")
        if(temp>30){
            backColor+="#FF8500";
        }else if(temp>25){
            backColor+="#ffc600"
        }else if(temp>20){
            backColor+="#10af94"
        }else{
            backColor+="#233884"
        }
        console.log(backColor+"OrgCol")
        this.props.changeColors(backColor);
    }
    handleClick(value){
        this.props.handleClick(value);
    }
    
    updateData(){
        const city = this.props.city
        console.log(city);
        const url = "http://api.openweathermap.org/data/2.5/weather?q="+city.toString()+"&appid=34a80c99bc455d5e80fb0b2152ac6617";
        console.log(url);
        fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log(data.main.temp);
            this.changeColors(Math.round(data.main.temp)-273);
            this.setState({ temp: Math.round(data.main.temp)-273,
                            humidity:Math.round(data.main.humidity),
                            wind:Math.round(data.wind.speed)
            })
           
        })
        
    }
    
    componentDidMount(){
        this.timerID = setInterval(
            () => this.updateData(),
            1000*60*5
          );
    }
    componentWillMount(){
        if(this.props.city){
        const city = this.props.city
        console.log(city);
        const url = "http://api.openweathermap.org/data/2.5/weather?q="+city.toString()+"&appid=34a80c99bc455d5e80fb0b2152ac6617";
        console.log(url);
        fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log(data.main.temp);
            this.changeColors(Math.round(data.main.temp)-273);
            this.setState({ temp: Math.round(data.main.temp)-273,
                            humidity:Math.round(data.main.humidity),
                            wind:Math.round(data.wind.speed)
            })
        
        })
       
    }
}
    render(){
        
            return(
                <h2 className="ui icon header">
                
                <div className="content">
                    <div className="ui huge header">{this.props.city}</div>
                    <div className={styles.bigitemcontainer}> <i className="wi wi-day-sunny"></i></div>
                    <br/>
                    <br/>
                    <WeatherDetails temp={this.state.temp} humidity={this.state.humidity} wind={this.state.wind} handleClick={this.handleClick}/>
                    </div>
                    </h2>
                    
            )
            }

}
export default WeatherItem;