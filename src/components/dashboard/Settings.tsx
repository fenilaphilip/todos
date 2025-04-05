import SettingsSection from "./../utils/SettingsSection";
import { Stack, Container } from "@mui/material";
import ExportTodos from "./../settings/ExportTodos";
import ImportTodos from "./../settings/ImportTodos";
import EditLabels from "../settings/EditLabels";

export default function Settings() {
  return (
    <Container>
      <Stack direction="column" gap={2}>
        <SettingsSection heading="Todos - Export/ Import">
          <Stack
            gap={2}
            sx={{
              width: "fit-content",
            }}
          >
            <ExportTodos />
            <ImportTodos />
          </Stack>
        </SettingsSection>
        <SettingsSection heading="Edit labels">
          <EditLabels />
        </SettingsSection>
      </Stack>
    </Container>
  );
}
