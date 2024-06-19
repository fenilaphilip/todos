import { FC } from "react";
import Todo from "../data/todo.ts";
import TodoItem from "./TodoItem.tsx";

const Todos: FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
