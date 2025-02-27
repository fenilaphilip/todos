import React from "react";
import Todo from "../dataModel/todo";
import classes from "../styles/TodoItem.module.css";

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  let dotClass;
  if (todo.priority == 0) {
    dotClass = classes.dotForLow;
  } else if (todo.priority == 1) {
    dotClass = classes.dotForMedium;
  } else {
    dotClass = classes.dotForHigh;
  }

  return (
    <div className={classes.item}>
      <div>
        {todo.caption}
        <span className={dotClass}></span>
        <span>{todo.dueDate.toLocaleDateString()}</span>
      </div>

      <p>{todo.description}</p>
    </div>
  );
};

export default TodoItem;
