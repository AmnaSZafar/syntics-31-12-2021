//getting API for showing all the data
import axios from 'axios';

//export const getAnswers = () => fetch("http://localhost:7000/answers").then(res => res.json())
export const getAnswers = id => (
	console.log(id),
	axios.post(`http://localhost:7000/answers`)
		.then(res => res.data, )
)


//getting API for inserting the data

//getting API for getting specific data
//export const getAnswer = (id) => fetch(`http://localhost:7000/${id}`).then(res => res.json())
export const getFlipBookSubjects = id => (
	console.log(id),
	axios.post(`http://localhost:7000/flipbook-subjects/${id}`)
		.then(res => res.data, )
)
