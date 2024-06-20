import { FC } from "react";
import classes from "../styles/TodoItem.module.css";

const TodoItem: FC<{ text: string; onRemoveTodo: () => void }> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
