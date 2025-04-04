import React from "react";
import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import TodoItem from "./../utils/TodoItem";
import { Chip, Typography } from "@mui/material";
import { Priority } from "../../dataModel/todo";

export const PriorityTaskCount: React.FC<{ level: string }> = ({ level }) => {
  const todolist = useSelector((state: RootState) => state);

  let priority: Priority;
  if (level === "High") priority = Priority.High;
  else if (level === "Medium") priority = Priority.Medium;
  else if (level === "Low") priority = Priority.Low;

  const priorityTodo = todolist.filter(
    (todo) => todo.priority === priority && todo.completed === false
  );

  return <Chip label={priorityTodo.length} size="small" color="primary" />;
};

export default function PriorityLevel(level: string) {
  const todolist = useSelector((state: RootState) => state);

  let priority: Priority;
  if (level === "High") priority = Priority.High;
  else if (level === "Medium") priority = Priority.Medium;
  else if (level === "Low") priority = Priority.Low;

  const priorityTodo = todolist.filter(
    (todo) => todo.priority === priority && todo.completed === false
  );
  const priorityTaskCount = priorityTodo.length;
  return (
    <>
      {todolist.length === 0 && (
        <Typography variant="h6">Your Task Bucket is empty!</Typography>
      )}
      {todolist.length !== 0 && priorityTaskCount === 0 && (
        <Typography variant="h6">
          There is nothing assigned to {level} priority !
        </Typography>
      )}
      {priorityTaskCount !== 0 &&
        priorityTodo.map((todo) => {
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
}
