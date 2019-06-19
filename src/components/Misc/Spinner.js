import React from 'react';
import { Spinner } from 'react-bootstrap';

// generic spinner
function Spin(props) {
	return (
		<Spinner style={{ display: props.state.isLoading ? 'block' : 'none' }} animation="border" role="status">
			<span className="sr-only">Loading...</span>
		</Spinner>
	);
}
export default Spin;
