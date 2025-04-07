import React from "react";
import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Snackbar,
  SnackbarContent,
  Typography,
} from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";

const ExportTodos: React.FC = () => {
  const todos = useSelector((state: RootState) => state);
  const [open, setOpen] = React.useState(false);

  function handleExport() {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(todos)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "todos.json";

    link.click();

    setOpen(true);
  }

  return (
    <Box>
      <Button variant="outlined" onClick={handleExport}>
        <IosShareIcon /> <Typography marginLeft={1}> Export</Typography>
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => {
          setOpen(false);
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <SnackbarContent
          message="Todos exported successfully!"
          sx={{ backgroundColor: "green", color: "white" }}
        />
      </Snackbar>
    </Box>
  );
};

export default ExportTodos;
