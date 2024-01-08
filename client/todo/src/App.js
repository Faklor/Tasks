import './scss/app.scss'
import Filter from './components/filter'
import Task from './components/task'
import AddTask from './components/addTast'
import { getTasks } from './components/axios'

import {useEffect, useState} from 'react'

function App() {
  let [arrayTasks,  setArrayTasks] = useState([])

  useEffect(()=>{
    getTasks()
    .then(res=>{
      setArrayTasks(res.data)
      
    })
    .catch(e=>{

    })
  },[])



  return (
    <>
      <header>
        <Filter setArrayTasks={setArrayTasks}/>
      </header>
      <main>
        
        {arrayTasks.map((i,index)=>{
          return <Task {...i} key={index} index={index} setArrayTasks={setArrayTasks}/>
        })}
        <AddTask setArrayTasks={setArrayTasks}/>
      </main>
    </>
  )
}

export default App;
