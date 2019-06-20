import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import { LinkContainer } from 'react-router-bootstrap';
import View from './components/Edit/Edit';
import Add from './components/Add/Add';
import CompanyForm from './components/CompanyForm/CompanyForm';
import ViewCompanies from './components/ViewCompanies/ViewCompanies';
function App() {
	return (
		<div className="max-container">
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand>Company Tracker</Navbar.Brand>
				<Nav className="mr-auto">
					<LinkContainer to="/">
						<Nav.Link>Home</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/viewCompanies">
						<Nav.Link>Manage Companies</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar>
			<main>
				<Switch>
					<Route exact path="/companyForm" component={CompanyForm} />
					<Route exact path="/add" component={Add} />
					<Route exact path="/view/:id" component={View} />
					<Route exact path="/viewCompanies" component={ViewCompanies} />
					<Route exact path="/" component={Home} />
				</Switch>
			</main>
		</div>
	);
}
export default App;
