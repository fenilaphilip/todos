import React from "react";
import Todo from "../../dataModel/todo";
import classes from "../../styles/TodoItem.module.css";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../store/todoSlice";
import { Priority } from "../../dataModel/todo";

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const dispatch = useDispatch();

  let dotClass = classes.dotForLow;
  if (todo.priority == Priority.Medium) {
    dotClass = classes.dotForMedium;
  } else if (todo.priority == Priority.High) {
    dotClass = classes.dotForHigh;
  }

  return (
    <li className={classes.item}>
      <p>
        {todo.caption}
        <span className={dotClass}></span>
        <span>{todo.dueDate && todo.dueDate.toLocaleDateString()}</span>
      </p>
      <p>{todo.description}</p>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </li>
  );
};

export default TodoItem;
