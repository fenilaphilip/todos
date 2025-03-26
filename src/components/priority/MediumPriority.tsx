import React from "react";
import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import TodoItem from "./../utils/TodoItem";
import { Typography } from "@mui/material";
import { Priority } from "../../dataModel/todo";

export const MediumPriority: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const mediumPriorityTodo = todolist.filter(
    (todo) => todo.priority === Priority.Medium && todo.completed === false
  );

  return (
    <>
      {todolist.length === 0 && (
        <Typography variant="h6">Your Task Bucket is empty!</Typography>
      )}
      {todolist.length !== 0 && mediumPriorityTodo.length === 0 && (
        <Typography variant="h6">
          There is nothing assigned to Medium priority !
        </Typography>
      )}
      {mediumPriorityTodo.length !== 0 &&
        mediumPriorityTodo.map((todo) => {
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
