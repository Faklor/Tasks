import { useState } from 'react'
import '../scss/task.scss'
//import { deleteTask } from './animate'
import { deleteTaskPost,getTasks } from './axios'
import Update from './update'

export default function Task({title, text, status, _id, index, setArrayTasks}){
    const [check,  setCheck] = useState(false)  
    

    return check?  <Update 
            setCheck={setCheck}
            title={title}
            text={text}
            status={status}
            id={_id}
            setArrayTasks={setArrayTasks}
        /> : <div className="task">
            <div className={status}/>
            <h1>{title}</h1>
            <h2>Описание</h2>
            <textarea defaultValue={text}></textarea>
            <div className='controlls'>
                <button onClick={()=>setCheck(true)}>Редактировать</button>
                <button onClick={()=>{
                    //deleteTask(index)
                    deleteTaskPost(_id).then(res=>getTasks().then(res=>setArrayTasks(res.data)))
                    
                }}>Удалить</button>
            </div>
        </div>
            
}