import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store/todoStore";
import { getTasksSortedByDate } from "./TaskSortByDate";
import { Box, Button, Grid2 } from "@mui/material";
import { ViewTasks, TasksView } from "../utils/ViewTasks";
import Todo from "../../dataModel/todo";

const tabsNamed = ["Today", "Upcoming", "Overdue", "Unscheduled"];

export default function TaskCalender() {
  const todoList = useSelector((state: RootState) => state.TODOS);
  const navigate = useNavigate();
  const { catergory } = useParams();

  const { unscheduledTasks, todaysTasks, upcomingTasks, tasksOverdued } =
    getTasksSortedByDate(todoList);

  let tasksArray: Todo[] = todaysTasks;
  let taskslist: {
    date: string;
    tasks: Todo[];
  }[] = upcomingTasks;
  if (catergory === "Overdue") taskslist = tasksOverdued;
  if (catergory === "Unscheduled") tasksArray = unscheduledTasks;

  return (
    <Box sx={{ textAlign: "center", margin: "20px" }}>
      <Grid2>
        {tabsNamed.map((tab) => {
          return (
            <Button
              variant="outlined"
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
      {catergory === "Today" || catergory === "Unscheduled" ? (
        <ViewTasks taskslist={tasksArray} />
      ) : (
        <TasksView taskslist={taskslist} />
      )}
    </Box>
  );
}
