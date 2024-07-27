// src/Components/TodoList.tsx
import React, { useState } from 'react';
import TodoType from '../todo';
import TodoService from '../TodoService';
import { FaCheck, FaEdit } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState<TodoType[]>(TodoService.getTodos());
    const [editedTodoId, setEditedTodoId] = useState<number | null>(null);
    const [editedTodoText, setEditedTodoText] = useState<string>("");

    const handleEditStart = (id: number, text: string) => {
        setEditedTodoId(id);
        setEditedTodoText(text);
    }

    const handleEditCancel = () => {
        setEditedTodoId(null);
        setEditedTodoText("");
    }

    const handleEditSave = (id: number) => {
        if (editedTodoText.trim() !== '') {
            const updateTodo = TodoService.updateTodo({
                id,
                text: editedTodoText,
                completed: false
            });
            setTodos((prevTodos) => prevTodos.map((todo) => todo.id === id ? updateTodo : todo));
            setEditedTodoId(null);
            setEditedTodoText("");
        }
    }

    const handleDeleteTodo = (id: number) => {
        TodoService.deleteTodo(id);
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }

    return (
        <div className="container mx-auto mt-10">
            <TodoForm setTodos={setTodos} />
            <div className="mt-6 space-y-4">
                {todos.map((todo) => (
                    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg" key={todo.id}>
                        {editedTodoId === todo.id ? (
                            <div className="flex items-center space-x-2">
                                <input 
                                    type="text" 
                                    value={editedTodoText} 
                                    onChange={(e) => setEditedTodoText(e.target.value)} 
                                    className="p-2 border rounded"
                                    autoFocus 
                                />
                                <button onClick={() => handleEditSave(todo.id)} className="text-green-500"><FaCheck /></button>
                                <button onClick={handleEditCancel} className="text-red-500"><GiCancel /></button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-2">
                                <span>{todo.text}</span>
                                <button onClick={() => handleEditStart(todo.id, todo.text)} className="text-blue-500"><FaEdit /></button>
                                <button onClick={() => handleDeleteTodo(todo.id)} className="text-red-500"><RiDeleteBin5Fill /></button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;
