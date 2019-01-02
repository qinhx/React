import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <ul>
          
            <li><Link to="/about">About</Link></li>
            <li><Link to="/home">Home</Link></li>
            
          </ul>
          <switch>
            <Route path="/about" component={About}></Route>
            <Route path="/home" component={Home}></Route>
            </switch>
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
