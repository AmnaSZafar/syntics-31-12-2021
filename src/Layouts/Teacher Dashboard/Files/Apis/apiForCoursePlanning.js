//getting API for showing all the data
import axios from 'axios';

export const getCoursePlannings = id => (
	console.log(id),
	axios.post(`http://localhost:7000/coursePlannings/${id}`)
		.then(res => res.data, )
)
export const getAssignmentPlannings = id => (
	console.log(id),
	axios.post(`http://localhost:7000/assignmentPlannings/teacherSpecific/${id}`)
		.then(res => res.data, )
)
export const getCoursePlanningsForGrade1 = id => (
	console.log(id),
	axios.post(`http://localhost:7000/coursePlannings/Grade-1/${id}`)
		.then(res => res.data, )
)


export const getCoursePlanningsForGrade2 = id => (
	console.log(id),
	axios.post(`http://localhost:7000/coursePlannings/Grade-2/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningsForGrade3 = id => (
	console.log(id),
	axios.post(`http://localhost:7000/coursePlannings/Grade-3/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningsForGrade4 = id => (
	console.log(id),
	axios.post(`http://localhost:7000/coursePlannings/Grade-4/${id}`)
		.then(res => res.data, )
)


export const getCoursePlanningsForGrade5 = id => (
	console.log(id),
	axios.post(`http://localhost:7000/coursePlannings/Grade-5/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningsForGrade6 = id => (
	console.log(id),
	axios.post(`http://localhost:7000/coursePlannings/Grade-6/${id}`)
		.then(res => res.data, )
)


export const getCoursePlanningsForGrade7 = id => (
	console.log(id),
	axios.post(`http://localhost:7000/coursePlannings/Grade-7/${id}`)
		.then(res => res.data, )
)


export const getCoursePlanningsForGrade8 = id => (
	console.log(id),
	axios.post(`http://localhost:7000/coursePlannings/Grade-8/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningsForGrade9 = id => (
	console.log(id),
	axios.post(`http://localhost:7000/coursePlannings/Grade-9/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningsForGrade10 = id => (
	console.log(id),
	axios.post(`http://localhost:7000/coursePlannings/Grade-10/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningsForGrade11 = id => (
	console.log(id),
	axios.post(`http://localhost:7000/coursePlannings/Grade-11/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningsForGrade12 = id => (
	console.log(id),
	axios.post(`http://localhost:7000/coursePlannings/Grade-12/${id}`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createCoursePlannings = (todo) => fetch("http://localhost:7000/coursePlannings/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
export const createAssignmentPlannings = (todo) => fetch("http://localhost:7000/assignmentPlannings/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
//getting API for updating specific data
export const updateCoursePlannings = (todo, id) => fetch(`http://localhost:7000/coursePlannings/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})
export const updateAssignmentPlannings = (todo, id) => fetch(`http://localhost:7000/assignmentPlannings/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})    
//getting API for deleting specific data
export const deleteCoursePlannings = (todo, id) => fetch(`http://localhost:7000/coursePlannings/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data

export const getCoursePlanning = id => (
	console.log(id),
	axios.post(`http://localhost:7000/coursePlannings/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningAdmin = id => (
	console.log(id),
	axios.post(`http://localhost:7000/coursePlannings/admin/${id}`)
		.then(res => res.data, )
)
export const getAssignmentPlanningAdmin = id => (
	console.log(id),
	axios.post(`http://localhost:7000/assignmentPlannings/admin/${id}`)
		.then(res => res.data, )
)
export const getCoursePlanningTeacherSpecific = id => (
	console.log(id),
	axios.post(`http://localhost:7000/coursePlannings/teacherSpecific/${id}`)
		.then(res => res.data, )
)
