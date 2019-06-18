import axios from 'axios';
const util = {
	getAll() {
		axios
			.get('http://localhost:5000/api/values')
			.then(response => {
				if (response && response.data && response.data.success) {
					this.setState({
						data: response.data.data,
						error: false,
						isLoading: false,
					});
				} else {
					this.setState({
						data: response,
						error: true,
						isLoading: false,
					});
				}
			})
			.catch(error => {
				this.setState({
					data: error,
					error: true,
					isLoading: false,
				});
			});
	},
	get(id) {
		axios
			.get(`http://localhost:5000/api/values/${id}`)
			.then(response => {
				if (response && response.data && response.data.success) {
					this.setState({
						data: JSON.parse(response.data.data),
						error: false,
						isLoading: false,
					});
				} else {
					this.setState({
						data: response,
						error: true,
						isLoading: false,
					});
				}
			})
			.catch(error => {
				this.setState({
					data: error,
					error: true,
					isLoading: false,
				});
			});
	},
	delete(id) {
		axios
			.delete(`http://localhost:5000/api/values/${id}`)
			.then(response => {
				if (response && response.data && response.data.success) {
					this.setState({
						data: response.data.data,
						error: false,
						isLoading: false,
					});
				} else {
					this.setState({
						data: response,
						error: true,
						isLoading: false,
					});
				}
			})
			.catch(error => {
				this.setState({
					data: error,
					error: true,
					isLoading: false,
				});
			});
	},
	save(company) {
		axios
			.post('http://localhost:5000/api/values', company)
			.then(response => {
				if (response && response.data && response.data.success) {
					this.setState({
						data: response.data.data,
						error: false,
						isLoading: false,
					});
				} else {
					this.setState({
						data: response,
						error: true,
						isLoading: false,
					});
				}
			})
			.catch(error => {
				this.setState({
					data: error,
					error: true,
					isLoading: false,
				});
			});
	},
};

export default util;