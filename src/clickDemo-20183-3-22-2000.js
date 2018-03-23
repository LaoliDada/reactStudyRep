import React , {Component} from "react";

class ClickCounter extends Component {
	constructor(props){
		super(props);
		this.onClickButton=this.onClickButton.bind(this);
		this.state={count:0};
	}
	
	onClickButton() {
		this.setState({count:this.state.count+1});
	}
	
	render() {
		const counterStyle={
			margin:"16px"
		}
		return (
			<div style={counterStyle}>
				<button onClick={this.onClickButton}>click Me</button>
				<div>
					this state count:{this.state.count}
				</div>
			</div>
		)
	}
}
export default ClickCounter;
