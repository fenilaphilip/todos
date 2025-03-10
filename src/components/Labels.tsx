import React from "react";
import type { RootState } from "../store/todoStore";
import { useSelector } from "react-redux";
import { Labels } from "../dataModel/todo";
import Dashboard from "./Dashboard";

export const LabelLeisure: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const leisureCatergoryTodo = todolist.filter(
    (todo) => todo.labels === Labels.Leisure
  );
  const taskUncompleted = leisureCatergoryTodo.filter(
    (todo) => todo.completed === false
  );
  const completedtaskCount =
    leisureCatergoryTodo.length - taskUncompleted.length;

  return (
    <Dashboard
      labelName={Labels.Leisure}
      completedtaskCount={completedtaskCount}
      undoneTasks={taskUncompleted}
      alltasks={leisureCatergoryTodo}
    />
  );
};

export const LabelPersonal: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const personalCatergoryTodo = todolist.filter(
    (todo) => todo.labels === Labels.Personal
  );
  const taskUncompleted = personalCatergoryTodo.filter(
    (todo) => todo.completed === false
  );
  const completedtaskCount =
    personalCatergoryTodo.length - taskUncompleted.length;

  return (
    <Dashboard
      labelName={Labels.Personal}
      completedtaskCount={completedtaskCount}
      undoneTasks={taskUncompleted}
      alltasks={personalCatergoryTodo}
    />
  );
};

export const LabelWork: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const workCatergoryTodo = todolist.filter(
    (todo) => todo.labels === Labels.Work
  );
  const taskUncompleted = workCatergoryTodo.filter(
    (todo) => todo.completed === false
  );
  const completedtaskCount = workCatergoryTodo.length - taskUncompleted.length;
  return (
    <>
      <Dashboard
        labelName={Labels.Work}
        completedtaskCount={completedtaskCount}
        undoneTasks={taskUncompleted}
        alltasks={workCatergoryTodo}
      />
    </>
  );
};

export const LabelOther: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const otherCatergoryTodo = todolist.filter(
    (todo) => todo.labels === Labels.Other
  );
  const taskUncompleted = otherCatergoryTodo.filter(
    (todo) => todo.completed === false
  );
  const completedtaskCount = otherCatergoryTodo.length - taskUncompleted.length;
  return (
    <Dashboard
      labelName={Labels.Other}
      completedtaskCount={completedtaskCount}
      undoneTasks={taskUncompleted}
      alltasks={otherCatergoryTodo}
    />
  );
};
