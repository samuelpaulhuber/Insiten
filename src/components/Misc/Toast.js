import React from 'react';
import {Toast} from 'react-bootstrap';
function ErrorToast(props) {
	return (
        <div
            aria-live="polite"
            aria-atomic="true"
            style={{
                position: 'relative',
                minHeight: '100px',
                display: props.state.isLoading ? 'block' : 'none',
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
                <Toast.Body>Message: {props.state.error}</Toast.Body>
            </Toast>
        </div>
    );
}
export default ErrorToast;
