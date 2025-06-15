import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store/todoStore";
import { getTasksSortedByDate } from "./TaskSortByDate";
import {
  Badge,
  Box,
  Card,
  Chip,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import TaskList from "../utils/TaskList";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import SegmentIcon from "@mui/icons-material/segment";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

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

  const switchToTab = (tab: string) => {
    console.info(`Switching to tab ${tab}`);
    navigate(`/calenderView/${tab}`);
  };

  const taskListByCategory = (tab: string) => {
    switch (tab) {
      case "Today":
        return (
          <TaskList
            items={todaysTasks}
            showLabel
            showPrint
            heading="Todays Todos"
          />
        );
      case "Upcoming":
        return (
          <TaskList
            items={upcomingTasks}
            showLabel
            showPrint
            groupBy="DueDate"
            heading="Upcoming Todos"
          />
        );
      case "Overdue":
        return (
          <TaskList
            items={overDuedTasks}
            showLabel
            showPrint
            groupBy="DueDate"
            heading="Overdue Todos"
          />
        );
      case "Unscheduled":
        return (
          <TaskList
            items={unscheduledTasks}
            showLabel
            showPrint
            heading="Unscheduled Todos"
          />
        );
    }
    return <h1>Unknown category {tab}</h1>;
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
        <List sx={{ widows: "100%" }}>
          {visibleTabs.map((tab) => (
            <>
              <ListItemButton onClick={() => switchToTab(tab)}>
                <ListItemIcon>
                  <Badge badgeContent={taskCounts[tab]} color="primary">
                    <SegmentIcon />
                  </Badge>
                </ListItemIcon>
                <ListItemText primary={tab} />
                {currentCategory === tab ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={currentCategory === tab}
                timeout="auto"
                unmountOnExit
              >
                {taskListByCategory(tab)}
              </Collapse>
            </>
          ))}
        </List>
      )}
      {!isMobile && (
        <>
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
          {taskListByCategory(currentCategory)}
        </>
      )}
    </Box>
  );
}
