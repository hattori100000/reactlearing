import { useState } from 'react'
import AppName from './Components/AppName'
import Addtodo from './Components/Addtodo'
import Todoitem from './Components/Todoitem'
import Todoitem2 from './Components/Todoitem2'
import Todoitems from './Components/Todoitems'
import './App.css'

function App() {
  const todoItems = [
    {
      name: 'Buy Milk',
      dueDate: '4/10/2023'
    },
    {
      name: 'Go to college',
      dueDate: '4/10/2023'
    }
  ]

  return (
    <div className='todo-container'>
      <AppName />
      <Addtodo />
      <Todoitems />
      {/* 
      <div className="item-container">
        <Todoitem />
        <Todoitem2 />
      </div>
      */}
    </div>
  )
}

export default App
