import React from "react";
import type { RootState } from "../store/todoStore";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCompleted } from "../store/todoSlice";
import TodoItem from "./TodoItem";
import { Box, Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskCompeleted: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const completedTasklist = todolist.filter((todo) => todo.completed == true);

  return (
    <Box>
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
    </Box>
  );
};

export default TaskCompeleted;
