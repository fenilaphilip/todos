import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";

const ImportTodos: React.FC = () => {
  function handleImport() {
    alert("developer working on that");
  }

  return (
    <Box onClick={handleImport} margin={2}>
      <Avatar>
        <SystemUpdateAltIcon />
      </Avatar>
      <Typography paddingTop={2}>Import</Typography>
    </Box>
  );
};

export default ImportTodos;
