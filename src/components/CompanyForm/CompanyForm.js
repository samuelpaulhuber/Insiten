import React from 'react';
import { Form, Col, Button, Container, Row } from 'react-bootstrap';
import Util from '../../libs/util';
import { withRouter } from 'react-router-dom';
import './CompanyForm.css';
import ErrorToast from '../Misc/ErrorToast';

// main form for adding/updating company info
class CompanyForm extends React.Component {
	constructor(...args) {
		super(...args);

		// default state
		this.state = {
			error: null,
			isLoading: false,
			validated: false,
			contacts: [],
			data: {},
			test: false,
			tempContact: '',
			tempYear: '',
			tempProfit: '',
			yearlyRevenue: [],
		};

		// binding methods to this
		this.handleAddcontact = this.handleAddcontact.bind(this);
		this.handleTempContactChange = this.handleTempContactChange.bind(this);
		this.handleTempProfitChange = this.handleTempProfitChange.bind(this);
		this.handleTempYearChange = this.handleTempYearChange.bind(this);
		this.handleRemoveContact = this.handleRemoveContact.bind(this);
		this.handleRemoveProfit = this.handleRemoveProfit.bind(this);
	}

	// store changes to field in state
	handleTempProfitChange(event) {
		this.setState({ ...this.state, tempProfit: event.target.value });
	}

	// store changes to field in state
	handleTempYearChange(event) {
		this.setState({ ...this.state, tempYear: event.target.value });
	}

	// store changes to field in state
	handleTempContactChange(event) {
		this.setState({ ...this.state, tempContact: event.target.value });
	}

	// remove contact from state
	handleRemoveContact(text) {
		const { contacts } = this.state;
		var reducedArr = contacts.map((contact, i) => {
			if (text !== contact) return contact;
		});

		this.setState({ ...this.state, contacts: reducedArr });
	}

	// remove profit entry from state
	handleRemoveProfit(year) {
		const { yearlyRevenue } = this.state;
		var reducedArr = yearlyRevenue.map((profit, i) => {
			if (year !== profit.year) return profit;
		});

		this.setState({ ...this.state, yearlyRevenue: reducedArr });
	}

	// add a new contact to state
	handleAddcontact(e) {
		const { contacts } = this.state;
		var contactsCpy = contacts ? contacts.slice() : [];

		if(!this.state.tempContact || this.state.contacts.indexOf(this.state.tempContact) >= 0)
			return;

		contactsCpy.push(this.state.tempContact);
		var stateVar = { ...this.state };
		stateVar.contacts = contactsCpy;
		stateVar.tempContact = '';
		this.setState(stateVar);
	}

	// add new profit value to state
	handleAddProfit(e) {
		const { yearlyRevenue } = this.state;

		var existingContact = yearlyRevenue.find((elm) => { 
			if (elm && this.state.tempYear && elm.year === this.state.tempYear) 
				return true; 
			return false; 
		});

		if(!this.state.tempYear || existingContact)
			return;

		var yearlyRevCpy = yearlyRevenue ? yearlyRevenue.slice() : [];
		yearlyRevCpy.push({ year: this.state.tempYear, profit: this.state.tempProfit });
		this.setState({ ...this.state, yearlyRevenue: yearlyRevCpy });
	}

	// save our changes
	handleSubmit(event) {
		// get the form
		const form = event.currentTarget;

		// check if the form is valid if not return
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
			return;
		}

		// format contacts for how they will be stored in the back end
		var tempcontacts = this.state.contacts.slice();
		if (this.props && this.props.data && this.props.data.contacts) {
			tempcontacts = [
				...tempcontacts,
				...this.props.data.contacts.map(contact => {
					return {
						id: contact,
						text: contact,
					};
				}),
			];
		}

		// create our object to be stored in the back end
		const company = {
			id: this.props.id ? this.props.id : 0,
			name: form.elements.name.value,
			status: form.elements.status.value,
			city: form.elements.city.value,
			state: form.elements.state.value,
			zip: form.elements.zip.value,
			description: form.elements.description.value,
			contacts: this.state.contacts,
			yearlyRevenue: this.state.yearlyRevenue,
		};

		// make service call to save changes
		Util.save.apply(this, [company, this.redirectToViewCompanies.bind(this)]);

		event.preventDefault();
	}

	// if successful this runs and redirects us
	redirectToViewCompanies() {
		this.props.history.push('/viewcompanies');
	}

	componentWillReceiveProps(nextProps) {
		// service call completed update the state
		this.setState({
			error: this.state.error,
			isLoading: this.state.isLoading,
			validated: this.state.validated,
			test: this.state.test,
			tempContact: this.state.tempContact,
			tempYear: this.state.tempYear,
			tempProfit: this.state.tempProfit,
			data: nextProps.data,
			contacts: nextProps.data.contacts,
			yearlyRevenue: nextProps.data.yearlyRevenue,
		});
	}

	render() {
		// default data to empty if call hasnt succeeded yet
		var data = this.props.data ? this.props.data : {};

		var { validated } = this.state;

		return (
			<div>
			{/* create our form and layout */}
			<ErrorToast state={this.state}></ErrorToast>
			<Form validated={validated} onSubmit={e => this.handleSubmit(e)}>
				<Form.Row>
					<Form.Group as={Col} md="6" controlId="comapny.name">
						{/* name */}
						<Form.Label>Company name</Form.Label>
						<Form.Control
							required
							type="text"
							ref="name"
							name="name"
							placeholder="Compnay name"
							defaultValue={data.name}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter the name of the company.
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md="6" controlId="company.status">
						<Form.Label>Status</Form.Label>
						<Form.Control as="select" ref="status" name="status" defaultValue={data.status}>
							<option value="1">Researching</option>
							<option value="2">Pending Approval</option>
							<option value="3">Approved</option>
							<option value="4">Declined</option>
						</Form.Control>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					{/* city */}
					<Form.Group as={Col} md="3" controlId="company.city">
						<Form.Label>City</Form.Label>
						<Form.Control
							type="text"
							placeholder="City"
							ref="city"
							name="city"
							defaultValue={data.city}
							required
						/>
						<Form.Control.Feedback type="invalid">
							Please enter the city in which the company is located.
						</Form.Control.Feedback>
					</Form.Group>
					{/* state */}
					<Form.Group as={Col} md="3" controlId="company.state">
						<Form.Label>State</Form.Label>
						<Form.Control as="select" ref="state" name="state" defaultValue={data.state} required>
							<option value="AL">Alabama</option>
							<option value="AK">Alaska</option>
							<option value="AZ">Arizona</option>
							<option value="AR">Arkansas</option>
							<option value="CA">California</option>
							<option value="CO">Colorado</option>
							<option value="CT">Connecticut</option>
							<option value="DE">Delaware</option>
							<option value="DC">District Of Columbia</option>
							<option value="FL">Florida</option>
							<option value="GA">Georgia</option>
							<option value="HI">Hawaii</option>
							<option value="ID">Idaho</option>
							<option value="IL">Illinois</option>
							<option value="IN">Indiana</option>
							<option value="IA">Iowa</option>
							<option value="KS">Kansas</option>
							<option value="KY">Kentucky</option>
							<option value="LA">Louisiana</option>
							<option value="ME">Maine</option>
							<option value="MD">Maryland</option>
							<option value="MA">Massachusetts</option>
							<option value="MI">Michigan</option>
							<option value="MN">Minnesota</option>
							<option value="MS">Mississippi</option>
							<option value="MO">Missouri</option>
							<option value="MT">Montana</option>
							<option value="NE">Nebraska</option>
							<option value="NV">Nevada</option>
							<option value="NH">New Hampshire</option>
							<option value="NJ">New Jersey</option>
							<option value="NM">New Mexico</option>
							<option value="NY">New York</option>
							<option value="NC">North Carolina</option>
							<option value="ND">North Dakota</option>
							<option value="OH">Ohio</option>
							<option value="OK">Oklahoma</option>
							<option value="OR">Oregon</option>
							<option value="PA">Pennsylvania</option>
							<option value="RI">Rhode Island</option>
							<option value="SC">South Carolina</option>
							<option value="SD">South Dakota</option>
							<option value="TN">Tennessee</option>
							<option value="TX">Texas</option>
							<option value="UT">Utah</option>
							<option value="VT">Vermont</option>
							<option value="VA">Virginia</option>
							<option value="WA">Washington</option>
							<option value="WV">West Virginia</option>
							<option value="WI">Wisconsin</option>
							<option value="WY">Wyoming</option>
						</Form.Control>
						<Form.Control.Feedback type="invalid">
							Please enter the state in which the company is located.
						</Form.Control.Feedback>
					</Form.Group>
					{/* zip */}
					<Form.Group as={Col} md="3" controlId="company.zip">
						<Form.Label>Zip</Form.Label>
						<Form.Control
							type="text"
							placeholder="Zip"
							defaultValue={data.zip}
							ref="zip"
							name="zip"
							required
						/>
						<Form.Control.Feedback type="invalid">
							Please enter the zip code in which the company is located.
						</Form.Control.Feedback>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					{/* description */}
					<Form.Group as={Col} md="12" controlId="company.description">
						<Form.Label>Company Description</Form.Label>
						<Form.Control
							type="textarea"
							defaultValue={data.description}
							ref="description"
							name="description"
						/>
					</Form.Group>
				</Form.Row>
				{/* contacts */}
				<div className="listContainer">
					<Form.Row>
						<Form.Group as={Col} md="6">
							<h3>Conctacts</h3>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Contact Name"
								ref="contactTemp"
								name="contactTemp"
								onChange={e => this.handleTempContactChange(e)}
							/>
							<Button type="button" className="addButton" onClick={this.handleAddcontact}>
								Add
							</Button>
						</Form.Group>
						<Form.Group as={Col} md="3">
							<h3>Financial Info</h3>
							<Form.Label>Year</Form.Label>
							<Form.Control
								md="3"
								type="text"
								placeholder="Year"
								ref="year"
								name="year"
								onChange={e => this.handleTempYearChange(e)}
							/>
							<Button type="button" className="addButton" onClick={() => this.handleAddProfit()}>
								Add
							</Button>
						</Form.Group>
						<Form.Group as={Col} md="3">
							<h3>&nbsp;</h3>
							<Form.Label>Profit</Form.Label>
							<Form.Control
								type="text"
								placeholder="Profit"
								ref="profit"
								name="profit"
								onChange={e => this.handleTempProfitChange(e)}
							/>
						</Form.Group>
					</Form.Row>
					<Form.Row>
						<Form.Group as={Col}>
							<h4>All Contacts:</h4>
							<Row>
								<Col>
									<strong>Name</strong>
								</Col>
							</Row>
							<div>
								<ul>
									{/* loop through and render all contact rows */}
									{!this.state.contacts
										? null
										: this.state.contacts.map((contact, i) => {
												if (contact) {
													return (
														<Container className="allContacts" key={contact + i}>
															<Row md="12">
																<Col md="6">{contact}</Col>
																<Col md="6">
																	<Button
																		type="button"
																		onClick={() =>
																			this.handleRemoveContact(contact)
																		}
																	>
																		Remove
																	</Button>
																</Col>
															</Row>
														</Container>
													);
												}
										  })}
								</ul>
							</div>
						</Form.Group>
						{/* profits */}
						<Form.Group as={Col} md="6">
							<div>
								<h4>All Profits</h4>
								<Row>
									<Col>
										<strong>Year</strong>
									</Col>
									<Col>
										<strong>Profit</strong>
									</Col>
									<Col />
								</Row>
								<ul>
									{/* loop through and render all revenue rows */}
									{!this.state.yearlyRevenue
										? null
										: this.state.yearlyRevenue.map((profit, i) => {
												if (profit && profit.year) {
													return (
														<Container key={profit + i}>
															<Row className="short-button">
																<Col>{profit.year}</Col>
																<Col>{profit.profit}</Col>
																<Col>
																	<Button
																		type="button"
																		onClick={() =>
																			this.handleRemoveProfit(profit.year)
																		}
																	>
																		Remove
																	</Button>
																</Col>
															</Row>
														</Container>
													);
												}
										  })}
								</ul>
							</div>
						</Form.Group>
					</Form.Row>
				</div>
				<Button type="submit">Submit form</Button>
			</Form>
			</div>
		);
	}
}

export default withRouter(CompanyForm);
