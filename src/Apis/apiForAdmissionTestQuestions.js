//getting API for showing all the data
import axios from 'axios';
//export const getAdmissionTestQuestions = () => fetch("http://localhost:7000/admissionQuestions").then(res => res.json())
export const getAdmissionTestQuestions = id => (
	console.log(id),
	axios.post(`http://localhost:7000/admissionQuestions`)
		.then(res => res.data, )
)

//getting API for inserting the data
export const createAdmissionTestQuestions = (todo) => fetch("http://localhost:7000/admissionQuestions/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateAdmissionTestQuestions = (todo, _id) => fetch(`http://localhost:7000/${_id}`, {
// http://localhost:4000/${id}
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getAdmissionTestQuestion = (_id) => fetch(`http://localhost:7000/${_id}`).then(res => res.json())
export const getAdmissionTestQuestion = _id => (
	console.log(_id),
	axios.post(`http://localhost:7000/${_id}`)
		.then(res => res.data, )
)
