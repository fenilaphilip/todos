import React from "react";
import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";

const ExportTodos: React.FC = () => {
  const todos = useSelector((state: RootState) => state);

  function handleExport() {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(todos)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "todos.json";

    link.click();
  }

  return (
    <Box>
      <Paper elevation={2}>
        <Button variant="outlined" onClick={handleExport}>
          <Stack direction="row" gap={2} padding={1}>
            <Typography> Export</Typography>
            <IosShareIcon />
          </Stack>
        </Button>
      </Paper>
    </Box>
  );
};

export default ExportTodos;
