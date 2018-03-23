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
	
	componentWillMount(){
		console.log("componentWillMount");
	}
	
	shouldComponentUpdate(nextProps,nextState){
		return nextState.count!=5;
	}
	
	render() {
		console.log(this.state.count)
		const counterStyle={
			margin:"16px"
		}
		return (
			<div style={counterStyle}>
				<button onClick={this.onClickButton}>click Me</button>
				<div>
					this props caption:{this.state.count}
				</div>
			</div>
		)
	}
}
export default ClickCounter;
