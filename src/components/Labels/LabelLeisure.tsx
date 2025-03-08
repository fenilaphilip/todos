import React from "react";
import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem";
import { Labels } from "../../dataModel/todo";
import CreateTodo from "../CreateTodo";

const LabelLeisure: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const leisureCatergoryTodo = todolist.filter(
    (todo) => todo.labels === Labels.Leisure
  );
  console.log(`tasksLeisure ${leisureCatergoryTodo}`);

  return (
    <>
      {leisureCatergoryTodo.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
      <CreateTodo />
    </>
  );
};

export default LabelLeisure;
