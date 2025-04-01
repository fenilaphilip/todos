import {
  Avatar,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Stack,
  Typography,
} from "@mui/material";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import IosShareIcon from "@mui/icons-material/IosShare";
import React from "react";

const settingsElements = [
  { name: "Import", icon: <SystemUpdateAltIcon /> },
  { name: "Export", icon: <IosShareIcon /> },
];

const Settings: React.FC = () => {
  return (
    <Stack direction="column">
      <Divider />
      <Typography variant="body2" mx={2} mt={1}>
        Settings
      </Typography>
      <MenuList>
        {settingsElements.map((element) => (
          <MenuItem
            key={element.name}
            component="button"
            sx={{
              justifyContent: "flex-start",
              width: "100%",
              columnGap: 2,
            }}
          >
            <ListItemIcon>
              <Avatar>{element.icon}</Avatar>
            </ListItemIcon>
            <ListItemText
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%",
              }}
              primary={element.name}
            />
          </MenuItem>
        ))}
      </MenuList>
    </Stack>
  );
};

export default Settings;
