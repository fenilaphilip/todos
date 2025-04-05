import { useSelector } from "react-redux";
import { RootState } from "../../store/todoStore";
import { Chip } from "@mui/material";
import { Priority } from "../../dataModel/todo";

export const LabelsActiveTaskCount: React.FC<{ labelName: string }> = ({
  labelName,
}) => {
  const todolist = useSelector((state: RootState) => state.todoReducer);
  const catergoryTodo = todolist.filter((todo) =>
    todo.labels?.includes(`${labelName}`)
  );
  const taskUncompleted = catergoryTodo.filter(
    (todo) => todo.completed === false
  );

  return <Chip label={taskUncompleted.length} size="small" color="primary" />;
};

export const PriorityActiveTaskCount: React.FC<{ level: string }> = ({
  level,
}) => {
  const todolist = useSelector((state: RootState) => state.todoReducer);

  let priority: Priority;
  if (level === "High") priority = Priority.High;
  else if (level === "Medium") priority = Priority.Medium;
  else if (level === "Low") priority = Priority.Low;

  const priorityTodo = todolist.filter(
    (todo) => todo.priority === priority && todo.completed === false
  );

  return <Chip label={priorityTodo.length} size="small" color="primary" />;
};
