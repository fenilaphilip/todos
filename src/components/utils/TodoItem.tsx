import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  Input,
  TextField,
  MenuItem,
  Button,
  Stack,
  FormControlLabel,
  Chip,
  Paper,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid2";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import Todo, { Priority } from "../../dataModel/todo";
import { deleteTodo, editTodo } from "../../store/todoSlice";
import LabelInput from "./LabelInput";

const TodoItem: React.FC<{
  todo: Todo;
  showLabel: boolean;
  showDuedate: boolean;
}> = ({ todo, showLabel, showDuedate }) => {
  const [accordionOpen, setAccordionOpen] = React.useState(false);

  const [todoUpdate, setTodoUpdate] = useState<Todo>({
    id: todo.id,
    description: todo.description,
    dueDate: todo.dueDate,
    completed: todo.completed,
    caption: todo.caption,
    priority: todo.priority,
    labels: todo.labels,
  });

  const dispatch = useDispatch();

  return (
    <Box marginTop={2} className="todo-item">
      <Paper elevation={1}>
        <Accordion expanded={accordionOpen}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                className="todo-item-expand"
                onClick={(e) => {
                  setAccordionOpen(!accordionOpen);
                  e.stopPropagation();
                }}
              />
            }
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={todoUpdate.completed}
                  onChange={() => {
                    const updatedTodo = {
                      ...todoUpdate,
                      completed: !todoUpdate.completed,
                    };
                    setTodoUpdate(updatedTodo);
                    dispatch(editTodo(updatedTodo));
                  }}
                />
              }
              label=""
            />
            <Input
              className="todo-item-caption"
              fullWidth
              value={todoUpdate.caption}
              onChange={(e) => {
                const updatedTodo = {
                  ...todoUpdate,
                  caption: e.target.value,
                };
                setTodoUpdate(updatedTodo);
                dispatch(editTodo(updatedTodo));
              }}
            />
            {!accordionOpen && (
              <Stack direction="row" spacing={1} marginTop={2}>
                {showLabel &&
                  todoUpdate.labels?.length !== 0 &&
                  todoUpdate.labels?.map((label) => {
                    return (
                      <Chip
                        label={label}
                        size="small"
                        sx={{
                          display: { xs: "none", md: "block" },
                          pt: 0.5,
                          pb: 1,
                        }}
                      />
                    );
                  })}
                {showDuedate && todoUpdate.dueDate !== null && (
                  <Chip
                    label={dayjs(todoUpdate.dueDate).format("DD.MM.YYYY")}
                    size="small"
                    sx={{
                      display: { xs: "none", md: "block" },
                      pt: 0.5,
                      pb: 1,
                    }}
                  />
                )}
              </Stack>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Notes"
                  className="todo-item-notes"
                  multiline
                  rows={8}
                  value={todoUpdate.description}
                  onChange={(e) => {
                    const updatedTodo = {
                      ...todoUpdate,
                      description: e.target.value,
                    };
                    setTodoUpdate(updatedTodo);
                    dispatch(editTodo(updatedTodo));
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Due Date"
                        className="dueDate"
                        value={
                          todoUpdate.dueDate !== null
                            ? dayjs(dayjs(todoUpdate.dueDate))
                            : null
                        }
                        onChange={(newValue) => {
                          const updatedTodo = {
                            ...todoUpdate,
                            dueDate: newValue,
                          };
                          setTodoUpdate(updatedTodo);
                          dispatch(editTodo(updatedTodo));
                        }}
                        slotProps={{ textField: { fullWidth: true } }}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label="Set Priority"
                      className="todo-item-priority"
                      select
                      value={todoUpdate.priority}
                      onChange={(e) => {
                        const updatedTodo = {
                          ...todoUpdate,
                          priority: parseInt(e.target.value),
                        };
                        setTodoUpdate(updatedTodo);
                        dispatch(editTodo(updatedTodo));
                      }}
                    >
                      <MenuItem className="todo-ipl" value={Priority.Low}>
                        Low
                      </MenuItem>
                      <MenuItem className="todo-ipm" value={Priority.Medium}>
                        Medium
                      </MenuItem>
                      <MenuItem className="todo-iph" value={Priority.High}>
                        High
                      </MenuItem>
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                    <LabelInput
                      todoUpdate={todoUpdate}
                      setTodoUpdate={setTodoUpdate}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                    <Button
                      variant="outlined"
                      onClick={() => dispatch(deleteTodo(todo.id))}
                      className="todo-delete"
                    >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Box>
  );
};

export default TodoItem;
