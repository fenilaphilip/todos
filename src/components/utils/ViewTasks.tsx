import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Todo from "../../dataModel/todo";
import TodoItem from "./TodoItem";

export const ViewTasks: React.FC<{
  tab: string;
  taskslist: Todo[];
}> = ({ tab, taskslist }) => {
  return (
    <Box marginTop={2} padding={2}>
      <Typography variant="h5" gutterBottom>
        Tasks - {tab}
      </Typography>
      {taskslist.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            showDuedate={false}
            showLabel={true}
          />
        );
      })}
    </Box>
  );
};

export const TasksView: React.FC<{
  tab: string;
  taskslist: {
    date: string;
    tasks: Todo[];
  }[];
}> = ({ tab, taskslist }) => {
  return (
    <Box marginTop={2} padding={2}>
      <Typography variant="h5" gutterBottom>
        Tasks - {tab}
      </Typography>
      {taskslist.map((item) => {
        return (
          <Stack marginTop={2} key={item.date}>
            <Typography variant="h5">{item.date}</Typography>
            {item.tasks.map((todo: Todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  showDuedate={false}
                  showLabel={true}
                />
              );
            })}
          </Stack>
        );
      })}
    </Box>
  );
};
