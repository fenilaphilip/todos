import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Todo, { Priority, Labels } from "../dataModel/todo";
import { addTodo } from "../store/todoSlice";
import uniqid from "uniqid";
import useKey from "@rooks/use-key";

const CreateTodo: React.FC<{ taskCreateLabel: Labels }> = ({
  taskCreateLabel = Labels.Other,
}) => {
  const taskCaption = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  useKey(["Enter"], windowEnter);
  function windowEnter() {
    addTodoHandler();
  }

  const addTodoHandler = () => {
    const caption = taskCaption.current!.value;
    if (caption.trim().length === 0) {
      alert("Please enter a task");
      return;
    }
    const taskCalled = caption.charAt(0).toUpperCase() + caption.slice(1);

    const newTask: Todo = {
      id: uniqid(),
      description: "",
      dueDate: undefined,
      completed: false,
      caption: taskCalled,
      labels: taskCreateLabel,
      priority: Priority.None,
    };

    dispatch(addTodo(newTask));

    taskCaption.current!.value = "";
  };

  return (
    <>
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
    </>
  );
};

export default CreateTodo;
