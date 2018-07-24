import React from 'react'
import styles from './cssMain/index.css'
import WeatherItem from "./WeatherItem.js"

class WeatherAll extends React.Component{
    constructor(props){
        super(props);
        this.state={
            col1:'',
            col2:'',
            col3:'',
            col4:'',
            
        }
        this.changeColors1=this.changeColors1.bind(this);
        this.changeColors2=this.changeColors2.bind(this);
        this.changeColors3=this.changeColors3.bind(this);
        this.changeColors4=this.changeColors4.bind(this);
        // this.handleClick=this.handleClick.bind(this)
        }

        // handleClick(value){
        //     this.setState({value:value})
        // }
        changeColors1(backColor){
            console.log(backColor + "Col1");
            this.setState({col1:backColor});
        }
        changeColors2(backColor){
            this.setState({col2:backColor});
        }
        changeColors3(backColor){
            this.setState({col3:backColor});
        }
        changeColors4(backColor){
            this.setState({col4:backColor});
        }
    render(){
        return(
            <div className="ui two column centered grid">
                
                <div className="column" style={{backgroundColor:this.state.col1}}>
                <WeatherItem city={this.props.value[0]} changeColors={this.changeColors1} handleClick={this.handleClick}/>
                </div>
               <div className="column" style={{backgroundColor:this.state.col2}}><WeatherItem city={this.props.value[1]} changeColors={this.changeColors2}  handleClick={this.handleClick} />
               </div>
               <div className="column" style={{backgroundColor:this.state.col3}}> <WeatherItem city={this.props.value[2]} changeColors={this.changeColors3} handleClick={this.handleClick}/>
               </div>
               <div className="column" style={{backgroundColor:this.state.col4}}><WeatherItem city={this.props.value[3]} changeColors={this.changeColors4} handleClick={this.handleClick} />
               </div>
               </div>
            

        )
    }
}
export default WeatherAll;