import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { TextField, IconButton, InputAdornment, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Todo, { Priority } from "../../dataModel/todo";
import { addTodo } from "../../store/reducers/todoSlice";
import uniqid from "uniqid";
import useKey from "@rooks/use-key";

const CreateTodo: React.FC<{ labelName?: string }> = ({ labelName }) => {
  const taskCaption = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  useKey(["Enter"], windowEnter, {
    target: taskCaption,
  });
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

    const labelUpdate = labelName ? [labelName] : [];

    const newTask: Todo = {
      id: uniqid(),
      description: "",
      dueDate: null,
      completed: false,
      caption: taskCalled,
      labels: labelUpdate,
      priority: Priority.Medium,
      repeats: [false, false, false, false, false, false, false],
    };

    dispatch(addTodo(newTask));

    taskCaption.current!.value = "";
  };

  return (
    <Paper elevation={2}>
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
    </Paper>
  );
};

export default CreateTodo;
