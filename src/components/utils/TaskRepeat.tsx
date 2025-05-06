import React from "react";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import { Box, Checkbox, Typography } from "@mui/material";
import Todo from "../../dataModel/todo";
import { useDispatch } from "react-redux";
import { editTodo } from "../../store/reducers/todoSlice";

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
  const dispatch = useDispatch();

  const handleCheckboxChange = (index: number) => {
    setRepeats((prev) => {
      const newRepeats = [...prev];
      newRepeats[index] = !newRepeats[index];
      return newRepeats;
    });
  };

  React.useEffect(() => {
    const updateTodo = {
      ...todoUpdate,
      repeats: repeats,
    };
    setTodoUpdate(updateTodo);
    dispatch(editTodo(updateTodo));
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
                  onChange={() => {
                    handleCheckboxChange(index);
                    console.log(repeats[index]);
                  }}
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
