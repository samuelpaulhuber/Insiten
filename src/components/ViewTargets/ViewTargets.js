import React from 'react';
import FontAwesomeIcon from 'react-fontawesome';
import { faPlus, faTimes, faPencilAlt, faBinoculars } from '@fortawesome/free-solid-svg-icons';
import './ViewTargets.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class ViewTargets extends React.Component {
	constructor(props) {
		//<----Method
		super(props);
		this.state = {
			//<----Initialize state
			data: [
				{
					id: 1,
					name: 'Test Target',
					status: 'Pending',
					address1: '234 Ackwood Circle',
					address2: null,
					city: 'Pharon',
					state: 'TN',
					contacts: [
						{
							contactName: 'Bob Smith',
							contactPhone: '1234567890',
							contactEmail: 'bob.smith@testtarget.com',
							contactPosition: 'CEO',
						},
					],
					yearlyRevenue: [
						{
							year: 2015,
							grossRevenue: 1263380,
							profit: 579888,
						},
					],
				},
			],
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		//<---- Method/Set State
		this.setState({ value: event.target.value });
	}

	render() {
		// let styles = {
		//   textAlign: 'center'
		// }
		return (
			<div>
				<h2>View Targets</h2>
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
						{this.state.data.map((target, i) => {
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
											<div className="icon-container delete">
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
	}
}
export default ViewTargets;
