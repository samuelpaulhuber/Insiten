import React from 'react';
import CompanyForm from '../CompanyForm/CompanyForm';
import './Add.css';
import Spinner from '../Misc/Spinner';

// component for adding a new company
class Add extends React.Component {
	constructor(props) {
		super(props);

		// set our state
		this.state = {
			data: [],
			isLoading: true,
			error: null,
		};
	}
	render(){
		// render spinner and targetForm
		return (
			<div>
				<h2>Add a new company</h2>
				<CompanyForm></CompanyForm>
			</div>
		);
	}	
}
export default Add;
