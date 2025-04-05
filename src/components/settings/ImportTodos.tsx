import React from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";

const ImportTodos: React.FC = () => {
  function handleImport() {
    alert("developer working on that");
  }

  return (
    <Box>
      <Paper elevation={2}>
        <Button variant="outlined" onClick={handleImport}>
          <Stack direction="row" gap={2} padding={1}>
            <Typography> Import </Typography>

            <SystemUpdateAltIcon />
          </Stack>
        </Button>
      </Paper>
    </Box>
  );
};

export default ImportTodos;
