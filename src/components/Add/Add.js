import React from 'react';
import TargetForm from '../TargetForm/TargetForm';
import './Add.css';
import ErrorToast from '../Misc/Toast';
import Spinner from '../Misc/Spinner';
class Add extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			isLoading: true,
			error: null,
		};
	}
	render(){
		return (
			<div>
				<h2>Add a new target</h2>
				<Spinner state={this.state}></Spinner>
				<TargetForm></TargetForm>
			</div>
		);
	}	
}
export default Add;
