import React, { Component } from 'react';
import logo from './logo.svg';
import ClickCounter from "./clickDemo-20183-3-21-1205.js";
import './App.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			caption:1
		}
	}
  render() {
    return (
      <div className="App">
        <ClickCounter caption={this.state.caption} />
        <ClickCounter caption={this.state.caption} />
        <ClickCounter caption={this.state.caption} />
      </div>
    );
  }
}

export default App;
