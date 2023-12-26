
import { useContext } from "react";
import { TodoItemsContext } from "../Store/todo-items-store";
import TodoItem from "./TodoItem";

import styles from "./TodoItems.module.css";

const TodoItems = ({  onDeleteClick }) => {
 const {todoItems} = useContext(TodoItemsContext);


  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
