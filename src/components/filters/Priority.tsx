import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Priority } from "../../dataModel/todo";
import { useParams } from "react-router-dom";
import TaskList from "../utils/TaskList";

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
      {priorityTaskCount !== 0 && (
        <TaskList
          items={priorityTodo}
          showDuedate
          showLabel
          showPrint
          heading={priorityLevel + " Priority Todos"}
        />
      )}
    </>
  );
}
