import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  TextField,
  IconButton,
  InputAdornment,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import AddIcon from "@mui/icons-material/Add";
import Todo, { Priority, Labels } from "../dataModel/todo";
import { addTodo } from "../store/todoSlice";
import uniqid from "uniqid";

const CreateTodo: React.FC = () => {
  const taskCaption = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const addTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const caption = taskCaption.current!.value;
    if (caption.trim().length === 0) {
      alert("Please enter a task");
      return;
    }

    const newTask: Todo = {
      id: uniqid(),
      description: "",
      dueDate: undefined,
      completed: false,
      caption: caption,
      labels: Labels.Other,
      priority: Priority.None,
    };

    dispatch(addTodo(newTask));

    taskCaption.current!.value = "";
  };

  return (
    <>
      <Box marginTop={2}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 9, md: 10 }}>
            <TextField
              fullWidth
              data-cy="create-todo-input-caption"
              placeholder="Enter a new task"
              inputRef={taskCaption}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        onClick={addTodoHandler}
                        data-cy="create-todo-button-add"
                      >
                        <AddIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid>
          <Grid container size={{ xs: 12, sm: 3, md: 2 }}>
            {/* <Button fullWidth variant="outlined">
              Settings
            </Button> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CreateTodo;
