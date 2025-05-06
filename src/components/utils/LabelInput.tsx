import React, { useState, useEffect } from "react";
import {
  InputLabel,
  OutlinedInput,
  ListItemText,
  FormControl,
  MenuItem,
  Checkbox,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Todo from "../../dataModel/todo";
import { loadLabels } from "../../store/localStorage";

const LabelInput: React.FC<{
  todoUpdate: Todo;
  setTodoUpdate: React.Dispatch<React.SetStateAction<Todo>>;
}> = ({ todoUpdate, setTodoUpdate }) => {
  const [labels, setLabels] = useState<string[]>(
    todoUpdate.labels ? todoUpdate.labels : []
  );

  const handleLabelChange = (event: SelectChangeEvent<typeof labels>) => {
    const {
      target: { value },
    } = event;
    setLabels(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    const UpdateTodo = {
      ...todoUpdate,
      labels: labels,
    };
    setTodoUpdate(UpdateTodo);
    // console.debug(`from label input`, UpdateTodo);
  }, [labels, setLabels]);

  return (
    <FormControl fullWidth>
      <InputLabel id="multiple-checkbox-label">Labels</InputLabel>
      <Select
        className="todo-item-labels"
        labelId="multiple-checkbox-label"
        multiple
        value={labels}
        onChange={handleLabelChange}
        input={<OutlinedInput label="Labels" />}
        renderValue={(selected) => {
          return selected.join(", ");
        }}
      >
        {loadLabels().map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={labels.includes(name)} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LabelInput;
