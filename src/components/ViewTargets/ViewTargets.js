import React from 'react';
import FontAwesomeIcon from 'react-fontawesome';
import { faPencilAlt, faBinoculars } from '@fortawesome/free-solid-svg-icons';
import './ViewTargets.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Spinner, Toast } from 'react-bootstrap';
import axios from 'axios';
class ViewTargets extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			isLoading: true,
			error: null,
		};
	}

	test(a) {
		console.log(a.json())
	}

	componentDidMount() {
			axios.get("http://localhost:5000/api/values")
			.then(response => {  
				console.log(response);	
			}).catch(error => { 
				console.log(error)
			}); 
	}

	render() {
		// let styles = {
		//   textAlign: 'center'
		// }
		let spinner = (
			<Spinner style={{ display: this.state.isLoading ? 'block' : 'none' }} animation="border" role="status">
				<span className="sr-only">Loading...</span>
			</Spinner>
		);
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
						{!this.state.data
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
		return (
			<div>
				<h2>View Targets</h2>
				{spinner}
				{table}
				{this.state.error ? (
					<div
						aria-live="polite"
						aria-atomic="true"
						style={{
							position: 'relative',
							minHeight: '100px',
						}}
					>
						<Toast
							className="error-toast"
							style={{
								position: 'absolute',
								top: 0,
								right: 0,
							}}
						>
							<Toast.Header>
								<img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
								<strong className="mr-auto">Bootstrap</strong>
								<small>just now</small>
							</Toast.Header>
							<Toast.Body>See? Just like this.</Toast.Body>
						</Toast>
					</div>
				) : null}
			</div>
		);
	}
}
export default ViewTargets;
