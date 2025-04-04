import SettingsSection from "./utils/SettingsSection";
import { Stack, Container } from "@mui/material";
import ExportTodos from "./settings/ExportTodos";
import ImportTodos from "./settings/ImportTodos";

export default function Settings() {
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
          <>coming soon</>
        </SettingsSection>
      </Stack>
    </Container>
  );
}
