import React from 'react'
import TodoList from './Components/TodoList'
import { FaPen } from 'react-icons/fa'
import { FaClipboardList } from 'react-icons/fa6'

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <div className="logoside">
            <FaPen/>
             <h1>What To Do</h1>
            <FaClipboardList/>
        </div>
      </div>
      <TodoList/>
    </div>
  )
}

export default App