import React from 'react'
import GridRow, { Grid, Button } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './cssMain/gridPageStyles.css';
import s1 from './cssMain/styles.css';
import WelcomeScreen from './WelcomeScreen';
class GridPageScreen extends React.Component{
    render(){
        return(
        <div>
            <Route  path="/" exact component={GridPage}/> 
            <Route  path="/WelcomeScreen"  component={WelcomeScreen} />
            </div>
    
        )}

}
class GridPage extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        const colors = [
            'red',
            'orange',
            'yellow',
            'olive',
            'green',
            'teal',
            'blue',
            'violet',
            'purple',
            'pink',
            'brown',
            'grey',
            'black',
          ]
        return(
        <div className="allGrid">
        
            <Grid centered columns={4}>
            {/* <Grid.Column>   
                 <Grid.Row> <Button className="gridButton">Translation</Button></Grid.Row>
                 <Grid.Row> <Button className="gridButton">Translation</Button></Grid.Row>
            </Grid.Column> 
            <Grid.Column>   
                <Grid.Row> <Button className="gridButton">Translation</Button></Grid.Row>
                <Grid.Row> <Button className="gridButton">Translation</Button></Grid.Row>
                </Grid.Column>  */}
           <Grid.Row>
                    <Grid.Column><Button href="../weather-app/index.html" className={s1.w8buttonred} ><Link  to="/WelcomeScreen">hrefTranslation</Link></Button></Grid.Column> 
                    
                    <Grid.Column><Button className="w8-button green">Weather</Button></Grid.Column> 
                    <Grid.Column><Button className="w8-button d-blue">Calculator</Button></Grid.Column> 
                    <Grid.Column><Button className="w8-button violet">To-Do List</Button></Grid.Column> 
            </Grid.Row>
            <Grid.Row>
                    <Grid.Column><Button className="w8-button l-blue">Translation</Button></Grid.Column> 
                    <Grid.Column><Button className="w8-button pink">Translation</Button></Grid.Column> 
                    <Grid.Column><Button className="w8-button grey">Translation</Button></Grid.Column> 
                    <Grid.Column><Button className="w8-button yellow">Translation</Button></Grid.Column> 
            </Grid.Row>
            
            </Grid>
            
        </div>
        )
    }
}
export default GridPageScreen;