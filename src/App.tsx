import { type Branding } from "@toolpad/core/AppProvider";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { type Navigation } from "@toolpad/core/AppProvider";
import BallotIcon from "@mui/icons-material/Ballot";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import LabelIcon from "@mui/icons-material/Label";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import {
  LabelsActiveTaskCount,
  PriorityActiveTaskCount,
} from "./components/filters/ActiveTaskCount";
import { useSelector } from "react-redux";
import { RootState } from "./store/todoStore";
import Logo from "./assets/todosIcon.png";

const BRAND: Branding = {
  logo: <img src={Logo} alt="Todos logo" />,
  title: "TODOS",
};

export default function App() {
  const Labels = useSelector((state: RootState) => state.LABELS);
  const labelNav = () => {
    const labelsArrayForNav = Labels.map((label) => {
      return {
        segment: label,
        title: label,
        action: <LabelsActiveTaskCount labelName={label} />,
      };
    });
    return labelsArrayForNav;
  };

  const priorityNav = () => {
    const levels: string[] = ["High", "Medium", "Low"];
    const priorityArrayForNav = levels.map((level: string) => {
      return {
        segment: level,
        title: level,
        action: <PriorityActiveTaskCount level={level} />,
      };
    });
    return priorityArrayForNav;
  };

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

  return (
    <>
      <ReactRouterAppProvider navigation={NAVIGATION} branding={BRAND}>
        <DashboardLayout>
          <Box margin={2} marginTop={1} padding={3} paddingTop={1}>
            <Outlet />
          </Box>
        </DashboardLayout>
      </ReactRouterAppProvider>
    </>
  );
}
