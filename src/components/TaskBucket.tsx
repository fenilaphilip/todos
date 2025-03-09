import { useState } from "react";
import CreateTodo from "./CreateTodo";
import { useSelector } from "react-redux";
import { RootState } from "../store/todoStore";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import TodoItem from "./TodoItem";

export default function TaskBucket() {
  const [hideCompletedTask, setHideCompletedTask] = useState(true);
  const allTodos = useSelector((state: RootState) => state);
  const taskUncompleted = allTodos.filter((todo) => todo.completed === false);
  const completedtaskCount = allTodos.length - taskUncompleted.length;

  return (
    <>
      <Box marginTop={2}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 9, md: 10 }}>
            <CreateTodo />
          </Grid>
          <Grid container size={{ xs: 12, sm: 3, md: 2 }}>
            <Button
              fullWidth
              variant="text"
              startIcon={
                hideCompletedTask ? <VisibilityOffIcon /> : <VisibilityIcon />
              }
              onClick={() => {
                setHideCompletedTask(!hideCompletedTask);
              }}
            >
              Done ({completedtaskCount})
            </Button>
          </Grid>
        </Grid>
        {hideCompletedTask && (
          <div data-cy="todo-items">
            {taskUncompleted.map((todo) => {
              return <TodoItem key={todo.id} todo={todo} />;
            })}
          </div>
        )}
        {!hideCompletedTask && (
          <div data-cy="todo-items">
            {allTodos.map((todo) => {
              return <TodoItem key={todo.id} todo={todo} />;
            })}
          </div>
        )}
      </Box>
    </>
  );
}
