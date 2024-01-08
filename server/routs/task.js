const {Router} = require('express')
const Task = require('../models/task')

const router = Router()

router.get('/tasks', async (req, res)=>{
    try{
        const tasks = await Task.find({})
        res.json(tasks)
    }
    catch(e){
        res.status(500).json({error:e.message}) 
    }
})

router.post('/add',async (req,res)=>{
    try{
        const {title, text, status} = req.body

        const newTast = await Task.create({title,text,status})

        res.json({newTask:newTast, create:true})
    }
    catch(e){
        res.status(500).json({error:e.message}) 
    }
})
router.post('/delete',async (req,res)=>{
    try{
        const {id} = req.body

        const task = await Task.findById(id)

        
        await Task.deleteOne(task)
        res.json({delete:true})
    }
    catch(e){
        res.status(500).json({error:e.message}) 
    }
})
router.post('/update',async (req,res)=>{
    try{
        const {id, title, text, status} = req.body
        const task = await Task.findById(id)

        await Task.updateOne(task, {title:title, text:text,status:status})
        res.json({update:true})
    }
    catch(e){
        res.status(500).json({error:e.message}) 
    }
})

module.exports = router