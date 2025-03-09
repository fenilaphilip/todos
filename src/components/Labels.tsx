import React from "react";
import type { RootState } from "../store/todoStore";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { Labels } from "../dataModel/todo";

export const LabelLeisure: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const leisureCatergoryTodo = todolist.filter(
    (todo) => todo.labels === Labels.Leisure
  );

  return (
    <>
      {leisureCatergoryTodo.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </>
  );
};

export const LabelPersonal: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const personalCatergoryTodo = todolist.filter(
    (todo) => todo.labels === Labels.Personal
  );

  return (
    <>
      {personalCatergoryTodo.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </>
  );
};

export const LabelWork: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const workCatergoryTodo = todolist.filter(
    (todo) => todo.labels === Labels.Work
  );

  return (
    <>
      {workCatergoryTodo.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </>
  );
};

export const LabelOther: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const otherCatergoryTodo = todolist.filter(
    (todo) => todo.labels === Labels.Other
  );

  return (
    <>
      {otherCatergoryTodo.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </>
  );
};
