import React from "react";
import TodoList from "./Components/TodoList";
import { FaPen } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full bg-blue-600 text-white py-4 flex justify-center items-center">
        <FaPen className="mr-2" />
        <h1 className="text-3xl font-bold">What To Do</h1>
        <FaClipboardList className="ml-2" />
      </div>
      <div className="w-screen flex justify-center items-center">
         <div className="w-[25rem]">
         <TodoList />
         </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
