import React from "react";
import { Avatar, Box, Button, Paper, Stack, Typography } from "@mui/material";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";

const ImportTodos: React.FC = () => {
  function handleImport() {
    alert("developer working on that");
  }

  return (
    <Box>
      <Paper elevation={2}>
        <Button variant="outlined" onClick={handleImport}>
          <Stack direction="column" gap={2}>
            <Avatar>
              <SystemUpdateAltIcon />
            </Avatar>
            <Typography> Import </Typography>
          </Stack>
        </Button>
      </Paper>
    </Box>
  );
};

export default ImportTodos;
