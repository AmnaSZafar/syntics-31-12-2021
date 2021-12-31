//getting API for showing all the data
import axios from 'axios';
//export const getTeachers = () => fetch("http://localhost:7000/teachers").then(res => res.json())
export const getTeachers = id => (
	console.log(id),
	axios.post(`http://localhost:7000/teachers`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createTodoForTeacher = (todo) => fetch("http://localhost:7000/teachers/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateTodoForTeacher = (todo, id) => fetch(`http://localhost:7000/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getTeacher = (id) => fetch(`http://localhost:7000/teachers${id}`).then(res => res.json())
export const getCourseForTeacher = id => (
	console.log(id),
	axios.post(`http://localhost:7000/teachers/specificGrade/${id}`)
		.then(res => res.data, )
)

export const getCourseForTeacherById = id => (
	console.log(id),
	axios.post(`http://localhost:7000/teachers/specific/id/${id}`)
		.then(res => res.data, )
)