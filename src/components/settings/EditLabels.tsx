import React from "react";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { loadLabels } from "../../store/localStorage";

const EditLabels: React.FC = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Label Name</TableCell>
            <TableCell align="right" width={1}>
              Edit
            </TableCell>
            <TableCell align="right" width={1}>
              Remove
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loadLabels().map((label) => (
            <TableRow key={label}>
              <TableCell>{label}</TableCell>
              <TableCell>
                <EditIcon />
              </TableCell>
              <TableCell>
                <DeleteIcon />
              </TableCell>
            </TableRow>
          ))}
          <TableCell align="center">
            <TextField label="Enter new label" variant="outlined" />
            <Button variant="outlined"> ADD </Button>
          </TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EditLabels;
