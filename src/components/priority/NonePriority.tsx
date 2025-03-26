import React from "react";
import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import TodoItem from "../utils/TodoItem";
import { Typography } from "@mui/material";

export const NonePriority: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const nonePriorityTodo = todolist.filter(
    (todo) => todo.priority === null && todo.completed === false
  );

  return (
    <>
      {todolist.length === 0 && (
        <Typography variant="h6">Your Task Bucket is empty!</Typography>
      )}
      {todolist.length !== 0 && nonePriorityTodo.length === 0 && (
        <Typography variant="h6">There is nothing to show!</Typography>
      )}
      {nonePriorityTodo.length !== 0 &&
        nonePriorityTodo.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              showLabel={false}
              showDuedate={true}
            />
          );
        })}
    </>
  );
};
