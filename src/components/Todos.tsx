import React from "react";
import type { RootState } from "../store/todoStore";
import { useSelector } from "react-redux";
import classes from "../styles/Todos.module.css";
import TodoItem from "./TodoItem";

const Todos: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  return (
    <ul className={classes.todos}>
      {todolist.map((todo) => {
        return (
          <li>
            <TodoItem key={todo.id} todo={todo} />
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
