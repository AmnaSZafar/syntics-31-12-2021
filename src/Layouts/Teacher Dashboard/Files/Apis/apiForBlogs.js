//getting API for showing all the data
import axios from 'axios';
/*
export const getBlogs = () => fetch("http://localhost:7000/blogs").then(res => res.json())
*/

export const getBlogs = item => (
	console.log(item),
	axios.post('http://localhost:7000/blogs', item)
		.then(res => res.data, )
		
)

//getting API for inserting the data
export const createBlogs = (todo) => fetch("http://localhost:7000/blogs/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


//getting API for updating specific data
export const updateBlog = (todo, id) => fetch(`http://localhost:7000/coursePlannings/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
//getting API for deleting specific data
export const deleteBlog = (todo, id) => fetch(`http://localhost:7000/coursePlannings/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


//getting API for getting specific data
//export const getBlog = (id) => fetch(`http://localhost:7000/${id}`).then(res => res.json())

export const getBlog = id => (
	console.log(id),
	axios.post(`http://localhost:7000/${id}`)
		.then(res => res.data, )
		
)