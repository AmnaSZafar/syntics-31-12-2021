//getting API for showing all the data
import axios from 'axios';
//export const getCourseContents = () => fetch("http://localhost:7000/coursePlannings").then(res => res.json())
export const getCourseContents = id => (
	console.log(id),
	axios.post(`http://localhost:7000/coursePlannings`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createCourseContents = (todo) => fetch("http://localhost:7000/coursePlannings/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateCourseContents = (todo, id) => fetch(`http://localhost:7000/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for deleting specific data
export const deleteCourseContent = (todo, id) => fetch(`http://localhost:7000/coursePlannings/delete/${id}`).then(res => res.json())


//getting API for getting specific data
//export const getCourseContent = (id) => fetch(`http://localhost:7000/${id}`).then(res => res.json())
export const getCourseContent = id => (
	console.log(id),
	axios.post(`http://localhost:7000/${id}`)
		.then(res => res.data, )
)