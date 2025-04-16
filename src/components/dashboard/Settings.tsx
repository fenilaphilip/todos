import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Paper, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExportTodos from "./../settings/ExportTodos";
import ImportTodos from "./../settings/ImportTodos";
import EditLabels from "../settings/EditLabels";

const settingsContents = [
  {
    heading: "Export Todos JSON",
    component: <ExportTodos />,
  },
  {
    heading: "Import - JSON",
    component: <ImportTodos />,
  },
  {
    heading: "Edit labels",
    component: <EditLabels />,
  },
];

export default function Settings() {
  return (
    <Stack direction="column" gap={2} marginTop={2}>
      {settingsContents.map((item) => {
        return (
          <Paper elevation={2}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{item.heading}</Typography>
              </AccordionSummary>
              <AccordionDetails>{item.component}</AccordionDetails>
            </Accordion>
          </Paper>
        );
      })}
    </Stack>
  );
}
