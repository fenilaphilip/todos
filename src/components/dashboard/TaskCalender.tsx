import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store/todoStore";
import { getTasksSortedByDate } from "./TaskSortByDate";
import { Box, Button, Grid2, Typography } from "@mui/material";
import { ViewTasks, TasksView } from "../utils/ViewTasks";
import Todo from "../../dataModel/todo";

const tabsNamed = ["Today", "Upcoming", "Overdue", "Unscheduled"];

export default function TaskCalender() {
  const todoList = useSelector((state: RootState) => state.TODOS);

  if (!todoList.length) {
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h6">No tasks available!</Typography>
      </Box>
    );
  }

  const navigate = useNavigate();
  const { category } = useParams();
  const currentCategory = category ?? "Today";

  const { unscheduledTasks, todaysTasks, upcomingTasks, tasksOverdued } =
    getTasksSortedByDate(todoList);

  let tasksArray: Todo[] = [];
  let taskArrayObj: {
    date: string;
    tasks: Todo[];
  }[] = [];

  switch (currentCategory) {
    case "Today":
      tasksArray = todaysTasks;
      break;
    case "Upcoming":
      taskArrayObj = upcomingTasks;
      break;
    case "Overdue":
      taskArrayObj = tasksOverdued;
      break;
    case "Unscheduled":
      tasksArray = unscheduledTasks;
      break;
  }

  return (
    <Box sx={{ textAlign: "center", margin: "20px" }}>
      <Grid2>
        {tabsNamed.map((tab) => {
          const isActive = tab === currentCategory;
          return (
            <Button
              key={tab}
              variant={isActive ? "contained" : "outlined"}
              color={isActive ? "primary" : "inherit"}
              onClick={() => {
                navigate(`/calenderView/${tab}`);
              }}
              sx={{ margin: "5px" }}
            >
              {tab}
            </Button>
          );
        })}
      </Grid2>
      {currentCategory === "Today" || currentCategory === "Unscheduled" ? (
        <ViewTasks taskslist={tasksArray} />
      ) : (
        <TasksView taskslist={taskArrayObj} />
      )}
    </Box>
  );
}
