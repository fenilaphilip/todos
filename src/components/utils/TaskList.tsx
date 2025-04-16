import React from "react";
import Todo from "../../dataModel/todo";
import { Box, Button, Grid2, Typography } from "@mui/material";
import TodoItem from "./TodoItem";
import { groupByNothing, groupByDueDate } from "./GroupBySorting";
import { groupByPriority } from "./GroupBySorting";
import dayjs from "dayjs";
import { useReactToPrint } from "react-to-print";

interface TasklistProps {
  items: Todo[];
  showPrint?: boolean;
  heading?: string;
  groupBy?: "DueDate" | "Priority";
  showLabel?: boolean;
  showDuedate?: boolean;
}

const TaskList: React.FC<TasklistProps> = ({
  items,
  showPrint,
  groupBy,
  showDuedate,
  showLabel,
  heading,
}) => {
  const printRef = React.useRef<HTMLDivElement>(null);

  let groupedTodoItems;
  if (groupBy === "DueDate") {
    groupedTodoItems = groupByDueDate(items);
  } else if (groupBy === "Priority") {
    groupedTodoItems = groupByPriority(items);
  } else {
    groupedTodoItems = groupByNothing(items, "");
  }

  const todayDate = dayjs().format("DD-MM-YYYY");

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: heading, // for pdf naming
  });

  return (
    <>
      <Grid2 container justifyContent="space-between" margin={2}>
        <Grid2>
          <Typography variant="h6"> {heading}</Typography>
        </Grid2>
        {showPrint && (
          <Grid2>
            <Button variant="outlined" onClick={() => handlePrint()}>
              Print
            </Button>
          </Grid2>
        )}
      </Grid2>
      <div ref={printRef}>
        {groupedTodoItems.map((groupedTodoItem, index) => {
          return (
            <Box key={index}>
              {groupedTodoItem.groupName && (
                <Typography variant="h6" marginTop={2}>
                  {groupedTodoItem.groupName === todayDate
                    ? "Today"
                    : groupedTodoItem.groupName}
                </Typography>
              )}
              {groupedTodoItem.items.map((item) => {
                return (
                  <TodoItem
                    key={item.id}
                    todo={item}
                    showLabel={showLabel === true}
                    showDuedate={showDuedate === true}
                  />
                );
              })}
            </Box>
          );
        })}
      </div>
    </>
  );
};

export default TaskList;
