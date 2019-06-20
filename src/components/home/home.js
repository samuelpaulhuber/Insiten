import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
// Default landing page
function Home() {
	return (
		<div className="centered">
			<h1> Welcome to Company Tracker </h1>{' '}
            <p> Please select <Link to={'/viewCompanies'} > Manage Companies </Link></p>
		</div>
	);
}
export default Home;
