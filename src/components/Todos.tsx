import { FC } from "react";
import Todo from "../dataModel/todo.ts";
import TodoItem from "./TodoItem.tsx";
import classes from "../styles/Todos.module.css";

const Todos: FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
