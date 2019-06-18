import React from 'react';
import FontAwesomeIcon from 'react-fontawesome';
import { faPencilAlt, faBinoculars } from '@fortawesome/free-solid-svg-icons';
import './ViewTargets.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Toast } from 'react-bootstrap';
import util from '../../libs/util';
import Spinner from '../Misc/Spinner';
import ErrorToast from '../Misc/Toast';
class ViewTargets extends React.Component {
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
							Add Target
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
						{(!this.state.data && this.state.data.map )
							? null
							: this.state.data.map((target, i) => {
									console.log('Entered');
									// Return the element. Also pass key
									return (
										<tr key={target.id}>
											<td>{target.id}</td>
											<td>{target.name}</td>
											<td>{target.city}</td>
											<td>{target.state}</td>
											<td>{target.status}</td>
											<td>
												<div className="flex-container">
													<div className="icon-container">
														<LinkContainer to={'/view/' + target.id}>
															<FontAwesomeIcon name="pencil" icon={faBinoculars} />
														</LinkContainer>
													</div>
													<div className="icon-container delete" onClick={() => this.deleteItem(target.id)}>
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
				<h2>View Targets</h2>
				<Spinner state={this.state} />
				{table}
				<ErrorToast state={this.state}></ErrorToast>
			</div>
		);
	}
}
export default ViewTargets;
