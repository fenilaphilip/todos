import React from "react";
import {
  Avatar,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import IosShareIcon from "@mui/icons-material/IosShare";

const settingsElements = [
  { name: "Import", icon: <SystemUpdateAltIcon /> },
  { name: "Export", icon: <IosShareIcon /> },
];

const Settings: React.FC = () => {
  return (
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
              flexDirection: "row",
              alignItems: "flex-start",
              width: "100%",
            }}
            primary={element.name}
          />
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default Settings;
