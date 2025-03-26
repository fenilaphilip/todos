import { type Navigation } from "@toolpad/core/AppProvider";
import BallotIcon from "@mui/icons-material/Ballot";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import LabelIcon from "@mui/icons-material/Label";
import EngineeringIcon from "@mui/icons-material/Engineering";
import WorkIcon from "@mui/icons-material/Work";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import CommitIcon from "@mui/icons-material/Commit";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { HighPriorityTaskCount } from "./components/priority/HighPriority";
import { MediumPriorityTaskCount } from "./components/priority/MediumPriority";
import { LowPriorityTaskCount } from "./components/priority/LowPriority";
import { NonePriorityTaskCount } from "./components/priority/NonePriority";

export const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Dashboard",
  },
  {
    segment: "allTasks",
    title: "Task Bucket",
    icon: <BallotIcon />,
    pattern: "test-pattern",
  },
  {
    segment: "calenderView",
    title: "Calender View",
    icon: <ViewTimelineIcon />,
  },
  {
    segment: "completedTasks",
    title: "Completed Tasks",
    icon: <CheckCircleIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Filters",
  },
  {
    segment: "label",
    title: "Labels",
    icon: <LabelIcon />,
    children: [
      {
        segment: "leisure",
        title: "Leisure",
        icon: <HourglassEmptyIcon />,
      },
      {
        segment: "personal",
        title: "Personal",
        icon: <EngineeringIcon />,
      },
      {
        segment: "work",
        title: "Work",
        icon: <WorkIcon />,
      },
      {
        segment: "others",
        title: "Others",
        icon: <UpcomingIcon />,
      },
    ],
  },
  {
    segment: "priority",
    title: "Importance",
    icon: <StarIcon />,
    children: [
      {
        segment: "high",
        title: "High Priority",
        icon: <PriorityHighIcon />,
        action: <HighPriorityTaskCount />,
      },
      {
        segment: "medium",
        title: "Medium Priority",
        icon: <StarHalfIcon />,
        action: <MediumPriorityTaskCount />,
      },
      {
        segment: "low",
        title: "Low Priority",
        icon: <LowPriorityIcon />,
        action: <LowPriorityTaskCount />,
      },
      {
        segment: "none",
        title: "None",
        icon: <CommitIcon />,
        action: <NonePriorityTaskCount />,
      },
    ],
  },
];
