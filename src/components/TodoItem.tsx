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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid2";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import Todo, { Priority } from "../dataModel/todo";
import { deleteTodo, editTodo } from "../store/todoSlice";

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const [todoUpdate, setTodoUpdate] = useState<Todo>({
    id: todo.id,
    description: todo.description,
    dueDate: todo.dueDate,
    completed: todo.completed,
    caption: todo.caption,
    priority: todo.priority,
  });

  const dispatch = useDispatch();

  return (
    <Box>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Checkbox />
          <Input
            fullWidth
            value={todoUpdate.caption}
            onChange={(e) =>
              setTodoUpdate({ ...todoUpdate, caption: e.target.value })
            }
          />
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Notes"
                multiline
                rows={8}
                value={todoUpdate.description}
                onChange={(e) =>
                  setTodoUpdate({ ...todoUpdate, description: e.target.value })
                }
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Due Date"
                      value={
                        todoUpdate.dueDate ? dayjs(todoUpdate.dueDate) : null
                      }
                      onChange={(newValue) =>
                        setTodoUpdate({ ...todoUpdate, dueDate: newValue })
                      }
                      slotProps={{ textField: { fullWidth: true } }}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Set Priority"
                    select
                    value={todoUpdate.priority}
                    onChange={(e) =>
                      setTodoUpdate({
                        ...todoUpdate,
                        priority: parseInt(e.target.value),
                      })
                    }
                  >
                    <MenuItem value={Priority.None}>None</MenuItem>
                    <MenuItem value={Priority.Low}>Low</MenuItem>
                    <MenuItem value={Priority.Medium}>Medium</MenuItem>
                    <MenuItem value={Priority.High}>High</MenuItem>
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                  <TextField fullWidth label="LabelSelect" />
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                  <Stack spacing={2} direction="row">
                    <Button
                      variant="outlined"
                      onClick={() => dispatch(editTodo(todoUpdate))}
                    >
                      Save Changes
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => dispatch(deleteTodo(todo.id))}
                    >
                      Delete
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default TodoItem;
