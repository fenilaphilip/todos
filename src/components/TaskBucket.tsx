import Todos from "./Todos";
import CreateTodo from "./CreateTodo";
import { useSelector } from "react-redux";
import { RootState } from "../store/todoStore";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function TaskBucket() {
  const allTodos = useSelector((state: RootState) => state);
  const taskCompleted = allTodos.filter((todo) => todo.completed === true);
  const completedtaskCount = taskCompleted.length;

  return (
    <>
      <Box marginTop={2}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 9, md: 10 }}>
            <CreateTodo />
          </Grid>
          <Grid container size={{ xs: 12, sm: 3, md: 2 }}>
            <Button fullWidth variant="text">
              ({completedtaskCount}) Done
            </Button>
          </Grid>
        </Grid>
        <Todos data-cy="todo-items" />
      </Box>
    </>
  );
}
