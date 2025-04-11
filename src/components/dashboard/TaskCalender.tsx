import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store/todoStore";
import { getTasksSortedByDate } from "./TaskSortByDate";
import { Box, Card, Chip, Tab, Tabs, Typography } from "@mui/material";
import { ViewTasks, TasksView } from "../utils/ViewTasks";
import Todo from "../../dataModel/todo";

const calenderTabs = ["Upcoming", "Overdue", "Unscheduled"];

export default function TaskCalender() {
  const todoList = useSelector((state: RootState) => state.TODOS);

  const navigate = useNavigate();
  const { category } = useParams();

  const { unscheduledTasks, todaysTasks, upcomingTasks, tasksOverdued } =
    getTasksSortedByDate(todoList);

  const taskCounts: {
    [key: string]: number;
  } = {
    Upcoming: todaysTasks.length + upcomingTasks.length,
    Overdue: tasksOverdued.length,
    Unscheduled: unscheduledTasks.length,
  };

  const visibleTabs = calenderTabs.filter((tab) => taskCounts[tab] > 0);
  const currentCategory = category ?? visibleTabs[0];

  let tasksArray: Todo[] = [];
  let taskArrayObj: {
    date: string;
    tasks: Todo[];
  }[] = [];

  switch (currentCategory) {
    case "Upcoming":
      let mergedUpcoming = [...upcomingTasks];
      if (todaysTasks.length) {
        mergedUpcoming.unshift({ date: "Today", tasks: todaysTasks });
      }
      taskArrayObj = mergedUpcoming;
      break;
    case "Overdue":
      taskArrayObj = tasksOverdued;
      break;
    case "Unscheduled":
      tasksArray = unscheduledTasks;
      break;
  }

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    // console.debug(`switched tab ${calenderTabs[newValue]}`);
    navigate(`/calenderView/${visibleTabs[newValue]}`);
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
        component={Card}
        value={visibleTabs.indexOf(currentCategory)}
        onChange={handleTabChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        {visibleTabs.map((tab) => (
          <Tab
            key={tab}
            label={tab}
            icon={<Chip label={taskCounts[tab]} size="small" color="primary" />}
          />
        ))}
      </Tabs>
      {currentCategory === "Unscheduled" ? (
        <ViewTasks taskslist={tasksArray} />
      ) : (
        <TasksView taskslist={taskArrayObj} />
      )}
    </Box>
  );
}
