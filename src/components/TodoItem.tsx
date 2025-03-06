import React from "react";
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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid2";
import Todo from "../dataModel/todo";
import { deleteTodo } from "../store/todoSlice";

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Box>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Checkbox />
            <Input fullWidth value={todo.caption} />
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Notes"
                  multiline
                  rows={8}
                  value={todo.description}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                    <TextField fullWidth label="datepicker" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                    <TextField fullWidth label="Priority" select>
                      <MenuItem>None</MenuItem>
                      <MenuItem>Low</MenuItem>
                      <MenuItem>Medium</MenuItem>
                      <MenuItem>High</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                    <TextField fullWidth label="LabelSelect" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                    <Button
                      variant="outlined"
                      onClick={() => dispatch(deleteTodo(todo.id))}
                    >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default TodoItem;
