import React from "react";
import Todo from "../../dataModel/todo";
import { Box, Button, Grid2, Typography } from "@mui/material";
import TodoItem from "./TodoItem";
import {
  groupByNothing,
  groupByDueDate,
  groupByPriority,
} from "./GroupBySorting";

const TaskList: React.FC<{
  items: Todo[];
  heading?: string | undefined;
  showPrint?: Boolean | undefined;
  groupBy?: "DueDate" | "Priority" | undefined;
}> = ({ items, heading, showPrint, groupBy }) => {
  let groupedTodoItems;
  if (groupBy === "DueDate") {
    groupedTodoItems = groupByDueDate(items);
  } else if (groupBy === "Priority") {
    groupedTodoItems = groupByPriority(items);
  } else {
    groupedTodoItems = groupByNothing(items, "");
  }

  return (
    <>
      <Grid2 container justifyContent="space-between">
        <Grid2>
          <Typography variant="h5">{heading}</Typography>
        </Grid2>
        {showPrint && (
          <Grid2>
            <Button>Print</Button>
          </Grid2>
        )}
      </Grid2>
      {groupedTodoItems.map((groupedTodoItem, index) => {
        return (
          <Box key={index}>
            {groupedTodoItem.groupName && (
              <Typography variant="h6" marginTop={2}>
                {groupedTodoItem.groupName}
              </Typography>
            )}
            {groupedTodoItem.items.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  todo={item}
                  showLabel={true}
                  showDuedate={false}
                />
              );
            })}
          </Box>
        );
      })}
    </>
  );
};

export default TaskList;
