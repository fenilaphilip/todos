import SettingsSection from "./../utils/SettingsSection";
import { Stack } from "@mui/material";
import ExportTodos from "./../settings/ExportTodos";
import ImportTodos from "./../settings/ImportTodos";
import EditLabels from "../settings/EditLabels";

export default function Settings() {
  return (
    <Stack direction="column" gap={2}>
      <SettingsSection heading="Export Todos JSON">
        <ExportTodos />
      </SettingsSection>
      <SettingsSection heading="Import - JSON">
        <ImportTodos />
      </SettingsSection>
      <SettingsSection heading="Edit labels">
        <EditLabels />
      </SettingsSection>
    </Stack>
  );
}
