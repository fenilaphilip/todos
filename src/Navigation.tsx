import { type Navigation } from "@toolpad/core/AppProvider";
import BallotIcon from "@mui/icons-material/Ballot";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import LabelIcon from "@mui/icons-material/Label";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import { loadLabels } from "./store/localStorage";
import {
  LabelsActiveTaskCount,
  PriorityActiveTaskCount,
} from "./components/filters/ActiveTaskCount";

function labelNav() {
  const labelsArrayForNav = loadLabels().map((label) => {
    return {
      segment: label,
      title: label,
      action: <LabelsActiveTaskCount labelName={label} />,
    };
  });
  return labelsArrayForNav;
}

function priorityNav() {
  const levels: string[] = ["High", "Medium", "Low"];
  const priorityArrayForNav = levels.map((level: string) => {
    return {
      segment: level,
      title: level,
      action: <PriorityActiveTaskCount level={level} />,
    };
  });
  return priorityArrayForNav;
}

const NAVIGATION: Navigation = [
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
    children: labelNav(),
  },
  {
    segment: "priority",
    title: "Importance",
    icon: <StarIcon />,
    children: priorityNav(),
  },
];

export default NAVIGATION;
