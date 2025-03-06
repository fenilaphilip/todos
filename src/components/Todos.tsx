import React from "react";
import type { RootState } from "../store/todoStore";
import { useSelector } from "react-redux";
import classes from "../../styles/Todos.module.css";
import TodoItem from "./TodoItem";

const Todos: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  return (
    <ul className={classes.todos}>
      {todolist.map((todo) => {
        console.log(`todoList contains ${JSON.stringify(todo)}`);
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default Todos;
