import React from 'react';
import { Toast } from 'react-bootstrap';

// generic toast used to display errors
class ErrorToast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			message: '',
		};
	}
	componentWillReceiveProps(nextProps) {
		// service call completed update the state
		if (nextProps.state.error || (typeof(nextProps.state.data) === "string" && nextProps.state.data.toLowerCase().indexOf("error") >= 0)) {
			this.setState({
				error: true,
				message: nextProps.state.data,
			});
		} else {
            this.setState({
				error: null,
				message: ''
			});
		}
	}
	render() {
		return (
			<div
				aria-live="polite"
				aria-atomic="true"
				style={{
					position: 'relative',
					minHeight: '100px',
					display: this.state.error ? 'block' : 'none',
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
						<strong className="mr-auto">Error!</strong>
					</Toast.Header>
					<Toast.Body>Message: {this.state.message}</Toast.Body>
				</Toast>
			</div>
		);
	}
}
export default ErrorToast;
