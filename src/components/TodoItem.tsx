import React from "react";
import Todo from "../dataModel/todo";
import classes from "../styles/TodoItem.module.css";

const TodoItem: React.FC<{ todo: Todo; onRemoveTodo: () => void }> = ({
  todo,
  onRemoveTodo,
}) => {
  return (
    <li className={classes.item} onClick={onRemoveTodo}>
      {todo.caption}
      <p>{todo.description}</p>
    </li>
  );
};

export default TodoItem;
