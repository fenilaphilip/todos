import React from "react";
import Todo from "../dataModel/todo";
import classes from "../styles/TodoItem.module.css";

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <li className={classes.item}>
      {todo.caption}
      <p>{todo.description}</p>
    </li>
  );
};

export default TodoItem;
