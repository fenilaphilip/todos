import { useState } from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CreateTodo from "./CreateTodo";
import Todo, { Labels } from "../dataModel/todo";
import TodoItem from "./TodoItem";

const Dashboard: React.FC<{
  labelName: Labels;
  completedtaskCount: number;
  undoneTasks: Todo[];
  alltasks: Todo[];
  showLabel: boolean;
  showDuedate: boolean;
}> = ({
  labelName,
  completedtaskCount,
  undoneTasks,
  alltasks,
  showLabel,
  showDuedate,
}) => {
  const [hideCompletedTask, setHideCompletedTask] = useState(true);

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 9, md: 10 }}>
          <CreateTodo taskCreateLabel={labelName} />
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
          {undoneTasks.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                showLabel={showLabel}
                showDuedate={showDuedate}
              />
            );
          })}
        </div>
      )}
      {!hideCompletedTask && (
        <div data-cy="todo-items">
          {alltasks.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                showLabel={showLabel}
                showDuedate={showDuedate}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Dashboard;
