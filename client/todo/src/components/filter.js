import { getTasks } from '../components/axios'

export default function Filter({setArrayTasks}){

    return(
        <>
            <button onClick={()=>{getTasks().then(res=>setArrayTasks(res.data))}}>Все</button>
            <button onClick={()=>{getTasks().then(res=>{
                let arr = []
                res.data.forEach(i=>{
                    if(i.status === "active"){
                        arr.push(i)
                    }
                    
                })
                setArrayTasks(arr)
            }    
            )}}>Активные</button>
            <button onClick={()=>{getTasks().then(res=>{
                let arr = []
                res.data.forEach(i=>{
                    if(i.status === "inProcess"){
                        arr.push(i)
                    }
                    
                })
                setArrayTasks(arr)
            }    
            )}}>В процессе</button>
            <button onClick={()=>{getTasks().then(res=>{
                let arr = []
                res.data.forEach(i=>{
                    if(i.status === "expect"){
                        arr.push(i)
                    }
                    
                })
                setArrayTasks(arr)
            }    
            )}}>Ожидают выполнения</button>
        </>
    )
}