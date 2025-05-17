import React, { useEffect } from "react";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import { Box, Checkbox, Typography } from "@mui/material";
import Todo from "../../dataModel/todo";
import { findNextDueDate } from "./repeats";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const TaskRepeat: React.FC<{
  todoUpdate: Todo;
  setTodoUpdate: React.Dispatch<React.SetStateAction<Todo>>;
}> = ({ todoUpdate, setTodoUpdate }) => {
  const [repeats, setRepeats] = React.useState<boolean[]>(todoUpdate.repeats); // repeats[index] == days[index]

  const handleCheckboxChange = (index: number) => {
    console.info(`got clicked ${DAYS[index]}`);
    setRepeats((prev) => {
      const newRepeats = [...prev];
      newRepeats[index] = !newRepeats[index];
      return newRepeats;
    });
  };

  useEffect(() => {
    let updateTodo = {
      ...todoUpdate,
      repeats: repeats,
    };
    if (todoUpdate.dueDate == null) {
      updateTodo = {
        ...updateTodo,
        dueDate: findNextDueDate(updateTodo),
      };
    }
    setTodoUpdate(updateTodo);
  }, [repeats]);

  return (
    <Box>
      <Typography>Repeat On Next</Typography>
      <FormControl>
        <FormGroup aria-label="position" row>
          {DAYS.map((day, index) => (
            <FormControlLabel
              key={index}
              value={day}
              control={
                <Checkbox
                  checked={repeats[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
              }
              label={day}
              labelPlacement="end"
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default TaskRepeat;
