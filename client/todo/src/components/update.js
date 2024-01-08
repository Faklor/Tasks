import { updateTaskPost, getTasks } from "./axios"

export default function UpdateTask({setCheck,title, text, status, id,setArrayTasks}){

    return(
        <div className="task">
           <div/>
            <input defaultValue={title} onChange={e=>title = e.target.value}/>
            <h2>Описание</h2>
            <textarea defaultValue={text}  onChange={e=>text = e.target.value}></textarea>
            <select defaultValue={status} onChange={e=>status = e.target.value}>
                <option value='active'>Активен</option>
                <option value='inProcess'>В процессе</option>
                <option value='expect'>Ожидает выполнения</option>
            </select>
            <div className='controlls'>
                <button onClick={()=>updateTaskPost(id, title, text,status).then(res=>getTasks().then(res=>setArrayTasks(res.data)))}>Редактировать</button>
                <button onClick={()=>setCheck(false)}>Назад</button>
            </div>
        </div>
    )
}