import React, { useEffect } from "react";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import { Box, Checkbox, Typography } from "@mui/material";
import Todo from "../../dataModel/todo";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const TaskRepeat: React.FC<{
  todoUpdate: Todo;
  setTodoUpdate: React.Dispatch<React.SetStateAction<Todo>>;
}> = ({ todoUpdate, setTodoUpdate }) => {
  const [repeats, setRepeats] = React.useState<boolean[]>(
    todoUpdate.repeats
      ? todoUpdate.repeats
      : [false, false, false, false, false, false, false]
  );

  const handleCheckboxChange = (index: number) => {
    console.info(`got clicked ${repeats[index]}`);
    setRepeats((prev) => {
      const newRepeats = [...prev];
      newRepeats[index] = !newRepeats[index];
      return newRepeats;
    });
  };

  useEffect(() => {
    const updateTodo = {
      ...todoUpdate,
      repeats: repeats,
    };
    setTodoUpdate(updateTodo);
  }, [repeats, setRepeats]);

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
