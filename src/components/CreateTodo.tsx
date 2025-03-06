import React from "react";
import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CreateTodo: React.FC = () => {
  return (
    <>
      <Box>
        <TextField
          fullWidth
          placeholder="Enter a new task"
          margin="normal"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
    </>
  );
};

export default CreateTodo;
