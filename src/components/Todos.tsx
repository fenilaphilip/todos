import { FC } from "react";
import Todo from "../dataModel/todo.ts";
import TodoItem from "./TodoItem.tsx";
import classes from "../styles/Todos.module.css";

const Todos: FC<{ items: Todo[]; onRemoveTodo: (todoId: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
