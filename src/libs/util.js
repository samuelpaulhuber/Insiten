import axios from 'axios';
const url = 'https://insitensrv.azurewebsites.net/api/'; //prod
//const url = 'http://localhost:5000/api/'; //dev
const util = {
	// call to retrieve list of all companies
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
					error: true,
					data: error.message,					
					isLoading: false,
				});
			});
	},

	// call to get company by id
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
					data: error.message,
					error: true,
					isLoading: false,
				});
			});
	},

	// call to delete a company by id
	delete(id,containingThis) {
		axios
			.delete(`${url}values/${id}`)
			.then(response => {
				if (response && response.data && response.data.success) {
					containingThis.setState({
						data: response.data.data,
						error: false,
						isLoading: false,
					});
				} else {
					containingThis.setState({
						data: response,
						error: true,
						isLoading: false,
					});
				}
			})
			.catch(error => {
				containingThis.setState({
					data: error.message,
					error: true,
					isLoading: false,
				});
			});
	},

	// call to save/update the company
	save(company, success) {
		return axios
			.post(url + 'values', company)
			.then(response => {
				if (response && response.data && response.data.success) {
					this.setState({
						data: response.data.data,
						error: false,
						isLoading: false,
					});
					success();
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
					data: error.message,
					error: true,
					isLoading: false,
				});
			});
	},
};

export default util;
