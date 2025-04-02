import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";

const ExportTodos: React.FC = () => {
  function handleExport() {
    alert("got clicked");
  }

  return (
    <Box onClick={handleExport} margin={2}>
      <Avatar>
        <IosShareIcon />
      </Avatar>
      <Typography paddingTop={2}>Export</Typography>
    </Box>
  );
};

export default ExportTodos;
