import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GridPageScreen from './GridPage.js'
ReactDOM.render(
   <Router><GridPageScreen/></Router>,document.getElementById("root")
)