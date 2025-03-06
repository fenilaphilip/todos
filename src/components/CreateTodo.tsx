import React from "react";
import { Box, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

const CreateTodo: React.FC = () => {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 9, md: 10 }}>
            <TextField fullWidth />
          </Grid>
          <Grid size={{ xs: 12, sm: 3, md: 2 }}>
            <Button>Done</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CreateTodo;
