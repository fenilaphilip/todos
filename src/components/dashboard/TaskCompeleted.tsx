import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCompleted } from "../../store/reducers/todoSlice";
import TodoItem from "./../utils/TodoItem";
import { Box, Button, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Todo from "../../dataModel/todo";
import TaskList from "../utils/TaskList";

export default function TaskCompeleted() {
  const todolist = useSelector((state: RootState) => state.TODOS);
  const dispatch = useDispatch();
  const completedTasklist = todolist.filter(
    (todo: Todo) => todo.completed == true
  );

  return (
    <Box>
      {todolist.length === 0 && (
        <Typography variant="h6" marginTop={2}>
          Your Task Bucket is empty!
        </Typography>
      )}
      {todolist.length !== 0 && completedTasklist.length === 0 && (
        <Typography variant="h6" marginTop={2}>
          No Task is completed yet!
        </Typography>
      )}
      {completedTasklist.length !== 0 && (
        <>
          <Stack sx={{ flexDirection: "row-reverse" }}>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              size="medium"
              onClick={() => dispatch(clearCompleted())}
              sx={{
                marginTop: "20px",
              }}
            >
              Clear All
            </Button>
          </Stack>
          <TaskList items={completedTasklist} showLabel />
        </>
      )}
    </Box>
  );
}
