import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ViewTargets from './components/ViewTargets/ViewTargets';
import { LinkContainer } from 'react-router-bootstrap';
import View from './components/View/View';
import Add from './components/Add/Add';
import TargetForm from './components/TargetForm/TargetForm';

function App() {
	return (
		<div className="max-container">
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand>Target Tracker</Navbar.Brand>
				<Nav className="mr-auto">
					<LinkContainer to="/">
						<Nav.Link>Home</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/viewTargets">
						<Nav.Link>View Targets</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar>
			<main>
				<Switch>
					<Route exact path="/targetForm" component={TargetForm} />
					<Route exact path="/add" component={Add} />
					<Route exact path="/view/:id" component={View} />
					<Route exact path="/viewTargets" component={ViewTargets} />
					<Route exact path="/" component={Home} />
				</Switch>
			</main>
		</div>
	);
}
export default App;
