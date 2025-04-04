import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCompleted } from "../../store/todoSlice";
import TodoItem from "./../utils/TodoItem";
import { Box, Button, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TaskCompeleted() {
  const todolist = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const completedTasklist = todolist.filter((todo) => todo.completed == true);

  return (
    <Box>
      {todolist.length === 0 && (
        <Typography variant="h6">Your Task Bucket is empty!</Typography>
      )}
      {todolist.length !== 0 && completedTasklist.length === 0 && (
        <Typography variant="h6">No Task is completed yet!</Typography>
      )}
      {completedTasklist.length !== 0 && (
        <>
          <Stack sx={{ flexDirection: "row-reverse" }}>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              size="medium"
              onClick={() => dispatch(clearCompleted())}
            >
              Clear All
            </Button>
          </Stack>
          {completedTasklist.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                showLabel={true}
                showDuedate={false}
              />
            );
          })}
        </>
      )}
    </Box>
  );
}
