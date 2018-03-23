import React , {Component} from "react";
import PropTypes from "prop-types";

class ClickCounter extends Component {
	constructor(props){
		super(props);
		this.onClickButton=this.onClickButton.bind(this);
		this.state={count:0};
	}
	
	onClickButton() {
		const theValue
		this.props.onUpdate(this.state.count,);
		this.setState({count:this.state.count+1});	
	}
	
	componentWillMount(){
		console.log("componentWillMount");
	}
	
	shouldComponentUpdate(nextProps,nextState){
	}
	render() {
		const counterStyle={
			margin:"16px"
		}
		
		return (
			<div style={counterStyle}>
				<button onClick={this.onClickButton}>click Me</button>
				<div>
					this props caption:{this.state.count}========={this.props.caption}
				</div>
			</div>
		)
	}
}

ClickCounter.propTypes = {
	caption : PropTypes.number,
	onUpdata : PropTypes.func
}
export default ClickCounter;
