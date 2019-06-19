import React from 'react';
import TargetForm from '../TargetForm/TargetForm';
import './View.css';
import ErrorToast from '../Misc/Toast';
import Spinner from '../Misc/Spinner';
import util from '../../libs/util';

class Add extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {},
			isLoading: true,
			error: null,
		};
	}

	componentDidMount() {
		util.get.apply(this, [this.props.match.params.id]);
	}

	render(){
		return (
			<div>
				<h2>Edit target</h2>
				<Spinner state={this.state}></Spinner>
				<TargetForm data={this.state.data} id={this.props.match.params.id}></TargetForm>
			</div>
		);
	}	
}
export default Add;
