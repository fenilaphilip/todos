import { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store/todoStore";
import { getTasksSortedByDate } from "./TaskSortByDate";
import {
  Box,
  Button,
  Card,
  Chip,
  Grid2,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { ViewTasks, TasksView } from "../utils/ViewTasks";
import Todo from "../../dataModel/todo";
import PrintIcon from "@mui/icons-material/Print";
import { useReactToPrint } from "react-to-print";

const calenderTabs = ["Upcoming", "Overdue", "Unscheduled"];

export default function TaskCalender() {
  const todoList = useSelector((state: RootState) => state.TODOS);
  const printRef = useRef<HTMLDivElement>(null);

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
    // console.debug(`switched tab ${calenderTabs[newValue]}`);
    navigate(`/calenderView/${visibleTabs[newValue]}`);
  };

  const handlePrintFn = useReactToPrint({
    contentRef: printRef,
    documentTitle: "Tasks for Today",
  });

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
        <Stack marginTop={2}>
          {todaysTasks.length && (
            <>
              <Grid2 container justifyContent="space-between">
                <Grid2>
                  <Typography variant="h5">Today</Typography>
                </Grid2>
                <Grid2>
                  <Button
                    variant="outlined"
                    onClick={() => handlePrintFn()}
                    startIcon={<PrintIcon />}
                  >
                    Print
                  </Button>
                </Grid2>
              </Grid2>
              <div ref={printRef}>
                <ViewTasks taskslist={todaysTasks} />
              </div>
            </>
          )}
          <TasksView taskslist={taskArrayObj} />
        </Stack>
      )}
      {currentCategory === "Unscheduled" && (
        <ViewTasks taskslist={tasksArray} />
      )}
      {currentCategory === "Overdue" && <TasksView taskslist={taskArrayObj} />}
    </Box>
  );
}
