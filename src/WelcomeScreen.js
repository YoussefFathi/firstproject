import React from 'react'
import styles from "./cssMain/index.css"
import {Button,Container,Transition,Input,Dropdown} from 'semantic-ui-react';
import WeatherAll from "./WeatherAll.js"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class WelcomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            c1:'',
            c2:'',
            c3:'',
            c4:'',
            value:[],
            isHidden:true,
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(value){
        this.setState({value:value});
        console.log(value,"In welocome screen")
    }
    render(){
        return(
           <div>
            <Route path="/WelcomeScreen/" exact component={() => <WelcomeScreenDetails handleClick={this.handleClick} />}
/> {console.log(this.state.value,"In Welcome Screen 2")}
            <Route  path="/WelcomeScreen/WeatherAll" component={() => <WeatherAll value={this.state.value} />}/>
            </div>
            
        )
    }

}
class WelcomeScreenDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:[],
            visible1:true,
            visible2:false
        }
        this.toggleVisibility1=this.toggleVisibility1.bind(this)
        this.toggleVisibility2=this.toggleVisibility2.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }
    toggleVisibility1(){
        this.setState({visible1:!this.state.visible1})
    }
    toggleVisibility2(){
        this.setState({visible2:!this.state.visible2})
    }
    componentWillMount(){
        this.toggleVisibility1();
    }
    componentDidMount(){
        this.toggleVisibility1();
        this.timerId2=setTimeout(()=>{this.toggleVisibility2()},6000);
         this.timerId1=setTimeout(()=>{this.toggleVisibility1()},500);

}
    handleChange(e,{value}){
        this.setState({ value })
    }
    handleClick(){
        console.log(this.state.value,"In Welcome Screen Details")
        this.props.handleClick(this.state.value);
    }
    render(){
        const {visible1,visible2} = this.state;
        const options= [{ key: 'Berlin', text: 'Berlin', value: 'Berlin' },
        { key: 'Cairo', text: 'Cairo', value: 'Cairo' },
        { key: 'Paris', text: 'Paris', value: 'Paris' },
        { key: 'Rome', text: 'Rome', value: 'Rome' },
        { key: 'Alexandria', text: 'Alexandria', value: 'Alexandria' },
       ]
        return(
           <div className={styles.welcome1}>
            <Container textAlign='center' className={styles.welcome}>
         <Transition visible={visible1} animation='scale' duration={3000}>  
        <h1 className="ui huge header" ref={(a)=>{this.header1=a}}>Welcome To Your Weather Assistant</h1>
       </Transition>
      <Transition visible={visible2} animation='scale' duration={3000}> 
       <h1 className="ui huge header" >Now Let's Enter 4 Cities Below</h1>
       </Transition>
       <Dropdown placeholder='Cities'  fluid multiple selection options={options} onChange={this.handleChange} />
        {console.log(this.state.value)}
            <h2><Link to="/WelcomeScreen/WeatherAll" onClick={this.handleClick} >Let's Go</Link></h2>
            </Container>
            </div>
            
        )
    }
}
export default WelcomeScreen;