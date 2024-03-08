import React, { Component } from "react";
import CardList from "../Component/CardLIst";
// import {robots} from './Robots';
import SearchBox from '../Component/SearchBox';
import './App.css';

// const state={
//     robots:robots,
//     searchfield:''
// }
class App extends Component{
   constructor(){
    super();
    this.state={
        robots:[],
        searchfield:''
   }
}
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{return response.json();})
    .then(user=>{this.setState({robots:user})});
}

onsearchchange=(event)=>{
    // console.log(event.target.value);
    this.setState({searchfield: event.target.value})
}
render(){
    const {robots,searchfield}=this.state;
        const filter_robots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
            // it does not work :  robots.name.toLowerCase()==this.state.searchfield.toLowerCase()

            // it mean that if searchfield text is match with robots.name then return true 
        })
        // console.log(filter_robots);

        if(!robots.length){
            return <h1>Looding............</h1>
        }
        else{
            return(
                <div className="tc">
                    <h1>Robots</h1>
                    <SearchBox searchchange={this.onsearchchange}/>
                    <CardList robots={filter_robots}/>
                    {/* <CardList robots={this.state.robots}/> */}
                </div>
            );
        }
    }
}

export default App;