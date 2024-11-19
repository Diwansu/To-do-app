import  { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const CreateTodo = ({onAddTodo}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const newTodo = { title, description, completed: false };
  
      
      onAddTodo(newTodo);
  
      
      setTitle("");
      setDescription("");
    };
  
    return (
        <div className="w-full">
           <AspectRatio ratio={16 / 9} className="bg-muted">
    <div className="relative w-full h-full">
      {/* <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        className="absolute inset-0 h-full w-full object-cover rounded-md"
      /> */}

      <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-md">
        <Input
        type = "text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Textarea
        type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Button type="submit">Add Todo</Button>
    
      </form>
      </div>
      </AspectRatio>
      </div>
    );
};

export  default CreateTodo ;
