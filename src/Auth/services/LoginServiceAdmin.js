import axios from 'axios';

const LoginService = data => (
	console.log(data),
	axios.post('http://localhost:7000/students/login', data)
		.then(res => res.status, )
		
)

export default LoginService;
