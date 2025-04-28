import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store/todoStore";
import { getTasksSortedByDate } from "./TaskSortByDate";
import { Box, Card, Chip, Tab, Tabs, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TaskList from "../utils/TaskList";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const calenderTabs = ["Today", "Upcoming", "Overdue", "Unscheduled"];

export default function TaskCalender() {
  const todoList = useSelector((state: RootState) => state.TODOS);

  const navigate = useNavigate();
  const { category } = useParams();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { unscheduledTasks, todaysTasks, upcomingTasks, overDuedTasks } =
    getTasksSortedByDate(todoList);

  const taskCounts: {
    [key: string]: number;
  } = {
    Today: todaysTasks.length,
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

  const handleMenuChange = (event: SelectChangeEvent) => {
    navigate(`/calenderView/${event.target.value}`);
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
      {isMobile && (
        <Select fullWidth value={currentCategory} onChange={handleMenuChange}>
          {visibleTabs.map((tab) => (
            <MenuItem key={tab} value={tab}>
              {tab}
            </MenuItem>
          ))}
        </Select>
      )}
      {!isMobile && (
        <Tabs
          data-cy="calender-sub-division"
          component={Card}
          value={visibleTabs.indexOf(currentCategory)}
          onChange={handleTabChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          {visibleTabs.map((tab) => (
            <Tab
              data-cy={tab}
              key={tab}
              label={tab}
              icon={
                <Chip label={taskCounts[tab]} size="small" color="primary" />
              }
            />
          ))}
        </Tabs>
      )}
      {currentCategory === "Today" && (
        <TaskList
          items={todaysTasks}
          showLabel
          showPrint
          heading="todays Todos"
        />
      )}
      {currentCategory === "Upcoming" && (
        <TaskList
          items={upcomingTasks}
          groupBy="DueDate"
          showLabel
          showPrint
          heading="Upcoming Todos"
        />
      )}
      {currentCategory === "Overdue" && (
        <TaskList
          items={overDuedTasks}
          groupBy="DueDate"
          showLabel
          showPrint
          heading="Overdue Todos"
        />
      )}
      {currentCategory === "Unscheduled" && (
        <TaskList
          items={unscheduledTasks}
          showLabel
          showPrint
          heading="Unscheduled Todos"
        />
      )}
    </Box>
  );
}
