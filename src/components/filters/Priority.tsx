import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import TodoItem from "./../utils/TodoItem";
import { Typography } from "@mui/material";
import { Priority } from "../../dataModel/todo";
import { useParams } from "react-router-dom";

export default function PriorityLevel() {
  const todolist = useSelector((state: RootState) => state.TODOS);
  const { priorityLevel } = useParams();

  let priority: Priority;
  if (priorityLevel === "High") priority = Priority.High;
  else if (priorityLevel === "Medium") priority = Priority.Medium;
  else if (priorityLevel === "Low") priority = Priority.Low;

  const priorityTodo = todolist.filter(
    (todo) => todo.priority === priority && todo.completed === false
  );
  const priorityTaskCount = priorityTodo.length;
  return (
    <>
      {todolist.length === 0 && (
        <Typography variant="h6" margin={2}>
          Your Task Bucket is empty!
        </Typography>
      )}
      {todolist.length !== 0 && priorityTaskCount === 0 && (
        <Typography variant="h6" margin={2}>
          There is nothing assigned to {priorityLevel} priority !
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
