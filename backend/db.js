const mongoose = require("mongoose");
const {Schema} = mongoose ;

const todoSchema = new Schema({
    title : String,
    description : String,
    completed : Boolean 
})

const todo = mongoose.model('todos' , todoSchema);

module.exports = {
    todo
}

