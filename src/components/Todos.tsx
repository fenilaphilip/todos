import React, { useContext } from "react";
import TodoItem from "./TodoItem.tsx";
import { TodosContext } from "../store/todos-context.tsx";
import classes from "../styles/Todos.module.css";

const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
          onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
