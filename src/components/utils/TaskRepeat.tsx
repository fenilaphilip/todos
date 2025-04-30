import React from "react";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import { Box, Checkbox, Typography } from "@mui/material";
import Todo from "../../dataModel/todo";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const TaskRepeat: React.FC<{
  todoUpdate: Todo;
  setTodoUpdate: React.Dispatch<React.SetStateAction<Todo>>;
}> = ({ todoUpdate }) => {
  const [repeats, setRepeats] = React.useState<string[]>(
    todoUpdate.repeats ? todoUpdate.repeats : []
  );

  const handleCheckboxChange = (day: string) => {
    const dayRepeat = [...repeats, day];
    setRepeats([...new Set(dayRepeat)]); // eliminating duplicates
    console.debug(`from Repeat`, repeats);
  };

  return (
    <Box>
      <Typography>Repeat On Next</Typography>
      <FormControl>
        <FormGroup aria-label="position" row>
          {DAYS.map((day) => (
            <FormControlLabel
              key={day}
              value={day}
              control={<Checkbox onChange={() => handleCheckboxChange(day)} />}
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
