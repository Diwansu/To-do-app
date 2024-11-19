import  {useState,useEffect} from "react";
import ViewTodo from "./ViewTodo";
import CreateTodo from "./CreateTodo";
import axios from "axios";

function Todo(){

const [todos,setTodos] = useState([]);

useEffect(()=>{
    const fetchTodos = async () => {
        try{
            const response = await axios.get("api/todos");
             setTodos(response);
        } catch (error){
          console.error("Error fetching data:", error);
        }
    };

    fetchTodos();
}, []);


const handleTodo = async (newTodo) => {
 try{
    const response = await axios.post("api/todos" , newTodo);
    setTodos((prev) => [... prev , response.data]);
 } catch(error){
    console.error("Error fetching data:" , error);
 }
}

const handleToggleComplete = async (id)=>{
    try{
        const todoToUpdate = todos.find((todo) => todo.id === id) ;
        const updatedTodo = {...todoToUpdate, completed : !todoToUpdate.completed};
         const response = await axios.patch(`/api/todos/${id}` , updatedTodo);
         setTodos((prev) =>
          prev.map((todo) => (todo.id === id ? response.data : todo)
        ));
    } catch (error){
        console.error("Error updating todo:" , error);
    }
}

return(
    <div className="space-y-6 p-6">
         <h1 className="text-2xl font-bold">Todo App</h1>
         <CreateTodo onAddTodo = {handleTodo}></CreateTodo>
         <ViewTodo todos = {todos} onToggleComplete = {handleToggleComplete}></ViewTodo>
    </div>
);
}

export default Todo;

