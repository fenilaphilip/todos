import React from "react";
import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";

const ExportTodos: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);

  function handleExport() {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(todolist)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "todolist.json";

    link.click();
  }

  return (
    <Box>
      <Button variant="outlined" onClick={handleExport}>
        Export Todos <IosShareIcon />
      </Button>
    </Box>
  );
};

export default ExportTodos;
