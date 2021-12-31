//getting API for showing all the data
import axios from 'axios';
export const getNotifications = () => fetch("http://localhost:7000/notifications").then(res => res.json())

//getting API for inserting the data
export const createNotifications = (todo) => fetch("http://localhost:7000/notifications/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


//getting API for updating specific data
export const updateNotification = (todo, id) => fetch(`http://localhost:7000/notifications/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
//getting API for deleting specific data
export const deleteNotification = (todo, id) => fetch(`http://localhost:7000/notifications/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


//getting API for getting specific data

export const getNotificationSpecific = id => (
	console.log(id),
	axios.post(`http://localhost:7000/notifications/specific/${id}`)
		.then(res => res.data, )
)


export const getNotificationSpecificWithSubject = (id, subject) => (
	console.log(id, subject),
	axios.post(`http://localhost:7000/notifications/specific/subject/${id}&${subject}`)
		.then(res => res.data, )
)
export const getNotificationById = id => (
	console.log(id),
	axios.post(`http://localhost:7000/notifications/specific/id/${id}`)
		.then(res => res.data, )
)