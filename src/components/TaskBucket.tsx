import Todos from "./Todos";
import CreateTodo from "./CreateTodo";
import { Box } from "@mui/material";

export default function TaskBucket() {
  const clearTaskFrom = "TaskBucket";

  return (
    <Box margin={2} marginTop={1} padding={3} paddingTop={1}>
      <Todos data-cy="todo-items" />
      <CreateTodo clearTaskFrom={clearTaskFrom} />
    </Box>
  );
}
