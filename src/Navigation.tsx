import { type Navigation } from "@toolpad/core/AppProvider";
import BallotIcon from "@mui/icons-material/Ballot";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import LabelIcon from "@mui/icons-material/Label";
import EngineeringIcon from "@mui/icons-material/Engineering";
import WorkIcon from "@mui/icons-material/Work";
import SettingsIcon from "@mui/icons-material/Settings";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { LeisureActiveTaskCount } from "./components/labels/Leisure";
import { PersonalActiveTaskCount } from "./components/labels/Personal";
import { WorkActiveTaskCount } from "./components/labels/Work";
import { OthersActiveTaskCount } from "./components/labels/Others";
import { HighPriorityTaskCount } from "./components/priority/HighPriority";
import { MediumPriorityTaskCount } from "./components/priority/MediumPriority";
import { LowPriorityTaskCount } from "./components/priority/LowPriority";

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
    segment: "settings",
    title: "Settings",
    icon: <SettingsIcon />,
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
        action: <LeisureActiveTaskCount />,
      },
      {
        segment: "personal",
        title: "Personal",
        icon: <EngineeringIcon />,
        action: <PersonalActiveTaskCount />,
      },
      {
        segment: "work",
        title: "Work",
        icon: <WorkIcon />,
        action: <WorkActiveTaskCount />,
      },
      {
        segment: "others",
        title: "Others",
        icon: <UpcomingIcon />,
        action: <OthersActiveTaskCount />,
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
    ],
  },
];
