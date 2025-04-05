import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/todoStore";
import { useDispatch } from "react-redux";
import {
  addNewLabel,
  removeLabel,
  editLabel,
} from "../../store/reducers/labelSlice";
import {
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import useKey from "@rooks/use-key";

const EditLabels: React.FC = () => {
  const labelsArray = useSelector((state: RootState) => state.LABELS);
  const newlabel = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  useKey(["Enter"], windowEnter, {
    target: newlabel,
  });

  function windowEnter() {
    handleAddLabel();
  }

  const handleAddLabel = () => {
    const label = newlabel.current!.value;
    if (label.trim().length === 0) {
      alert("Please enter a label");
      return;
    }
    const labelCalled = label.charAt(0).toUpperCase() + label.slice(1);
    dispatch(addNewLabel(labelCalled));
    newlabel.current!.value = "";
  };

  return (
    <>
      <Paper>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Label Name</TableCell>
              <TableCell align="center" width={1}>
                Edit
              </TableCell>
              <TableCell align="center" width={1}>
                Remove
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {labelsArray.map((label: string) => (
              <TableRow key={label}>
                <TableCell>{label}</TableCell>
                <TableCell>
                  <IconButton onClick={() => dispatch(editLabel())}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => dispatch(removeLabel(label))}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TextField
          fullWidth
          placeholder="Enter a new label"
          inputRef={newlabel}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={handleAddLabel}>
                    <AddIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </Paper>
    </>
  );
};

export default EditLabels;
