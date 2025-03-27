import React from "react";
import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import TodoItem from "./../utils/TodoItem";
import { Chip, Typography } from "@mui/material";
import { Priority } from "../../dataModel/todo";

export const HighPriorityTasks: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const highPriorityTodo = todolist.filter(
    (todo) => todo.priority === Priority.High && todo.completed === false
  );
  const highPriorityTaskCount = highPriorityTodo.length;
  return (
    <>
      {todolist.length === 0 && (
        <Typography variant="h6">Your Task Bucket is empty!</Typography>
      )}
      {todolist.length !== 0 && highPriorityTaskCount === 0 && (
        <Typography variant="h6">
          There is nothing assigned to High priority !
        </Typography>
      )}
      {highPriorityTaskCount !== 0 &&
        highPriorityTodo.map((todo) => {
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

export const HighPriorityTaskCount: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const highPriorityTodo = todolist.filter(
    (todo) => todo.priority === Priority.High && todo.completed === false
  );
  return <Chip label={highPriorityTodo.length} size="small" color="primary" />;
};
