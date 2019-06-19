import axios from 'axios';
const url = 'http://insitenserver.azurewebsites.net/api/'; //'http://localhost:5000/api/'
const util = {
	getAll() {
		axios
			.get(url + 'values')
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
			.get(`${url}values/${id}`)
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
	delete(id,test) {
		axios
			.delete(`${url}values/${id}`)
			.then(response => {
				if (response && response.data && response.data.success) {
					test.setState({
						data: response.data.data,
						error: false,
						isLoading: false,
					});
				} else {
					test.setState({
						data: response,
						error: true,
						isLoading: false,
					});
				}
			})
			.catch(error => {
				test.setState({
					data: error,
					error: true,
					isLoading: false,
				});
			});
	},
	save(company) {
		axios
			.post(url + 'values', company)
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
