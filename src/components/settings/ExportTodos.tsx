import React from "react";
import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
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
      <Button variant="outlined" onClick={handleExport}>
        <IosShareIcon /> <Typography marginLeft={1}> Export</Typography>
      </Button>
    </Box>
  );
};

export default ExportTodos;
