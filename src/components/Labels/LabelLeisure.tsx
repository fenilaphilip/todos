import React from "react";
import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem";
import { Labels } from "../../dataModel/todo";

const LabelLeisure: React.FC = () => {
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

export default LabelLeisure;
