import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store/todoStore";
import { getTasksSortedByDate } from "./TaskSortByDate";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { ViewTasks, TasksView } from "../utils/ViewTasks";
import Todo from "../../dataModel/todo";

const tabsNamed = ["Today", "Upcoming", "Overdue", "Unscheduled"];

export default function TaskCalender() {
  const todoList = useSelector((state: RootState) => state.TODOS);

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

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    navigate(`/calenderView/${tabsNamed[newValue]}`);
  };

  if (!todoList.length) {
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h6">No tasks available!</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={tabsNamed.indexOf(currentCategory)}
        onChange={handleTabChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        {tabsNamed.map((tab) => (
          <Tab key={tab} label={tab} />
        ))}
      </Tabs>
      {currentCategory === "Today" || currentCategory === "Unscheduled" ? (
        <ViewTasks taskslist={tasksArray} />
      ) : (
        <TasksView taskslist={taskArrayObj} />
      )}
    </Box>
  );
}
