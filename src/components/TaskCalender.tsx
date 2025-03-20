import { useSelector } from "react-redux";
import { RootState } from "../store/todoStore";
import dayjs from "dayjs";
import Todo from "../dataModel/todo";
import { Stack, Typography } from "@mui/material";
import TodoItem from "./TodoItem";

export default function TaskCalender() {
  const todoList = useSelector((state: RootState) => state);
  const unFinishedTasks = todoList.filter((todo) => todo.completed === false);
  const unDoneSortedByDate = unFinishedTasks.sort((a, b) =>
    dayjs(a.dueDate).diff(dayjs(b.dueDate))
  );

  let calenderTodos: {
    [key: string]: Todo[];
  } = {};

  unDoneSortedByDate.forEach((toDo) => {
    const date = dayjs(toDo.dueDate).format("DD.MM.YYYY");
    if (calenderTodos[date]) {
      calenderTodos[date].push(toDo);
    } else {
      calenderTodos[date] = [toDo];
    }
  });

  // console.info(calenderTodos);

  return (
    <>
      {todoList.length === 0 && (
        <Typography variant="h6">Your Task Bucket is empty!</Typography>
      )}
      {Object.entries(calenderTodos).map(([key, value]) => {
        return (
          <Stack margin={2}>
            <Typography variant="h5">
              {key !== "Invalid Date" ? key : "Unscheduled"}
            </Typography>
            {value.map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  showDuedate={false}
                  showLabel={true}
                />
              );
            })}
          </Stack>
        );
      })}
    </>
  );
}
