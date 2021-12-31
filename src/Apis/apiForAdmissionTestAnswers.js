//getting API for showing all the data
import axios from 'axios';

//export const getAnswers = () => fetch("http://localhost:7000/answers").then(res => res.json())

export const getAnswers = id => (
	console.log(id),
	axios.post(`http://localhost:7000/answers`)
		.then(res => res.data, )
)



//getting API for inserting the data
export const createAnswers = (todo) => fetch("http://localhost:7000/answers/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getAnswer = (id) => fetch(`http://localhost:7000/${id}`).then(res => res.json())
export const getAnswer = id => (
	console.log(id),
	axios.post(`http://localhost:7000/${id}`)
		.then(res => res.data, )
)
