import { useSelector } from "react-redux";
import { RootState } from "../store/todoStore";
import dayjs from "dayjs";
import TodoItem from "./TodoItem";

export default function TaskCalender() {
  const todoList = useSelector((state: RootState) => state);
  const unFinishedTasks = todoList.filter((todo) => todo.completed === false);
  const unDoneSortedByDate = unFinishedTasks.sort((a, b) =>
    dayjs(a.dueDate).diff(dayjs(b.dueDate))
  );

  return (
    <>
      {unDoneSortedByDate.map((todo) => {
        return (
          <>
            {todo.dueDate ? dayjs(todo.dueDate).format("DD . MM . YYYY") : null}
            <TodoItem
              key={todo.id}
              todo={todo}
              showLabel={true}
              showDuedate={false}
            />
          </>
        );
      })}
    </>
  );
}
