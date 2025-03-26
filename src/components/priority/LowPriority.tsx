import React from "react";
import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import TodoItem from "./../TodoItem";
import { Typography } from "@mui/material";
import { Priority } from "../../dataModel/todo";

export const LowPriority: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const lowPriorityTodo = todolist.filter(
    (todo) => todo.priority === Priority.Low && todo.completed === false
  );

  return (
    <>
      {todolist.length === 0 && (
        <Typography variant="h6">Your Task Bucket is empty!</Typography>
      )}
      {todolist.length !== 0 && lowPriorityTodo.length === 0 && (
        <Typography variant="h6">
          There is nothing assigned to Low priority !
        </Typography>
      )}
      {lowPriorityTodo.length !== 0 &&
        lowPriorityTodo.map((todo) => {
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
