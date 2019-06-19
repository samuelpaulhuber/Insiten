import React from 'react';
import { Form, Col, Button, Container, Row } from 'react-bootstrap';
import Util from '../../libs/util';
import { withRouter } from 'react-router-dom';
import './TargetForm.css';

class TargetForm extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			error: null,
			isLoading: false,
			validated: false,
			tags: [],
			data: {},
			test: false,
			tempContact: '',
			tempYear: '',
			tempProfit: '',
			yearlyRevenue: [],
		};

		this.handleDelete = this.handleDelete.bind(this);
		this.handleAddition = this.handleAddition.bind(this);
		this.handleDrag = this.handleDrag.bind(this);
		this.handleAddTag = this.handleAddTag.bind(this);
		this.handleTempContactChange = this.handleTempContactChange.bind(this);
		this.handleTempProfitChange = this.handleTempProfitChange.bind(this);
		this.handleTempYearChange = this.handleTempYearChange.bind(this);
		this.handleRemoveContact = this.handleRemoveContact.bind(this);
		this.handleRemoveProfit = this.handleRemoveProfit.bind(this);
	}

	handleTempProfitChange(event) {
		this.setState({ ...this.state, tempProfit: event.target.value });
	}

	handleTempYearChange(event) {
		this.setState({ ...this.state, tempYear: event.target.value });
	}

	handleTempContactChange(event) {
		this.setState({ ...this.state, tempContact: event.target.value });
	}

	handleRemoveContact(text) {
		const { tags } = this.state;
		var test = tags.map((tag, i) => {
			if (text !== tag) return tag;
		});

		this.setState({ ...this.state, tags: test });
	}

	handleRemoveProfit(year) {
		const { yearlyRevenue } = this.state;
		var test = yearlyRevenue.map((profit, i) => {
			if (year !== profit.year) return profit;
		});

		this.setState({ ...this.state, yearlyRevenue: test });
	}

	handleAddTag(e) {
		const { tags } = this.state;
		var test = tags ? tags.slice() : [];
		test.push(this.state.tempContact);
		this.setState({ ...this.state, tags: test });
	}

	handleAddProfit(e) {
		const { yearlyRevenue } = this.state;

		var test = yearlyRevenue ? yearlyRevenue.slice() : [];
		test.push({ year: this.state.tempYear, profit: this.state.tempProfit });
		this.setState({ ...this.state, yearlyRevenue: test });
	}

	handleDelete(i) {
		const { tags } = this.state;
		this.setState({ ...this.state, tags: tags.filter((tag, index) => index !== i) });
	}

	handleAddition(tag) {
		this.setState(state => ({ ...this.state, tags: [...state.tags, tag] }));
	}

	handleDrag(tag, currPos, newPos) {
		const tags = [...this.state.tags];
		const newTags = tags.slice();

		newTags.splice(currPos, 1);
		newTags.splice(newPos, 0, tag);

		// re-render
		this.setState({ ...this.state, tags: newTags });
	}

	handleSubmit(event) {
		const form = event.currentTarget;
		console.log(form.elements);
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
			return;
		}
		console.log(form.elements.name);

		var tempTags = this.state.tags.slice();
		if (this.props && this.props.data && this.props.data.tags) {
			tempTags = [
				...tempTags,
				...this.props.data.contacts.map(contact => {
					return {
						id: contact,
						text: contact,
					};
				}),
			];
		}

		const company = {
			id: this.props.id ? this.props.id : 0,
			name: form.elements.name.value,
			status: form.elements.status.value,
			city: form.elements.city.value,
			state: form.elements.state.value,
			zip: form.elements.zip.value,
			description: form.elements.description.value,
			contacts: this.state.tags, // ? this.state.tags.map((t) => { return t.text }) : [],
			yearlyRevenue: this.state.yearlyRevenue,
		};

		Util.save.apply(this, [company, this.redirectToViewTargets.bind(this)]);
		
		event.preventDefault();
	}

	redirectToViewTargets() {
		this.props.history.push('/viewtargets');
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			// error: null,
			// isLoading: false,
			// validated: false,
			// tags: [],
			// data: {},
			// test: false,
			// tempContact: '',
			// tempYear: '',
			// tempProfit: '',
			// yearlyRevenue: [],
			error: this.state.error,
			isLoading: this.state.isLoading,
			validated: this.state.validated,
			test: this.state.test,
			tempContact: this.state.tempContact,
			tempYear: this.state.tempYear,
			tempProfit: this.state.tempProfit,
			data: nextProps.data,
			tags: nextProps.data.contacts,
			yearlyRevenue: nextProps.data.yearlyRevenue
		});
	}

	render() {
		var data = this.props.data ? this.props.data : {};
		var { validated } = this.state;

		return (
			<Form validated={validated} onSubmit={e => this.handleSubmit(e)}>
				<Form.Row>
					<Form.Group as={Col} md="6" controlId="comapny.name">
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
							<Button type="button" className="addButton" onClick={this.handleAddTag}>
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
									<Col><strong>Name</strong></Col>
								</Row>
							<div>
								<ul>
									{!this.state.tags
										? null
										: this.state.tags.map((tag, i) => {
												if (tag) {
													return (
														<Container className="allContacts" key={tag + i}>
															<Row md="12">
																<Col md="6">{tag}</Col>
																<Col md="6">
																	<Button
																		type="button"
																		onClick={() => this.handleRemoveContact(tag)}
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
						<Form.Group as={Col} md="6">
							<div>
								<h4>All Profits</h4>
								<Row>
									<Col><strong>Year</strong></Col>
									<Col><strong>Profit</strong></Col>
									<Col></Col>
								</Row>
								<ul>
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
		);
	}
}

export default withRouter(TargetForm);
