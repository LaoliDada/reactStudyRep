import React, { Component } from 'react';
import logo from './logo.svg';
import ClickCounter from "./clickDemo-20183-3-22-2000.js";
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
		console.log(newValue+"======="+PreviousValue);
		const valueChange = PreviousValue-newValue;
		this.setState({sum:this.state.sum+valueChange})
	}
  render() {
    return (
      <div className="App">
        <ClickCounter caption={"First"} onUpdate={this.onUpdate}/>
        <ClickCounter caption={"Second"} onUpdate={this.onUpdate}/>
        <ClickCounter caption={"Third"} onUpdate={this.onUpdate}/>
        this is counter sum:{this.state.sum}
      </div>
    );
  }
}

export default App;
