import axios from  'axios'

const getTasks = async()=> await axios.get('http://localhost:5000/tasks')

const deleteTaskPost = async(id)=> await axios.post('http://localhost:5000/delete',{id:id})

const addTaskPost = async(title, text, status)=> await axios.post('http://localhost:5000/add',{title:title, text:text, status: status})

const updateTaskPost= async(id, title, text, status)=> await axios.post('http://localhost:5000/update',{id: id,title:title, text:text, status: status})

export {
    getTasks,
    deleteTaskPost,
    addTaskPost,
    updateTaskPost
}