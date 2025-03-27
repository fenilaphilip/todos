import React from "react";
import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import TodoItem from "./../utils/TodoItem";
import { Chip, Typography } from "@mui/material";
import { Priority } from "../../dataModel/todo";

export const MediumPriorityTasks: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const mediumPriorityTodo = todolist.filter(
    (todo) => todo.priority === Priority.Medium && todo.completed === false
  );
  const mediumPriorityTaskCount = mediumPriorityTodo.length;
  return (
    <>
      {todolist.length === 0 && (
        <Typography variant="h6">Your Task Bucket is empty!</Typography>
      )}
      {todolist.length !== 0 && mediumPriorityTaskCount === 0 && (
        <Typography variant="h6">
          There is nothing assigned to Medium priority !
        </Typography>
      )}
      {mediumPriorityTaskCount !== 0 &&
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

export const MediumPriorityTaskCount: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const mediumPriorityTodo = todolist.filter(
    (todo) => todo.priority === Priority.Medium && todo.completed === false
  );

  return (
    <Chip label={mediumPriorityTodo.length} size="small" color="primary" />
  );
};
