import React from "react";
import type { RootState } from "../store/todoStore";
import { useSelector } from "react-redux";
import Dashboard from "./utils/Dashboard";

export const LabelLeisure: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const leisureCatergoryTodo = todolist.filter(
    (todo) => todo.labels === "Leisure"
  );
  const taskUncompleted = leisureCatergoryTodo.filter(
    (todo) => todo.completed === false
  );
  const completedtaskCount =
    leisureCatergoryTodo.length - taskUncompleted.length;

  return (
    <Dashboard
      labelName="Leisure"
      completedtaskCount={completedtaskCount}
      undoneTasks={taskUncompleted}
      alltasks={leisureCatergoryTodo}
      showLabel={false}
      showDuedate={true}
    />
  );
};

export const LabelPersonal: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const personalCatergoryTodo = todolist.filter(
    (todo) => todo.labels === "Personal"
  );
  const taskUncompleted = personalCatergoryTodo.filter(
    (todo) => todo.completed === false
  );
  const completedtaskCount =
    personalCatergoryTodo.length - taskUncompleted.length;

  return (
    <Dashboard
      labelName="Personal"
      completedtaskCount={completedtaskCount}
      undoneTasks={taskUncompleted}
      alltasks={personalCatergoryTodo}
      showLabel={false}
      showDuedate={true}
    />
  );
};

export const LabelWork: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const workCatergoryTodo = todolist.filter((todo) => todo.labels === "Work");
  const taskUncompleted = workCatergoryTodo.filter(
    (todo) => todo.completed === false
  );
  const completedtaskCount = workCatergoryTodo.length - taskUncompleted.length;
  return (
    <>
      <Dashboard
        labelName="Work"
        completedtaskCount={completedtaskCount}
        undoneTasks={taskUncompleted}
        alltasks={workCatergoryTodo}
        showLabel={false}
        showDuedate={true}
      />
    </>
  );
};

export const LabelOther: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const otherCatergoryTodo = todolist.filter((todo) => todo.labels === "Other");
  const taskUncompleted = otherCatergoryTodo.filter(
    (todo) => todo.completed === false
  );
  const completedtaskCount = otherCatergoryTodo.length - taskUncompleted.length;
  return (
    <Dashboard
      labelName="Other"
      completedtaskCount={completedtaskCount}
      undoneTasks={taskUncompleted}
      alltasks={otherCatergoryTodo}
      showLabel={false}
      showDuedate={true}
    />
  );
};
