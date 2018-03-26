import React , {Component} from "react";
import CounterStore from "./store/counterStore.js";
import * as Actions from "./flux/Actions.js";
class ClickCounter extends Component {
	constructor(props){
		super(props);
		this.onClickButton=this.onClickButton.bind(this);
		this.onChange=this.onChange.bind(this);
		this.state={ count: CounterStore.getCounterValues()[props.caption]};
	}
	
	onClickButton() {
		console.log(this.props.caption);
		Actions.increment(this.props.caption);
		this.onChange();
	}
	
	onChange(){
		const thisCount=CounterStore.getCounterValues()[this.props.caption];
		this.setState({count:thisCount});
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
