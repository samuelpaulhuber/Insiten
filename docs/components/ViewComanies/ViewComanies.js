import React from 'react';
import FontAwesomeIcon from 'react-fontawesome';
import { faPencilAlt, faBinoculars } from '@fortawesome/free-solid-svg-icons';
import './ViewCompanies.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import util from '../../libs/util';
import Spinner from '../Misc/Spinner';
import ErrorToast from '../Misc/ErrorToast';

// list of companies
class ViewCompanies extends React.Component {
	constructor(props) {
		super(props);
		this.deleteItem = this.deleteItem.bind(this);
		this.state = {
			data: [],
			isLoading: true,
			error: null,
		};
	}
	

	componentDidMount() {
		util.getAll.apply(this);
	}

	deleteItem(id) {
		// eslint-disable-next-line no-restricted-globals
		var conf = confirm("Are you sure you want to delete?");
		if(conf === true){
			util.delete(id,this);
			var test = [...this.state.data];
			var testData = test.find(
				 (value) => {
					 return value.id !== id
				});

			if(!testData || !testData.length)
				testData = new Array();
			this.setState({data: !testData ? {} : testData, isLoading: false, error: null});
		} else {
			//cancel
		}
	}

	render() {		
		// data table
		let table = (
			<div style={{ display: this.state.isLoading ? 'none' : 'block' }}>
				<LinkContainer to="/add">
					<Button>
						<div className="icon-container">
							<FontAwesomeIcon name="plus" icon={faPencilAlt} />
							Add Company
						</div>
					</Button>
				</LinkContainer>
				<table className="table">
					<thead className="thead-light">
						<tr>
							<th scope="col">Id</th>
							<th scope="col">Name</th>
							<th scope="col">City</th>
							<th scope="col">State</th>
							<th scope="col">Status</th>
							<th scope="col" />
						</tr>
					</thead>
					<tbody>
						{(!this.state.data || !this.state.data.map || this.state.data.map === undefined )
							? null
							: this.state.data.map((company, i) => {
									// Return the element. Also pass key
									return (
										<tr key={company.id}>
											<td>{company.id}</td>
											<td>{company.name}</td>
											<td>{company.city}</td>
											<td>{company.state}</td>
											<td>{company.status}</td>
											<td>
												<div className="flex-container">
													<div className="icon-container">
														<LinkContainer to={'/view/' + company.id}>
															<FontAwesomeIcon name="pencil" icon={faBinoculars} />
														</LinkContainer>
													</div>
													<div className="icon-container delete" onClick={() => this.deleteItem(company.id)}>
														<FontAwesomeIcon name="times" icon={faPencilAlt} />
													</div>
												</div>
											</td>
										</tr>
									);
							  })}
					</tbody>
				</table>
			</div>
		);
		return (
			<div>
				<h2>View Companies</h2>
				<Spinner state={this.state} />
				{table}
				<ErrorToast state={this.state}></ErrorToast>
			</div>
		);
	}
}
export default ViewCompanies;
