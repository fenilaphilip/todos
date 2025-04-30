import React from "react";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import { Box, Checkbox, Typography } from "@mui/material";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const TaskRepeat: React.FC = () => {
  return (
    <Box>
      <Typography>Repeat On Next</Typography>
      <FormControl>
        <FormGroup aria-label="position" row>
          {DAYS.map((day) => {
            return (
              <FormControlLabel
                value={day}
                control={<Checkbox />}
                label={day}
                labelPlacement="end"
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default TaskRepeat;
