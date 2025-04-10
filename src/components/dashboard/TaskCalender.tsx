import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/todoStore";
import { getTasksSortedByDate } from "./TaskSortByDate";
import { Box, Button, Grid2 } from "@mui/material";
import { ViewTasks, TasksView } from "../utils/ViewTasks";
import Todo from "../../dataModel/todo";

const tabsNamed = ["Today", "Upcoming", "Overdue", "Unscheduled"];

export default function TaskCalender() {
  const todoList = useSelector((state: RootState) => state.TODOS);
  const [activeTab, setActiveTab] = useState("Today");

  const { unscheduledTasks, todaysTasks, upcomingTasks, tasksOverdued } =
    getTasksSortedByDate(todoList);

  let tasksArray: Todo[] = todaysTasks;
  let taskslist: {
    date: string;
    tasks: Todo[];
  }[] = upcomingTasks;
  if (activeTab === "Upcoming") taskslist = upcomingTasks;
  if (activeTab === "Overdue") taskslist = tasksOverdued;
  if (activeTab === "Unscheduled") tasksArray = unscheduledTasks;

  return (
    <Box sx={{ textAlign: "center", margin: "20px" }}>
      <Grid2>
        {tabsNamed.map((tab) => {
          return (
            <Button
              variant="outlined"
              onClick={() => {
                setActiveTab(tab);
              }}
              sx={{ margin: "5px" }}
            >
              {tab}
            </Button>
          );
        })}
      </Grid2>
      {activeTab === "Today" || activeTab === "Unscheduled" ? (
        <ViewTasks tab={activeTab} taskslist={tasksArray} />
      ) : (
        <TasksView tab={activeTab} taskslist={taskslist} />
      )}
    </Box>
  );
}
