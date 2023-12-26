import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";
import {TodoItemsContext} from '../Store/todo-items-store'
const WelcomeMessage = () => {
  const {todoItems} = useContext(TodoItemsContext);

 
  return <p className={styles.welcome}>Enjoy Your Day</p>;
};

export default WelcomeMessage;
