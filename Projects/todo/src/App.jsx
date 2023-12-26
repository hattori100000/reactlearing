import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./Store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const DeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
const defaultTodoItems = [{name:'Buy Ghee', dueDate:'Today'}]
  return (

<TodoItemsContext.Provider value={{ 
  todoItems, 
addNewItem,
 DeleteItem,
}}>
    <center className="todo-container">
      <AppName />
      <AddTodo  />
      <WelcomeMessage></WelcomeMessage>
      <TodoItems
    
       
      ></TodoItems>
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
