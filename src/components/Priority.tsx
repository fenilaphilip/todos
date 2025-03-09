import React from "react";
import type { RootState } from "../store/todoStore";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { Priority } from "../dataModel/todo";

export const HighPriority: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const highPriorityTodo = todolist.filter(
    (todo) => todo.priority === Priority.High
  );

  return (
    <>
      {highPriorityTodo.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </>
  );
};

export const MediumPriority: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const mediumPriorityTodo = todolist.filter(
    (todo) => todo.priority === Priority.Medium
  );

  return (
    <>
      {mediumPriorityTodo.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </>
  );
};

export const LowPriority: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const lowPriorityTodo = todolist.filter(
    (todo) => todo.priority === Priority.Low
  );

  return (
    <>
      {lowPriorityTodo.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </>
  );
};

export const NonePriority: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const nonePriorityTodo = todolist.filter(
    (todo) => todo.priority === Priority.None
  );

  return (
    <>
      {nonePriorityTodo.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </>
  );
};
