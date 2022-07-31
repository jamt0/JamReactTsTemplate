var api_url = process.env.REACT_API_URL || 'http://localhost:4000';
console.log(process.env.REACT_APP_API_URL, 'qq');

const config = {
	baseURL: api_url,
	headers: {
		accessToken: localStorage.getItem('accessToken'),
	},
};

export default config;
