const {Schema, model} = require('mongoose')

const taskSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    text:String,
    status:{
        type:String,
        required:true,
        default:"ожидает выполнения"
    }
})

module.exports = model('task', taskSchema)