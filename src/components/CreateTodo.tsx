import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Todo, { Priority } from "../dataModel/todo";
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
      priority: Priority.Medium,
    };

    dispatch(addTodo(newTask));
  };

  return (
    <>
      <Box>
        <TextField
          fullWidth
          placeholder="Enter a new task"
          margin="normal"
          inputRef={taskCaption}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={addTodoHandler}>
                    <AddIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
    </>
  );
};

export default CreateTodo;
