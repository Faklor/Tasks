const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
// понимание json 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// обход проверки безопасности
app.use(cors())

const routeTask = require('./routs/task')
app.use("/", routeTask)


const port = 5000;
const server = async ()=>{
  try{
    mongoose.connect('mongodb://127.0.0.1:27017/todo')
    .then(() => console.log('Connected!'))
    app.listen(port, ()=> { console.log(`Server started on port: ${port}`) })
    
  }
  catch(e){
    console.log('Server invalid', e.message)
    process.exit()
  }
}
server()
  


