import React from "react";
import type { RootState } from "../store/todoStore";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { Typography } from "@mui/material";
import { Priority } from "../dataModel/todo";

export const HighPriority: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const highPriorityTodo = todolist.filter(
    (todo) => todo.priority === Priority.High && todo.completed === false
  );

  return (
    <>
      {todolist.length === 0 && (
        <Typography variant="h6">Your Task Bucket is empty!</Typography>
      )}
      {todolist.length !== 0 && highPriorityTodo.length === 0 && (
        <Typography variant="h6">
          There is nothing assigned to High priority !
        </Typography>
      )}
      {highPriorityTodo.length !== 0 &&
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
