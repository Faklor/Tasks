import { useState } from 'react'
import plus from '../plus.svg'
import { addTaskPost,getTasks } from './axios'

export default function AddTask({setArrayTasks}){
    const [check, setCheck] = useState(false)
    
    const [title, setTitle]= useState('')
    const [text, setText]= useState('')
    const [status, setStatus] = useState('active')
    


    function render(){
        if(check){
            return <div className='task'>
                <input defaultValue={title} onChange={e=>setTitle(e.target.value)} placeholder='Введите заголовок'/>
                <input defaultValue={text} onChange={e=>setText(e.target.value)} placeholder='Введите текст'/>
                <select defaultValue={status} onChange={e=>setStatus(e.target.value)}>
                    <option value='active'>Активен</option>
                    <option value='inProcess'>В процессе</option>
                    <option value='expect'>Ожидает выполнения</option>
                </select>

                <div className='controlls'>
                    <button onClick={()=>{addTaskPost(title, text, status)
                        .then(res=>{getTasks().then(res=>setArrayTasks(res.data))})
                        .catch(e=>{
                            console.log(e)
                            
                        })}}>Добавить</button>
                    <button onClick={()=>{setCheck(false)}}>Назад</button>
                </div>
                
            </div>
        }
        else{
            return <div className="addTask" >
            <img src={plus} alt='plus' onClick={()=>{setCheck(true)}}/>
            </div>
        }
        
    }

    return render()
}