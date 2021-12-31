//getting API for showing all the data
import axios from 'axios';

//export const getAnswers = () => fetch("http://localhost:7000/answers-test").then(res => res.json())
export const getAnswersTest = id => (
	console.log(id),
	axios.post(`http://localhost:7000/answers-test`)
		.then(res => res.data, )
)


//getting API for inserting the data
export const createAnswersTest  = (todo) => fetch("http://localhost:7000/answers-test/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getAnswer = (id) => fetch(`http://localhost:7000/${id}`).then(res => res.json())
export const getAnswerTest  = id => (
	console.log(id),
	axios.post(`http://localhost:7000/answers-test/${id}`)
		.then(res => res.data, )
)

export const getAnswerSpecificWithSubjectTest  = (id) => (
	console.log(id),
	axios.post(`http://localhost:7000/answers-test/specific/subject/${id}`)
		.then(res => res.data, )
)

export const getAnswerSpecificTest  = id => (
	console.log(id),
	axios.post(`http://localhost:7000/answers-test/specific/${id}`)
		.then(res => res.data, )
)

export const getAnswerByIdTest  = id => (
	console.log(id),
	axios.post(`http://localhost:7000/answers-test/specific/id/${id}`)
		.then(res => res.data, )
)