// src/Components/TodoForm.tsx
import React, { useState } from 'react';
import TodoService from '../TodoService';
import TodoType from '../todo';

const TodoForm = ({ setTodos }: { setTodos: React.Dispatch<React.SetStateAction<TodoType[]>> }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim() !== '') {
            const newTodo = TodoService.addTodos(text);
            setTodos((prevTodos) => [...prevTodos, newTodo]);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex space-x-2 mb-6 justify-center">
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                className="flex-1 p-2 border rounded" 
                placeholder="Add a new todo"
            />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add</button>
        </form>
    );
};

export default TodoForm;
