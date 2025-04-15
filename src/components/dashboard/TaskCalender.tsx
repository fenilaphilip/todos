import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store/todoStore";
import { getTasksSortedByDate } from "./TaskSortByDate";
import { Box, Card, Chip, Tab, Tabs, Typography } from "@mui/material";
import TaskList from "../utils/TaskList";

const calenderTabs = ["Upcoming", "Overdue", "Unscheduled"];

export default function TaskCalender() {
  const todoList = useSelector((state: RootState) => state.TODOS);

  const navigate = useNavigate();
  const { category } = useParams();

  const { unscheduledTasks, upcomingTasks, overDuedTasks } =
    getTasksSortedByDate(todoList);

  const taskCounts: {
    [key: string]: number;
  } = {
    Upcoming: upcomingTasks.length,
    Overdue: overDuedTasks.length,
    Unscheduled: unscheduledTasks.length,
  };

  const visibleTabs = calenderTabs.filter((tab) => taskCounts[tab] > 0);
  const currentCategory = category ?? visibleTabs[0];

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

  if (todoList.length && !visibleTabs.length) {
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h6">No active Tasks available!</Typography>
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
      {currentCategory === "Upcoming" && (
        <TaskList items={upcomingTasks} groupBy="DueDate" showLabel />
      )}
      {currentCategory === "Overdue" && (
        <TaskList items={overDuedTasks} groupBy="DueDate" showLabel />
      )}
      {currentCategory === "Unscheduled" && (
        <TaskList items={unscheduledTasks} showLabel />
      )}
    </Box>
  );
}
