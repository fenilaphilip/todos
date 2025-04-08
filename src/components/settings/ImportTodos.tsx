import React from "react";
import { Box, Button, Grid2, Typography } from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useDispatch } from "react-redux";
import { setLabel } from "../../store/reducers/labelSlice";
import { setTodos } from "../../store/reducers/todoSlice";

const ImportTodos: React.FC = () => {
  const [file, setFile] = React.useState<File | null>(null);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const dispatch = useDispatch();

  const handleImport = () => {
    if (file === null) {
      setSnackbarMessage("No file selected.");
      setSnackbarOpen(true);
      return;
    }

    if (file && file.type === "application/json") {
      const reader = new FileReader();
      reader.onload = function (e) {
        try {
          const jsonData = JSON.parse(e.target?.result as string);
          // console.log(`from Import todos jsonData=${jsonData}`);
          setSnackbarMessage("File imported successfully!");
          if (jsonData["LABELS"]) dispatch(setLabel(jsonData["LABELS"]));
          if (jsonData["TODOS"]) dispatch(setTodos(jsonData["TODOS"]));
        } catch (error) {
          console.error("Error parsing JSON:", error);
          setSnackbarMessage("Error parsing JSON file.");
        }
        setSnackbarOpen(true);
      };
      reader.readAsText(file);
    } else {
      setSnackbarMessage("Please choose a JSON format file.");
      setSnackbarOpen(true);
    }
  };

  return (
    <Box>
      <Grid2>
        <MuiFileInput
          value={file}
          onChange={(newFile: File | null) => {
            setFile(newFile);
          }}
          placeholder="Attach JSON file here!"
          size="small"
          hideSizeText
          variant="outlined"
          clearIconButtonProps={{
            title: "Remove",
            children: <CloseIcon fontSize="small" />,
          }}
          sx={{
            margin: "2px",
          }}
        />
        <Button
          variant="outlined"
          onClick={handleImport}
          sx={{
            margin: "2px",
          }}
        >
          <SystemUpdateAltIcon />
          <Typography marginLeft={1} padding={0.2}>
            IMPORT
          </Typography>
        </Button>
      </Grid2>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => {
          setSnackbarOpen(false);
        }}
      >
        <Alert
          onClose={() => {
            setSnackbarOpen(false);
          }}
          severity="info"
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ImportTodos;
