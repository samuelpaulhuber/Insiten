import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { WithContext as ReactTags } from 'react-tag-input';
import Util from '../../libs/util';
import { withRouter } from 'react-router-dom';
const KeyCodes = {
	comma: 188,
	enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class TargetForm extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			error: null,
			isLoading: false,
			validated: false,
			tags: [],
			data: {},
			test: false
		};
		this.handleDelete = this.handleDelete.bind(this);
		this.handleAddition = this.handleAddition.bind(this);
		this.handleDrag = this.handleDrag.bind(this);
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
		}
		console.log(form.elements.name);

		var tempTags = [...this.state.tags];
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
			contacts: tempTags.map((tag) => {
				return tag.text;
			}),
		};

Util.save.apply(this, [company]);

		event.preventDefault();
		this.props.history.push('/viewtargets');
	}

	render() {
		var data = this.props.data ? this.props.data : {};
		var { validated, tags, test } = this.state;
		var tempTags = [...tags];
		if (data && data.contacts && data.contacts && !test) {
			
			tempTags = [
				...tags,
				...data.contacts.map(contact => {
					return {
						id: contact,
						text: contact,
					};
				}),
			];
			this.setState({...this.state, test:true, tags:[...tempTags] })
		}
		return (
			<Form noValidate validated={validated} onSubmit={e => this.handleSubmit(e)}>
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
						<Form.Control type="text" placeholder="Zip" defaultValue={data.zip} ref="zip" name="zip" required />
						<Form.Control.Feedback type="invalid">
							Please enter the zip code in which the company is located.
						</Form.Control.Feedback>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} md="12" controlId="company.description">
						<Form.Label>Company Description</Form.Label>
						<Form.Control
							as="textarea"
							rows="3"
							defaultValue={data.description}
							ref="description"
							name="description"
						/>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} md="12" controlId="company.contacts">
						<Form.Label>Company Contacts</Form.Label>
						<div>
							<ReactTags
								tags={tags}
								delimiters={delimiters}
								handleDelete={this.handleDelete}
								handleAddition={this.handleAddition}
								handleDrag={this.handleDrag}
								handleTagClick={this.handleTagClick}
								placeholder="Add a contact"
							/>
						</div>
					</Form.Group>
				</Form.Row>
				<Button type="submit">Submit form</Button>
			</Form>
		);
	}
}

export default withRouter(TargetForm);
