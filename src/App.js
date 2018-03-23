import React, { Component } from 'react';
import logo from './logo.svg';
import ClickCounter from "./clickDemo-20183-3-21-1205.js";
import './App.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			caption:1,
			sum:0
		}
		this.onUpdate=this.onUpdate.bind(this);
	}
	onUpdate(newValue,PreviousValue){
		const valueChange = newValue-PreviousValue;
		this.setState({sum:this.state.sum+valueChange})
	}
  render() {
    return (
      <div className="App">
        <ClickCounter caption={this.state.caption} onUpdate={this.onUpdate}/>
        <ClickCounter caption={this.state.caption} onUpdate={this.onUpdate}/>
        <ClickCounter caption={this.state.caption} onUpdate={this.onUpdate}/>
        this is counter sum:{this.state.sum}
      </div>
    );
  }
}

export default App;
