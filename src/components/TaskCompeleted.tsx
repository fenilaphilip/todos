import React from "react";
import type { RootState } from "../store/todoStore";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TaskCompeleted: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const completedTasklist = todolist.filter((todo) => todo.completed == true);

  return (
    <>
      {completedTasklist.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </>
  );
};

export default TaskCompeleted;
