import React from "react";
import type { RootState } from "../store/todoStore";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const Todos: React.FC = (props) => {
  const todolist = useSelector((state: RootState) => state);
  return (
    <div {...props}>
      {todolist.map((todo) => {
        // console.log(`todoList contains ${JSON.stringify(todo)}`);
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default Todos;
