const express = require('express');
const app = express();
app.use(express.json());
const  { createTodo , updateTodo } =  require('./types');
const {todo} = require("./db")






const port = 3000 ;


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

app.post('/todo' , async function(req,res) {
    const createpayload = req.body ;
    const parsePayload = createTodo.safeParse(createTodo);
    if(!parsePayload.success) {
        res.status(411).json({
            msg : "You sent the wrong inputs" ,
        })
        return ;
    }
    
    await todo.create({
        title : createpayload.title,
        description : createpayload.description,
        completed : false
    })
})

app.get("/todos" , async function(req,res) {

    const todos = await  todo.find({});
     res.json({
        todos
     })
})

app.put("/completed" , async  function(req,res) {
  const updatePayload = req.body ;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if(!parsePayload.success) {
    res.status(411).json({
        msg : "You sent the wrong inputs",
    })
    return ;
  }

  await todo.update({
    _id : req.body.id 
  },
{ 
    completed : true 
})

res.json({
    msg : "Todo marked as completed"
})
})



