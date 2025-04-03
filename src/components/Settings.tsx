import React from "react";
import SettingsSection from "./utils/SettingsSection";
import { Stack, Container } from "@mui/material";
import ExportTodos from "./settings/ExportTodos";
import ImportTodos from "./settings/ImportTodos";

const Settings: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Stack direction="column" gap={2}>
        <SettingsSection heading="Todos - Export/ Import">
          <Stack direction="row" gap={2}>
            <ExportTodos />
            <ImportTodos />
          </Stack>
        </SettingsSection>
        <SettingsSection heading="Edit labels">
          <></>
        </SettingsSection>
      </Stack>
    </Container>
  );
};

export default Settings;
