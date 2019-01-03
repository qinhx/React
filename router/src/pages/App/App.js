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
  constructor(props){
    super(props);
    this.state = {
      total1:10,
      total2:10
    }
    this.onCounterUpdate1 = this.onCounterUpdate1.bind(this)
    this.onCounterUpdate2 = this.onCounterUpdate2.bind(this)
  }
  onCounterUpdate1(value){
      this.setState({
        total1:this.state.total1 + value
      })
  }
  onCounterUpdate2(value){
    this.setState({
      total2:this.state.total2 + value
    })
  }
  render() {
    return (
      <Router>
      <div className="App App-header">
        <Btn updateCount = {this.onCounterUpdate1}></Btn> <span>{this.state.total1}</span>
        <Btn updateCount = {this.onCounterUpdate2} ></Btn> <span>{this.state.total2}</span>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/home">Home</Link></li>
          </ul>
            <Route path="/about" component={About}></Route>
            <Route path="/home" component={Home}></Route>

      </div>
      </Router>
    );
  }
}

export default App;
