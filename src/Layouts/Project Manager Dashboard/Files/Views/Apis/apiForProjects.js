//getting API for showing all the data
import axios from 'axios';

export const getProjects = () => (
	axios.post(`http://localhost:7000/projects`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createProjects = (todo) => fetch("http://localhost:7000/projects/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateProject = (todo, id) => fetch(`http://localhost:7000/projects/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getProject = (id) => fetch(`http://localhost:7000/projects/${id}`).then(res => res.json())
export const getRegisterationprojects = id => (
	console.log(id),
	axios.post(`http://localhost:7000/projects/specific/${id}`)
		.then(res => res.data, )
		
)
export const getRegisterationprojectsById = id => (
	console.log(id),
	axios.post(`http://localhost:7000/projects/specific/id/${id}`)
		.then(res => res.data, )
)