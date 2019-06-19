import React from 'react';
import CompanyForm from '../CompanyForm/CompanyForm';
import './Edit.css';
import ErrorToast from '../Misc/ErrorToast';
import Spinner from '../Misc/Spinner';
import util from '../../libs/util';

// View is used for updating a company
class Edit extends React.Component {
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
				<h2>Edit company</h2>
				<Spinner state={this.state}></Spinner>
				<CompanyForm data={this.state.data} id={this.props.match.params.id}></CompanyForm>
			</div>
		);
	}	
}
export default Edit;
