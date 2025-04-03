import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../../store/todoSlice";
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

const LabelsArray: string[] = ["Personal", "Work", "Leisure", "Others"];

const LabelInput: React.FC<{
  todoUpdate: Todo;
  setTodoUpdate: React.Dispatch<React.SetStateAction<Todo>>;
}> = ({ todoUpdate, setTodoUpdate }) => {
  const [labels, setLabels] = useState<string[]>(
    todoUpdate.labels ? todoUpdate.labels : []
  );

  const dispatch = useDispatch();

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
    dispatch(editTodo(UpdateTodo));
    // console.debug(`from label input`, UpdateTodo);
  }, [labels]);

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
        {LabelsArray.map((name) => (
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
