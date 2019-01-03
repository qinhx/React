import React, { Component } from 'react';
import './App.css';
import Btn from '../ClickBtn/Btn'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
const About = ()=>(
  <div>
    <h2>About</h2>
  </div>
)
const Home = ()=>(
  <div>
    <h3>Home</h3>
  </div>
)
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App App-header">
          
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/home">Home</Link></li>
          </ul>
            <Route path="/about" component={About}></Route>
            <Route path="/home" component={Home}></Route>
        <Btn></Btn>
        <Btn></Btn>
      </div>
      </Router>
    );
  }
}

export default App;
