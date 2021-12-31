//getting API for showing all the data
import axios from 'axios';
//export const getContacts = () => fetch("http://localhost:7000/contacts").then(res => res.json())
export const getContacts = id => (
	console.log(id),
	axios.post(`http://localhost:7000/contacts`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createContacts = (todo) => fetch("http://localhost:7000/contacts/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateContacts = (todo, id) => fetch(`http://localhost:7000/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getContact = id => (
	console.log(id),
	axios.post(`http://localhost:7000/${id}`)
		.then(res => res.data, )
)
//export const getContact = (id) => fetch(`http://localhost:7000/${id}`).then(res => res.json())