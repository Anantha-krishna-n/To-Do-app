import React,{Dispatch,SetStateAction,useState} from 'react'
import TodoService from '../TodoService'
import TodoType from '../todo'

interface PropsTypes{
    setTodos:Dispatch<SetStateAction<TodoType[]>>
}

const TodoForm:React.FC<PropsTypes> = ({setTodos}) => {
    const [newTodoText,setnewTodoText]=useState<string>("")
    const handleAddTodo=()=>{
        if(newTodoText.trim() !==""){
            const newTodo=TodoService.addTodos(newTodoText);
            setTodos((prevTodos)=>[...prevTodos,newTodo])
            setnewTodoText("");
        }
    }
  return (

    <div className='inputForm'>
        <input type="text"
        value={newTodoText}
        onChange={(e)=>setnewTodoText(e.target.value)}
        autoFocus={true}
        placeholder='Add a task' 
        />
        <button onClick={handleAddTodo}>Add to do</button>
    </div>
  )
}

export default TodoForm