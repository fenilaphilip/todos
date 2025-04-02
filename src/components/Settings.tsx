import React from "react";
import ExportTodos from "./settings/ExportTodos";
import ImportTodos from "./settings/ImportTodos";
import { Stack } from "@mui/material";

const Settings: React.FC = () => {
  return (
    <Stack direction="row">
      <ExportTodos />
      <ImportTodos />
    </Stack>
  );
};

export default Settings;
